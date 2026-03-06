import type { Locale } from "./locales";

type Strings = {
  siteName: string;
  homeTitle: string;
  homeDesc: string;
  disclaimerTitle: string;
  disclaimer: string;
  downloadBtn: string;
  downloadCta: string;
  backHome: string;
  allStrategies: string;
  examplePages: string;
  byGame: string;
  byCasino: string;
  viewAll: string;
  strategiesListTitle: string;
  strategiesListDesc: string;
  noStrategy100: string;
  titleTemplates: ((c: string, g: string, v: string) => string)[];
  descSnippets: ((c: string, g: string) => string)[];
  intros: ((c: string, g: string, v: string) => string)[];
  bodyParagraph: string;
  bodyDisclaimer: string;
  sportsTitle: string;
  sportsDesc: string;
  bonusTitle: string;
  bonusDesc: string;
  paymentsTitle: string;
  paymentsDesc: string;
  guidesTitle: string;
  guidesDesc: string;
  sportPageTitle: (sportName: string) => string;
  sportPageDesc: (sportName: string) => string;
  bonusCasinoTitle: (casinoName: string) => string;
  bonusCasinoDesc: (casinoName: string) => string;
  guidePageTitle: (guideName: string) => string;
  guidePageDesc: (guideName: string) => string;
  homeSportsCta: string;
  homeBonusSectionTitle: string;
  homeBonusSectionDesc: string;
  homeGuidesCta: string;
  homeGuidesSectionTitle: string;
  homeGuidesSectionDesc: string;
  relatedLabel: string;
  moreFromCasino: string;
  moreGameStrategies: (game: string) => string;
  moreGameVariant: (game: string) => string;
  casinoLogoAlt: (name: string) => string;
  strategyCountDesc: (count: number) => string;
  bonusLinkLabel: (name: string) => string;
  gameStrategyLabel: (name: string) => string;
  downloadOurSoftware: string;
  bonusCodesLabel: string;
  paymentsLabel: string;
  guidesLabel: string;
  aboutTitle: string;
  aboutDesc: string;
  aboutHeading: string;
  aboutBody1: string;
  aboutBody2: string;
  aboutTrustHeading: string;
  aboutTrustBody: string;
  footerTrustLinks: string;
  aboutLinkLabel: string;
  strategyKeyPointsHeading: string;
  strategyKeyPoints: (casino: string, game: string) => string[];
  strategyIntro2: ((c: string, g: string, v: string) => string)[];
  strategyWhyMattersHeading: string;
  strategyWhyMattersBody: ((c: string, g: string) => string)[];
  strategyCommonMistakesHeading: string;
  strategyCommonMistakesItems: ((c: string, g: string) => string)[];
  strategyStepsHeading: string;
  strategySteps: ((c: string, g: string) => string)[];
  strategyWhenToUseHeading: string;
  strategyWhenToUseBody: ((c: string, g: string) => string)[];
  strategyGlossaryHeading: string;
  strategyGlossaryEntries: ((c: string, g: string) => { term: string; definition: string })[];
  strategySummaryHeading: string;
  strategySummaryBody: ((c: string, g: string) => string)[];
  strategyFaqHeading: string;
  strategyFaqVisible: ((c: string, g: string) => { question: string; answer: string })[];
  strategyDownloadCtaStrong: string;
}

