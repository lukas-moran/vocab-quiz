const WORD_STORAGE_KEY = "vocab-studio.words.v1";
const STATS_STORAGE_KEY = "vocab-studio.quiz-stats.v1";
const QUIZ_SIZE = 20;

const POSITIONS = [
  { value: "noun", short: "n.", label: "名词", className: "pos-noun" },
  { value: "verb", short: "v.", label: "动词", className: "pos-verb" },
  { value: "adjective", short: "adj.", label: "形容词", className: "pos-adjective" },
  { value: "adverb", short: "adv.", label: "副词", className: "pos-adverb" },
  { value: "preposition", short: "prep.", label: "介词", className: "" },
  { value: "conjunction", short: "conj.", label: "连词", className: "" },
  { value: "pronoun", short: "pron.", label: "代词", className: "" },
  { value: "numeral", short: "num.", label: "数词", className: "" },
  { value: "article", short: "art.", label: "冠词", className: "" },
  { value: "interjection", short: "int.", label: "感叹词", className: "" },
  { value: "phrase", short: "phr.", label: "短语", className: "pos-phrase" },
];

const POSITION_BY_VALUE = Object.fromEntries(
  POSITIONS.map((position) => [position.value, position]),
);

const SEED_WORDS = [
  {
    term: "address",
    senses: [
      { partOfSpeech: "noun", meaning: "地址；住址；演讲；致辞" },
      { partOfSpeech: "verb", meaning: "处理；向……讲话" },
    ],
  },
  {
    term: "bear",
    senses: [
      { partOfSpeech: "verb", meaning: "忍受；承担；生育" },
      { partOfSpeech: "noun", meaning: "熊" },
    ],
  },
  {
    term: "break",
    senses: [
      { partOfSpeech: "verb", meaning: "打破；弄坏；违反" },
      { partOfSpeech: "noun", meaning: "休息；间歇" },
    ],
  },
  {
    term: "capital",
    senses: [
      { partOfSpeech: "noun", meaning: "首都；资本" },
      { partOfSpeech: "adjective", meaning: "大写的；重要的" },
    ],
  },
  {
    term: "charge",
    senses: [
      { partOfSpeech: "noun", meaning: "费用；指控" },
      { partOfSpeech: "verb", meaning: "收费；控告；充电" },
    ],
  },
  {
    term: "clear",
    senses: [
      { partOfSpeech: "adjective", meaning: "清楚的；晴朗的" },
      { partOfSpeech: "verb", meaning: "清理；清除" },
    ],
  },
  {
    term: "close",
    senses: [
      { partOfSpeech: "verb", meaning: "关闭；结束" },
      { partOfSpeech: "adjective", meaning: "亲密的；接近的" },
    ],
  },
  {
    term: "conduct",
    senses: [
      { partOfSpeech: "verb", meaning: "组织；实施；指挥" },
      { partOfSpeech: "noun", meaning: "行为；举止" },
    ],
  },
  {
    term: "current",
    senses: [
      { partOfSpeech: "adjective", meaning: "当前的；流通的" },
      { partOfSpeech: "noun", meaning: "水流；电流" },
    ],
  },
  {
    term: "deal",
    senses: [
      { partOfSpeech: "noun", meaning: "交易；协议" },
      { partOfSpeech: "verb", meaning: "处理；应对" },
    ],
  },
  {
    term: "fair",
    senses: [
      { partOfSpeech: "adjective", meaning: "公平的；合理的" },
      { partOfSpeech: "noun", meaning: "集市" },
    ],
  },
  {
    term: "fine",
    senses: [
      { partOfSpeech: "adjective", meaning: "好的；晴朗的；细小的" },
      { partOfSpeech: "noun", meaning: "罚款" },
    ],
  },
  {
    term: "issue",
    senses: [
      { partOfSpeech: "noun", meaning: "问题；期号" },
      { partOfSpeech: "verb", meaning: "发布；发行" },
    ],
  },
  {
    term: "light",
    senses: [
      { partOfSpeech: "noun", meaning: "光；灯" },
      { partOfSpeech: "adjective", meaning: "轻的；明亮的" },
      { partOfSpeech: "verb", meaning: "点燃" },
    ],
  },
  {
    term: "matter",
    senses: [
      { partOfSpeech: "noun", meaning: "事情；物质" },
      { partOfSpeech: "verb", meaning: "要紧" },
    ],
  },
  {
    term: "mean",
    senses: [
      { partOfSpeech: "verb", meaning: "意思是；意味着" },
      { partOfSpeech: "adjective", meaning: "吝啬的；刻薄的" },
    ],
  },
  {
    term: "order",
    senses: [
      { partOfSpeech: "noun", meaning: "顺序；订单；命令" },
      { partOfSpeech: "verb", meaning: "订购；命令" },
    ],
  },
  {
    term: "plant",
    senses: [
      { partOfSpeech: "noun", meaning: "植物；工厂" },
      { partOfSpeech: "verb", meaning: "种植" },
    ],
  },
  {
    term: "present",
    senses: [
      { partOfSpeech: "adjective", meaning: "现在的；出席的" },
      { partOfSpeech: "noun", meaning: "礼物" },
      { partOfSpeech: "verb", meaning: "展示；呈现" },
    ],
  },
  {
    term: "right",
    senses: [
      { partOfSpeech: "adjective", meaning: "正确的；右边的" },
      { partOfSpeech: "noun", meaning: "权利；右边" },
    ],
  },
  {
    term: "spring",
    senses: [
      { partOfSpeech: "noun", meaning: "春天；泉水" },
      { partOfSpeech: "verb", meaning: "跳跃" },
    ],
  },
  {
    term: "stand",
    senses: [
      { partOfSpeech: "verb", meaning: "站立；忍受" },
      { partOfSpeech: "noun", meaning: "立场；摊位" },
    ],
  },
  {
    term: "train",
    senses: [
      { partOfSpeech: "noun", meaning: "火车" },
      { partOfSpeech: "verb", meaning: "训练" },
    ],
  },
  {
    term: "watch",
    senses: [
      { partOfSpeech: "verb", meaning: "观看；注意" },
      { partOfSpeech: "noun", meaning: "手表" },
    ],
  },
  {
    term: "well",
    senses: [
      { partOfSpeech: "adverb", meaning: "好地" },
      { partOfSpeech: "adjective", meaning: "健康的" },
      { partOfSpeech: "noun", meaning: "井" },
    ],
  },
  {
    term: "book",
    senses: [
      { partOfSpeech: "noun", meaning: "书；书籍" },
      { partOfSpeech: "verb", meaning: "预订" },
    ],
  },
];

