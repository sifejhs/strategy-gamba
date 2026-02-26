import type { Locale } from "./locales";
import { CASINOS, GAMES, SPORTS } from "./strategy-data";

/** Common human typing errors / misspellings – for SEO rank on typo searches */
const TYPO_KEYWORDS = [
  "stake stratgy",
  "stake stratagy",
  "stake mines preditor",
  "stake crash predicter",
  "roobet stratgy",
  "roobet predicter",
  "stak casino",
  "roobt",
  "1xbet stratgy",
  "rollbit preditor",
  "bc game stratgy",
  "bustabit preditor",
  "mines stratgy",
  "dice stratgy",
  "crash preditor",
  "blackjack stratgy",
  "plinko stratgy",
  "limbo preditor",
  "aviator preditor",
  "crypto casino stratgy",
  "sports betting preditor",
  "match predicion",
  "betting tips stratgy",
  "stake bonus code",
  "roobet bonus",
  "crypto casino bonous",
  "no depost bonus",
  "stratagy gamba",
  "predicter 2026",
  "casino stratagy",
];

/** Top searched casino/gambling keywords – English base, 2026-relevant + long-tail */
const EN_BASE = [
  "Stake mines strategy",
  "Stake crash predictor",
  "Roobet strategy",
  "Roobet crash predictor",
  "1xbet strategy",
  "Rollbit mines",
  "BC.Game crash",
  "Bustabit predictor",
  "crypto casino strategy",
  "Stake blackjack strategy",
  "Roobet mines predictor",
  "crash game strategy",
  "mines game predictor",
  "dice strategy crypto",
  "plinko strategy",
  "limbo predictor",
  "aviator predictor",
  "sports betting tips",
  "match prediction",
  "betting strategy",
  "casino tips",
  "download betting tools",
  "Stake sports betting",
  "Roobet sports",
  "1xbet sports prediction",
  "Stake bonus code",
  "Roobet welcome bonus",
  "no deposit bonus crypto casino",
  "crypto casino bonus",
  "Stake promo code",
  "casino Bitcoin deposit",
  "crypto casino withdrawal",
  "RTP casino",
  "provably fair",
  "house edge",
  "live casino crypto",
  "mobile casino",
  "best crypto casino",
  "Stake vs Roobet",
  "casino withdrawal time",
  "VPN for casino",
  "Stake VPN",
  "Roobet VPN",
  "casino VPN",
  "Roobet alternative",
  "Stake alternative",
  "best Stake alternative",
  "instant withdrawal casino",
  "is Stake legal",
  "is Roobet legal",
  "Spaceman game",
  "Aviator game",
  "Crash X",
  "Sugar Rush casino",
  "JetX",
  "best crypto casino 2026",
  "Stake mines predictor 2026",
  "crash predictor tool",
  "mines strategy tips",
  "crypto casino predictor",
  "sports match prediction tool",
  "betting strategy 2026",
  "Rollbit crash strategy",
  "BC.Game mines",
  "1xbet crash predictor",
  "free betting tools download",
  "Strategy Gamba",
];