function en(): Strings {
  const v = (c: string, g: string, x: string) => `${c} ${g} ${x}`;
  return {
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines & More",
    homeDesc:
      "One dedicated page per casino, game and type: Stake mines strategy, Stake crash predictor, Roobet blackjack strategy and hundreds more. Each page is SEO-optimized and independent.",
    disclaimerTitle: "Disclaimer",
    disclaimer:
      "The house always has an edge. Gambling involves risk; you can lose money. This site and our tools are for entertainment and educational purposes only. We provide tips and strategies to help you make informed decisions, but no strategy is 100% guaranteed. Past results do not predict future outcomes. Please gamble responsibly and only with money you can afford to lose. Strategy Gamba is not a casino and does not operate gambling services.",
    downloadBtn: "Download our software",
    downloadCta: "Improve your win chance – follow our prediction and strategy tools. Download our software below to get the full toolset.",
    backHome: "← Home",
    allStrategies: "View all strategy pages →",
    examplePages: "Top strategy pages – Stake, Roobet, crash, mines",
    byGame: "By game",
    byCasino: "By casino",
    strategiesListTitle: "All strategy pages",
    strategiesListDesc:
      "Each link is its own SEO-optimized page. Independent title and description per page.",
    viewAll: "All strategies →",
    noStrategy100: "Tools and guides only – no strategy is 100%. Gamble responsibly.",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – Tips & Tools`,
      (c, g, v) => `${g} ${v} for ${c} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – How to Improve Your Bets`,
      (c, g, v) => `${c} ${g} ${v} Guide – Best ${v} Tips`,
      (c, g, v) => `Best ${c} ${g} ${v} – Free Tools`,
      (c, g, v) => `${g} ${v} on ${c} – Our ${v} & Tips`,
      (c, g, v) => `${c} ${g} ${v} – Use Our ${v} Tools`,
      (c, g, v) => `${v} for ${c} ${g} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Improve Results`,
      (c, g, v) => `${g} ${v} ${c} – Tips & Guide`,
    ],
    descSnippets: [
      (c, g) => `Free ${g} strategy and tips for ${c}.`,
      (c, g) => `Our ${c} ${g} tools help you make better bets.`,
      (c, g) => `${g} guide for ${c} – tips to improve your play.`,
      (c, g) => `Learn ${g} strategy on ${c}. No strategy is 100%.`,
      (c, g) => `${c} ${g} – use our predictor and strategy tips.`,
      (c, g) => `Improve your ${g} results on ${c} with our guide.`,
      (c, g) => `Best ${g} tips for ${c}. House always has an edge.`,
      (c, g) => `${g} on ${c} – strategy and predictor tools.`,
      (c, g) => `Free ${c} ${g} strategy. For entertainment only.`,
      (c, g) => `${c} ${g} – tips to help you bet smarter.`,
    ],
    intros: [
      (c, g, v) =>
        `Our ${v.toLowerCase()} for ${c} ${g} is designed to help you make more informed bets. Use the tools and tips on this page as a guide only – no strategy is 100% and the house always has an edge.`,
      (c, g, v) =>
        `${c} ${g} ${v}: we provide tips and tools to improve your approach. Results are not guaranteed. Gamble responsibly and only with money you can afford to lose.`,
      (c, g, v) =>
        `This page covers ${g} ${v.toLowerCase()} on ${c}. Our content is for entertainment and education. Past results do not predict future outcomes.`,
      (c, g, v) =>
        `Use our ${c} ${g} ${v.toLowerCase()} to get the most out of your sessions. Remember – the casino always has an edge; we only offer tips to help you play smarter.`,
      (c, g, v) =>
        `${v} and tips for ${g} on ${c}. Free tools and guides. No strategy works 100% of the time; please gamble responsibly.`,
    ],
    bodyParagraph:
      "Here you'll find our strategy and tips. We cover bet sizing, risk levels, and how to use our tools to improve your results. Content is updated regularly. Download our software from the button above for extra features.",
    bodyDisclaimer:
      "Disclaimer: the house always wins in the long run. No strategy is 100%. This site is for tips and tools only – gamble responsibly.",
    sportsTitle: "Sports betting & match prediction – Strategy Gamba",
    sportsDesc: "Football, basketball, tennis, esports, UFC and more. Betting tips and match prediction. Download our tools for Stake, Roobet, 1xbet.",
    bonusTitle: "Casino bonus codes & welcome bonus – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc:
      "Stake bonus code, Roobet welcome bonus, no deposit bonus, crypto casino promotions. Compare bonuses for Stake, Roobet, Rollbit, BC.Game and 30+ casinos. Download our tools.",
    paymentsTitle: "Crypto casino payments – Bitcoin, withdrawal, deposit | Strategy Gamba",
    paymentsDesc:
      "Crypto casino deposits and withdrawals: Bitcoin, Ethereum, USDT. Stake, Roobet, 1xbet payment methods. Fast withdrawals and strategy tools – download our software.",
    guidesTitle: "Casino guides – RTP, provably fair, crypto, responsible gambling | Strategy Gamba",
    guidesDesc:
      "RTP, provably fair, crypto deposits, bonus codes, responsible gambling, mobile and live casino. Everything related to crypto casino – plus our strategy tools.",
    sportPageTitle: (n) =>
      `${n} betting tips & match prediction – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `${n} betting strategy and match prediction. Use our tools for Stake, Roobet, 1xbet and top crypto casinos. Download our software for full features – no strategy is 100%.`,
    bonusCasinoTitle: (n) => `${n} bonus code & welcome bonus – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `${n} bonus code, welcome bonus, no deposit and promo. Crypto casino bonuses and how to use them. Download our strategy tools.`,
    guidePageTitle: (n) => `${n} – crypto casino guide | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} explained for Stake, Roobet and crypto casinos. Everything related to casino – plus our strategy and predictor tools.`,
    homeSportsCta: "All sports – betting tips & download",
    homeBonusSectionTitle: "Bonus & payments",
    homeBonusSectionDesc: "Bonus codes, welcome bonus, no deposit, crypto deposits and withdrawals. Everything related to casino.",
    homeGuidesCta: "All guides",
    homeGuidesSectionTitle: "Guides",
    homeGuidesSectionDesc: "RTP, provably fair, responsible gambling, mobile and live casino – everything related to casino.",
    relatedLabel: "Related",
    moreFromCasino: "More from this casino",
    moreGameStrategies: (g) => `More ${g} strategies`,
    moreGameVariant: (g) => `More ${g}`,
    casinoLogoAlt: (n) => `${n} casino – strategy and bonus`,
    strategyCountDesc: (c) => `${c} pages. Download our software below and follow our prediction and strategy tools to improve your win chance.`,
    bonusLinkLabel: (n) => `${n} bonus`,
    gameStrategyLabel: (n) => `${n} strategy`,
    downloadOurSoftware: "Download our software",
    bonusCodesLabel: "Bonus codes",
    paymentsLabel: "Payments",
    guidesLabel: "Guides",
    aboutTitle: "About Strategy Gamba",
    aboutDesc: "Strategy Gamba provides strategy and predictor tools for crypto casino players. Educational content only. We are not a casino. Gamble responsibly.",
    aboutHeading: "About us",
    aboutBody1:
      "Strategy Gamba is an educational resource for players who use crypto casinos such as Stake, Roobet, 1xbet, Rollbit and others. We offer strategy guides, game tips, and software tools to help you make informed decisions. We are not a casino and do not operate gambling services.",
    aboutBody2:
      "Our content covers mines, crash, blackjack, dice, sports betting and more across 20 languages. Every page is optimized for clarity and usefulness. No strategy guarantees wins; the house always has an edge. We encourage responsible gambling and linking to authoritative resources.",
    aboutTrustHeading: "Trust & responsible gambling",
    aboutTrustBody:
      "We link to established organisations such as BeGambleAware and GamCare for responsible gambling support. If you or someone you know has a gambling problem, please seek help. Our tools are for entertainment and education only.",
    footerTrustLinks: "Responsible gambling:",
    aboutLinkLabel: "About us",
    strategyKeyPointsHeading: "Key points for this strategy",
    strategyKeyPoints: (c, g) => [
      `Use our ${g} predictor and strategy tools on ${c} for consistent decision-making.`,
      `Set a budget before you play ${g} on ${c} and stick to it.`,
      `The house edge applies to every ${g} round; no strategy removes it.`,
      `Download our software to get the full toolset for ${c} ${g} – tips, patterns, and risk levels.`,
      `Combine our tools with responsible play: take breaks and never chase losses.`,
      `Our ${c} ${g} tools include pattern analysis and risk suggestions – download above to access them.`,
      `Never bet more than you can afford to lose; ${g} outcomes are never guaranteed.`,
      `Track your sessions and use our software’s features to review your decisions over time.`,
      `Different ${g} variants may need different approaches; our toolset adapts to your game.`,
      `Top casinos like ${c} offer provably fair games; our strategy helps you play with more confidence.`,
      `Learning bet sizing and when to stop is as important as any ${g} strategy.`,
      `Download once and use across devices – our tools work wherever you play ${c} ${g}.`,
    ],
    strategyIntro2: [
      (c, g, v) =>
        `This page gives you a clear path for ${g} ${v.toLowerCase()} on ${c}. Thousands of players use our predictor and strategy tools to inform their play. We do not promise wins – we provide data and structure so you can make better choices. Download the software above to get the full experience.`,
      (c, g, v) =>
        `Whether you are new to ${g} on ${c} or looking to refine your approach, our ${v.toLowerCase()} and tools are built to help. Every session carries risk; our aim is to make your decisions more consistent and informed. Use the download button to access the complete toolset.`,
      (c, g, v) =>
        `Playing ${g} on ${c} with a solid approach can improve your experience. Our tools offer pattern insights, risk guidance, and step-by-step recommendations. Remember: the house always has an edge. Download our software to use everything we offer for ${c} ${g}.`,
    ],
    strategyWhyMattersHeading: "Why getting your strategy right matters",
    strategyWhyMattersBody: [
      (c, g) =>
        `Getting your ${g} approach right on ${c} is not about guaranteed wins – it is about reducing guesswork and staying in control. Our predictor and strategy tools help you see patterns, set limits, and make decisions based on structure rather than impulse. Many players find that using our software improves their session quality and helps them stick to their budget. Download the toolset above to get the full picture for ${c} ${g}.`,
      (c, g) =>
        `A clear strategy for ${g} on ${c} helps you play with more confidence and less stress. Our tools analyse game data and suggest when to bet, when to hold back, and how to manage risk. No system can remove the house edge, but a disciplined approach can make your play more enjoyable and sustainable. Download our software to access all features for ${c} ${g}.`,
    ],
    strategyCommonMistakesHeading: "Common mistakes to avoid",
    strategyCommonMistakesItems: [
      (c, g) =>
        `Chasing losses: after a bad round on ${g} at ${c}, increasing your bet to “win it back” usually leads to bigger losses. Stick to your plan and use our tools to stay disciplined.`,
      (c, g) =>
        `Ignoring the house edge: ${g} is designed so the casino has a long-term advantage. Our strategy and predictor tools help you play smarter, but they cannot remove that edge.`,
      (c, g) =>
        `Skipping the download: the full value of our ${c} ${g} approach is in the software – pattern analysis, risk levels, and recommendations. The download is free and takes a moment.`,
      (c, g) =>
        `Playing without a budget: set a limit before you start ${g} on ${c} and stop when you reach it. Our tools can help you track and stay within your limits.`,
      (c, g) =>
        `Treating any strategy as foolproof: no ${g} strategy wins every time. Use our tips and tools as a guide, not a guarantee. Always gamble responsibly.`,
      (c, g) =>
        `Changing strategy every few rounds: consistency matters. Pick an approach for ${c} ${g}, use our software to follow it, and only adjust after a full session review.`,
    ],
    strategyStepsHeading: "Step-by-step: using our tools for this strategy",
    strategySteps: [
      (c, g) =>
        `Download our software using the button at the top of this page. The same toolset works for ${c} ${g} and other supported casinos and games.`,
      (c, g) =>
        `Open the tool and select ${c} and ${g} so the predictor and strategy features are tuned to your game.`,
      (c, g) =>
        `Set your session budget and limits before you play. Our software can help you stick to them.`,
      (c, g) =>
        `Use the pattern and risk suggestions during play. They are there to inform your decisions, not to replace your judgment.`,
      (c, g) =>
        `After the session, review the data in the tool if you want to refine your ${g} approach on ${c} next time.`,
    ],
    strategyWhenToUseHeading: "When to use our prediction and strategy tools",
    strategyWhenToUseBody: [
      (c, g) =>
        `Use our tools whenever you play ${g} on ${c} or other supported sites. They are designed for in-session guidance: pattern hints, risk levels, and strategy tips. Many users run the software in the background and check it before placing a bet. Download above to get started.`,
      (c, g) =>
        `The best time to use our ${c} ${g} tools is before and during your session. A quick check of the predictor and strategy suggestions can help you stay consistent and avoid impulsive bets. The download is free and the same software works across our supported casinos.`,
    ],
    strategyGlossaryHeading: "Quick glossary",
    strategyGlossaryEntries: [
      (c, g) => ({ term: "House edge", definition: `The mathematical advantage the casino has on every ${g} round. It cannot be removed; our tools help you play with clearer expectations.` }),
      (c, g) => ({ term: "Predictor", definition: `Our tool that analyses patterns and suggests possible outcomes for ${g} on ${c}. It is for guidance only, not a guarantee.` }),
      (c, g) => ({ term: "Bet sizing", definition: `Choosing how much to wager on each ${g} round. Our strategy tools include suggestions for sizing based on your bankroll and risk.` }),
      (c, g) => ({ term: "Session limit", definition: `A cap on how much you are willing to lose in one sitting. We recommend setting one before you play ${c} ${g}.` }),
    ],
    strategySummaryHeading: "Summary",
    strategySummaryBody: [
      (c, g) =>
        `This page covered ${c} ${g} strategy and how our predictor and strategy tools can support your play. Download the software above for the full toolset – pattern analysis, risk guidance, and step-by-step tips. No strategy is 100% guaranteed; the house always has an edge. Use our tools to play more informed and stay in control. Gamble responsibly.`,
      (c, g) =>
        `You now have a clear overview of ${g} on ${c} and how to use our tools. The download gives you access to all features: predictions, strategy suggestions, and risk management help. Remember to set limits and never chase losses. We are here to help you play smarter, not to promise wins. Download our software and explore the full experience for ${c} ${g}.`,
    ],
    strategyFaqHeading: "Frequently asked questions",
    strategyFaqVisible: [
      (c, g) => ({ question: `What is the best ${g} strategy for ${c}?`, answer: `Our ${c} ${g} strategy and predictor tools help you make informed bets. Download our software for full features. No strategy is 100%; the house always has an edge.` }),
      () => ({ question: "Where can I download the betting tools?", answer: "Use the Download our tools button at the top of this page. Works with Stake, Roobet, 1xbet and 30+ crypto casinos." }),
      () => ({ question: "Is any strategy 100% guaranteed?", answer: "No. The house always has an edge. Our site provides tips and tools for entertainment and education only. Gamble responsibly." }),
      (c, g) => ({ question: `Do your tools work for ${g} on other casinos?`, answer: `Yes. Our software supports ${c}, Stake, Roobet, 1xbet, Rollbit, BC.Game and 30+ crypto casinos. Download once and use across supported sites.` }),
    ],
    strategyDownloadCtaStrong:
      "Get the full toolset – download our software for predictor and strategy features, risk guidance, and step-by-step support. Used by players on Stake, Roobet, 1xbet and 30+ casinos.",
  };
}

/** Localized strings – top 20 languages. Fallback to English for missing. */
const TRANSLATIONS: Record<Locale, Strings> = {
  en: en(),
  zh: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake、Roobet、Crash、Mines 等策略",
    homeDesc:
      "每个娱乐场、游戏和类型独立页面：Stake 扫雷策略、Stake  crash 预测、Roobet 二十一点策略等。每页独立 SEO 优化。",
    disclaimerTitle: "免责声明",
    disclaimer:
      "庄家始终占优。赌博有风险，可能损失资金。本网站及工具仅供娱乐与教育。我们提供策略与技巧供参考，但没有任何策略能保证 100% 获胜。过往结果不代表未来。请理性投注，仅用可承受损失的资金。Strategy Gamba 非赌场，不经营博彩。",
    downloadBtn: "下载我们的工具",
    backHome: "← 首页",
    allStrategies: "查看所有策略页 →",
    examplePages: "策略页示例",
    byGame: "按游戏",
    byCasino: "按娱乐场",
    strategiesListTitle: "所有策略页",
    strategiesListDesc: "每个链接为独立 SEO 优化页面，独立标题与描述。",
    viewAll: "全部策略 →",
    noStrategy100: "仅工具与指南，无策略 100% 有效。请理性投注。",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – 技巧与工具`,
      (c, g, v) => `${c} ${g} ${v} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – 提高投注效果`,
      (c, g, v) => `${c} ${g} ${v} 指南`,
      (c, g, v) => `最佳 ${c} ${g} ${v} – 免费工具`,
      (c, g, v) => `${c} 上的 ${g} ${v}`,
      (c, g, v) => `${c} ${g} ${v} – 使用我们的工具`,
      (c, g, v) => `${c} ${g} ${v} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – 改善结果`,
      (c, g, v) => `${g} ${v} ${c} – 技巧与指南`,
    ],
    descSnippets: [
      (c, g) => `免费 ${c} ${g} 策略与技巧。`,
      (c, g) => `我们的 ${c} ${g} 工具助您更好投注。`,
      (c, g) => `${c} ${g} 指南 – 提升表现。`,
      (c, g) => `学习 ${c} 上的 ${g} 策略。无策略 100% 有效。`,
      (c, g) => `${c} ${g} – 预测与策略技巧。`,
      (c, g) => `用我们的指南改善 ${c} 上 ${g} 结果。`,
      (c, g) => `最佳 ${c} ${g} 技巧。庄家始终占优。`,
      (c, g) => `${c} 上的 ${g} – 策略与预测工具。`,
      (c, g) => `免费 ${c} ${g} 策略。仅供娱乐。`,
      (c, g) => `${c} ${g} – 助您更聪明投注。`,
    ],
    intros: [
      (c, g, v) => `本页为 ${c} ${g} ${v} 指南。工具与技巧仅供参考，无策略 100% 有效，庄家始终占优。`,
      (c, g, v) => `${c} ${g} ${v}：我们提供技巧与工具。结果不保证。请理性投注。`,
      (c, g, v) => `本页介绍 ${c} 上的 ${g} ${v}。内容仅供娱乐与教育。`,
      (c, g, v) => `使用我们的 ${c} ${g} ${v} 提升表现。庄家始终占优，我们仅提供技巧。`,
      (c, g, v) => `${c} ${g} 的 ${v} 与技巧。免费工具与指南。请理性投注。`,
    ],
    bodyParagraph:
      "此处为策略与技巧，包括注码、风险等级及工具使用。内容定期更新。可从上方按钮下载我们的软件。",
    bodyDisclaimer: "免责声明：长期庄家必胜。无策略 100% 有效。本站仅提供技巧与工具，请理性投注。",
    sportsTitle: "体育博彩与比赛预测 – Strategy Gamba",
    sportsDesc: "足球、篮球、网球、电竞、UFC 等。投注技巧与比赛预测。下载 Stake、Roobet、1xbet 工具。",
    bonusTitle: "赌场奖金码与欢迎奖金 – Stake、Roobet、1xbet | Strategy Gamba",
    bonusDesc: "Stake 奖金码、Roobet 欢迎奖金、无存款奖金、加密货币赌场促销。比较 Stake、Roobet、Rollbit、BC.Game 等 30+ 赌场奖金。下载我们的工具。",
    paymentsTitle: "加密货币赌场支付 – 比特币、提款、存款 | Strategy Gamba",
    paymentsDesc: "加密货币赌场存款与提款：比特币、以太坊、USDT。Stake、Roobet、1xbet 支付方式。快速提款与策略工具 – 下载我们的软件。",
    guidesTitle: "赌场指南 – RTP、可证明公平、加密货币、负责任博彩 | Strategy Gamba",
    guidesDesc: "RTP、可证明公平、加密货币存款、奖金码、负责任博彩、移动与真人赌场。加密货币赌场相关内容 – 及我们的策略工具。",
    sportPageTitle: (n) => `${n} 投注技巧与比赛预测 – Stake、Roobet、1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `${n} 投注策略与比赛预测。使用我们的工具支持 Stake、Roobet、1xbet 及顶级加密货币赌场。下载软件获取完整功能 – 无策略 100% 有效。`,
    bonusCasinoTitle: (n) => `${n} 奖金码与欢迎奖金 – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `${n} 奖金码、欢迎奖金、无存款与促销。加密货币赌场奖金及使用方法。下载我们的策略工具。`,
    guidePageTitle: (n) => `${n} – 加密货币赌场指南 | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} 详解：Stake、Roobet 与加密货币赌场。赌场相关内容 – 及我们的策略与预测工具。`,
  },
  es: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines y más",
    homeDesc:
      "Una página por casino, juego y tipo: estrategia mines Stake, predictor crash Stake, estrategia blackjack Roobet y cientos más. Cada página con SEO independiente.",
    disclaimerTitle: "Aviso legal",
    disclaimer:
      "La casa siempre tiene ventaja. El juego conlleva riesgo; puedes perder dinero. Este sitio y nuestras herramientas son solo para entretenimiento y educación. Ofrecemos consejos y estrategias para decisiones informadas, pero ninguna estrategia es 100% segura. Los resultados pasados no predicen el futuro. Juega con responsabilidad y solo con dinero que puedas permitirte perder. Strategy Gamba no es un casino ni ofrece juegos de azar.",
    downloadBtn: "Descargar nuestras herramientas",
    backHome: "← Inicio",
    allStrategies: "Ver todas las páginas de estrategia →",
    examplePages: "Páginas de estrategia de ejemplo",
    byGame: "Por juego",
    byCasino: "Por casino",
    strategiesListTitle: "Todas las páginas de estrategia",
    strategiesListDesc: "Cada enlace es una página SEO independiente con título y descripción propios.",
    viewAll: "Todas las estrategias →",
    noStrategy100: "Solo herramientas y guías; ninguna estrategia es 100%. Juega con responsabilidad.",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – Consejos y herramientas`,
      (c, g, v) => `${v} de ${g} para ${c} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Cómo mejorar tus apuestas`,
      (c, g, v) => `Guía ${c} ${g} ${v}`,
      (c, g, v) => `Mejor ${c} ${g} ${v} – Herramientas gratis`,
      (c, g, v) => `${g} ${v} en ${c}`,
      (c, g, v) => `${c} ${g} ${v} – Usa nuestras herramientas`,
      (c, g, v) => `${v} para ${c} ${g} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Mejorar resultados`,
      (c, g, v) => `${g} ${v} ${c} – Consejos y guía`,
    ],
    descSnippets: [
      (c, g) => `Estrategia y consejos de ${g} gratis para ${c}.`,
      (c, g) => `Nuestras herramientas ${c} ${g} para apostar mejor.`,
      (c, g) => `Guía de ${g} para ${c} – consejos para mejorar.`,
      (c, g) => `Aprende estrategia ${g} en ${c}. Ninguna estrategia es 100%.`,
      (c, g) => `${c} ${g} – predictor y consejos de estrategia.`,
      (c, g) => `Mejora tus resultados en ${g} en ${c} con nuestra guía.`,
      (c, g) => `Mejores consejos ${g} para ${c}. La casa siempre tiene ventaja.`,
      (c, g) => `${g} en ${c} – estrategia y herramientas predictor.`,
      (c, g) => `Estrategia ${c} ${g} gratis. Solo entretenimiento.`,
      (c, g) => `${c} ${g} – consejos para apostar con cabeza.`,
    ],
    intros: [
      (c, g, v) => `Nuestra ${v.toLowerCase()} para ${c} ${g} te ayuda a apostar con más criterio. Usa esta página solo como guía; ninguna estrategia es 100% y la casa siempre tiene ventaja.`,
      (c, g, v) => `${c} ${g} ${v}: ofrecemos consejos y herramientas. Los resultados no están garantizados. Juega con responsabilidad.`,
      (c, g, v) => `Esta página trata sobre ${g} ${v.toLowerCase()} en ${c}. Contenido para entretenimiento y educación.`,
      (c, g, v) => `Usa nuestra ${c} ${g} ${v.toLowerCase()} para sacar más partido. La casa siempre tiene ventaja; solo ofrecemos consejos.`,
      (c, g, v) => `${v} y consejos para ${g} en ${c}. Herramientas y guías gratis. Juega con responsabilidad.`,
    ],
    bodyParagraph:
      "Aquí encontrarás nuestra estrategia y consejos: tamaño de apuesta, niveles de riesgo y uso de herramientas. Contenido actualizado. Descarga nuestro software arriba.",
    bodyDisclaimer:
      "Aviso: a largo plazo la casa siempre gana. Ninguna estrategia es 100%. Este sitio es solo consejos y herramientas; juega con responsabilidad.",
    sportsTitle: "Apuestas deportivas y predicción de partidos – Strategy Gamba",
    sportsDesc: "Fútbol, baloncesto, tenis, esports, UFC y más. Consejos de apuestas y predicción. Descarga nuestras herramientas para Stake, Roobet, 1xbet.",
    bonusTitle: "Códigos bonus casino y bono bienvenida – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc:
      "Código bonus Stake, bono bienvenida Roobet, bono sin depósito, promociones casino cripto. Compara bonos de Stake, Roobet, Rollbit, BC.Game y 30+ casinos. Descarga nuestras herramientas.",
    paymentsTitle: "Pagos casino cripto – Bitcoin, retiro, depósito | Strategy Gamba",
    paymentsDesc:
      "Depósitos y retiros casino cripto: Bitcoin, Ethereum, USDT. Métodos de pago Stake, Roobet, 1xbet. Retiros rápidos y herramientas de estrategia – descarga nuestro software.",
    guidesTitle: "Guías casino – RTP, provably fair, cripto, juego responsable | Strategy Gamba",
    guidesDesc:
      "RTP, provably fair, depósitos cripto, códigos bonus, juego responsable, casino móvil y en vivo. Todo sobre casino cripto – y nuestras herramientas de estrategia.",
    sportPageTitle: (n) =>
      `${n} consejos de apuestas y predicción – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `Estrategia de apuestas ${n} y predicción. Usa nuestras herramientas para Stake, Roobet, 1xbet y mejores casinos cripto. Descarga nuestro software – ninguna estrategia es 100%.`,
    bonusCasinoTitle: (n) => `Código bonus ${n} y bono bienvenida – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `Código bonus ${n}, bono bienvenida, sin depósito y promos. Bonos casino cripto y cómo usarlos. Descarga nuestras herramientas.`,
    guidePageTitle: (n) => `${n} – guía casino cripto | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} explicado para Stake, Roobet y casinos cripto. Todo sobre casino – y nuestras herramientas de estrategia y predicción.`,
  },
  hi: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines और अधिक",
    homeDesc:
      "प्रत्येक कैसीनो, गेम और प्रकार के लिए एक पेज: Stake माइंस रणनीति, Roobet क्रैश प्रिडिक्टर और सैकड़ों। हर पेज स्वतंत्र SEO।",
    disclaimerTitle: "अस्वीकरण",
    disclaimer:
      "घर हमेशा बढ़त रखता है। जुआ जोखिम लेता है; आप पैसे खो सकते हैं। यह साइट और टूल केवल मनोरंजन और शिक्षा के लिए। कोई रणनीति 100% गारंटी नहीं। जिम्मेदारी से जुआ खेलें। Strategy Gamba कैसीनो नहीं है।",
    downloadBtn: "हमारे टूल डाउनलोड करें",
    backHome: "← होम",
    allStrategies: "सभी रणनीति पेज देखें →",
    examplePages: "शीर्ष रणनीति पेज",
    byGame: "गेम के अनुसार",
    byCasino: "कैसीनो के अनुसार",
    strategiesListTitle: "सभी रणनीति पेज",
    strategiesListDesc: "प्रत्येक लिंक अपना SEO पेज।",
    viewAll: "सभी रणनीतियाँ →",
    noStrategy100: "केवल टूल और गाइड – कोई रणनीति 100% नहीं। जिम्मेदारी से जुआ खेलें।",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – टिप्स और टूल`,
      (c, g, v) => `${c} के लिए ${g} ${v} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – अपनी बेट सुधारें`,
      (c, g, v) => `${c} ${g} ${v} गाइड`,
      (c, g, v) => `बेस्ट ${c} ${g} ${v} – मुफ्त टूल`,
      (c, g, v) => `${c} पर ${g} ${v}`,
      (c, g, v) => `${c} ${g} ${v} – हमारे टूल इस्तेमाल करें`,
      (c, g, v) => `${c} ${g} की ${v} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – नतीजे बेहतर करें`,
      (c, g, v) => `${g} ${v} ${c} – टिप्स और गाइड`,
    ],
    descSnippets: [
      (c, g) => `मुफ्त ${c} ${g} रणनीति और टिप्स।`,
      (c, g) => `हमारे ${c} ${g} टूल से बेहतर बेट।`,
      (c, g) => `${c} ${g} गाइड – प्रदर्शन सुधार।`,
      (c, g) => `${c} पर ${g} रणनीति सीखें। कोई रणनीति 100% नहीं।`,
      (c, g) => `${c} ${g} – प्रिडिक्टर और रणनीति टिप्स।`,
      (c, g) => `हमारी गाइड से ${c} पर ${g} नतीजे सुधारें।`,
      (c, g) => `बेस्ट ${c} ${g} टिप्स। घर हमेशा बढ़त।`,
      (c, g) => `${c} पर ${g} – रणनीति और प्रिडिक्टर टूल।`,
      (c, g) => `मुफ्त ${c} ${g} रणनीति। केवल मनोरंजन।`,
      (c, g) => `${c} ${g} – स्मार्ट बेट के टिप्स।`,
    ],
    intros: [
      (c, g, v) => `यह पेज ${c} ${g} ${v} गाइड। टूल और टिप्स केवल संदर्भ। कोई रणनीति 100% नहीं। जिम्मेदारी से जुआ खेलें।`,
      (c, g, v) => `${c} ${g} ${v}: हम टिप्स और टूल देते हैं। नतीजे गारंटी नहीं। जिम्मेदारी से जुआ खेलें।`,
      (c, g, v) => `यह पेज ${c} पर ${g} ${v} के बारे में। केवल मनोरंजन और शिक्षा।`,
      (c, g, v) => `हमारी ${c} ${g} ${v} से प्रदर्शन सुधारें। घर हमेशा बढ़त। केवल टिप्स।`,
      (c, g, v) => `${c} ${g} की ${v} और टिप्स। मुफ्त टूल और गाइड। जिम्मेदारी से जुआ खेलें।`,
    ],
    bodyParagraph: "यहाँ रणनीति और टिप्स। बेट साइज़, रिस्क लेवल, टूल इस्तेमाल। कंटेंट अपडेट। ऊपर से सॉफ्टवेयर डाउनलोड करें।",
    bodyDisclaimer: "अस्वीकरण: लंबे समय में घर हमेशा जीतता है। कोई रणनीति 100% नहीं। जिम्मेदारी से जुआ खेलें।",
    sportsTitle: "स्पोर्ट्स बेटिंग और मैच प्रिडिक्शन – Strategy Gamba",
    sportsDesc: "फुटबॉल, बास्केटबॉल, टेनिस, ईस्पोर्ट्स, UFC। बेटिंग टिप्स और मैच प्रिडिक्शन। Stake, Roobet, 1xbet टूल डाउनलोड।",
    bonusTitle: "कैसीनो बोनस कोड और वेलकम बोनस – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc: "Stake बोनस कोड, Roobet वेलकम बोनस, नो डिपॉजिट बोनस। 30+ कैसीनो बोनस तुलना। हमारे टूल डाउनलोड।",
    paymentsTitle: "क्रिप्टो कैसीनो पेमेंट – बिटकॉइन, विथड्रॉल | Strategy Gamba",
    paymentsDesc: "क्रिप्टो कैसीनो जमा और निकासी: बिटकॉइन, इथीरियम, USDT। Stake, Roobet, 1xbet पेमेंट। टूल डाउनलोड।",
    guidesTitle: "कैसीनो गाइड – RTP, प्रूवेबली फेयर, क्रिप्टो | Strategy Gamba",
    guidesDesc: "RTP, प्रूवेबली फेयर, क्रिप्टो जमा, बोनस कोड। क्रिप्टो कैसीनो और हमारे रणनीति टूल।",
    sportPageTitle: (n) => `${n} बेटिंग टिप्स और मैच प्रिडिक्शन – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `${n} बेटिंग रणनीति और प्रिडिक्शन। Stake, Roobet, 1xbet और टॉप क्रिप्टो कैसीनो के लिए हमारे टूल। डाउनलोड करें – कोई रणनीति 100% नहीं।`,
    bonusCasinoTitle: (n) => `${n} बोनस कोड और वेलकम बोनस – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `${n} बोनस कोड, वेलकम बोनस, नो डिपॉजिट। क्रिप्टो कैसीनो बोनस। हमारे रणनीति टूल डाउनलोड।`,
    guidePageTitle: (n) => `${n} – क्रिप्टो कैसीनो गाइड | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} Stake, Roobet और क्रिप्टो कैसीनो के लिए। कैसीनो और हमारे रणनीति टूल।`,
  },
  ar: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake وRoobet وCrash وMines والمزيد",
    homeDesc:
      "صفحة واحدة لكل كازينو ولعبة ونوع: استراتيجية Stake mines، متنبئ Roobet crash والمئات. كل صفحة SEO مستقلة.",
    disclaimerTitle: "إخلاء المسؤولية",
    disclaimer:
      "المنزل لديه دائماً الأفضلية. المقامرة تنطوي على مخاطر؛ قد تخسر أموالاً. هذا الموقع وأدواتنا للتسلية والتعليم فقط. لا توجد استراتيجية مضمونة 100٪. قم بالمقامرة بمسؤولية. Strategy Gamba ليس كازينو.",
    downloadBtn: "تحميل أدواتنا",
    backHome: "← الرئيسية",
    allStrategies: "عرض كل صفحات الاستراتيجية →",
    examplePages: "أفضل صفحات الاستراتيجية",
    byGame: "حسب اللعبة",
    byCasino: "حسب الكازينو",
    strategiesListTitle: "كل صفحات الاستراتيجية",
    strategiesListDesc: "كل رابط صفحة SEO مستقلة.",
    viewAll: "كل الاستراتيجيات →",
    noStrategy100: "أدوات ودلائل فقط – لا توجد استراتيجية 100٪. قم بالمقامرة بمسؤولية.",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – نصائح وأدوات`,
      (c, g, v) => `${g} ${v} لـ ${c} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – تحسين رهاناتك`,
      (c, g, v) => `دليل ${c} ${g} ${v}`,
      (c, g, v) => `أفضل ${c} ${g} ${v} – أدوات مجانية`,
      (c, g, v) => `${g} ${v} على ${c}`,
      (c, g, v) => `${c} ${g} ${v} – استخدم أدواتنا`,
      (c, g, v) => `${v} لـ ${c} ${g} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – تحسين النتائج`,
      (c, g, v) => `${g} ${v} ${c} – نصائح ودليل`,
    ],
    descSnippets: [
      (c, g) => `استراتيجية ونصائح ${g} مجانية لـ ${c}.`,
      (c, g) => `أدواتنا ${c} ${g} للرهان الأفضل.`,
      (c, g) => `دليل ${g} لـ ${c} – تحسين الأداء.`,
      (c, g) => `تعلم استراتيجية ${g} على ${c}. لا توجد استراتيجية 100٪.`,
      (c, g) => `${c} ${g} – متنبئ ونصائح استراتيجية.`,
      (c, g) => `حسّن نتائجك في ${g} على ${c} بدليلنا.`,
      (c, g) => `أفضل نصائح ${g} لـ ${c}. المنزل لديه دائماً الأفضلية.`,
      (c, g) => `${g} على ${c} – استراتيجية وأدوات متنبئ.`,
      (c, g) => `استراتيجية ${c} ${g} مجانية. للتسلية فقط.`,
      (c, g) => `${c} ${g} – نصائح للرهان الذكي.`,
    ],
    intros: [
      (c, g, v) => `هذه الصفحة دليل ${c} ${g} ${v}. الأدوات والنصائح للمرجع فقط. لا توجد استراتيجية 100٪. قم بالمقامرة بمسؤولية.`,
      (c, g, v) => `${c} ${g} ${v}: نقدم نصائحاً وأدوات. النتائج غير مضمونة. قم بالمقامرة بمسؤولية.`,
      (c, g, v) => `هذه الصفحة عن ${g} ${v} على ${c}. محتوى للتسلية والتعليم.`,
      (c, g, v) => `استخدم دليلنا ${c} ${g} ${v} لأداء أفضل. المنزل لديه الأفضلية؛ نقدم نصائحاً فقط.`,
      (c, g, v) => `${v} ونصائح لـ ${g} على ${c}. أدوات ودلائل مجانية. قم بالمقامرة بمسؤولية.`,
    ],
    bodyParagraph: "هنا استراتيجيتنا ونصائحنا: حجم الرهان، مستويات المخاطر، استخدام الأدوات. محتوى محدث. حمّل برنامجنا أعلاه.",
    bodyDisclaimer: "إخلاء: المنزل يفوز دائماً على المدى الطويل. لا توجد استراتيجية 100٪. قم بالمقامرة بمسؤولية.",
    sportsTitle: "مراهنات رياضية وتنبؤ المباريات – Strategy Gamba",
    sportsDesc: "كرة قدم، كرة سلة، تنس، إسبورتس، UFC. نصائح مراهنات وتنبؤ. حمّل أدوات Stake وRoobet و1xbet.",
    bonusTitle: "أكواد بونص كازينو وبونص ترحيب – Stake، Roobet، 1xbet | Strategy Gamba",
    bonusDesc: "كود بونص Stake، بونص ترحيب Roobet، بونص بدون إيداع. مقارنة بونصات 30+ كازينو. حمّل أدواتنا.",
    paymentsTitle: "مدفوعات كازينو كريبتو – بيتكوين، سحب، إيداع | Strategy Gamba",
    paymentsDesc: "إيداعات وسحوبات كازينو كريبتو: بيتكوين، إيثريوم، USDT. طرق دفع Stake وRoobet و1xbet. حمّل برنامجنا.",
    guidesTitle: "دلائل كازينو – RTP، provably fair، كريبتو | Strategy Gamba",
    guidesDesc: "RTP، provably fair، إيداعات كريبتو، أكواد بونص. كل شيء عن كازينو كريبتو – وأدواتنا.",
    sportPageTitle: (n) => `${n} نصائح مراهنات وتنبؤ – Stake، Roobet، 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `استراتيجية مراهنات ${n} وتنبؤ. استخدم أدواتنا لـ Stake وRoobet و1xbet وأفضل كازينوهات كريبتو. حمّل البرنامج – لا توجد استراتيجية 100٪.`,
    bonusCasinoTitle: (n) => `كود بونص ${n} وبونص ترحيب – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `كود بونص ${n}، بونص ترحيب، بدون إيداع وعروض. بونصات كازينو كريبتو. حمّل أدواتنا.`,
    guidePageTitle: (n) => `${n} – دليل كازينو كريبتو | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} مُشرَح لـ Stake وRoobet وكازينوهات كريبتو. كل شيء عن الكازينو – وأدواتنا.`,
  },
  pt: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines e mais",
    homeDesc:
      "Uma página por casino, jogo e tipo: estratégia mines Stake, predictor crash Roobet e centenas mais. Cada página com SEO independente.",
    disclaimerTitle: "Aviso",
    disclaimer:
      "A casa sempre tem vantagem. O jogo envolve risco; pode perder dinheiro. Este site e nossas ferramentas são apenas para entretenimento e educação. Nenhuma estratégia é 100% garantida. Jogue com responsabilidade. Strategy Gamba não é um casino.",
    downloadBtn: "Descarregar as nossas ferramentas",
    backHome: "← Início",
    allStrategies: "Ver todas as páginas de estratégia →",
    examplePages: "Páginas de estratégia de exemplo",
    byGame: "Por jogo",
    byCasino: "Por casino",
    strategiesListTitle: "Todas as páginas de estratégia",
    strategiesListDesc: "Cada link é uma página SEO independente.",
    viewAll: "Todas as estratégias →",
    noStrategy100: "Apenas ferramentas e guias – nenhuma estratégia é 100%. Jogue com responsabilidade.",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – Dicas e ferramentas`,
      (c, g, v) => `${g} ${v} para ${c} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Como melhorar as suas apostas`,
      (c, g, v) => `Guia ${c} ${g} ${v}`,
      (c, g, v) => `Melhor ${c} ${g} ${v} – Ferramentas grátis`,
      (c, g, v) => `${g} ${v} em ${c}`,
      (c, g, v) => `${c} ${g} ${v} – Use as nossas ferramentas`,
      (c, g, v) => `${v} para ${c} ${g} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Melhorar resultados`,
      (c, g, v) => `${g} ${v} ${c} – Dicas e guia`,
    ],
    descSnippets: [
      (c, g) => `Estratégia e dicas ${g} grátis para ${c}.`,
      (c, g) => `As nossas ferramentas ${c} ${g} para apostar melhor.`,
      (c, g) => `Guia de ${g} para ${c} – melhorar desempenho.`,
      (c, g) => `Aprenda estratégia ${g} em ${c}. Nenhuma estratégia é 100%.`,
      (c, g) => `${c} ${g} – predictor e dicas de estratégia.`,
      (c, g) => `Melhore os seus resultados em ${g} em ${c} com o nosso guia.`,
      (c, g) => `Melhores dicas ${g} para ${c}. A casa tem sempre vantagem.`,
      (c, g) => `${g} em ${c} – estratégia e ferramentas predictor.`,
      (c, g) => `Estratégia ${c} ${g} grátis. Só entretenimento.`,
      (c, g) => `${c} ${g} – dicas para apostar com cabeça.`,
    ],
    intros: [
      (c, g, v) => `Esta página é o guia ${c} ${g} ${v}. Use só como referência; nenhuma estratégia é 100% e a casa tem sempre vantagem.`,
      (c, g, v) => `${c} ${g} ${v}: oferecemos dicas e ferramentas. Resultados não garantidos. Jogue com responsabilidade.`,
      (c, g, v) => `Esta página é sobre ${g} ${v} em ${c}. Conteúdo para entretenimento e educação.`,
      (c, g, v) => `Use o nosso guia ${c} ${g} ${v} para melhor desempenho. A casa tem vantagem; só damos dicas.`,
      (c, g, v) => `${v} e dicas para ${g} em ${c}. Ferramentas e guias grátis. Jogue com responsabilidade.`,
    ],
    bodyParagraph:
      "Aqui encontrará a nossa estratégia e dicas. Conteúdo atualizado. Descarregue o nosso software acima.",
    bodyDisclaimer: "Aviso: a casa sempre ganha a longo prazo. Nenhuma estratégia é 100%. Jogue com responsabilidade.",
    sportsTitle: "Apostas desportivas e previsão de jogos – Strategy Gamba",
    sportsDesc: "Futebol, basquete, ténis, esports, UFC. Dicas de apostas e previsão. Descarregue ferramentas para Stake, Roobet, 1xbet.",
    bonusTitle: "Códigos bónus casino e bónus boas-vindas – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc: "Código bónus Stake, bónus Roobet, bónus sem depósito. Compare bónus de 30+ casinos. Descarregue as nossas ferramentas.",
    paymentsTitle: "Pagamentos casino cripto – Bitcoin, levantamento, depósito | Strategy Gamba",
    paymentsDesc: "Depósitos e levantamentos casino cripto: Bitcoin, Ethereum, USDT. Métodos Stake, Roobet, 1xbet. Descarregue o nosso software.",
    guidesTitle: "Guias casino – RTP, provably fair, cripto | Strategy Gamba",
    guidesDesc: "RTP, provably fair, depósitos cripto, códigos bónus. Tudo sobre casino cripto – e as nossas ferramentas.",
    sportPageTitle: (n) => `${n} dicas de apostas e previsão – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `Estratégia de apostas ${n} e previsão. Use as nossas ferramentas para Stake, Roobet, 1xbet e melhores casinos cripto. Descarregue – nenhuma estratégia é 100%.`,
    bonusCasinoTitle: (n) => `Código bónus ${n} e bónus boas-vindas – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `Código bónus ${n}, bónus boas-vindas, sem depósito. Bónus casino cripto. Descarregue as nossas ferramentas.`,
    guidePageTitle: (n) => `${n} – guia casino cripto | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} explicado para Stake, Roobet e casinos cripto. Tudo sobre casino – e as nossas ferramentas.`,
  },
  ru: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines и другие",
    homeDesc:
      "Отдельная страница для каждого казино, игры и типа: стратегия mines Stake, предиктор crash Roobet и сотни других. Каждая страница с независимым SEO.",
    disclaimerTitle: "Отказ от ответственности",
    disclaimer:
      "Дом всегда имеет преимущество. Игра связана с риском; вы можете потерять деньги. Сайт и инструменты только для развлечения и образования. Никакая стратегия не даёт 100% гарантии. Играйте ответственно. Strategy Gamba не является казино.",
    downloadBtn: "Скачать наши инструменты",
    backHome: "← Главная",
    allStrategies: "Все страницы стратегий →",
    examplePages: "Примеры страниц стратегий",
    byGame: "По игре",
    byCasino: "По казино",
    strategiesListTitle: "Все страницы стратегий",
    strategiesListDesc: "Каждая ссылка – отдельная SEO-страница.",
    viewAll: "Все стратегии →",
    noStrategy100: "Только инструменты и руководства – никакая стратегия не 100%. Играйте ответственно.",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – Советы и инструменты`,
      (c, g, v) => `${g} ${v} для ${c} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Как улучшить ставки`,
      (c, g, v) => `Гид ${c} ${g} ${v}`,
      (c, g, v) => `Лучший ${c} ${g} ${v} – Бесплатные инструменты`,
      (c, g, v) => `${g} ${v} на ${c}`,
      (c, g, v) => `${c} ${g} ${v} – Используйте наши инструменты`,
      (c, g, v) => `${v} для ${c} ${g} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Улучшить результаты`,
      (c, g, v) => `${g} ${v} ${c} – Советы и гид`,
    ],
    descSnippets: [
      (c, g) => `Бесплатная стратегия и советы ${g} для ${c}.`,
      (c, g) => `Наши инструменты ${c} ${g} для лучших ставок.`,
      (c, g) => `Гид по ${g} для ${c} – улучшить результат.`,
      (c, g) => `Изучите стратегию ${g} на ${c}. Никакая стратегия не 100%.`,
      (c, g) => `${c} ${g} – предиктор и советы по стратегии.`,
      (c, g) => `Улучшите результаты в ${g} на ${c} с нашим гидом.`,
      (c, g) => `Лучшие советы ${g} для ${c}. Дом всегда в плюсе.`,
      (c, g) => `${g} на ${c} – стратегия и инструменты предиктора.`,
      (c, g) => `Бесплатная стратегия ${c} ${g}. Только развлечение.`,
      (c, g) => `${c} ${g} – советы для умных ставок.`,
    ],
    intros: [
      (c, g, v) => `Эта страница – гид по ${c} ${g} ${v}. Инструменты и советы только для справки. Никакая стратегия не 100%. Играйте ответственно.`,
      (c, g, v) => `${c} ${g} ${v}: мы даём советы и инструменты. Результаты не гарантированы. Играйте ответственно.`,
      (c, g, v) => `Эта страница о ${g} ${v} на ${c}. Контент для развлечения и образования.`,
      (c, g, v) => `Используйте наш гид ${c} ${g} ${v} для лучшего результата. Дом в плюсе; мы только даём советы.`,
      (c, g, v) => `${v} и советы по ${g} на ${c}. Бесплатные инструменты и гиды. Играйте ответственно.`,
    ],
    bodyParagraph: "Здесь наша стратегия и советы. Контент обновляется. Скачайте наше ПО выше.",
    bodyDisclaimer: "Дом всегда выигрывает в долгосрочной перспективе. Никакая стратегия не 100%. Играйте ответственно.",
    sportsTitle: "Спортивные ставки и прогноз матчей – Strategy Gamba",
    sportsDesc: "Футбол, баскетбол, теннис, киберспорт, UFC. Советы по ставкам и прогнозы. Скачайте инструменты для Stake, Roobet, 1xbet.",
    bonusTitle: "Бонус-коды казино и приветственный бонус – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc: "Бонус-код Stake, приветственный бонус Roobet, бонус без депозита. Сравните бонусы 30+ казино. Скачайте наши инструменты.",
    paymentsTitle: "Платежи крипто-казино – Биткоин, вывод, депозит | Strategy Gamba",
    paymentsDesc: "Депозиты и выводы крипто-казино: Биткоин, Эфириум, USDT. Способы оплаты Stake, Roobet, 1xbet. Скачайте наше ПО.",
    guidesTitle: "Гиды по казино – RTP, provably fair, крипто | Strategy Gamba",
    guidesDesc: "RTP, provably fair, крипто-депозиты, бонус-коды. Всё о крипто-казино – и наши инструменты.",
    sportPageTitle: (n) => `${n} советы по ставкам и прогноз – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `Стратегия ставок ${n} и прогноз. Используйте наши инструменты для Stake, Roobet, 1xbet и лучших крипто-казино. Скачайте – никакая стратегия не 100%.`,
    bonusCasinoTitle: (n) => `Бонус-код ${n} и приветственный бонус – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `Бонус-код ${n}, приветственный бонус, без депозита. Бонусы крипто-казино. Скачайте наши инструменты.`,
    guidePageTitle: (n) => `${n} – гид по крипто-казино | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} для Stake, Roobet и крипто-казино. Всё о казино – и наши инструменты.`,
  },
  ja: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake、Roobet、Crash、Mines など",
    homeDesc:
      "カジノ・ゲーム・タイプごとに専用ページ。Stake マインズ戦略、Roobet クラッシュ予測など。各ページ独立SEO対応。",
    disclaimerTitle: "免責事項",
    disclaimer:
      "胴元は常に優位です。ギャンブルにはリスクがあり、金を失う可能性があります。当サイトとツールは娯楽・教育目的のみ。いかなる戦略も100%保証されません。責任あるギャンブルを。Strategy Gambaはカジノではありません。",
    downloadBtn: "ツールをダウンロード",
    backHome: "← ホーム",
    allStrategies: "全戦略ページを見る →",
    examplePages: "戦略ページ例",
    byGame: "ゲーム別",
    byCasino: "カジノ別",
    strategiesListTitle: "全戦略ページ",
    strategiesListDesc: "各リンクは独立したSEOページです。",
    viewAll: "全戦略 →",
    noStrategy100: "ツールとガイドのみ。いかなる戦略も100%ではありません。責任あるギャンブルを。",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – ヒントとツール`,
      (c, g, v) => `${c}の${g} ${v} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – ベット改善のコツ`,
      (c, g, v) => `${c} ${g} ${v} ガイド – ベスト${v}のヒント`,
      (c, g, v) => `ベスト${c} ${g} ${v} – 無料ツール`,
      (c, g, v) => `${c}の${g} ${v} – 戦略とヒント`,
      (c, g, v) => `${c} ${g} ${v} – 当社のツールを使う`,
      (c, g, v) => `${c} ${g}の${v} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – 結果を改善`,
      (c, g, v) => `${g} ${v} ${c} – ヒントとガイド`,
    ],
    descSnippets: [
      (c, g) => `無料の${c} ${g}戦略とヒント。`,
      (c, g) => `当社の${c} ${g}ツールでより良いベットを。`,
      (c, g) => `${c} ${g}ガイド – パフォーマンス向上。`,
      (c, g) => `${c}の${g}戦略を学ぶ。いかなる戦略も100%ではありません。`,
      (c, g) => `${c} ${g} – 予測と戦略のヒント。`,
      (c, g) => `当社のガイドで${c}の${g}結果を改善。`,
      (c, g) => `ベスト${c} ${g}のヒント。胴元は常に優位。`,
      (c, g) => `${c}の${g} – 戦略と予測ツール。`,
      (c, g) => `無料${c} ${g}戦略。娯楽目的のみ。`,
      (c, g) => `${c} ${g} – 賢いベットのヒント。`,
    ],
    intros: [
      (c, g, v) => `本ページは${c} ${g} ${v}のガイドです。ツールとヒントは参考用。いかなる戦略も100%ではなく、胴元は常に優位です。責任あるギャンブルを。`,
      (c, g, v) => `${c} ${g} ${v}：ヒントとツールを提供。結果は保証されません。責任あるギャンブルを。`,
      (c, g, v) => `本ページは${c}の${g} ${v}について。娯楽・教育目的のコンテンツです。`,
      (c, g, v) => `当社の${c} ${g} ${v}でパフォーマンス向上。胴元は常に優位。ヒントのみ提供。`,
      (c, g, v) => `${c} ${g}の${v}とヒント。無料ツールとガイド。責任あるギャンブルを。`,
    ],
    bodyParagraph: "ここで戦略とヒントを提供。ベットサイズ、リスクレベル、ツールの使い方。コンテンツは随時更新。上からソフトをダウンロードできます。",
    bodyDisclaimer: "免責：長期的には胴元が常に勝利。いかなる戦略も100%ではありません。責任あるギャンブルを。",
    sportsTitle: "スポーツベッティングと試合予測 – Strategy Gamba",
    sportsDesc: "サッカー、バスケ、テニス、eスポーツ、UFCなど。ベッティングのヒントと試合予測。Stake、Roobet、1xbet用ツールをダウンロード。",
    bonusTitle: "カジノボーナスコード・ウェルカムボーナス – Stake、Roobet、1xbet | Strategy Gamba",
    bonusDesc: "Stakeボーナスコード、Roobetウェルカムボーナス、ノーデポボーナス、暗号カジノプロモ。Stake、Roobet、Rollbit、BC.Gameなど30以上のカジノボーナス比較。ツールをダウンロード。",
    paymentsTitle: "暗号カジノ決済 – ビットコイン・出金・入金 | Strategy Gamba",
    paymentsDesc: "暗号カジノの入出金：ビットコイン、イーサリアム、USDT。Stake、Roobet、1xbetの支払い方法。迅速出金と戦略ツール – ソフトをダウンロード。",
    guidesTitle: "カジノガイド – RTP・プロバブルフェア・暗号・責任あるギャンブル | Strategy Gamba",
    guidesDesc: "RTP、プロバブルフェア、暗号入金、ボーナスコード、責任あるギャンブル、モバイル・ライブカジノ。暗号カジノのすべて – と当社の戦略ツール。",
    sportPageTitle: (n) => `${n}ベッティングのヒントと試合予測 – Stake、Roobet、1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `${n}ベッティング戦略と試合予測。当社ツールでStake、Roobet、1xbetおよび主要暗号カジノをサポート。ソフトをダウンロードして全機能を – いかなる戦略も100%ではありません。`,
    bonusCasinoTitle: (n) => `${n}ボーナスコード・ウェルカムボーナス – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `${n}ボーナスコード、ウェルカムボーナス、ノーデポ・プロモ。暗号カジノボーナスと使い方。当社の戦略ツールをダウンロード。`,
    guidePageTitle: (n) => `${n} – 暗号カジノガイド | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n}解説：Stake、Roobet、暗号カジノ向け。カジノ関連のすべて – と当社の戦略・予測ツール。`,
  },
  de: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines und mehr",
    homeDesc:
      "Eine Seite pro Casino, Spiel und Typ: Stake Mines Strategie, Roobet Crash Predictor und hunderte mehr. Jede Seite eigenständig SEO-optimiert.",
    disclaimerTitle: "Haftungsausschluss",
    disclaimer:
      "Die Bank hat immer einen Vorteil. Glücksspiel birgt Risiken; Sie können Geld verlieren. Diese Seite und unsere Tools dienen nur der Unterhaltung und Bildung. Keine Strategie ist 100% garantiert. Spielen Sie verantwortungsvoll. Strategy Gamba ist kein Casino.",
    downloadBtn: "Unsere Tools herunterladen",
    backHome: "← Start",
    allStrategies: "Alle Strategieseiten anzeigen →",
    examplePages: "Beispiel-Strategieseiten",
    byGame: "Nach Spiel",
    byCasino: "Nach Casino",
    strategiesListTitle: "Alle Strategieseiten",
    strategiesListDesc: "Jeder Link ist eine eigenständige SEO-Seite.",
    viewAll: "Alle Strategien →",
    noStrategy100: "Nur Tools und Anleitungen – keine Strategie ist 100%. Spielen Sie verantwortungsvoll.",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – Tipps und Tools`,
      (c, g, v) => `${g} ${v} für ${c} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Wetten verbessern`,
      (c, g, v) => `${c} ${g} ${v} Guide`,
      (c, g, v) => `Beste ${c} ${g} ${v} – Kostenlose Tools`,
      (c, g, v) => `${g} ${v} auf ${c}`,
      (c, g, v) => `${c} ${g} ${v} – Unsere Tools nutzen`,
      (c, g, v) => `${v} für ${c} ${g} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Ergebnisse verbessern`,
      (c, g, v) => `${g} ${v} ${c} – Tipps und Guide`,
    ],
    descSnippets: [
      (c, g) => `Kostenlose ${c} ${g} Strategie und Tipps.`,
      (c, g) => `Unsere ${c} ${g} Tools für bessere Wetten.`,
      (c, g) => `${c} ${g} Guide – bessere Leistung.`,
      (c, g) => `${g} Strategie auf ${c} lernen. Keine Strategie ist 100%.`,
      (c, g) => `${c} ${g} – Predictor und Strategie-Tipps.`,
      (c, g) => `Mit unserem Guide bessere ${g}-Ergebnisse auf ${c}.`,
      (c, g) => `Beste ${g} Tipps für ${c}. Die Bank hat immer Vorteil.`,
      (c, g) => `${g} auf ${c} – Strategie und Predictor-Tools.`,
      (c, g) => `Kostenlose ${c} ${g} Strategie. Nur Unterhaltung.`,
      (c, g) => `${c} ${g} – Tipps für kluge Wetten.`,
    ],
    intros: [
      (c, g, v) => `Diese Seite ist der Guide zu ${c} ${g} ${v}. Tools und Tipps nur zur Referenz. Keine Strategie ist 100%. Spielen Sie verantwortungsvoll.`,
      (c, g, v) => `${c} ${g} ${v}: wir bieten Tipps und Tools. Ergebnisse nicht garantiert. Spielen Sie verantwortungsvoll.`,
      (c, g, v) => `Diese Seite handelt von ${g} ${v} auf ${c}. Inhalt nur zur Unterhaltung und Bildung.`,
      (c, g, v) => `Nutzen Sie unseren ${c} ${g} ${v} Guide für bessere Leistung. Die Bank hat Vorteil; wir geben nur Tipps.`,
      (c, g, v) => `${v} und Tipps für ${g} auf ${c}. Kostenlose Tools und Guides. Spielen Sie verantwortungsvoll.`,
    ],
    bodyParagraph: "Hier finden Sie unsere Strategie und Tipps. Inhalte werden aktualisiert. Laden Sie unsere Software oben herunter.",
    bodyDisclaimer: "Die Bank gewinnt langfristig immer. Keine Strategie ist 100%. Spielen Sie verantwortungsvoll.",
    sportsTitle: "Sportwetten & Spielvorhersage – Strategy Gamba",
    sportsDesc: "Fußball, Basketball, Tennis, eSport, UFC und mehr. Wett-Tipps und Spielvorhersage. Tools für Stake, Roobet, 1xbet herunterladen.",
    bonusTitle: "Casino-Bonuscodes & Willkommensbonus – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc:
      "Stake Bonuscode, Roobet Willkommensbonus, No-Deposit-Bonus, Krypto-Casino-Aktionen. Vergleichen Sie Boni für Stake, Roobet, Rollbit, BC.Game und 30+ Casinos. Tools herunterladen.",
    paymentsTitle: "Krypto-Casino-Zahlungen – Bitcoin, Auszahlung, Einzahlung | Strategy Gamba",
    paymentsDesc:
      "Krypto-Casino Ein- und Auszahlungen: Bitcoin, Ethereum, USDT. Zahlungsmethoden Stake, Roobet, 1xbet. Schnelle Auszahlungen und Strategie-Tools – Software herunterladen.",
    guidesTitle: "Casino-Guides – RTP, provably fair, Krypto, verantwortungsvolles Spielen | Strategy Gamba",
    guidesDesc:
      "RTP, provably fair, Krypto-Einzahlungen, Bonuscodes, verantwortungsvolles Spielen, Mobile- und Live-Casino. Alles zu Krypto-Casino – und unsere Strategie-Tools.",
    sportPageTitle: (n) =>
      `${n} Wett-Tipps & Spielvorhersage – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `${n} Wettstrategie und Spielvorhersage. Nutzen Sie unsere Tools für Stake, Roobet, 1xbet und Top-Krypto-Casinos. Software herunterladen – keine Strategie ist 100%.`,
    bonusCasinoTitle: (n) => `${n} Bonuscode & Willkommensbonus – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `${n} Bonuscode, Willkommensbonus, No-Deposit und Promos. Krypto-Casino-Boni und Nutzung. Strategie-Tools herunterladen.`,
    guidePageTitle: (n) => `${n} – Krypto-Casino-Guide | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} erklärt für Stake, Roobet und Krypto-Casinos. Alles zum Casino – und unsere Strategie- und Prädiktor-Tools.`,
  },
  fr: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines et plus",
    homeDesc:
      "Une page par casino, jeu et type : stratégie mines Stake, prédicteur crash Roobet et des centaines d'autres. Chaque page SEO indépendante.",
    disclaimerTitle: "Mentions légales",
    disclaimer:
      "La maison a toujours l'avantage. Le jeu comporte des risques ; vous pouvez perdre de l'argent. Ce site et nos outils sont à but informatif et divertissant uniquement. Aucune stratégie n'est garantie à 100 %. Jouez de manière responsable. Strategy Gamba n'est pas un casino.",
    downloadBtn: "Télécharger nos outils",
    backHome: "← Accueil",
    allStrategies: "Voir toutes les pages de stratégie →",
    examplePages: "Exemples de pages de stratégie",
    byGame: "Par jeu",
    byCasino: "Par casino",
    strategiesListTitle: "Toutes les pages de stratégie",
    strategiesListDesc: "Chaque lien est une page SEO indépendante.",
    viewAll: "Toutes les stratégies →",
    noStrategy100: "Outils et guides uniquement – aucune stratégie n'est 100 %. Jouez de manière responsable.",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – Conseils et outils`,
      (c, g, v) => `${g} ${v} pour ${c} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Améliorer vos paris`,
      (c, g, v) => `Guide ${c} ${g} ${v}`,
      (c, g, v) => `Meilleur ${c} ${g} ${v} – Outils gratuits`,
      (c, g, v) => `${g} ${v} sur ${c}`,
      (c, g, v) => `${c} ${g} ${v} – Utilisez nos outils`,
      (c, g, v) => `${v} pour ${c} ${g} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Améliorer les résultats`,
      (c, g, v) => `${g} ${v} ${c} – Conseils et guide`,
    ],
    descSnippets: [
      (c, g) => `Stratégie et conseils ${g} gratuits pour ${c}.`,
      (c, g) => `Nos outils ${c} ${g} pour mieux parier.`,
      (c, g) => `Guide ${g} pour ${c} – améliorer les performances.`,
      (c, g) => `Apprenez la stratégie ${g} sur ${c}. Aucune stratégie n'est 100 %.`,
      (c, g) => `${c} ${g} – prédicteur et conseils stratégie.`,
      (c, g) => `Améliorez vos résultats en ${g} sur ${c} avec notre guide.`,
      (c, g) => `Meilleurs conseils ${g} pour ${c}. La maison a toujours l'avantage.`,
      (c, g) => `${g} sur ${c} – stratégie et outils prédicteur.`,
      (c, g) => `Stratégie ${c} ${g} gratuite. Divertissement uniquement.`,
      (c, g) => `${c} ${g} – conseils pour parier malin.`,
    ],
    intros: [
      (c, g, v) => `Cette page est le guide ${c} ${g} ${v}. Outils et conseils à titre indicatif uniquement. Aucune stratégie n'est 100 %. Jouez de manière responsable.`,
      (c, g, v) => `${c} ${g} ${v} : nous offrons conseils et outils. Résultats non garantis. Jouez de manière responsable.`,
      (c, g, v) => `Cette page traite de ${g} ${v} sur ${c}. Contenu à but informatif et divertissant.`,
      (c, g, v) => `Utilisez notre guide ${c} ${g} ${v} pour de meilleures performances. La maison a l'avantage ; nous ne donnons que des conseils.`,
      (c, g, v) => `${v} et conseils pour ${g} sur ${c}. Outils et guides gratuits. Jouez de manière responsable.`,
    ],
    bodyParagraph: "Vous trouverez ici notre stratégie et nos conseils. Contenu mis à jour. Téléchargez notre logiciel ci-dessus.",
    bodyDisclaimer: "La maison gagne toujours à long terme. Aucune stratégie n'est 100 %. Jouez de manière responsable.",
    sportsTitle: "Paris sportifs et pronostics – Strategy Gamba",
    sportsDesc: "Football, basket, tennis, esport, UFC et plus. Conseils de paris et pronostics. Téléchargez nos outils pour Stake, Roobet, 1xbet.",
    bonusTitle: "Codes bonus casino et bonus bienvenue – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc:
      "Code bonus Stake, bonus bienvenue Roobet, bonus sans dépôt, promos casino crypto. Comparez les bonus Stake, Roobet, Rollbit, BC.Game et 30+ casinos. Téléchargez nos outils.",
    paymentsTitle: "Paiements casino crypto – Bitcoin, retrait, dépôt | Strategy Gamba",
    paymentsDesc:
      "Dépôts et retraits casino crypto : Bitcoin, Ethereum, USDT. Moyens de paiement Stake, Roobet, 1xbet. Retraits rapides et outils stratégie – téléchargez notre logiciel.",
    guidesTitle: "Guides casino – RTP, provably fair, crypto, jeu responsable | Strategy Gamba",
    guidesDesc:
      "RTP, provably fair, dépôts crypto, codes bonus, jeu responsable, casino mobile et live. Tout sur le casino crypto – et nos outils de stratégie.",
    sportPageTitle: (n) =>
      `${n} conseils de paris et pronostics – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `Stratégie paris ${n} et pronostics. Utilisez nos outils pour Stake, Roobet, 1xbet et meilleurs casinos crypto. Téléchargez notre logiciel – aucune stratégie n'est 100 %.`,
    bonusCasinoTitle: (n) => `Code bonus ${n} et bonus bienvenue – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `Code bonus ${n}, bonus bienvenue, sans dépôt et promos. Bonus casino crypto et comment les utiliser. Téléchargez nos outils.`,
    guidePageTitle: (n) => `${n} – guide casino crypto | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} expliqué pour Stake, Roobet et casinos crypto. Tout sur le casino – et nos outils de stratégie et prédiction.`,
  },
  ko: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines 등",
    homeDesc:
      "카지노·게임·유형별 전용 페이지. Stake 마인즈 전략, Roobet 크래시 예측 등. 각 페이지 독립 SEO.",
    disclaimerTitle: "면책 조항",
    disclaimer:
      "항상庄家가 유리합니다. 도박은 위험이 있으며 돈을 잃을 수 있습니다. 본 사이트와 도구는 오락 및 교육 목적입니다. 어떤 전략도 100% 보장되지 않습니다. 책임감 있게 도박하세요. Strategy Gamba는 카지노가 아닙니다.",
    downloadBtn: "도구 다운로드",
    backHome: "← 홈",
    allStrategies: "모든 전략 페이지 보기 →",
    examplePages: "전략 페이지 예시",
    byGame: "게임별",
    byCasino: "카지노별",
    strategiesListTitle: "모든 전략 페이지",
    strategiesListDesc: "각 링크는 독립 SEO 페이지입니다.",
    viewAll: "모든 전략 →",
    noStrategy100: "도구와 가이드만 제공. 어떤 전략도 100%가 아닙니다. 책임감 있게 도박하세요.",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – 팁과 도구`,
      (c, g, v) => `${c} ${g} ${v} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – 베팅 개선`,
      (c, g, v) => `${c} ${g} ${v} 가이드`,
      (c, g, v) => `최고 ${c} ${g} ${v} – 무료 도구`,
      (c, g, v) => `${c}의 ${g} ${v}`,
      (c, g, v) => `${c} ${g} ${v} – 당사 도구 사용`,
      (c, g, v) => `${c} ${g} ${v} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – 결과 개선`,
      (c, g, v) => `${g} ${v} ${c} – 팁과 가이드`,
    ],
    descSnippets: [
      (c, g) => `무료 ${c} ${g} 전략과 팁.`,
      (c, g) => `당사 ${c} ${g} 도구로 더 나은 베팅.`,
      (c, g) => `${c} ${g} 가이드 – 성과 개선.`,
      (c, g) => `${c}의 ${g} 전략 학습. 어떤 전략도 100% 아님.`,
      (c, g) => `${c} ${g} – 예측 및 전략 팁.`,
      (c, g) => `당사 가이드로 ${c}의 ${g} 결과 개선.`,
      (c, g) => `최고 ${c} ${g} 팁. 庄家가 항상 유리.`,
      (c, g) => `${c}의 ${g} – 전략 및 예측 도구.`,
      (c, g) => `무료 ${c} ${g} 전략. 오락 목적만.`,
      (c, g) => `${c} ${g} – 스마트 베팅 팁.`,
    ],
    intros: [
      (c, g, v) => `본 페이지는 ${c} ${g} ${v} 가이드입니다. 도구와 팁은 참고용. 어떤 전략도 100%가 아니며 庄家가 유리합니다. 책임감 있게 도박하세요.`,
      (c, g, v) => `${c} ${g} ${v}: 팁과 도구 제공. 결과 보장 없음. 책임감 있게 도박하세요.`,
      (c, g, v) => `본 페이지는 ${c}의 ${g} ${v} 소개. 오락·교육용 콘텐츠.`,
      (c, g, v) => `당사 ${c} ${g} ${v}로 성과 개선. 庄家가 유리. 팁만 제공. 책임감 있게 도박하세요.`,
      (c, g, v) => `${c} ${g} ${v}와 팁. 무료 도구와 가이드. 책임감 있게 도박하세요.`,
    ],
    bodyParagraph: "여기에서 전략과 팁을 제공합니다. 콘텐츠는 정기적으로 업데이트됩니다. 위 버튼에서 소프트웨어를 다운로드하세요.",
    bodyDisclaimer: "장기적으로庄家가 항상 이깁니다. 어떤 전략도 100%가 아닙니다. 책임감 있게 도박하세요.",
    sportsTitle: "스포츠 베팅 및 경기 예측 – Strategy Gamba",
    sportsDesc: "축구, 농구, 테니스, e스포츠, UFC. 베팅 팁과 경기 예측. Stake, Roobet, 1xbet 도구 다운로드.",
    bonusTitle: "카지노 보너스 코드·웰컴 보너스 – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc: "Stake 보너스 코드, Roobet 웰컴 보너스, 노디포 보너스. 30+ 카지노 보너스 비교. 당사 도구 다운로드.",
    paymentsTitle: "암호화폐 카지노 결제 – 비트코인·출금·입금 | Strategy Gamba",
    paymentsDesc: "암호화폐 카지노 입출금: 비트코인, 이더리움, USDT. Stake, Roobet, 1xbet 결제. 당사 소프트웨어 다운로드.",
    guidesTitle: "카지노 가이드 – RTP·프로버블리 페어·암호화폐 | Strategy Gamba",
    guidesDesc: "RTP, 프로버블리 페어, 암호화폐 입금, 보너스 코드. 암호화폐 카지노 및 당사 전략 도구.",
    sportPageTitle: (n) => `${n} 베팅 팁 및 경기 예측 – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `${n} 베팅 전략 및 예측. Stake, Roobet, 1xbet 및 주요 암호화폐 카지노용 당사 도구. 다운로드 – 어떤 전략도 100% 아님.`,
    bonusCasinoTitle: (n) => `${n} 보너스 코드·웰컴 보너스 – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `${n} 보너스 코드, 웰컴 보너스, 노디포. 암호화폐 카지노 보너스. 당사 전략 도구 다운로드.`,
    guidePageTitle: (n) => `${n} – 암호화폐 카지노 가이드 | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} Stake, Roobet, 암호화폐 카지노용 설명. 카지노 및 당사 전략·예측 도구.`,
  },
  tr: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines ve daha fazlası",
    homeDesc:
      "Her casino, oyun ve tür için bir sayfa: Stake mines stratejisi, Roobet crash tahminci ve yüzlercesi. Her sayfa bağımsız SEO.",
    disclaimerTitle: "Feragatname",
    disclaimer:
      "Ev her zaman avantajlıdır. Kumar risk taşır; para kaybedebilirsiniz. Bu site ve araçlarımız yalnızca eğlence ve eğitim içindir. Hiçbir strateji %100 garanti değildir. Sorumlu oynayın. Strategy Gamba casino değildir.",
    downloadBtn: "Araçlarımızı indir",
    backHome: "← Ana sayfa",
    allStrategies: "Tüm strateji sayfalarını görüntüle →",
    examplePages: "Örnek strateji sayfaları",
    byGame: "Oyuna göre",
    byCasino: "Casinoya göre",
    strategiesListTitle: "Tüm strateji sayfaları",
    strategiesListDesc: "Her bağlantı bağımsız bir SEO sayfasıdır.",
    viewAll: "Tüm stratejiler →",
    noStrategy100: "Yalnızca araçlar ve rehberler – hiçbir strateji %100 değildir. Sorumlu oynayın.",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – İpuçları ve araçlar`,
      (c, g, v) => `${c} için ${g} ${v} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Bahislerinizi iyileştirin`,
      (c, g, v) => `${c} ${g} ${v} rehberi`,
      (c, g, v) => `En iyi ${c} ${g} ${v} – Ücretsiz araçlar`,
      (c, g, v) => `${c}'da ${g} ${v}`,
      (c, g, v) => `${c} ${g} ${v} – Araçlarımızı kullanın`,
      (c, g, v) => `${c} ${g} için ${v} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Sonuçları iyileştirin`,
      (c, g, v) => `${g} ${v} ${c} – İpuçları ve rehber`,
    ],
    descSnippets: [
      (c, g) => `Ücretsiz ${c} ${g} stratejisi ve ipuçları.`,
      (c, g) => `Daha iyi bahis için ${c} ${g} araçlarımız.`,
      (c, g) => `${c} ${g} rehberi – performansı artırın.`,
      (c, g) => `${c}'da ${g} stratejisi öğrenin. Hiçbir strateji %100 değil.`,
      (c, g) => `${c} ${g} – tahminci ve strateji ipuçları.`,
      (c, g) => `Rehberimizle ${c}'da ${g} sonuçlarını iyileştirin.`,
      (c, g) => `En iyi ${c} ${g} ipuçları. Ev her zaman avantajlı.`,
      (c, g) => `${c}'da ${g} – strateji ve tahminci araçları.`,
      (c, g) => `Ücretsiz ${c} ${g} stratejisi. Sadece eğlence.`,
      (c, g) => `${c} ${g} – akıllı bahis ipuçları.`,
    ],
    intros: [
      (c, g, v) => `Bu sayfa ${c} ${g} ${v} rehberidir. Araçlar ve ipuçları sadece referans. Hiçbir strateji %100 değil. Sorumlu oynayın.`,
      (c, g, v) => `${c} ${g} ${v}: ipuçları ve araçlar sunuyoruz. Sonuçlar garanti değil. Sorumlu oynayın.`,
      (c, g, v) => `Bu sayfa ${c}'da ${g} ${v} hakkında. Eğlence ve eğitim içeriği.`,
      (c, g, v) => `Daha iyi performans için ${c} ${g} ${v} rehberimizi kullanın. Ev avantajlı; sadece ipucu veriyoruz.`,
      (c, g, v) => `${c} ${g} ${v} ve ipuçları. Ücretsiz araçlar ve rehberler. Sorumlu oynayın.`,
    ],
    bodyParagraph: "Burada stratejimiz ve ipuçlarımız. İçerik güncellenir. Yazılımımızı yukarıdan indirin.",
    bodyDisclaimer: "Uzun vadede ev her zaman kazanır. Hiçbir strateji %100 değil. Sorumlu oynayın.",
    sportsTitle: "Spor bahisleri ve maç tahmini – Strategy Gamba",
    sportsDesc: "Futbol, basketbol, tenis, e-spor, UFC. Bahis ipuçları ve tahmin. Stake, Roobet, 1xbet araçlarını indirin.",
    bonusTitle: "Casino bonus kodları ve hoş geldin bonusu – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc: "Stake bonus kodu, Roobet hoş geldin bonusu, yatırımsız bonus. 30+ casino bonusu karşılaştırın. Araçlarımızı indirin.",
    paymentsTitle: "Kripto casino ödemeleri – Bitcoin, çekim, yatırım | Strategy Gamba",
    paymentsDesc: "Kripto casino yatırım ve çekim: Bitcoin, Ethereum, USDT. Stake, Roobet, 1xbet ödeme. Yazılımımızı indirin.",
    guidesTitle: "Casino rehberleri – RTP, provably fair, kripto | Strategy Gamba",
    guidesDesc: "RTP, provably fair, kripto yatırım, bonus kodları. Kripto casino ve araçlarımız.",
    sportPageTitle: (n) => `${n} bahis ipuçları ve tahmin – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `${n} bahis stratejisi ve tahmin. Stake, Roobet, 1xbet ve en iyi kripto casinolar için araçlarımız. İndirin – hiçbir strateji %100 değil.`,
    bonusCasinoTitle: (n) => `${n} bonus kodu ve hoş geldin bonusu – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `${n} bonus kodu, hoş geldin bonusu, yatırımsız. Kripto casino bonusları. Araçlarımızı indirin.`,
    guidePageTitle: (n) => `${n} – kripto casino rehberi | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} Stake, Roobet ve kripto casinolar için. Casino ve araçlarımız hakkında her şey.`,
  },
  vi: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines và hơn thế",
    homeDesc:
      "Một trang cho mỗi casino, game và loại: chiến lược Stake mines, dự đoán Roobet crash và hàng trăm trang khác. Mỗi trang SEO độc lập.",
    disclaimerTitle: "Tuyên bố từ chối",
    disclaimer:
      "Nhà cái luôn có lợi thế. Cờ bạc có rủi ro; bạn có thể mất tiền. Trang này và công cụ của chúng tôi chỉ để giải trí và giáo dục. Không chiến lược nào đảm bảo 100%. Chơi có trách nhiệm. Strategy Gamba không phải casino.",
    downloadBtn: "Tải công cụ của chúng tôi",
    backHome: "← Trang chủ",
    allStrategies: "Xem tất cả trang chiến lược →",
    examplePages: "Trang chiến lược mẫu",
    byGame: "Theo game",
    byCasino: "Theo casino",
    strategiesListTitle: "Tất cả trang chiến lược",
    strategiesListDesc: "Mỗi liên kết là một trang SEO độc lập.",
    viewAll: "Tất cả chiến lược →",
    noStrategy100: "Chỉ công cụ và hướng dẫn – không chiến lược nào 100%. Chơi có trách nhiệm.",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – Mẹo và công cụ`,
      (c, g, v) => `${g} ${v} cho ${c} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Cải thiện cược của bạn`,
      (c, g, v) => `Hướng dẫn ${c} ${g} ${v}`,
      (c, g, v) => `Tốt nhất ${c} ${g} ${v} – Công cụ miễn phí`,
      (c, g, v) => `${g} ${v} trên ${c}`,
      (c, g, v) => `${c} ${g} ${v} – Dùng công cụ của chúng tôi`,
      (c, g, v) => `${v} cho ${c} ${g} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Cải thiện kết quả`,
      (c, g, v) => `${g} ${v} ${c} – Mẹo và hướng dẫn`,
    ],
    descSnippets: [
      (c, g) => `Chiến lược và mẹo ${g} miễn phí cho ${c}.`,
      (c, g) => `Công cụ ${c} ${g} của chúng tôi để cược tốt hơn.`,
      (c, g) => `Hướng dẫn ${g} cho ${c} – cải thiện hiệu suất.`,
      (c, g) => `Học chiến lược ${g} trên ${c}. Không chiến lược nào 100%.`,
      (c, g) => `${c} ${g} – dự đoán và mẹo chiến lược.`,
      (c, g) => `Cải thiện kết quả ${g} trên ${c} với hướng dẫn của chúng tôi.`,
      (c, g) => `Mẹo tốt nhất ${g} cho ${c}. Nhà cái luôn có lợi thế.`,
      (c, g) => `${g} trên ${c} – chiến lược và công cụ dự đoán.`,
      (c, g) => `Chiến lược ${c} ${g} miễn phí. Chỉ giải trí.`,
      (c, g) => `${c} ${g} – mẹo cược thông minh.`,
    ],
    intros: [
      (c, g, v) => `Trang này là hướng dẫn ${c} ${g} ${v}. Công cụ và mẹo chỉ để tham khảo. Không chiến lược nào 100%. Chơi có trách nhiệm.`,
      (c, g, v) => `${c} ${g} ${v}: chúng tôi cung cấp mẹo và công cụ. Kết quả không đảm bảo. Chơi có trách nhiệm.`,
      (c, g, v) => `Trang này về ${g} ${v} trên ${c}. Nội dung giải trí và giáo dục.`,
      (c, g, v) => `Dùng hướng dẫn ${c} ${g} ${v} của chúng tôi để hiệu suất tốt hơn. Nhà cái có lợi thế; chúng tôi chỉ đưa mẹo.`,
      (c, g, v) => `${v} và mẹo cho ${g} trên ${c}. Công cụ và hướng dẫn miễn phí. Chơi có trách nhiệm.`,
    ],
    bodyParagraph: "Tại đây có chiến lược và mẹo của chúng tôi. Nội dung cập nhật. Tải phần mềm ở trên.",
    bodyDisclaimer: "Nhà cái luôn thắng về lâu dài. Không chiến lược nào 100%. Chơi có trách nhiệm.",
    sportsTitle: "Cá cược thể thao và dự đoán trận – Strategy Gamba",
    sportsDesc: "Bóng đá, bóng rổ, quần vợt, esports, UFC. Mẹo cá cược và dự đoán. Tải công cụ Stake, Roobet, 1xbet.",
    bonusTitle: "Mã thưởng casino và thưởng chào mừng – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc: "Mã thưởng Stake, thưởng Roobet, thưởng không nạp. So sánh thưởng 30+ casino. Tải công cụ của chúng tôi.",
    paymentsTitle: "Thanh toán casino crypto – Bitcoin, rút, nạp | Strategy Gamba",
    paymentsDesc: "Nạp rút casino crypto: Bitcoin, Ethereum, USDT. Thanh toán Stake, Roobet, 1xbet. Tải phần mềm của chúng tôi.",
    guidesTitle: "Hướng dẫn casino – RTP, provably fair, crypto | Strategy Gamba",
    guidesDesc: "RTP, provably fair, nạp crypto, mã thưởng. Mọi thứ về casino crypto – và công cụ của chúng tôi.",
    sportPageTitle: (n) => `Mẹo cá cược ${n} và dự đoán – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `Chiến lược cá cược ${n} và dự đoán. Dùng công cụ của chúng tôi cho Stake, Roobet, 1xbet và casino crypto hàng đầu. Tải – không chiến lược nào 100%.`,
    bonusCasinoTitle: (n) => `Mã thưởng ${n} và thưởng chào mừng – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `Mã thưởng ${n}, thưởng chào mừng, không nạp. Thưởng casino crypto. Tải công cụ của chúng tôi.`,
    guidePageTitle: (n) => `${n} – Hướng dẫn casino crypto | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} cho Stake, Roobet và casino crypto. Mọi thứ về casino – và công cụ của chúng tôi.`,
  },
  it: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines e altro",
    homeDesc:
      "Una pagina per casino, gioco e tipo: strategia mines Stake, predictor crash Roobet e centinaia di altre. Ogni pagina SEO indipendente.",
    disclaimerTitle: "Disclaimer",
    disclaimer:
      "Il banco ha sempre un vantaggio. Il gioco d'azzardo comporta rischi; puoi perdere soldi. Questo sito e i nostri strumenti sono solo per intrattenimento e formazione. Nessuna strategia è garantita al 100%. Gioca responsabilmente. Strategy Gamba non è un casino.",
    downloadBtn: "Scarica i nostri strumenti",
    backHome: "← Home",
    allStrategies: "Vedi tutte le pagine di strategia →",
    examplePages: "Pagine di strategia di esempio",
    byGame: "Per gioco",
    byCasino: "Per casino",
    strategiesListTitle: "Tutte le pagine di strategia",
    strategiesListDesc: "Ogni link è una pagina SEO indipendente.",
    viewAll: "Tutte le strategie →",
    noStrategy100: "Solo strumenti e guide – nessuna strategia è 100%. Gioca responsabilmente.",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – Consigli e strumenti`,
      (c, g, v) => `${g} ${v} per ${c} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Migliora le tue scommesse`,
      (c, g, v) => `Guida ${c} ${g} ${v}`,
      (c, g, v) => `Miglior ${c} ${g} ${v} – Strumenti gratuiti`,
      (c, g, v) => `${g} ${v} su ${c}`,
      (c, g, v) => `${c} ${g} ${v} – Usa i nostri strumenti`,
      (c, g, v) => `${v} per ${c} ${g} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Migliora i risultati`,
      (c, g, v) => `${g} ${v} ${c} – Consigli e guida`,
    ],
    descSnippets: [
      (c, g) => `Strategia e consigli ${g} gratuiti per ${c}.`,
      (c, g) => `I nostri strumenti ${c} ${g} per scommettere meglio.`,
      (c, g) => `Guida ${g} per ${c} – migliorare le prestazioni.`,
      (c, g) => `Impara la strategia ${g} su ${c}. Nessuna strategia è 100%.`,
      (c, g) => `${c} ${g} – predictor e consigli strategia.`,
      (c, g) => `Migliora i risultati in ${g} su ${c} con la nostra guida.`,
      (c, g) => `Migliori consigli ${g} per ${c}. Il banco ha sempre vantaggio.`,
      (c, g) => `${g} su ${c} – strategia e strumenti predictor.`,
      (c, g) => `Strategia ${c} ${g} gratuita. Solo intrattenimento.`,
      (c, g) => `${c} ${g} – consigli per scommesse intelligenti.`,
    ],
    intros: [
      (c, g, v) => `Questa pagina è la guida ${c} ${g} ${v}. Strumenti e consigli solo a titolo informativo. Nessuna strategia è 100%. Gioca responsabilmente.`,
      (c, g, v) => `${c} ${g} ${v}: offriamo consigli e strumenti. Risultati non garantiti. Gioca responsabilmente.`,
      (c, g, v) => `Questa pagina riguarda ${g} ${v} su ${c}. Contenuto per intrattenimento e formazione.`,
      (c, g, v) => `Usa la nostra guida ${c} ${g} ${v} per prestazioni migliori. Il banco ha vantaggio; diamo solo consigli.`,
      (c, g, v) => `${v} e consigli per ${g} su ${c}. Strumenti e guide gratuiti. Gioca responsabilmente.`,
    ],
    bodyParagraph: "Qui troverai la nostra strategia e i consigli. Contenuti aggiornati. Scarica il nostro software sopra.",
    bodyDisclaimer: "Il banco vince sempre a lungo termine. Nessuna strategia è 100%. Gioca responsabilmente.",
    sportsTitle: "Scommesse sportive e previsione partite – Strategy Gamba",
    sportsDesc: "Calcio, basket, tennis, esport, UFC. Consigli scommesse e previsioni. Scarica strumenti per Stake, Roobet, 1xbet.",
    bonusTitle: "Codici bonus casino e bonus benvenuto – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc: "Codice bonus Stake, bonus Roobet, bonus senza deposito. Confronta bonus di 30+ casino. Scarica i nostri strumenti.",
    paymentsTitle: "Pagamenti casino crypto – Bitcoin, prelievo, deposito | Strategy Gamba",
    paymentsDesc: "Depositi e prelievi casino crypto: Bitcoin, Ethereum, USDT. Metodi Stake, Roobet, 1xbet. Scarica il nostro software.",
    guidesTitle: "Guide casino – RTP, provably fair, crypto | Strategy Gamba",
    guidesDesc: "RTP, provably fair, depositi crypto, codici bonus. Tutto sul casino crypto – e i nostri strumenti.",
    sportPageTitle: (n) => `${n} consigli scommesse e previsione – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `Strategia scommesse ${n} e previsioni. Usa i nostri strumenti per Stake, Roobet, 1xbet e migliori casino crypto. Scarica – nessuna strategia è 100%.`,
    bonusCasinoTitle: (n) => `Codice bonus ${n} e bonus benvenuto – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `Codice bonus ${n}, bonus benvenuto, senza deposito. Bonus casino crypto. Scarica i nostri strumenti.`,
    guidePageTitle: (n) => `${n} – guida casino crypto | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} per Stake, Roobet e casino crypto. Tutto sul casino – e i nostri strumenti.`,
  },
  nl: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines en meer",
    homeDesc:
      "Eén pagina per casino, spel en type: Stake mines strategie, Roobet crash predictor en honderden meer. Elke pagina onafhankelijk SEO.",
    disclaimerTitle: "Disclaimer",
    disclaimer:
      "Het huis heeft altijd een voordeel. Gokken brengt risico's met zich mee. Deze site en onze tools zijn alleen voor entertainment en educatie. Geen strategie is 100% gegarandeerd. Speel verantwoord. Strategy Gamba is geen casino.",
    downloadBtn: "Download onze tools",
    backHome: "← Home",
    allStrategies: "Bekijk alle strategiepagina's →",
    examplePages: "Voorbeeld strategiepagina's",
    byGame: "Per spel",
    byCasino: "Per casino",
    strategiesListTitle: "Alle strategiepagina's",
    strategiesListDesc: "Elke link is een onafhankelijke SEO-pagina.",
    viewAll: "Alle strategieën →",
    noStrategy100: "Alleen tools en gidsen – geen strategie is 100%. Speel verantwoord.",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – Tips en tools`,
      (c, g, v) => `${g} ${v} voor ${c} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Verbeter je weddenschappen`,
      (c, g, v) => `Gids ${c} ${g} ${v}`,
      (c, g, v) => `Beste ${c} ${g} ${v} – Gratis tools`,
      (c, g, v) => `${g} ${v} op ${c}`,
      (c, g, v) => `${c} ${g} ${v} – Gebruik onze tools`,
      (c, g, v) => `${v} voor ${c} ${g} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Betere resultaten`,
      (c, g, v) => `${g} ${v} ${c} – Tips en gids`,
    ],
    descSnippets: [
      (c, g) => `Gratis ${c} ${g} strategie en tips.`,
      (c, g) => `Onze ${c} ${g} tools voor betere weddenschappen.`,
      (c, g) => `${c} ${g} gids – betere prestaties.`,
      (c, g) => `Leer ${g} strategie op ${c}. Geen strategie is 100%.`,
      (c, g) => `${c} ${g} – predictor en strategietips.`,
      (c, g) => `Verbeter je resultaten in ${g} op ${c} met onze gids.`,
      (c, g) => `Beste ${g} tips voor ${c}. Het huis heeft altijd voordeel.`,
      (c, g) => `${g} op ${c} – strategie en predictor tools.`,
      (c, g) => `Gratis ${c} ${g} strategie. Alleen entertainment.`,
      (c, g) => `${c} ${g} – tips voor slim wedden.`,
    ],
    intros: [
      (c, g, v) => `Deze pagina is de gids voor ${c} ${g} ${v}. Tools en tips alleen als referentie. Geen strategie is 100%. Speel verantwoord.`,
      (c, g, v) => `${c} ${g} ${v}: we bieden tips en tools. Resultaten niet gegarandeerd. Speel verantwoord.`,
      (c, g, v) => `Deze pagina gaat over ${g} ${v} op ${c}. Content voor entertainment en educatie.`,
      (c, g, v) => `Gebruik onze ${c} ${g} ${v} gids voor betere prestaties. Het huis heeft voordeel; we geven alleen tips.`,
      (c, g, v) => `${v} en tips voor ${g} op ${c}. Gratis tools en gidsen. Speel verantwoord.`,
    ],
    bodyParagraph: "Hier vind je onze strategie en tips. Content wordt bijgewerkt. Download onze software hierboven.",
    bodyDisclaimer: "Het huis wint altijd op lange termijn. Geen strategie is 100%. Speel verantwoord.",
    sportsTitle: "Sportweddenschappen en wedstrijdvoorspelling – Strategy Gamba",
    sportsDesc: "Voetbal, basketbal, tennis, esport, UFC. Weddenschapstips en voorspellingen. Download tools voor Stake, Roobet, 1xbet.",
    bonusTitle: "Casino bonuscodes en welkomstbonus – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc: "Stake bonuscode, Roobet welkomstbonus, no deposit bonus. Vergelijk bonussen van 30+ casino's. Download onze tools.",
    paymentsTitle: "Crypto casino betalingen – Bitcoin, opname, storting | Strategy Gamba",
    paymentsDesc: "Crypto casino stortingen en opnames: Bitcoin, Ethereum, USDT. Stake, Roobet, 1xbet betalingen. Download onze software.",
    guidesTitle: "Casino gidsen – RTP, provably fair, crypto | Strategy Gamba",
    guidesDesc: "RTP, provably fair, crypto stortingen, bonuscodes. Alles over crypto casino – en onze tools.",
    sportPageTitle: (n) => `${n} weddenschapstips en voorspelling – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `${n} weddenschapsstrategie en voorspelling. Gebruik onze tools voor Stake, Roobet, 1xbet en top crypto casino's. Download – geen strategie is 100%.`,
    bonusCasinoTitle: (n) => `${n} bonuscode en welkomstbonus – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `${n} bonuscode, welkomstbonus, no deposit. Crypto casino bonussen. Download onze tools.`,
    guidePageTitle: (n) => `${n} – crypto casino gids | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} voor Stake, Roobet en crypto casino's. Alles over casino – en onze tools.`,
  },
  pl: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines i więcej",
    homeDesc:
      "Jedna strona na casino, grę i typ: strategia Stake mines, predictor Roobet crash i setki innych. Każda strona niezależne SEO.",
    disclaimerTitle: "Zastrzeżenie",
    disclaimer:
      "Dom ma zawsze przewagę. Hazard wiąże się z ryzykiem; możesz stracić pieniądze. Ta strona i nasze narzędzia są tylko do rozrywki i edukacji. Żadna strategia nie jest w 100% gwarantowana. Graj odpowiedzialnie. Strategy Gamba nie jest kasynem.",
    downloadBtn: "Pobierz nasze narzędzia",
    backHome: "← Strona główna",
    allStrategies: "Zobacz wszystkie strony strategii →",
    examplePages: "Przykładowe strony strategii",
    byGame: "Według gry",
    byCasino: "Według kasyna",
    strategiesListTitle: "Wszystkie strony strategii",
    strategiesListDesc: "Każdy link to niezależna strona SEO.",
    viewAll: "Wszystkie strategie →",
    noStrategy100: "Tylko narzędzia i przewodniki – żadna strategia nie jest w 100%. Graj odpowiedzialnie.",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – Wskazówki i narzędzia`,
      (c, g, v) => `${g} ${v} dla ${c} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Popraw swoje zakłady`,
      (c, g, v) => `Przewodnik ${c} ${g} ${v}`,
      (c, g, v) => `Najlepszy ${c} ${g} ${v} – Darmowe narzędzia`,
      (c, g, v) => `${g} ${v} na ${c}`,
      (c, g, v) => `${c} ${g} ${v} – Użyj naszych narzędzi`,
      (c, g, v) => `${v} dla ${c} ${g} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Lepsze wyniki`,
      (c, g, v) => `${g} ${v} ${c} – Wskazówki i przewodnik`,
    ],
    descSnippets: [
      (c, g) => `Darmowa strategia i wskazówki ${g} dla ${c}.`,
      (c, g) => `Nasze narzędzia ${c} ${g} do lepszych zakładów.`,
      (c, g) => `Przewodnik ${g} dla ${c} – lepsza wydajność.`,
      (c, g) => `Naucz się strategii ${g} na ${c}. Żadna strategia nie jest w 100%.`,
      (c, g) => `${c} ${g} – predictor i wskazówki strategii.`,
      (c, g) => `Popraw wyniki w ${g} na ${c} z naszym przewodnikiem.`,
      (c, g) => `Najlepsze wskazówki ${g} dla ${c}. Dom ma zawsze przewagę.`,
      (c, g) => `${g} na ${c} – strategia i narzędzia predictora.`,
      (c, g) => `Darmowa strategia ${c} ${g}. Tylko rozrywka.`,
      (c, g) => `${c} ${g} – wskazówki do mądrych zakładów.`,
    ],
    intros: [
      (c, g, v) => `Ta strona to przewodnik ${c} ${g} ${v}. Narzędzia i wskazówki tylko do wiadomości. Żadna strategia nie jest w 100%. Graj odpowiedzialnie.`,
      (c, g, v) => `${c} ${g} ${v}: oferujemy wskazówki i narzędzia. Wyniki nie gwarantowane. Graj odpowiedzialnie.`,
      (c, g, v) => `Ta strona dotyczy ${g} ${v} na ${c}. Treść do rozrywki i edukacji.`,
      (c, g, v) => `Użyj naszego przewodnika ${c} ${g} ${v} dla lepszej wydajności. Dom ma przewagę; podajemy tylko wskazówki.`,
      (c, g, v) => `${v} i wskazówki dla ${g} na ${c}. Darmowe narzędzia i przewodniki. Graj odpowiedzialnie.`,
    ],
    bodyParagraph: "Tu znajdziesz naszą strategię i wskazówki. Treść aktualizowana. Pobierz nasze oprogramowanie powyżej.",
    bodyDisclaimer: "Dom zawsze wygrywa na dłuższą metę. Żadna strategia nie jest w 100%. Graj odpowiedzialnie.",
    sportsTitle: "Zakłady sportowe i prognozy meczów – Strategy Gamba",
    sportsDesc: "Piłka nożna, koszykówka, tenis, esport, UFC. Wskazówki zakładów i prognozy. Pobierz narzędzia Stake, Roobet, 1xbet.",
    bonusTitle: "Kody bonusów kasyno i bonus powitalny – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc: "Kod bonusu Stake, bonus Roobet, bonus bez depozytu. Porównaj bonusy 30+ kasyn. Pobierz nasze narzędzia.",
    paymentsTitle: "Płatności kasyno krypto – Bitcoin, wypłata, depozyt | Strategy Gamba",
    paymentsDesc: "Wpłaty i wypłaty kasyno krypto: Bitcoin, Ethereum, USDT. Płatności Stake, Roobet, 1xbet. Pobierz nasze oprogramowanie.",
    guidesTitle: "Przewodniki kasyno – RTP, provably fair, krypto | Strategy Gamba",
    guidesDesc: "RTP, provably fair, wpłaty krypto, kody bonusów. Wszystko o kasyno krypto – i nasze narzędzia.",
    sportPageTitle: (n) => `${n} wskazówki zakładów i prognoza – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `Strategia zakładów ${n} i prognozy. Użyj naszych narzędzi dla Stake, Roobet, 1xbet i najlepszych kasyn krypto. Pobierz – żadna strategia nie jest w 100%.`,
    bonusCasinoTitle: (n) => `Kod bonusu ${n} i bonus powitalny – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `Kod bonusu ${n}, bonus powitalny, bez depozytu. Bonusy kasyno krypto. Pobierz nasze narzędzia.`,
    guidePageTitle: (n) => `${n} – przewodnik kasyno krypto | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} dla Stake, Roobet i kasyn krypto. Wszystko o kasynie – i nasze narzędzia.`,
  },
  id: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines dan lainnya",
    homeDesc:
      "Satu halaman per casino, game, dan tipe: strategi Stake mines, prediktor Roobet crash dan ratusan lainnya. Setiap halaman SEO independen.",
    disclaimerTitle: "Disclaimer",
    disclaimer:
      "Rumah selalu punya keuntungan. Judi berisiko; Anda bisa kehilangan uang. Situs dan alat kami hanya untuk hiburan dan edukasi. Tidak ada strategi 100% terjamin. Main dengan tanggung jawab. Strategy Gamba bukan casino.",
    downloadBtn: "Unduh alat kami",
    backHome: "← Beranda",
    allStrategies: "Lihat semua halaman strategi →",
    examplePages: "Contoh halaman strategi",
    byGame: "Berdasarkan game",
    byCasino: "Berdasarkan casino",
    strategiesListTitle: "Semua halaman strategi",
    strategiesListDesc: "Setiap tautan adalah halaman SEO independen.",
    viewAll: "Semua strategi →",
    noStrategy100: "Hanya alat dan panduan – tidak ada strategi 100%. Main dengan tanggung jawab.",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – Tips dan alat`,
      (c, g, v) => `${g} ${v} untuk ${c} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Tingkatkan taruhan Anda`,
      (c, g, v) => `Panduan ${c} ${g} ${v}`,
      (c, g, v) => `Terbaik ${c} ${g} ${v} – Alat gratis`,
      (c, g, v) => `${g} ${v} di ${c}`,
      (c, g, v) => `${c} ${g} ${v} – Gunakan alat kami`,
      (c, g, v) => `${v} untuk ${c} ${g} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Hasil lebih baik`,
      (c, g, v) => `${g} ${v} ${c} – Tips dan panduan`,
    ],
    descSnippets: [
      (c, g) => `Strategi dan tips ${g} gratis untuk ${c}.`,
      (c, g) => `Alat ${c} ${g} kami untuk taruhan lebih baik.`,
      (c, g) => `Panduan ${g} untuk ${c} – kinerja lebih baik.`,
      (c, g) => `Pelajari strategi ${g} di ${c}. Tidak ada strategi 100%.`,
      (c, g) => `${c} ${g} – prediktor dan tips strategi.`,
      (c, g) => `Tingkatkan hasil ${g} di ${c} dengan panduan kami.`,
      (c, g) => `Tips terbaik ${g} untuk ${c}. Rumah selalu untung.`,
      (c, g) => `${g} di ${c} – strategi dan alat prediktor.`,
      (c, g) => `Strategi ${c} ${g} gratis. Hiburan saja.`,
      (c, g) => `${c} ${g} – tips taruhan cerdas.`,
    ],
    intros: [
      (c, g, v) => `Halaman ini adalah panduan ${c} ${g} ${v}. Alat dan tips hanya referensi. Tidak ada strategi 100%. Main dengan tanggung jawab.`,
      (c, g, v) => `${c} ${g} ${v}: kami berikan tips dan alat. Hasil tidak dijamin. Main dengan tanggung jawab.`,
      (c, g, v) => `Halaman ini tentang ${g} ${v} di ${c}. Konten hiburan dan edukasi.`,
      (c, g, v) => `Gunakan panduan ${c} ${g} ${v} kami untuk kinerja lebih baik. Rumah untung; kami hanya beri tips.`,
      (c, g, v) => `${v} dan tips untuk ${g} di ${c}. Alat dan panduan gratis. Main dengan tanggung jawab.`,
    ],
    bodyParagraph: "Di sini strategi dan tips kami. Konten diperbarui. Unduh software kami di atas.",
    bodyDisclaimer: "Rumah selalu menang jangka panjang. Tidak ada strategi 100%. Main dengan tanggung jawab.",
    sportsTitle: "Taruhan olahraga dan prediksi pertandingan – Strategy Gamba",
    sportsDesc: "Sepak bola, basket, tenis, esport, UFC. Tips taruhan dan prediksi. Unduh alat Stake, Roobet, 1xbet.",
    bonusTitle: "Kode bonus casino dan bonus selamat datang – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc: "Kode bonus Stake, bonus Roobet, bonus tanpa deposit. Bandingkan bonus 30+ casino. Unduh alat kami.",
    paymentsTitle: "Pembayaran casino crypto – Bitcoin, penarikan, deposit | Strategy Gamba",
    paymentsDesc: "Deposit dan penarikan casino crypto: Bitcoin, Ethereum, USDT. Pembayaran Stake, Roobet, 1xbet. Unduh software kami.",
    guidesTitle: "Panduan casino – RTP, provably fair, crypto | Strategy Gamba",
    guidesDesc: "RTP, provably fair, deposit crypto, kode bonus. Semua tentang casino crypto – dan alat kami.",
    sportPageTitle: (n) => `Tips taruhan ${n} dan prediksi – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `Strategi taruhan ${n} dan prediksi. Gunakan alat kami untuk Stake, Roobet, 1xbet dan casino crypto terbaik. Unduh – tidak ada strategi 100%.`,
    bonusCasinoTitle: (n) => `Kode bonus ${n} dan bonus selamat datang – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `Kode bonus ${n}, bonus selamat datang, tanpa deposit. Bonus casino crypto. Unduh alat kami.`,
    guidePageTitle: (n) => `${n} – panduan casino crypto | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} untuk Stake, Roobet dan casino crypto. Semua tentang casino – dan alat kami.`,
  },
  th: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines และอื่นๆ",
    homeDesc:
      "หนึ่งหน้าต่อคาสิโน เกม และประเภท: กลยุทธ์ Stake mines, เครื่องทำนาย Roobet crash และอีกหลายร้อยหน้า แต่ละหน้า SEO อิสระ",
    disclaimerTitle: "ข้อจำกัดความรับผิด",
    disclaimer:
      "เจ้ามือได้เปรียบเสมอ การพนันมีความเสี่ยง คุณอาจเสียเงิน เว็บและเครื่องมือของเราเพื่อความบันเทิงและการศึกษาเท่านั้น ไม่มีกลยุทธ์ใดรับประกัน 100% เล่นอย่างรับผิดชอบ Strategy Gamba ไม่ใช่คาสิโน",
    downloadBtn: "ดาวน์โหลดเครื่องมือของเรา",
    backHome: "← หน้าแรก",
    allStrategies: "ดูหน้าทุกกลยุทธ์ →",
    examplePages: "ตัวอย่างหน้าซึ่งยุทธ์",
    byGame: "ตามเกม",
    byCasino: "ตามคาสิโน",
    strategiesListTitle: "หน้าทุกกลยุทธ์",
    strategiesListDesc: "แต่ละลิงก์เป็นหน้า SEO อิสระ",
    viewAll: "ทุกกลยุทธ์ →",
    noStrategy100: "เฉพาะเครื่องมือและคู่มือ – ไม่มีกลยุทธ์ใด 100% เล่นอย่างรับผิดชอบ",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – เคล็ดลับและเครื่องมือ`,
      (c, g, v) => `${g} ${v} สำหรับ ${c} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – ปรับปรุงการเดิมพัน`,
      (c, g, v) => `คู่มือ ${c} ${g} ${v}`,
      (c, g, v) => `ดีที่สุด ${c} ${g} ${v} – เครื่องมือฟรี`,
      (c, g, v) => `${g} ${v} บน ${c}`,
      (c, g, v) => `${c} ${g} ${v} – ใช้เครื่องมือของเรา`,
      (c, g, v) => `${v} สำหรับ ${c} ${g} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – ผลลัพธ์ดีขึ้น`,
      (c, g, v) => `${g} ${v} ${c} – เคล็ดลับและคู่มือ`,
    ],
    descSnippets: [
      (c, g) => `กลยุทธ์และเคล็ดลับ ${g} ฟรีสำหรับ ${c}.`,
      (c, g) => `เครื่องมือ ${c} ${g} ของเราเพื่อการเดิมพันที่ดีขึ้น`,
      (c, g) => `คู่มือ ${g} สำหรับ ${c} – ประสิทธิภาพดีขึ้น`,
      (c, g) => `เรียนรู้กลยุทธ์ ${g} บน ${c}. ไม่มีกลยุทธ์ใด 100%`,
      (c, g) => `${c} ${g} – เครื่องทำนายและเคล็ดลับกลยุทธ์`,
      (c, g) => `ปรับปรุงผล ${g} บน ${c} ด้วยคู่มือของเรา`,
      (c, g) => `เคล็ดลับที่ดีที่สุด ${g} สำหรับ ${c}. เจ้ามือได้เปรียบเสมอ`,
      (c, g) => `${g} บน ${c} – กลยุทธ์และเครื่องมือทำนาย`,
      (c, g) => `กลยุทธ์ ${c} ${g} ฟรี เฉพาะความบันเทิง`,
      (c, g) => `${c} ${g} – เคล็ดลับการเดิมพันอย่างชาญฉลาด`,
    ],
    intros: [
      (c, g, v) => `หน้านี้เป็นคู่มือ ${c} ${g} ${v}. เครื่องมือและเคล็ดลับเพื่ออ้างอิงเท่านั้น ไม่มีกลยุทธ์ใด 100% เล่นอย่างรับผิดชอบ`,
      (c, g, v) => `${c} ${g} ${v}: เราให้เคล็ดลับและเครื่องมือ ผลลัพธ์ไม่รับประกัน เล่นอย่างรับผิดชอบ`,
      (c, g, v) => `หน้านี้เกี่ยวกับ ${g} ${v} บน ${c}. เนื้อหาความบันเทิงและการศึกษา`,
      (c, g, v) => `ใช้คู่มือ ${c} ${g} ${v} ของเราเพื่อประสิทธิภาพที่ดีขึ้น เจ้ามือได้เปรียบ เราให้แค่เคล็ดลับ`,
      (c, g, v) => `${v} และเคล็ดลับสำหรับ ${g} บน ${c}. เครื่องมือและคู่มือฟรี เล่นอย่างรับผิดชอบ`,
    ],
    bodyParagraph: "นี่คือกลยุทธ์และเคล็ดลับของเรา เนื้อหาอัปเดต ดาวน์โหลดซอฟต์แวร์ของเราด้านบน",
    bodyDisclaimer: "เจ้ามือชนะเสมอในระยะยาว ไม่มีกลยุทธ์ใด 100% เล่นอย่างรับผิดชอบ",
    sportsTitle: "การเดิมพันกีฬาและการทำนายแมตช์ – Strategy Gamba",
    sportsDesc: "ฟุตบอล บาสเก็ตบอล เทนนิส อีสปอร์ต UFC เคล็ดลับการเดิมพันและการทำนาย ดาวน์โหลดเครื่องมือ Stake, Roobet, 1xbet",
    bonusTitle: "รหัสโบนัสคาสิโนและโบนัสต้อนรับ – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc: "รหัสโบนัส Stake โบนัส Roobet โบนัสไม่ต้องฝาก เปรียบเทียบโบนัส 30+ คาสิโน ดาวน์โหลดเครื่องมือของเรา",
    paymentsTitle: "การชำระเงินคาสิโนคริปโต – บิทคอยน์ ถอน ฝาก | Strategy Gamba",
    paymentsDesc: "การฝากถอนคาสิโนคริปโต: บิทคอยน์ อีเธอเรียม USDT การชำระ Stake, Roobet, 1xbet ดาวน์โหลดซอฟต์แวร์ของเรา",
    guidesTitle: "คู่มือคาสิโน – RTP, provably fair, คริปโต | Strategy Gamba",
    guidesDesc: "RTP, provably fair การฝากคริปโต รหัสโบนัส ทุกอย่างเกี่ยวกับคาสิโนคริปโต – และเครื่องมือของเรา",
    sportPageTitle: (n) => `เคล็ดลับการเดิมพัน ${n} และการทำนาย – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `กลยุทธ์การเดิมพัน ${n} และการทำนาย ใช้เครื่องมือของเราสำหรับ Stake, Roobet, 1xbet และคาสิโนคริปโตชั้นนำ ดาวน์โหลด – ไม่มีกลยุทธ์ใด 100%`,
    bonusCasinoTitle: (n) => `รหัสโบนัส ${n} และโบนัสต้อนรับ – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `รหัสโบนัส ${n} โบนัสต้อนรับ ไม่ต้องฝาก โบนัสคาสิโนคริปโต ดาวน์โหลดเครื่องมือของเรา`,
    guidePageTitle: (n) => `${n} – คู่มือคาสิโนคริปโต | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} สำหรับ Stake, Roobet และคาสิโนคริปโต ทุกอย่างเกี่ยวกับคาสิโน – และเครื่องมือของเรา`,
  },
  bn: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines এবং আরও",
    homeDesc:
      "প্রতিটি ক্যাসিনো, গেম এবং ধরণের জন্য একটি পৃষ্ঠা: Stake মাইনস কৌশল, Roobet ক্র্যাশ ভবিষ্যদ্বাণী এবং শত শত। প্রতিটি পৃষ্ঠা স্বাধীন SEO।",
    disclaimerTitle: "দাবিত্যাগ",
    disclaimer:
      "ঘর সবসময় সুবিধা রাখে। জুয়ায় ঝুঁকি আছে; আপনি টাকা হারাতে পারেন। এই সাইট এবং আমাদের টুল শুধুমাত্র বিনোদন এবং শিক্ষার জন্য। কোন কৌশল 100% নিশ্চিত নয়। দায়িত্বের সাথে জুয়া খেলুন। Strategy Gamba ক্যাসিনো নয়।",
    downloadBtn: "আমাদের টুল ডাউনলোড করুন",
    backHome: "← হোম",
    allStrategies: "সমস্ত কৌশল পৃষ্ঠা দেখুন →",
    examplePages: "কৌশল পৃষ্ঠার উদাহরণ",
    byGame: "গেম অনুযায়ী",
    byCasino: "ক্যাসিনো অনুযায়ী",
    strategiesListTitle: "সমস্ত কৌশল পৃষ্ঠা",
    strategiesListDesc: "প্রতিটি লিঙ্ক একটি স্বাধীন SEO পৃষ্ঠা।",
    viewAll: "সমস্ত কৌশল →",
    noStrategy100: "শুধুমাত্র টুল এবং গাইড – কোন কৌশল 100% নয়। দায়িত্বের সাথে জুয়া খেলুন।",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – টিপস এবং টুল`,
      (c, g, v) => `${c}-এর জন্য ${g} ${v} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – আপনার বেট উন্নত করুন`,
      (c, g, v) => `${c} ${g} ${v} গাইড`,
      (c, g, v) => `সেরা ${c} ${g} ${v} – বিনামূল্যে টুল`,
      (c, g, v) => `${c}-এ ${g} ${v}`,
      (c, g, v) => `${c} ${g} ${v} – আমাদের টুল ব্যবহার করুন`,
      (c, g, v) => `${c} ${g}-এর ${v} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – ভাল ফলাফল`,
      (c, g, v) => `${g} ${v} ${c} – টিপস এবং গাইড`,
    ],
    descSnippets: [
      (c, g) => `বিনামূল্যে ${c} ${g} কৌশল এবং টিপস।`,
      (c, g) => `আমাদের ${c} ${g} টুল আরও ভাল বেটের জন্য।`,
      (c, g) => `${c} ${g} গাইড – ভাল পারফরম্যান্স।`,
      (c, g) => `${c}-এ ${g} কৌশল শিখুন। কোন কৌশল 100% নয়।`,
      (c, g) => `${c} ${g} – ভবিষ্যদ্বাণী এবং কৌশল টিপস।`,
      (c, g) => `আমাদের গাইড দিয়ে ${c}-এ ${g} ফলাফল উন্নত করুন।`,
      (c, g) => `সেরা ${g} টিপস ${c}-এর জন্য। ঘর সবসময় সুবিধা।`,
      (c, g) => `${c}-এ ${g} – কৌশল এবং ভবিষ্যদ্বাণী টুল।`,
      (c, g) => `বিনামূল্যে ${c} ${g} কৌশল। শুধু বিনোদন।`,
      (c, g) => `${c} ${g} – স্মার্ট বেট টিপস।`,
    ],
    intros: [
      (c, g, v) => `এই পৃষ্ঠা ${c} ${g} ${v} গাইড। টুল এবং টিপস শুধু রেফারেন্স। কোন কৌশল 100% নয়। দায়িত্বের সাথে জুয়া খেলুন।`,
      (c, g, v) => `${c} ${g} ${v}: আমরা টিপস এবং টুল দিই। ফলাফল নিশ্চিত নয়। দায়িত্বের সাথে জুয়া খেলুন।`,
      (c, g, v) => `এই পৃষ্ঠা ${c}-এ ${g} ${v} সম্পর্কে। বিনোদন এবং শিক্ষার বিষয়বস্তু।`,
      (c, g, v) => `ভাল পারফরম্যান্সের জন্য আমাদের ${c} ${g} ${v} গাইড ব্যবহার করুন। ঘর সুবিধা; আমরা শুধু টিপস দিই।`,
      (c, g, v) => `${c} ${g}-এর ${v} এবং টিপস। বিনামূল্যে টুল এবং গাইড। দায়িত্বের সাথে জুয়া খেলুন।`,
    ],
    bodyParagraph: "এখানে আমাদের কৌশল এবং টিপস। বিষয়বস্তু আপডেট। উপরে আমাদের সফটওয়্যার ডাউনলোড করুন।",
    bodyDisclaimer: "দীর্ঘমেয়াদে ঘর সবসময় জয়ী। কোন কৌশল 100% নয়। দায়িত্বের সাথে জুয়া খেলুন।",
    sportsTitle: "ক্রীড়া বেটিং এবং ম্যাচ ভবিষ্যদ্বাণী – Strategy Gamba",
    sportsDesc: "ফুটবল, বাস্কেটবল, টেনিস, ইস্পোর্টস, UFC। বেটিং টিপস এবং ভবিষ্যদ্বাণী। Stake, Roobet, 1xbet টুল ডাউনলোড করুন।",
    bonusTitle: "ক্যাসিনো বোনাস কোড এবং স্বাগত বোনাস – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc: "Stake বোনাস কোড, Roobet স্বাগত বোনাস, নো ডিপোজিট বোনাস। 30+ ক্যাসিনো বোনাস তুলনা। আমাদের টুল ডাউনলোড করুন।",
    paymentsTitle: "ক্রিপ্টো ক্যাসিনো পেমেন্ট – বিটকয়েন, উত্তোলন, জমা | Strategy Gamba",
    paymentsDesc: "ক্রিপ্টো ক্যাসিনো জমা এবং উত্তোলন: বিটকয়েন, ইথেরিয়াম, USDT। Stake, Roobet, 1xbet পেমেন্ট। আমাদের সফটওয়্যার ডাউনলোড করুন।",
    guidesTitle: "ক্যাসিনো গাইড – RTP, provably fair, ক্রিপ্টো | Strategy Gamba",
    guidesDesc: "RTP, provably fair, ক্রিপ্টো জমা, বোনাস কোড। ক্রিপ্টো ক্যাসিনো সম্পর্কে সব – এবং আমাদের টুল।",
    sportPageTitle: (n) => `${n} বেটিং টিপস এবং ভবিষ্যদ্বাণী – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `${n} বেটিং কৌশল এবং ভবিষ্যদ্বাণী। Stake, Roobet, 1xbet এবং শীর্ষ ক্রিপ্টো ক্যাসিনোর জন্য আমাদের টুল ব্যবহার করুন। ডাউনলোড করুন – কোন কৌশল 100% নয়।`,
    bonusCasinoTitle: (n) => `${n} বোনাস কোড এবং স্বাগত বোনাস – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `${n} বোনাস কোড, স্বাগত বোনাস, নো ডিপোজিট। ক্রিপ্টো ক্যাসিনো বোনাস। আমাদের টুল ডাউনলোড করুন।`,
    guidePageTitle: (n) => `${n} – ক্রিপ্টো ক্যাসিনো গাইড | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} Stake, Roobet এবং ক্রিপ্টো ক্যাসিনোর জন্য। ক্যাসিনো সম্পর্কে সব – এবং আমাদের টুল।`,
  },
  ms: {
    ...en(),
    siteName: "Strategy Gamba",
    homeTitle: "Strategy Gamba – Stake, Roobet, Crash, Mines dan lagi",
    homeDesc:
      "Satu halaman per kasino, permainan dan jenis: strategi Stake mines, peramal Roobet crash dan ratusan lagi. Setiap halaman SEO bebas.",
    disclaimerTitle: "Penafian",
    disclaimer:
      "Rumah sentiasa ada kelebihan. Perjudian berisiko; anda boleh kehilangan wang. Laman dan alat kami hanya untuk hiburan dan pendidikan. Tiada strategi 100% dijamin. Main dengan bertanggungjawab. Strategy Gamba bukan kasino.",
    downloadBtn: "Muat turun alat kami",
    backHome: "← Laman utama",
    allStrategies: "Lihat semua halaman strategi →",
    examplePages: "Contoh halaman strategi",
    byGame: "Mengikut permainan",
    byCasino: "Mengikut kasino",
    strategiesListTitle: "Semua halaman strategi",
    strategiesListDesc: "Setiap pautan ialah halaman SEO bebas.",
    viewAll: "Semua strategi →",
    noStrategy100: "Hanya alat dan panduan – tiada strategi 100%. Main dengan bertanggungjawab.",
    titleTemplates: [
      (c, g, v) => `${c} ${g} ${v} – Tips dan alat`,
      (c, g, v) => `${g} ${v} untuk ${c} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Tingkatkan pertaruhan anda`,
      (c, g, v) => `Panduan ${c} ${g} ${v}`,
      (c, g, v) => `Terbaik ${c} ${g} ${v} – Alat percuma`,
      (c, g, v) => `${g} ${v} di ${c}`,
      (c, g, v) => `${c} ${g} ${v} – Guna alat kami`,
      (c, g, v) => `${v} untuk ${c} ${g} – Strategy Gamba`,
      (c, g, v) => `${c} ${g} ${v} – Hasil lebih baik`,
      (c, g, v) => `${g} ${v} ${c} – Tips dan panduan`,
    ],
    descSnippets: [
      (c, g) => `Strategi dan tips ${g} percuma untuk ${c}.`,
      (c, g) => `Alat ${c} ${g} kami untuk pertaruhan lebih baik.`,
      (c, g) => `Panduan ${g} untuk ${c} – prestasi lebih baik.`,
      (c, g) => `Belajar strategi ${g} di ${c}. Tiada strategi 100%.`,
      (c, g) => `${c} ${g} – peramal dan tips strategi.`,
      (c, g) => `Tingkatkan hasil ${g} di ${c} dengan panduan kami.`,
      (c, g) => `Tips terbaik ${g} untuk ${c}. Rumah sentiasa kelebihan.`,
      (c, g) => `${g} di ${c} – strategi dan alat peramal.`,
      (c, g) => `Strategi ${c} ${g} percuma. Hiburan sahaja.`,
      (c, g) => `${c} ${g} – tips pertaruhan bijak.`,
    ],
    intros: [
      (c, g, v) => `Laman ini ialah panduan ${c} ${g} ${v}. Alat dan tips untuk rujukan sahaja. Tiada strategi 100%. Main dengan bertanggungjawab.`,
      (c, g, v) => `${c} ${g} ${v}: kami beri tips dan alat. Hasil tidak dijamin. Main dengan bertanggungjawab.`,
      (c, g, v) => `Laman ini tentang ${g} ${v} di ${c}. Kandungan hiburan dan pendidikan.`,
      (c, g, v) => `Guna panduan ${c} ${g} ${v} kami untuk prestasi lebih baik. Rumah ada kelebihan; kami hanya beri tips.`,
      (c, g, v) => `${v} dan tips untuk ${g} di ${c}. Alat dan panduan percuma. Main dengan bertanggungjawab.`,
    ],
    bodyParagraph: "Di sini strategi dan tips kami. Kandungan dikemas kini. Muat turun perisian kami di atas.",
    bodyDisclaimer: "Rumah sentiasa menang jangka panjang. Tiada strategi 100%. Main dengan bertanggungjawab.",
    sportsTitle: "Pertaruhan sukan dan ramalan perlawanan – Strategy Gamba",
    sportsDesc: "Bola sepak, bola keranjang, tenis, esport, UFC. Tips pertaruhan dan ramalan. Muat turun alat Stake, Roobet, 1xbet.",
    bonusTitle: "Kod bonus kasino dan bonus selamat datang – Stake, Roobet, 1xbet | Strategy Gamba",
    bonusDesc: "Kod bonus Stake, bonus Roobet, bonus tanpa deposit. Bandingkan bonus 30+ kasino. Muat turun alat kami.",
    paymentsTitle: "Pembayaran kasino kripto – Bitcoin, pengeluaran, deposit | Strategy Gamba",
    paymentsDesc: "Deposit dan pengeluaran kasino kripto: Bitcoin, Ethereum, USDT. Pembayaran Stake, Roobet, 1xbet. Muat turun perisian kami.",
    guidesTitle: "Panduan kasino – RTP, provably fair, kripto | Strategy Gamba",
    guidesDesc: "RTP, provably fair, deposit kripto, kod bonus. Semua tentang kasino kripto – dan alat kami.",
    sportPageTitle: (n) => `Tips pertaruhan ${n} dan ramalan – Stake, Roobet, 1xbet | Strategy Gamba`,
    sportPageDesc: (n) =>
      `Strategi pertaruhan ${n} dan ramalan. Guna alat kami untuk Stake, Roobet, 1xbet dan kasino kripto terbaik. Muat turun – tiada strategi 100%.`,
    bonusCasinoTitle: (n) => `Kod bonus ${n} dan bonus selamat datang – Strategy Gamba`,
    bonusCasinoDesc: (n) =>
      `Kod bonus ${n}, bonus selamat datang, tanpa deposit. Bonus kasino kripto. Muat turun alat kami.`,
    guidePageTitle: (n) => `${n} – panduan kasino kripto | Strategy Gamba`,
    guidePageDesc: (n) =>
      `${n} untuk Stake, Roobet dan kasino kripto. Semua tentang kasino – dan alat kami.`,
  },
};

export function getTranslations(locale: Locale): Strings {
  return TRANSLATIONS[locale] ?? TRANSLATIONS.en;
}

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h << 5) - h + slug.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export function getStrategyTitleForLocale(
  locale: Locale,
  casino: string,
  game: string,
  variant: string,
  slug: string
): string {
  const t = getTranslations(locale);
  const idx = hashSlug(slug) % t.titleTemplates.length;
  return t.titleTemplates[idx](casino, game, variant);
}

export function getStrategyDescriptionForLocale(
  locale: Locale,
  casino: string,
  game: string,
  slug: string
): string {
  const t = getTranslations(locale);
  const idx = hashSlug(slug + "desc") % t.descSnippets.length;
  const main = t.descSnippets[idx](casino, game);
  return `${main} ${t.noStrategy100}`;
}