const elements = {
  libraryView: document.querySelector("#libraryView"),
  quizView: document.querySelector("#quizView"),
  navWordCount: document.querySelector("#navWordCount"),
  metricWords: document.querySelector("#metricWords"),
  metricSenses: document.querySelector("#metricSenses"),
  metricReady: document.querySelector("#metricReady"),
  searchInput: document.querySelector("#searchInput"),
  posFilter: document.querySelector("#posFilter"),
  sortSelect: document.querySelector("#sortSelect"),
  resultCount: document.querySelector("#resultCount"),
  wordList: document.querySelector("#wordList"),
  editorPanel: document.querySelector("#editorPanel"),
  editorKicker: document.querySelector("#editorKicker"),
  editorTitle: document.querySelector("#editorTitle"),
  cancelEditButton: document.querySelector("#cancelEditButton"),
  wordForm: document.querySelector("#wordForm"),
  wordInput: document.querySelector("#wordInput"),
  lookupButton: document.querySelector("#lookupButton"),
  lookupStatus: document.querySelector("#lookupStatus"),
  senseRows: document.querySelector("#senseRows"),
  addSenseButton: document.querySelector("#addSenseButton"),
  formError: document.querySelector("#formError"),
  saveWordButton: document.querySelector("#saveWordButton"),
  toast: document.querySelector("#toast"),
  undoToast: document.querySelector("#undoToast"),
  undoMessage: document.querySelector("#undoMessage"),
  undoButton: document.querySelector("#undoButton"),
  bestScore: document.querySelector("#bestScore"),
  quizIntro: document.querySelector("#quizIntro"),
  quizAvailableWords: document.querySelector("#quizAvailableWords"),
  quizReadinessBar: document.querySelector("#quizReadinessBar"),
  quizReadinessText: document.querySelector("#quizReadinessText"),
  startQuizButton: document.querySelector("#startQuizButton"),
  quizAttempts: document.querySelector("#quizAttempts"),
  quizPlay: document.querySelector("#quizPlay"),
  currentQuestionNumber: document.querySelector("#currentQuestionNumber"),
  verticalProgressBar: document.querySelector("#verticalProgressBar"),
  liveCorrect: document.querySelector("#liveCorrect"),
  liveRemaining: document.querySelector("#liveRemaining"),
  questionPos: document.querySelector("#questionPos"),
  promptMeaning: document.querySelector("#promptMeaning"),
  answerGrid: document.querySelector("#answerGrid"),
  answerFeedback: document.querySelector("#answerFeedback"),
  shortcutHint: document.querySelector("#shortcutHint"),
  nextQuestionButton: document.querySelector("#nextQuestionButton"),
  quizResult: document.querySelector("#quizResult"),
  scoreRing: document.querySelector("#scoreRing"),
  resultScore: document.querySelector("#resultScore"),
  resultHeading: document.querySelector("#resultHeading"),
  resultMessage: document.querySelector("#resultMessage"),
  restartQuizButton: document.querySelector("#restartQuizButton"),
  reviewCount: document.querySelector("#reviewCount"),
  reviewList: document.querySelector("#reviewList"),
};

let toastTimer = null;
let undoTimer = null;
let deletedWord = null;
let storageBlocked = false;
let lookupTimer = null;
let lookupController = null;
let lookupRequestId = 0;

const state = {
  words: loadWords(),
  editingId: null,
  filteredWords: [],
};

const quizState = {
  status: "idle",
  questions: [],
  questionIndex: 0,
  score: 0,
  answered: false,
  answers: [],
};