/** Per-locale keyword sets – top search terms in that language */
const LOCALE_KEYWORDS: Record<Locale, string[]> = {
  en: [...EN_BASE, ...TYPO_KEYWORDS],
  zh: [
    "Stake 策略",
    "Roobet 策略",
    "扫雷策略",
    "crash 预测",
    "加密货币赌场",
    "体育博彩",
    "比赛预测",
    "1xbet 策略",
    "下载博彩工具",
    ...EN_BASE.slice(0, 15),
    ...TYPO_KEYWORDS.slice(0, 10),
  ],
  es: [
    "estrategia Stake",
    "predictor Roobet",
    "estrategia minas",
    "predictor crash",
    "casino cripto",
    "apuestas deportivas",
    "predicción partidos",
    "descargar herramientas apuestas",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  hi: [
    "Stake रणनीति",
    "Roobet रणनीति",
    "क्रिप्टो कैसीनो",
    "स्पोर्ट्स बेटिंग",
    "मैच भविष्यवाणी",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  ar: [
    "استراتيجية Stake",
    "متنبئ Roobet",
    "كازينو كريبتو",
    "مراهنات رياضية",
    "تنبؤ المباريات",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  pt: [
    "estratégia Stake",
    "predictor Roobet",
    "estratégia minas",
    "casino cripto",
    "apostas desportivas",
    "previsão de jogos",
    "descarregar ferramentas apostas",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  ru: [
    "стратегия Stake",
    "предиктор Roobet",
    "крипто казино",
    "спортивные ставки",
    "прогноз матчей",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  ja: [
    "Stake 戦略",
    "Roobet 予測",
    "クラッシュ予測",
    "暗号カジノ",
    "スポーツベッティング",
    "試合予測",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  de: [
    "Stake Strategie",
    "Roobet Predictor",
    "Krypto Casino Strategie",
    "Sportwetten Tipps",
    "Spielvorhersage",
    "Wett-Tools herunterladen",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  fr: [
    "stratégie Stake",
    "prédicteur Roobet",
    "stratégie mines",
    "casino crypto",
    "paris sportifs",
    "prédiction match",
    "télécharger outils paris",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  ko: [
    "Stake 전략",
    "Roobet 예측",
    "크래시 예측",
    "암호화폐 카지노",
    "스포츠 베팅",
    "경기 예측",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  tr: [
    "Stake strateji",
    "Roobet tahminci",
    "kripto casino",
    "spor bahisleri",
    "maç tahmini",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  vi: [
    "chiến lược Stake",
    "dự đoán Roobet",
    "casino crypto",
    "cá cược thể thao",
    "dự đoán trận đấu",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  it: [
    "strategia Stake",
    "predictor Roobet",
    "casino crypto",
    "scommesse sportive",
    "previsione partite",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  nl: [
    "Stake strategie",
    "Roobet predictor",
    "crypto casino",
    "sportweddenschappen",
    "wedstrijdvoorspelling",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  pl: [
    "strategia Stake",
    "predyktor Roobet",
    "kasyno krypto",
    "zakłady sportowe",
    "predykcja meczu",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  id: [
    "strategi Stake",
    "prediktor Roobet",
    "casino kripto",
    "taruhan olahraga",
    "prediksi pertandingan",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  th: [
    "กลยุทธ์ Stake",
    "Roobet ทำนาย",
    "คาสิโนคริปโต",
    "การเดิมพันกีฬา",
    "ทำนายแมตช์",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  bn: [
    "Stake কৌশল",
    "Roobet ভবিষ্যদ্বাণী",
    "ক্রিপ্টো ক্যাসিনো",
    "খেলাধুলা বেটিং",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
  ms: [
    "strategi Stake",
    "peramal Roobet",
    "kasino kripto",
    "pertaruhan sukan",
    "ramalan perlawanan",
    ...EN_BASE.slice(0, 12),
    ...TYPO_KEYWORDS.slice(0, 8),
  ],
};

/** Sport-specific top search keywords (all languages get sport + casino + download) */
export function getSportKeywords(sportSlug: string, locale: Locale): string[] {
  const sport = SPORTS.find((s) => s.slug === sportSlug);
  const name = sport?.name ?? sportSlug;
  const base = [
    `${name} betting tips`,
    `${name} match prediction`,
    `${name} strategy`,
    `sports betting ${name}`,
    `download ${name} betting tools`,
    "Stake sports",
    "Roobet sports",
    "1xbet sports",
  ];
  return [...base, ...(LOCALE_KEYWORDS[locale] ?? LOCALE_KEYWORDS.en).slice(0, 10)];
}

/** Meta keywords for a page – heavy rank level, all languages + typos */
export function getMetaKeywords(
  locale: Locale,
  options?: {
    casino?: string;
    game?: string;
    sport?: string;
    includeTypos?: boolean;
  }
): string[] {
  const list = [...(LOCALE_KEYWORDS[locale] ?? LOCALE_KEYWORDS.en)];
  if (options?.casino) {
    list.unshift(
      `${options.casino} strategy`,
      `${options.casino} predictor`,
      `${options.casino} tips`,
      `${options.casino} mines`,
      `${options.casino} crash`
    );
  }
  if (options?.game) {
    list.unshift(
      `${options.game} strategy`,
      `${options.game} predictor`,
      `${options.game} tips`
    );
  }
  if (options?.sport) {
    list.unshift(
      `${options.sport} betting`,
      `${options.sport} match prediction`,
      `${options.sport} tips`
    );
  }
  if (options?.includeTypos !== false) {
    list.push(...TYPO_KEYWORDS.slice(0, 15));
  }
  return Array.from(new Set(list)).slice(0, 50);
}

/** Default meta keywords for locale (home, strategies list) */
export function getDefaultMetaKeywords(locale: Locale): string[] {
  return getMetaKeywords(locale, { includeTypos: true });
}
