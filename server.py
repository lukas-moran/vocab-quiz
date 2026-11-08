from __future__ import annotations

import argparse
import html
import json
import re
import threading
import urllib.error
import urllib.parse
import urllib.request
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parent
YOUDO_URL = "https://dict.youdao.com/jsonapi?q={word}"
WORD_PATTERN = re.compile(r"^[A-Za-z][A-Za-z' -]{0,79}$")

POS_PREFIXES = (
    ("adj.", "adjective"),
    ("adv.", "adverb"),
    ("prep.", "preposition"),
    ("conj.", "conjunction"),
    ("pron.", "pronoun"),
    ("num.", "numeral"),
    ("art.", "article"),
    ("int.", "interjection"),
    ("aux.", "verb"),
    ("vt.", "verb"),
    ("vi.", "verb"),
    ("n.", "noun"),
    ("v.", "verb"),
)

LOOKUP_CACHE: dict[str, list[dict[str, str]]] = {}
CACHE_LOCK = threading.Lock()


def clean_meaning(value: str) -> str:
    value = html.unescape(re.sub(r"<[^>]+>", "", value))
    value = re.sub(r"\s+", " ", value).strip()
    value = value.replace(";", "；")
    value = re.sub(r"；+", "；", value)
    return value.strip("； ")[:600]


def parse_youdao_senses(payload: dict) -> list[dict[str, str]]:
    words = payload.get("ec", {}).get("word", [])
    if not words:
        return []

    grouped: dict[str, list[str]] = {}
    order: list[str] = []

    for translation_group in words[0].get("trs", []):
        for translation in translation_group.get("tr", []):
            raw_meaning = translation.get("l", {}).get("i", "")
            if isinstance(raw_meaning, list):
                raw_meaning = "；".join(
                    item for item in raw_meaning if isinstance(item, str)
                )
            if not isinstance(raw_meaning, str) or not raw_meaning.strip():
                continue

            raw_meaning = clean_meaning(raw_meaning)
            part_of_speech = "phrase"
            meaning = raw_meaning

            for prefix, mapped_position in POS_PREFIXES:
                if raw_meaning.lower().startswith(prefix):
                    part_of_speech = mapped_position
                    meaning = raw_meaning[len(prefix) :].strip()
                    break

            if not meaning:
                continue

            if part_of_speech not in grouped:
                grouped[part_of_speech] = []
                order.append(part_of_speech)

            if meaning not in grouped[part_of_speech]:
                grouped[part_of_speech].append(meaning)

    return [
        {
            "partOfSpeech": part_of_speech,
            "meaning": "；".join(grouped[part_of_speech]),
        }
        for part_of_speech in order
    ]


def fetch_youdao_senses(word: str) -> list[dict[str, str]]:
    cache_key = word.casefold()
    with CACHE_LOCK:
        cached = LOOKUP_CACHE.get(cache_key)
        if cached is not None:
            return cached

    request = urllib.request.Request(
        YOUDO_URL.format(word=urllib.parse.quote(word)),
        headers={
            "Accept": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) VocabStudio/1.0",
        },
    )

    with urllib.request.urlopen(request, timeout=12) as response:
        payload = json.loads(response.read().decode("utf-8"))

    senses = parse_youdao_senses(payload)
    with CACHE_LOCK:
        LOOKUP_CACHE[cache_key] = senses

    return senses


class VocabRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self) -> None:
        parsed = urllib.parse.urlparse(self.path)

        if parsed.path == "/api/lookup":
            self.handle_lookup(urllib.parse.parse_qs(parsed.query))
            return

        super().do_GET()

    def handle_lookup(self, query: dict[str, list[str]]) -> None:
        word = query.get("word", [""])[0].strip()

        if not WORD_PATTERN.fullmatch(word):
            self.send_json(
                {"error": "请输入有效的英文单词。"},
                status=400,
            )
            return

        try:
            senses = fetch_youdao_senses(word)
        except (TimeoutError, urllib.error.URLError, urllib.error.HTTPError):
            self.send_json(
                {"error": "在线词典暂时不可用，请稍后重试或手动填写。"},
                status=502,
            )
            return
        except (ValueError, json.JSONDecodeError):
            self.send_json(
                {"error": "在线词典返回了无法识别的数据。"},
                status=502,
            )
            return

        if not senses:
            self.send_json(
                {"error": f"没有查到 “{word}” 的释义，请手动填写。"},
                status=404,
            )
            return

        self.send_json(
            {
                "word": word,
                "source": "有道词典",
                "senses": senses,
            }
        )

    def send_json(self, payload: dict, status: int = 200) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, message_format: str, *args) -> None:
        print(f"[{self.log_date_time_string()}] {message_format % args}")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run the local Vocab Studio site.")
    parser.add_argument("--port", type=int, default=4173)
    parser.add_argument("--host", default="127.0.0.1")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    server = ThreadingHTTPServer((args.host, args.port), VocabRequestHandler)
    print(f"Vocab Studio is running at http://{args.host}:{args.port}")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