function makeId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `word-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createSeedWords() {
  const now = Date.now();

  return SEED_WORDS.map((word, index) => ({
    id: `seed-${index + 1}`,
    term: word.term,
    senses: word.senses.map((sense) => ({ ...sense })),
    createdAt: new Date(now - index * 60_000).toISOString(),
    updatedAt: new Date(now - index * 60_000).toISOString(),
  }));
}

function normalizeWord(item, index = 0) {
  if (!item || typeof item !== "object" || typeof item.term !== "string") {
    return null;
  }

  const term = item.term.trim();
  if (!term) {
    return null;
  }

  const senses = Array.isArray(item.senses)
    ? item.senses
        .filter(
          (sense) =>
            sense &&
            typeof sense.meaning === "string" &&
            sense.meaning.trim() &&
            POSITION_BY_VALUE[sense.partOfSpeech],
        )
        .map((sense) => ({
          partOfSpeech: sense.partOfSpeech,
          meaning: sense.meaning.trim(),
        }))
    : [];

  if (!senses.length) {
    return null;
  }

  const fallbackDate = new Date(Date.now() - index * 60_000).toISOString();

  return {
    id: typeof item.id === "string" && item.id ? item.id : makeId(),
    term,
    senses,
    createdAt:
      typeof item.createdAt === "string" && !Number.isNaN(Date.parse(item.createdAt))
        ? item.createdAt
        : fallbackDate,
    updatedAt:
      typeof item.updatedAt === "string" && !Number.isNaN(Date.parse(item.updatedAt))
        ? item.updatedAt
        : fallbackDate,
  };
}

function loadWords() {
  let raw = null;

  try {
    raw = window.localStorage.getItem(WORD_STORAGE_KEY);
  } catch (error) {
    storageBlocked = true;
    return createSeedWords();
  }

  if (raw === null) {
    const seeded = createSeedWords();

    try {
      window.localStorage.setItem(WORD_STORAGE_KEY, JSON.stringify(seeded));
    } catch (error) {
      storageBlocked = true;
    }

    return seeded;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return createSeedWords();
    }

    return parsed.map(normalizeWord).filter(Boolean);
  } catch (error) {
    return createSeedWords();
  }
}

function persistWords() {
  try {
    window.localStorage.setItem(WORD_STORAGE_KEY, JSON.stringify(state.words));
    storageBlocked = false;
  } catch (error) {
    storageBlocked = true;
    showToast("本地存储不可用，当前修改可能无法保留。");
  }
}

function getQuizStats() {
  try {
    const raw = window.localStorage.getItem(STATS_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;

    return {
      attempts:
        parsed && Number.isFinite(parsed.attempts) ? Math.max(0, parsed.attempts) : 0,
      best: parsed && Number.isFinite(parsed.best) ? Math.max(0, parsed.best) : 0,
    };
  } catch (error) {
    return { attempts: 0, best: 0 };
  }
}

function persistQuizStats(stats) {
  try {
    window.localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
  } catch (error) {
    storageBlocked = true;
  }
}

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character],
  );
}

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "最近添加";
  }

  return `新增 ${new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
  }).format(date)}`;
}

function getPosition(value) {
  return POSITION_BY_VALUE[value] || {
    value,
    short: value,
    label: value,
    className: "",
  };
}

function positionOptions(selectedValue) {
  return POSITIONS.map(
    (position) =>
      `<option value="${position.value}"${
        position.value === selectedValue ? " selected" : ""
      }>${position.short} ${position.label}</option>`,
  ).join("");
}

function setLookupStatus(kind, message) {
  const icons = {
    idle: "wand",
    loading: "loader",
    success: "check-circle",
    error: "alert",
  };

  elements.lookupStatus.className = `lookup-status${kind === "idle" ? "" : ` is-${kind}`}`;
  elements.lookupStatus.innerHTML = `
    <svg class="icon" aria-hidden="true"><use href="#icon-${icons[kind] || "wand"}"></use></svg>
    <span>${escapeHtml(message)}</span>
  `;
}

function hasMeaningContent() {
  return [...elements.senseRows.querySelectorAll(".sense-meaning")].some(
    (field) => field.value.trim(),
  );
}

function cancelPendingLookup() {
  if (lookupTimer) {
    window.clearTimeout(lookupTimer);
    lookupTimer = null;
  }

  if (lookupController) {
    lookupController.abort();
    lookupController = null;
  }

  lookupRequestId += 1;
  elements.lookupButton.disabled = false;
  elements.lookupButton.classList.remove("is-loading");
}

function normalizeLookupSenses(senses) {
  if (!Array.isArray(senses)) {
    return [];
  }

  return senses
    .filter(
      (sense) =>
        sense &&
        POSITION_BY_VALUE[sense.partOfSpeech] &&
        typeof sense.meaning === "string" &&
        sense.meaning.trim(),
    )
    .map((sense) => ({
      partOfSpeech: sense.partOfSpeech,
      meaning: sense.meaning.trim().slice(0, 600),
    }));
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 7_000) {
  const controller = new AbortController();
  const upstreamSignal = options.signal;
  let timedOut = false;
  const timeout = window.setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);
  const abortFromUpstream = () => controller.abort();

  if (upstreamSignal) {
    if (upstreamSignal.aborted) {
      controller.abort();
    } else {
      upstreamSignal.addEventListener("abort", abortFromUpstream, { once: true });
    }
  }

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch (error) {
    if (timedOut) {
      throw new Error("在线查询超时，请稍后重试。");
    }
    throw error;
  } finally {
    window.clearTimeout(timeout);
    upstreamSignal?.removeEventListener("abort", abortFromUpstream);
  }
}

async function translateToChinese(text, signal) {
  const googleUrl = new URL("https://translate.googleapis.com/translate_a/single");
  googleUrl.searchParams.set("client", "gtx");
  googleUrl.searchParams.set("sl", "en");
  googleUrl.searchParams.set("tl", "zh-CN");
  googleUrl.searchParams.set("dt", "t");
  googleUrl.searchParams.set("q", text.slice(0, 350));

  try {
    const response = await fetchWithTimeout(googleUrl, { signal }, 6_000);
    if (!response.ok) {
      throw new Error("翻译服务暂时不可用。");
    }

    const payload = await response.json();
    const translated = (payload?.[0] || [])
      .map((segment) => segment?.[0])
      .filter(Boolean)
      .join("")
      .trim()
      .replace(/^[。；;,.，\s]+|[。；;,.，\s]+$/g, "");

    if (translated) {
      return translated;
    }
  } catch (error) {
    if (error.name === "AbortError") {
      throw error;
    }
  }

  const fallbackUrl = new URL("https://api.mymemory.translated.net/get");
  fallbackUrl.searchParams.set("q", text.slice(0, 350));
  fallbackUrl.searchParams.set("langpair", "en|zh-CN");

  const fallbackResponse = await fetchWithTimeout(fallbackUrl, { signal }, 6_000);
  if (!fallbackResponse.ok) {
    throw new Error("中文翻译暂时不可用。");
  }

  const fallbackPayload = await fallbackResponse.json();
  const fallbackTranslation = fallbackPayload?.responseData?.translatedText
    ?.trim()
    .replace(/^[。；;,.，\s]+|[。；;,.，\s]+$/g, "");

  if (!fallbackTranslation) {
    throw new Error("没有取得中文翻译。");
  }

  return fallbackTranslation;
}

function collectPublicCandidates(payload, sourceType) {
  const positionMap = {
    noun: "noun",
    verb: "verb",
    adjective: "adjective",
    adverb: "adverb",
    preposition: "preposition",
    conjunction: "conjunction",
    pronoun: "pronoun",
    numeral: "numeral",
    article: "article",
    determiner: "article",
    interjection: "interjection",
    exclamation: "interjection",
  };
  const groupedCandidates = new Map();
  const seenDefinitions = new Set();
  const groups = [];

  if (sourceType === "entries" && Array.isArray(payload?.entries)) {
    for (const entry of payload.entries) {
      groups.push({
        partOfSpeech: entry?.partOfSpeech,
        definitions: (entry?.senses || []).map((sense) => sense?.definition),
      });
    }
  }

  if (sourceType === "meanings" && Array.isArray(payload)) {
    for (const entry of payload) {
      for (const meaning of entry?.meanings || []) {
        groups.push({
          partOfSpeech: meaning?.partOfSpeech,
          definitions: (meaning?.definitions || []).map(
            (definition) => definition?.definition,
          ),
        });
      }
    }
  }

  for (const group of groups) {
    const partOfSpeech = positionMap[String(group.partOfSpeech).toLowerCase()];
    if (!partOfSpeech) {
      continue;
    }

    if (!groupedCandidates.has(partOfSpeech)) {
      groupedCandidates.set(partOfSpeech, []);
    }

    for (const definition of group.definitions) {
      const english = String(definition || "").trim();
      if (english.length < 3 || seenDefinitions.has(english)) {
        continue;
      }

      seenDefinitions.add(english);
      groupedCandidates.get(partOfSpeech).push({ partOfSpeech, english });

      if (groupedCandidates.get(partOfSpeech).length >= 2) {
        break;
      }
    }
  }

  return [...groupedCandidates.values()].flat().slice(0, 6);
}

async function lookupFromPublicDictionary(term, signal) {
  const encodedTerm = encodeURIComponent(term);
  const sources = [
    {
      url: `https://freedictionaryapi.com/api/v1/entries/en/${encodedTerm}`,
      sourceType: "entries",
    },
    {
      url: `https://api.dictionaryapi.dev/api/v2/entries/en/${encodedTerm}`,
      sourceType: "meanings",
    },
  ];

  let fallbackError = null;
  let candidates = [];

  try {
    candidates = await Promise.any(
      sources.map(async (source) => {
        const response = await fetchWithTimeout(
          source.url,
          {
            signal,
            headers: { Accept: "application/json" },
          },
          8_000,
        );

        if (!response.ok) {
          throw new Error("公共词典中没有查到这个词。");
        }

        const payload = await response.json();
        const extracted = collectPublicCandidates(payload, source.sourceType);

        if (!extracted.length) {
          throw new Error("没有查到可用的英文释义。");
        }

        return extracted;
      }),
    );
  } catch (error) {
    fallbackError =
      error instanceof AggregateError
        ? error.errors.find((item) => item?.message)
        : error;
  }

  if (!candidates.length) {
    throw fallbackError || new Error("没有查到可用的英文释义。");
  }

  const translated = await Promise.allSettled(
    candidates.map(async (candidate) => ({
      ...candidate,
      chinese: await translateToChinese(candidate.english, signal),
    })),
  );
  const grouped = new Map();

  for (const result of translated) {
    if (result.status !== "fulfilled" || !result.value.chinese) {
      continue;
    }

    const { partOfSpeech, chinese } = result.value;
    if (!grouped.has(partOfSpeech)) {
      grouped.set(partOfSpeech, []);
    }

    if (!grouped.get(partOfSpeech).includes(chinese)) {
      grouped.get(partOfSpeech).push(chinese);
    }
  }

  const senses = [...grouped.entries()].map(([partOfSpeech, meanings]) => ({
    partOfSpeech,
    meaning: meanings.join("；").slice(0, 600),
  }));

  if (!senses.length) {
    throw new Error("没有取得可用的中文释义。");
  }

  return {
    senses,
    source: "公共词典",
  };
}

