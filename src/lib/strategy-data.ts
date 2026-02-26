/** Tier-1 high-value casinos – peak content and keyword focus (Stake, Roobet, etc.) */
export const TIER1_CASINO_SLUGS = new Set([
  "stake",
  "roobet",
  "1xbet",
  "rollbit",
  "bc-game",
  "bustabit",
  "stake-us",
  "duelbits",
  "metaspins",
  "shuffle",
  "wolf-bet",
]);

/** Casinos – slug and display name */
export const CASINOS = [
  { slug: "stake", name: "Stake" },
  { slug: "roobet", name: "Roobet" },
  { slug: "shuffle", name: "Shuffle" },
  { slug: "wolf-bet", name: "Wolf.bet" },
  { slug: "1xbet", name: "1xbet" },
  { slug: "rollbit", name: "Rollbit" },
  { slug: "bc-game", name: "BC.Game" },
  { slug: "stake-us", name: "Stake.us" },
  { slug: "metaspins", name: "Metaspins" },
  { slug: "duelbits", name: "Duelbits" },
  { slug: "bustabit", name: "Bustabit" },
  { slug: "csgoempire", name: "CSGOEmpire" },
  { slug: "gamdom", name: "Gamdom" },
  { slug: "lucky-blocks", name: "Lucky Blocks" },
  { slug: "vave", name: "Vave" },
  { slug: "wild-io", name: "Wild.io" },
  { slug: "crypto-games", name: "CryptoGames" },
  { slug: "trust-dice", name: "TrustDice" },
  { slug: "bitstarz", name: "BitStarz" },
  { slug: "mbit", name: "MBit" },
  { slug: "nitrogen-sports", name: "Nitrogen Sports" },
  { slug: "sportsbet-io", name: "Sportsbet.io" },
  { slug: "thunderpick", name: "Thunderpick" },
  { slug: "ggbet", name: "GGbet" },
  { slug: "betfury", name: "BetFury" },
  { slug: "clash", name: "Clash" },
  { slug: "aviator", name: "Aviator" },
  { slug: "raze", name: "Raze" },
  { slug: "fairspin", name: "Fairspin" },
] as const;

/** Games – slug and display name (deep coverage + top searched: Spaceman, Aviator, etc.) */
export const GAMES = [
  { slug: "mines", name: "Mines" },
  { slug: "dice", name: "Dice" },
  { slug: "keno", name: "Keno" },
  { slug: "roulette", name: "Roulette" },
  { slug: "poker", name: "Poker" },
  { slug: "blackjack", name: "Blackjack" },
  { slug: "hilo", name: "HiLo" },
  { slug: "plinko", name: "Plinko" },
  { slug: "crash", name: "Crash" },
  { slug: "limbo", name: "Limbo" },
  { slug: "aviator", name: "Aviator" },
  { slug: "spaceman", name: "Spaceman" },
  { slug: "crash-x", name: "Crash X" },
  { slug: "sugar-rush", name: "Sugar Rush" },
  { slug: "baccarat", name: "Baccarat" },
  { slug: "slots", name: "Slots" },
  { slug: "wheel", name: "Wheel" },
  { slug: "jetx", name: "JetX" },
  { slug: "dog-house", name: "Dog House" },
] as const;

/** Page variants for SEO (strategy, predictor, tips, guide) */
export const VARIANTS = [
  { slug: "strategy", name: "Strategy" },
  { slug: "predictor", name: "Predictor" },
  { slug: "tips", name: "Tips" },
  { slug: "guide", name: "Guide" },
] as const;

/** Sports – top searched for betting/match prediction. All pages refer to download our tools. */
export const SPORTS = [
  { slug: "football", name: "Football" },
  { slug: "soccer", name: "Soccer" },
  { slug: "basketball", name: "Basketball" },
  { slug: "tennis", name: "Tennis" },
  { slug: "cricket", name: "Cricket" },
  { slug: "esports", name: "eSports" },
  { slug: "ufc", name: "UFC" },
  { slug: "boxing", name: "Boxing" },
  { slug: "horse-racing", name: "Horse Racing" },
  { slug: "american-football", name: "American Football" },
  { slug: "ice-hockey", name: "Ice Hockey" },
  { slug: "baseball", name: "Baseball" },
  { slug: "mma", name: "MMA" },
  { slug: "csgo", name: "CSGO" },
  { slug: "dota", name: "Dota" },
  { slug: "lol", name: "League of Legends" },
] as const;

/** Casino topics – bonus, payments, guides + top searched (VPN, legal, alternative) */
export const GUIDES = [
  { slug: "rtp", name: "RTP & house edge" },
  { slug: "provably-fair", name: "Provably fair" },
  { slug: "crypto-deposits", name: "Crypto deposits" },
  { slug: "bonus-codes", name: "Bonus codes" },
  { slug: "responsible-gambling", name: "Responsible gambling" },
  { slug: "mobile-casino", name: "Mobile casino" },
  { slug: "live-casino", name: "Live casino" },
  { slug: "no-deposit", name: "No deposit bonus" },
  { slug: "vpn-for-casino", name: "VPN for casino" },
  { slug: "stake-vpn", name: "Stake VPN" },
  { slug: "roobet-alternative", name: "Roobet alternative" },
  { slug: "stake-alternative", name: "Stake alternative" },
  { slug: "instant-withdrawal", name: "Instant withdrawal casino" },
  { slug: "is-stake-legal", name: "Is Stake legal" },
  { slug: "best-crash-game", name: "Best crash game" },
] as const;

export function buildStrategySlug(
  casinoSlug: string,
  gameSlug: string,
  variantSlug: string
): string {
  return `${casinoSlug}-${gameSlug}-${variantSlug}`;
}

export function parseStrategySlug(
  slug: string
): { casino: string; game: string; variant: string } | null {
  const parts = slug.split("-");
  if (parts.length < 3) return null;
  const variant = parts[parts.length - 1];
  const game = parts[parts.length - 2];
  const casino = parts.slice(0, -2).join("-");
  const validCasino = CASINOS.some((c) => c.slug === casino);
  const validGame = GAMES.some((g) => g.slug === game);
  const validVariant = VARIANTS.some((v) => v.slug === variant);
  if (!validCasino || !validGame || !validVariant) return null;
  return { casino, game, variant };
}

export function getAllStrategySlugs(): string[] {
  const slugs: string[] = [];
  for (const c of CASINOS) {
    for (const g of GAMES) {
      for (const v of VARIANTS) {
        slugs.push(buildStrategySlug(c.slug, g.slug, v.slug));
      }
    }
  }
  return slugs;
}

export function getDisplayNames(slug: string) {
  const parsed = parseStrategySlug(slug);
  if (!parsed) return null;
  const casino = CASINOS.find((c) => c.slug === parsed!.casino);
  const game = GAMES.find((g) => g.slug === parsed!.game);
  const variant = VARIANTS.find((v) => v.slug === parsed!.variant);
  if (!casino || !game || !variant) return null;
  return { casino: casino.name, game: game.name, variant: variant.name };
}

export function isTier1Casino(casinoSlug: string): boolean {
  return TIER1_CASINO_SLUGS.has(casinoSlug);
}
