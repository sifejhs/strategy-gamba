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
  hi: { ...en(), siteName: "Strategy Gamba", disclaimerTitle: "अस्वीकरण", downloadBtn: "हमारे टूल डाउनलोड करें", backHome: "← होम", noStrategy100: "केवल टूल और गाइड – कोई रणनीति 100% नहीं। जिम्मेदारी से जुआ खेलें।" },
  ar: { ...en(), siteName: "Strategy Gamba", disclaimerTitle: "إخلاء المسؤولية", downloadBtn: "تحميل أدواتنا", backHome: "← الرئيسية", noStrategy100: "أدوات ودلائل فقط – لا توجد استراتيجية 100٪. قم بالمقامرة بمسؤولية." },
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
    bodyParagraph:
      "Aqui encontrará a nossa estratégia e dicas. Conteúdo atualizado. Descarregue o nosso software acima.",
    bodyDisclaimer: "Aviso: a casa sempre ganha a longo prazo. Nenhuma estratégia é 100%. Jogue com responsabilidade.",
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
    bodyParagraph: "Здесь наша стратегия и советы. Контент обновляется. Скачайте наше ПО выше.",
    bodyDisclaimer: "Дом всегда выигрывает в долгосрочной перспективе. Никакая стратегия не 100%. Играйте ответственно.",
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
    bodyParagraph: "ここで戦略とヒントを提供。ベットサイズ、リスクレベル、ツールの使い方。コンテンツは随時更新。上からソフトをダウンロードできます。",
    bodyDisclaimer: "免責：長期的には胴元が常に勝利。いかなる戦略も100%ではありません。責任あるギャンブルを。",
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
    noStrategy100: "도구와 가이드만 제공. 어떤 전략도 100%가 아닙니다. 책임감 있게 도박하세요.",
    bodyParagraph: "여기에서 전략과 팁을 제공합니다. 콘텐츠는 정기적으로 업데이트됩니다. 위 버튼에서 소프트웨어를 다운로드하세요.",
    bodyDisclaimer: "장기적으로庄家가 항상 이깁니다. 어떤 전략도 100%가 아닙니다. 책임감 있게 도박하세요.",
  },
  tr: { ...en(), siteName: "Strategy Gamba", disclaimerTitle: "Feragatname", downloadBtn: "Araçlarımızı indir", backHome: "← Ana sayfa", noStrategy100: "Yalnızca araçlar ve rehberler – hiçbir strateji %100 değildir. Sorumlu oynayın." },
  vi: { ...en(), siteName: "Strategy Gamba", disclaimerTitle: "Tuyên bố từ chối", downloadBtn: "Tải công cụ của chúng tôi", backHome: "← Trang chủ", noStrategy100: "Chỉ công cụ và hướng dẫn – không chiến lược nào 100%. Chơi có trách nhiệm." },
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
    noStrategy100: "Solo strumenti e guide – nessuna strategia è 100%. Gioca responsabilmente.",
    bodyParagraph: "Qui troverai la nostra strategia e i consigli. Contenuti aggiornati. Scarica il nostro software sopra.",
    bodyDisclaimer: "Il banco vince sempre a lungo termine. Nessuna strategia è 100%. Gioca responsabilmente.",
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
    noStrategy100: "Alleen tools en gidsen – geen strategie is 100%. Speel verantwoord.",
    bodyParagraph: "Hier vind je onze strategie en tips. Content wordt bijgewerkt. Download onze software hierboven.",
    bodyDisclaimer: "Het huis wint altijd op lange termijn. Geen strategie is 100%. Speel verantwoord.",
  },
  pl: { ...en(), siteName: "Strategy Gamba", disclaimerTitle: "Zastrzeżenie", downloadBtn: "Pobierz nasze narzędzia", backHome: "← Strona główna", noStrategy100: "Tylko narzędzia i przewodniki – żadna strategia nie jest w 100%. Graj odpowiedzialnie." },
  id: { ...en(), siteName: "Strategy Gamba", disclaimerTitle: "Disclaimer", downloadBtn: "Unduh alat kami", backHome: "← Beranda", noStrategy100: "Hanya alat dan panduan – tidak ada strategi 100%. Main dengan tanggung jawab." },
  th: { ...en(), siteName: "Strategy Gamba", disclaimerTitle: "ข้อจำกัดความรับผิด", downloadBtn: "ดาวน์โหลดเครื่องมือของเรา", backHome: "← หน้าแรก", noStrategy100: "เฉพาะเครื่องมือและคู่มือ – ไม่มีกลยุทธ์ใด 100% เล่นอย่างรับผิดชอบ" },
  bn: { ...en(), siteName: "Strategy Gamba", disclaimerTitle: "দাবিত্যাগ", downloadBtn: "আমাদের টুল ডাউনলোড করুন", backHome: "← হোম", noStrategy100: "শুধুমাত্র টুল এবং গাইড – কোন কৌশল 100% নয়। দায়িত্বের সাথে জুয়া খেলুন।" },
  ms: { ...en(), siteName: "Strategy Gamba", disclaimerTitle: "Penafian", downloadBtn: "Muat turun alat kami", backHome: "← Laman utama", noStrategy100: "Hanya alat dan panduan – tiada strategi 100%. Main dengan bertanggungjawab." },
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