function applyLookupSenses(senses, source) {
  elements.senseRows.innerHTML = "";
  senses.forEach((sense) => addSenseRow(sense));
  updateSenseRows();
  hideFormError();
  setLookupStatus(
    "success",
    `已从${source}补全 ${senses.length} 个词性，可继续修改。`,
  );
}

async function lookupCurrentWord({ force = false } = {}) {
  if (lookupTimer) {
    window.clearTimeout(lookupTimer);
    lookupTimer = null;
  }

  const term = elements.wordInput.value.trim().replace(/\s+/g, " ");
  if (!term) {
    setLookupStatus("idle", "请先输入英文单词。");
    return;
  }

  if (!/^[A-Za-z][A-Za-z' -]{0,79}$/.test(term)) {
    setLookupStatus("error", "请输入有效的英文单词。");
    return;
  }

  if (!force && hasMeaningContent()) {
    setLookupStatus("idle", "当前已有释义，点击“自动补全”可按词典更新。");
    return;
  }

  if (lookupController) {
    lookupController.abort();
  }

  const requestId = lookupRequestId + 1;
  lookupRequestId = requestId;
  lookupController = new AbortController();
  elements.lookupButton.disabled = true;
  elements.lookupButton.classList.add("is-loading");
  setLookupStatus("loading", `正在查询 “${term}” 的词性与中文释义…`);

  try {
    const localWord = SEED_WORDS.find(
      (word) =>
        word.term.toLocaleLowerCase("en-US") === term.toLocaleLowerCase("en-US"),
    );

    let senses;
    let source;

    if (localWord) {
      senses = normalizeLookupSenses(localWord.senses);
      source = "内置词库";
    } else {
      try {
        const response = await fetch(`/api/lookup?word=${encodeURIComponent(term)}`, {
          signal: lookupController.signal,
          headers: { Accept: "application/json" },
        });
        const payload = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(payload.error || "本地词典代理不可用。");
        }

        senses = normalizeLookupSenses(payload.senses);
        source = payload.source || "在线词典";
      } catch (proxyError) {
        if (proxyError.name === "AbortError") {
          throw proxyError;
        }

        const publicResult = await lookupFromPublicDictionary(
          term,
          lookupController.signal,
        );
        senses = publicResult.senses;
        source = publicResult.source;
      }
    }

    const currentTerm = elements.wordInput.value.trim().replace(/\s+/g, " ");
    if (
      requestId !== lookupRequestId ||
      currentTerm.toLocaleLowerCase("en-US") !== term.toLocaleLowerCase("en-US")
    ) {
      return;
    }

    if (!senses.length) {
      throw new Error("没有查到可用的中文释义，请手动填写。");
    }

    if (!force && hasMeaningContent()) {
      setLookupStatus(
        "success",
        `已查到 “${term}” 的释义，但保留了你正在填写的内容。`,
      );
      return;
    }

    applyLookupSenses(senses, source);
  } catch (error) {
    if (error.name === "AbortError") {
      return;
    }

    if (requestId === lookupRequestId) {
      setLookupStatus(
        "error",
        error.message || "自动补全失败，请检查网络后重试或手动填写。",
      );
    }
  } finally {
    if (requestId === lookupRequestId) {
      lookupController = null;
      elements.lookupButton.disabled = false;
      elements.lookupButton.classList.remove("is-loading");
    }
  }
}

function scheduleAutoLookup() {
  if (lookupTimer) {
    window.clearTimeout(lookupTimer);
    lookupTimer = null;
  }

  const term = elements.wordInput.value.trim();
  if (term.length < 2) {
    setLookupStatus("idle", "输入至少两个字母后自动查询词性与中文释义。");
    return;
  }

  if (hasMeaningContent()) {
    setLookupStatus("idle", "当前已有释义，点击“自动补全”可按词典更新。");
    return;
  }

  setLookupStatus("idle", "停止输入后会自动查询词性与中文释义。");
  lookupTimer = window.setTimeout(() => {
    lookupTimer = null;
    lookupCurrentWord();
  }, 750);
}

function renderMetrics() {
  const wordCount = state.words.length;
  const senseCount = state.words.reduce((total, word) => total + word.senses.length, 0);
  const missingWords = Math.max(0, QUIZ_SIZE - wordCount);

  elements.navWordCount.textContent = String(wordCount);
  elements.metricWords.textContent = String(wordCount);
  elements.metricSenses.textContent = String(senseCount);
  elements.metricReady.textContent = missingWords
    ? `还差 ${missingWords} 个`
    : "可测验";
  elements.metricReady.classList.toggle("is-ready", missingWords === 0);
}

function getFilteredWords() {
  const search = elements.searchInput.value.trim().toLocaleLowerCase("en-US");
  const selectedPosition = elements.posFilter.value;
  const sort = elements.sortSelect.value;

  return state.words
    .filter((word) => {
      const matchesSearch =
        !search ||
        word.term.toLocaleLowerCase("en-US").includes(search) ||
        word.senses.some(
          (sense) =>
            sense.meaning.toLocaleLowerCase("en-US").includes(search) ||
            getPosition(sense.partOfSpeech).label.includes(search),
        );

      const matchesPosition =
        selectedPosition === "all" ||
        word.senses.some((sense) => sense.partOfSpeech === selectedPosition);

      return matchesSearch && matchesPosition;
    })
    .sort((left, right) => {
      if (sort === "alpha") {
        return left.term.localeCompare(right.term, "en", { sensitivity: "base" });
      }

      return new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime();
    });
}

function renderWordList() {
  const filteredWords = getFilteredWords();
  state.filteredWords = filteredWords;
  elements.resultCount.textContent = `${filteredWords.length} 条`;

  if (!filteredWords.length) {
    const hasWords = state.words.length > 0;
    elements.wordList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-inner">
          <span class="empty-icon">
            <svg class="icon" aria-hidden="true"><use href="#icon-${
              hasWords ? "search" : "book"
            }"></use></svg>
          </span>
          <h3>${hasWords ? "没有找到匹配的单词" : "词库还是空的"}</h3>
          <p>${
            hasWords
              ? "换一个关键词，或调整词性筛选后再试。"
              : "从右侧添加第一个单词，建立你的词汇库。"
          }</p>
          ${
            hasWords
              ? '<button class="secondary-button" type="button" data-clear-filters>清除筛选</button>'
              : ""
          }
        </div>
      </div>
    `;
    return;
  }

  elements.wordList.innerHTML = filteredWords
    .map((word) => {
      const senses = word.senses
        .map((sense) => {
          const position = getPosition(sense.partOfSpeech);

          return `
            <div class="sense-line">
              <span class="pos-badge ${position.className}" title="${escapeHtml(
                position.label,
              )}">${escapeHtml(position.short)}</span>
              <span class="sense-meaning-text">${escapeHtml(sense.meaning)}</span>
            </div>
          `;
        })
        .join("");

      return `
        <article class="word-row" data-word-id="${escapeHtml(word.id)}">
          <div class="word-identity">
            <h3 class="word-term">${escapeHtml(word.term)}</h3>
            <span class="word-date">${escapeHtml(formatDate(word.createdAt))}</span>
          </div>
          <div class="word-senses">${senses}</div>
          <div class="word-actions">
            <button
              class="icon-button"
              type="button"
              title="编辑 ${escapeHtml(word.term)}"
              aria-label="编辑 ${escapeHtml(word.term)}"
              data-action="edit"
              data-id="${escapeHtml(word.id)}"
            >
              <svg class="icon" aria-hidden="true"><use href="#icon-edit"></use></svg>
            </button>
            <button
              class="icon-button danger"
              type="button"
              title="删除 ${escapeHtml(word.term)}"
              aria-label="删除 ${escapeHtml(word.term)}"
              data-action="delete"
              data-id="${escapeHtml(word.id)}"
            >
              <svg class="icon" aria-hidden="true"><use href="#icon-trash"></use></svg>
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderLibrary() {
  renderMetrics();
  renderWordList();
}

function setupPositionFilter() {
  const options = POSITIONS.map(
    (position) => `<option value="${position.value}">${position.label}</option>`,
  ).join("");

  elements.posFilter.insertAdjacentHTML("beforeend", options);
}

function updateSenseRows() {
  const rows = [...elements.senseRows.querySelectorAll("[data-sense-row]")];

  rows.forEach((row, index) => {
    const label = row.querySelector("[data-sense-label]");
    const removeButton = row.querySelector("[data-remove-sense]");

    if (label) {
      label.textContent = `词义 ${String(index + 1).padStart(2, "0")}`;
    }

    if (removeButton) {
      removeButton.hidden = rows.length === 1;
    }
  });
}

function addSenseRow(sense = { partOfSpeech: "noun", meaning: "" }, shouldFocus = false) {
  const row = document.createElement("div");
  const position = getPosition(sense.partOfSpeech);

  row.className = "sense-row";
  row.dataset.senseRow = "";
  row.innerHTML = `
    <div class="sense-row-heading">
      <span data-sense-label>词义 01</span>
      <button
        class="icon-button remove-sense-button"
        type="button"
        title="移除这个词性"
        aria-label="移除这个词性"
        data-remove-sense
      >
        <svg class="icon" aria-hidden="true"><use href="#icon-x"></use></svg>
      </button>
    </div>
    <div class="sense-fields">
      <label>
        <span class="sr-only">词性</span>
        <select class="sense-pos" aria-label="词性">
          ${positionOptions(position.value)}
        </select>
      </label>
      <label>
        <span class="sr-only">中文释义</span>
        <textarea
          class="sense-meaning"
          rows="2"
          maxlength="400"
          aria-label="中文释义"
          placeholder="例如：资本；首都"
        >${escapeHtml(sense.meaning || "")}</textarea>
      </label>
    </div>
  `;
  elements.senseRows.append(row);
  updateSenseRows();

  if (shouldFocus) {
    row.querySelector(".sense-meaning").focus();
  }

  return row;
}

function hideFormError() {
  elements.formError.hidden = true;
  elements.formError.textContent = "";
}

function showFormError(message) {
  elements.formError.textContent = message;
  elements.formError.hidden = false;
}

function resetEditor() {
  cancelPendingLookup();
  state.editingId = null;
  elements.wordForm.reset();
  elements.senseRows.innerHTML = "";
  addSenseRow();
  elements.editorKicker.textContent = "ADD A WORD";
  elements.editorTitle.textContent = "新增单词";
  elements.cancelEditButton.hidden = true;
  elements.saveWordButton.querySelector("span").textContent = "加入词库";
  elements.saveWordButton.querySelector("use").setAttribute("href", "#icon-plus");
  hideFormError();
  setLookupStatus("idle", "输入单词后会自动查询词性与中文释义。");
}

function enterEditMode(wordId) {
  const word = state.words.find((item) => item.id === wordId);
  if (!word) {
    return;
  }

  cancelPendingLookup();
  state.editingId = word.id;
  elements.wordInput.value = word.term;
  elements.senseRows.innerHTML = "";

  word.senses.forEach((sense) => addSenseRow(sense));

  elements.editorKicker.textContent = "EDIT WORD";
  elements.editorTitle.textContent = "编辑单词";
  elements.cancelEditButton.hidden = false;
  elements.saveWordButton.querySelector("span").textContent = "保存修改";
  elements.saveWordButton.querySelector("use").setAttribute("href", "#icon-check");
  hideFormError();
  setLookupStatus("idle", "正在编辑已有内容；点击“自动补全”可按词典更新。");
  elements.editorPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => elements.wordInput.focus(), 220);
}

function readSenseRows() {
  return [...elements.senseRows.querySelectorAll("[data-sense-row]")]
    .map((row) => ({
      partOfSpeech: row.querySelector(".sense-pos").value,
      meaning: row
        .querySelector(".sense-meaning")
        .value.trim()
        .replace(/\s*[;；]\s*/g, "；")
        .replace(/；+/g, "；")
        .replace(/^；|；$/g, ""),
    }))
    .filter((sense) => sense.meaning);
}

function handleWordSubmit(event) {
  event.preventDefault();
  hideFormError();

  const term = elements.wordInput.value.trim().replace(/\s+/g, " ");
  const senses = readSenseRows();

  if (!term) {
    showFormError("请先输入英文单词。");
    elements.wordInput.focus();
    return;
  }

  if (!/[a-z]/i.test(term)) {
    showFormError("英文单词中需要包含字母。");
    elements.wordInput.focus();
    return;
  }

  if (!senses.length) {
    showFormError("请至少填写一条中文释义。");
    const firstMeaning = elements.senseRows.querySelector(".sense-meaning");
    firstMeaning?.focus();
    return;
  }

  const duplicate = state.words.find(
    (word) =>
      word.id !== state.editingId &&
      word.term.toLocaleLowerCase("en-US") === term.toLocaleLowerCase("en-US"),
  );

  if (duplicate) {
    showFormError(`“${term}”已经在词库中，可以直接编辑原有记录。`);
    return;
  }

  const now = new Date().toISOString();

  if (state.editingId) {
    const wordIndex = state.words.findIndex((word) => word.id === state.editingId);

    if (wordIndex === -1) {
      resetEditor();
      showToast("这条单词记录已不存在。");
      return;
    }

    state.words[wordIndex] = {
      ...state.words[wordIndex],
      term,
      senses,
      updatedAt: now,
    };

    persistWords();
    renderLibrary();
    resetEditor();
    showToast(`已更新 “${term}”`);
    return;
  }

  state.words.unshift({
    id: makeId(),
    term,
    senses,
    createdAt: now,
    updatedAt: now,
  });

  persistWords();
  renderLibrary();
  resetEditor();
  showToast(`已加入 “${term}”`);
  elements.wordInput.focus();
}

function deleteWord(wordId) {
  const index = state.words.findIndex((word) => word.id === wordId);
  if (index === -1) {
    return;
  }

  const [removed] = state.words.splice(index, 1);
  deletedWord = { word: removed, index };

  if (state.editingId === wordId) {
    resetEditor();
  }

  persistWords();
  renderLibrary();
  showUndoToast(`已删除 “${removed.term}”`);
}

function clearUndoToast() {
  if (undoTimer) {
    window.clearTimeout(undoTimer);
    undoTimer = null;
  }

  elements.undoToast.hidden = true;
}

function showUndoToast(message) {
  if (toastTimer) {
    window.clearTimeout(toastTimer);
    toastTimer = null;
  }

  elements.toast.hidden = true;
  clearUndoToast();
  elements.undoMessage.textContent = message;
  elements.undoToast.hidden = false;

  undoTimer = window.setTimeout(() => {
    elements.undoToast.hidden = true;
    deletedWord = null;
    undoTimer = null;
  }, 5_500);
}

function undoDelete() {
  if (!deletedWord) {
    clearUndoToast();
    return;
  }

  const { word, index } = deletedWord;
  const insertAt = Math.min(Math.max(index, 0), state.words.length);
  state.words.splice(insertAt, 0, word);
  deletedWord = null;
  clearUndoToast();
  persistWords();
  renderLibrary();
  showToast(`已恢复 “${word.term}”`);
}

function showToast(message, duration = 2_600) {
  if (toastTimer) {
    window.clearTimeout(toastTimer);
  }

  clearUndoToast();
  deletedWord = null;
  elements.toast.textContent = message;
  elements.toast.hidden = false;

  toastTimer = window.setTimeout(() => {
    elements.toast.hidden = true;
    toastTimer = null;
  }, duration);
}

function setView(view, updateHash = true) {
  const isQuiz = view === "quiz";

  elements.libraryView.hidden = isQuiz;
  elements.quizView.hidden = !isQuiz;

  document.querySelectorAll(".nav-button").forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-current", active ? "page" : "false");
  });

  if (isQuiz) {
    renderQuiz();
  }

  if (updateHash) {
    try {
      window.history.replaceState(null, "", isQuiz ? "#quiz" : "#library");
    } catch (error) {
      // Hash updates are optional and may be blocked when opened directly as a file.
    }
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setPositionBadge(element, position) {
  POSITIONS.forEach((item) => {
    if (item.className) {
      element.classList.remove(item.className);
    }
  });
  element.className = "pos-badge";

  if (position.className) {
    element.classList.add(position.className);
  }
}

function renderQuizIntro() {
  const stats = getQuizStats();
  const availableWords = Math.min(state.words.length, QUIZ_SIZE);
  const isReady = state.words.length >= QUIZ_SIZE;
  const readiness = Math.min(100, (state.words.length / QUIZ_SIZE) * 100);

  elements.bestScore.textContent = stats.attempts
    ? `${stats.best} / ${QUIZ_SIZE}`
    : "尚未测验";
  elements.quizAvailableWords.textContent = String(availableWords);
  elements.quizReadinessBar.style.width = `${readiness}%`;
  elements.startQuizButton.disabled = !isReady;

  if (isReady) {
    elements.quizReadinessText.textContent = "词库已满足 20 题要求，每次都会重新抽题。";
    elements.startQuizButton.innerHTML = `
      <svg class="icon" aria-hidden="true"><use href="#icon-play"></use></svg>
      生成 20 题
    `;
  } else {
    const missing = QUIZ_SIZE - state.words.length;
    elements.quizReadinessText.textContent = `还需要添加 ${missing} 个不同单词，才能组成完整的 20 题测验。`;
    elements.startQuizButton.innerHTML = `
      <svg class="icon" aria-hidden="true"><use href="#icon-alert"></use></svg>
      还差 ${missing} 个单词
    `;
  }

  elements.quizAttempts.textContent = stats.attempts
    ? `已完成 ${stats.attempts} 轮测验 · 最佳 ${stats.best} 题`
    : "还没有完成过测验";
}

function buildQuizQuestions() {
  const selectedWords = shuffle(state.words).slice(0, QUIZ_SIZE);
  const allTerms = state.words.map((word) => word.term);

  return selectedWords.map((word) => {
    const sense = word.senses[Math.floor(Math.random() * word.senses.length)];
    const distractors = shuffle(
      allTerms.filter(
        (term) =>
          term.toLocaleLowerCase("en-US") !== word.term.toLocaleLowerCase("en-US"),
      ),
    ).slice(0, 3);

    return {
      wordId: word.id,
      term: word.term,
      partOfSpeech: sense.partOfSpeech,
      meaning: sense.meaning,
      options: shuffle([word.term, ...distractors]),
    };
  });
}

function startQuiz() {
  if (state.words.length < QUIZ_SIZE) {
    showToast(`还需要 ${QUIZ_SIZE - state.words.length} 个单词才能开始测验。`);
    return;
  }

  quizState.status = "active";
  quizState.questions = buildQuizQuestions();
  quizState.questionIndex = 0;
  quizState.score = 0;
  quizState.answered = false;
  quizState.answers = [];
  renderQuiz();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderQuiz() {
  const showingIntro = quizState.status === "idle";
  const showingPlay = quizState.status === "active";
  const showingResult = quizState.status === "done";

  elements.quizIntro.hidden = !showingIntro;
  elements.quizPlay.hidden = !showingPlay;
  elements.quizResult.hidden = !showingResult;

  if (showingIntro) {
    renderQuizIntro();
  } else if (showingPlay) {
    renderQuestion();
  } else if (showingResult) {
    renderResult();
  }
}

function renderQuestion() {
  const question = quizState.questions[quizState.questionIndex];
  if (!question) {
    completeQuiz();
    return;
  }

  const position = getPosition(question.partOfSpeech);
  const questionNumber = quizState.questionIndex + 1;

  quizState.answered = false;
  elements.currentQuestionNumber.textContent = String(questionNumber).padStart(2, "0");
  elements.verticalProgressBar.style.height = `${
    (quizState.questionIndex / QUIZ_SIZE) * 100
  }%`;
  elements.liveCorrect.textContent = String(quizState.score);
  elements.liveRemaining.textContent = String(QUIZ_SIZE - quizState.questionIndex);
  elements.questionPos.textContent = position.label;
  setPositionBadge(elements.questionPos, position);
  elements.promptMeaning.textContent = question.meaning;
  elements.answerFeedback.hidden = true;
  elements.answerFeedback.className = "answer-feedback";
  elements.answerFeedback.innerHTML = "";
  elements.nextQuestionButton.disabled = true;
  elements.nextQuestionButton.innerHTML = `
    ${questionNumber === QUIZ_SIZE ? "查看结果" : "下一题"}
    <svg class="icon" aria-hidden="true"><use href="#icon-arrow-right"></use></svg>
  `;
  elements.shortcutHint.textContent = "选择一个答案后继续";
  elements.answerGrid.innerHTML = question.options
    .map((option, index) => {
      const letter = String.fromCharCode(65 + index);

      return `
        <button
          class="answer-option"
          type="button"
          data-option-index="${index}"
          aria-label="${letter}，${escapeHtml(option)}"
        >
          <span class="answer-letter">${letter}</span>
          <span class="answer-word">${escapeHtml(option)}</span>
          <span class="answer-status-icon" aria-hidden="true">
            <svg class="icon"><use href="#icon-check"></use></svg>
          </span>
        </button>
      `;
    })
    .join("");
}

function answerQuestion(selectedOption) {
  if (quizState.answered || quizState.status !== "active") {
    return;
  }

  const question = quizState.questions[quizState.questionIndex];
  const isCorrect = selectedOption === question.term;
  const answerButtons = [...elements.answerGrid.querySelectorAll(".answer-option")];

  quizState.answered = true;
  quizState.answers.push({
    question,
    selected: selectedOption,
    isCorrect,
  });

  if (isCorrect) {
    quizState.score += 1;
  }

  answerButtons.forEach((button) => {
    const option = question.options[Number(button.dataset.optionIndex)];
    const statusIcon = button.querySelector(".answer-status-icon use");
    button.disabled = true;

    if (option === question.term) {
      button.classList.add("is-correct");
      statusIcon.setAttribute("href", "#icon-check");
    } else if (option === selectedOption) {
      button.classList.add("is-wrong");
      statusIcon.setAttribute("href", "#icon-x");
    } else {
      button.classList.add("is-dimmed");
    }
  });

  elements.liveCorrect.textContent = String(quizState.score);
  elements.answerFeedback.hidden = false;
  elements.answerFeedback.className = `answer-feedback ${
    isCorrect ? "is-correct" : "is-wrong"
  }`;
  elements.answerFeedback.innerHTML = isCorrect
    ? `
      <svg class="icon" aria-hidden="true"><use href="#icon-check-circle"></use></svg>
      <span>回答正确。<strong>${escapeHtml(question.term)}</strong> 对应“${escapeHtml(
        question.meaning,
      )}”。</span>
    `
    : `
      <svg class="icon" aria-hidden="true"><use href="#icon-alert"></use></svg>
      <span>正确答案是 <strong>${escapeHtml(
        question.term,
      )}</strong>。你选择了“${escapeHtml(selectedOption)}”。</span>
    `;
  elements.shortcutHint.textContent = "按 Enter 继续";
  elements.nextQuestionButton.disabled = false;
  elements.nextQuestionButton.focus({ preventScroll: true });
}

function nextQuestion() {
  if (!quizState.answered) {
    return;
  }

  quizState.questionIndex += 1;

  if (quizState.questionIndex >= quizState.questions.length) {
    completeQuiz();
    return;
  }

  renderQuestion();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function completeQuiz() {
  quizState.status = "done";
  const stats = getQuizStats();
  const nextStats = {
    attempts: stats.attempts + 1,
    best: Math.max(stats.best, quizState.score),
  };

  persistQuizStats(nextStats);
  renderQuiz();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderResult() {
  const stats = getQuizStats();
  const percent = Math.round((quizState.score / QUIZ_SIZE) * 100);
  const wrongAnswers = quizState.answers.filter((answer) => !answer.isCorrect);
  let heading = "这一轮完成了";
  let message = "查看答错的单词，再挑战一次。";

  if (quizState.score === QUIZ_SIZE) {
    heading = "满分，整轮全对";
    message = "20 个单词全部掌握。下一轮会重新抽题，也会重新打乱选项。";
  } else if (quizState.score >= 17) {
    heading = "非常接近满分";
    message = "只剩少量单词需要巩固，复盘后可以马上再测一轮。";
  } else if (quizState.score >= 12) {
    heading = "基础不错";
    message = "大部分单词已经掌握，重点看一遍本轮答错的释义。";
  } else {
    heading = "这一轮值得复盘";
    message = "先看清每个正确答案与释义的对应关系，再重新随机抽题。";
  }

  elements.resultScore.textContent = String(quizState.score);
  elements.bestScore.textContent = stats.attempts
    ? `${stats.best} / ${QUIZ_SIZE}`
    : "尚未测验";
  elements.scoreRing.style.setProperty("--score-angle", `${percent * 3.6}deg`);
  elements.resultHeading.textContent = heading;
  elements.resultMessage.textContent = message;
  elements.reviewCount.textContent = wrongAnswers.length
    ? `${wrongAnswers.length} 个待复习`
    : "全部答对";

  if (!wrongAnswers.length) {
    elements.reviewList.innerHTML = `
      <div class="review-empty">
        <svg class="icon" aria-hidden="true"><use href="#icon-check-circle"></use></svg>
        <h3>没有错题</h3>
        <p>本轮 20 题全部答对，可以直接开始新一轮随机测验。</p>
      </div>
    `;
    return;
  }

  elements.reviewList.innerHTML = wrongAnswers
    .map(({ question, selected }) => {
      const position = getPosition(question.partOfSpeech);

      return `
        <div class="review-row">
          <div>
            <span class="pos-badge ${position.className}">${escapeHtml(position.short)}</span>
            <p class="review-prompt">${escapeHtml(question.meaning)}</p>
          </div>
          <div class="review-answers">
            <span class="review-answer wrong">
              <svg class="icon" aria-hidden="true"><use href="#icon-x"></use></svg>
              你选：${escapeHtml(selected)}
            </span>
            <span class="review-answer correct">
              <svg class="icon" aria-hidden="true"><use href="#icon-check"></use></svg>
              正确：${escapeHtml(question.term)}
            </span>
          </div>
          <button
            class="icon-button"
            type="button"
            title="编辑 ${escapeHtml(question.term)}"
            aria-label="编辑 ${escapeHtml(question.term)}"
            data-edit-from-review="${escapeHtml(question.wordId)}"
          >
            <svg class="icon" aria-hidden="true"><use href="#icon-edit"></use></svg>
          </button>
        </div>
      `;
    })
    .join("");
}

function syncStorageFromAnotherTab(event) {
  if (event.key !== WORD_STORAGE_KEY) {
    return;
  }

  state.words = loadWords();
  if (state.editingId && !state.words.some((word) => word.id === state.editingId)) {
    resetEditor();
  }
  renderLibrary();
  renderQuiz();
}

function handleKeyboard(event) {
  if (elements.quizView.hidden || elements.quizPlay.hidden) {
    return;
  }

  const target = event.target;
  if (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  ) {
    return;
  }

  if (quizState.answered && event.key === "Enter") {
    event.preventDefault();
    nextQuestion();
    return;
  }

  if (quizState.answered) {
    return;
  }

  const letterIndex = ["a", "b", "c", "d"].indexOf(event.key.toLowerCase());
  if (letterIndex === -1) {
    return;
  }

  const currentQuestion = quizState.questions[quizState.questionIndex];
  if (!currentQuestion) {
    return;
  }

  event.preventDefault();
  answerQuestion(currentQuestion.options[letterIndex]);
}

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

elements.searchInput.addEventListener("input", renderWordList);
elements.posFilter.addEventListener("change", renderWordList);
elements.sortSelect.addEventListener("change", renderWordList);

elements.wordList.addEventListener("click", (event) => {
  const clearFiltersButton = event.target.closest("[data-clear-filters]");
  if (clearFiltersButton) {
    elements.searchInput.value = "";
    elements.posFilter.value = "all";
    renderWordList();
    elements.searchInput.focus();
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) {
    return;
  }

  if (actionButton.dataset.action === "edit") {
    enterEditMode(actionButton.dataset.id);
  } else if (actionButton.dataset.action === "delete") {
    deleteWord(actionButton.dataset.id);
  }
});

elements.senseRows.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-sense]");
  if (!removeButton) {
    return;
  }

  const row = removeButton.closest("[data-sense-row]");
  const rows = elements.senseRows.querySelectorAll("[data-sense-row]");

  if (rows.length > 1) {
    row.remove();
    updateSenseRows();
  }
});

elements.addSenseButton.addEventListener("click", () => {
  addSenseRow({ partOfSpeech: "noun", meaning: "" }, true);
});

elements.wordInput.addEventListener("input", () => {
  hideFormError();
  scheduleAutoLookup();
});
elements.senseRows.addEventListener("input", hideFormError);
elements.wordForm.addEventListener("submit", handleWordSubmit);
elements.cancelEditButton.addEventListener("click", resetEditor);
elements.lookupButton.addEventListener("click", () => lookupCurrentWord({ force: true }));
elements.undoButton.addEventListener("click", undoDelete);
elements.startQuizButton.addEventListener("click", startQuiz);
elements.restartQuizButton.addEventListener("click", startQuiz);
elements.nextQuestionButton.addEventListener("click", nextQuestion);

elements.answerGrid.addEventListener("click", (event) => {
  const optionButton = event.target.closest("[data-option-index]");
  if (!optionButton) {
    return;
  }

  const currentQuestion = quizState.questions[quizState.questionIndex];
  if (!currentQuestion) {
    return;
  }

  answerQuestion(currentQuestion.options[Number(optionButton.dataset.optionIndex)]);
});

elements.reviewList.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-from-review]");
  if (!editButton) {
    return;
  }

  setView("library");
  enterEditMode(editButton.dataset.editFromReview);
});

document.addEventListener("keydown", handleKeyboard);
window.addEventListener("storage", syncStorageFromAnotherTab);

setupPositionFilter();
resetEditor();
renderLibrary();

if (window.location.hash === "#quiz") {
  setView("quiz", false);
} else {
  setView("library", false);
}

if (storageBlocked) {
  showToast("浏览器阻止了本地存储，刷新后数据可能丢失。", 4_000);
}
