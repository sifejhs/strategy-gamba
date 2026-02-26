/** Diverse title templates – different word order and phrasing for each page */
const TITLE_TEMPLATES = [
  (c: string, g: string, v: string) => `${c} ${g} ${v} – Tips & Tools`,
  (c: string, g: string, v: string) => `${g} ${v} for ${c} – Strategy Gamba`,
  (c: string, g: string, v: string) => `${c} ${g} ${v} – How to Improve Your Bets`,
  (c: string, g: string, v: string) => `${c} ${g} ${v} Guide – Best ${v} Tips`,
  (c: string, g: string, v: string) => `Best ${c} ${g} ${v} – Free Tools`,
  (c: string, g: string, v: string) => `${g} ${v} on ${c} – Our ${v} & Tips`,
  (c: string, g: string, v: string) => `${c} ${g} ${v} – Use Our ${v} Tools`,
  (c: string, g: string, v: string) => `${v} for ${c} ${g} – Strategy Gamba`,
  (c: string, g: string, v: string) => `${c} ${g} ${v} – Improve Results`,
  (c: string, g: string, v: string) => `${g} ${v} ${c} – Tips & Guide`,
];

/** Diverse description snippets – human-like variation */
const DESC_SNIPPETS = [
  (c: string, g: string) => `Free ${g} strategy and tips for ${c}.`,
  (c: string, g: string) => `Our ${c} ${g} tools help you make better bets.`,
  (c: string, g: string) => `${g} guide for ${c} – tips to improve your play.`,
  (c: string, g: string) => `Learn ${g} strategy on ${c}. No strategy is 100%.`,
  (c: string, g: string) => `${c} ${g} – use our predictor and strategy tips.`,
  (c: string, g: string) => `Improve your ${g} results on ${c} with our guide.`,
  (c: string, g: string) => `Best ${g} tips for ${c}. House always has an edge.`,
  (c: string, g: string) => `${g} on ${c} – strategy and predictor tools.`,
  (c: string, g: string) => `Free ${c} ${g} strategy. For entertainment only.`,
  (c: string, g: string) => `${c} ${g} – tips to help you bet smarter.`,
];

/** Pick a stable but varied index from slug (no random at build) */
function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h << 5) - h + slug.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export function getStrategyTitle(casino: string, game: string, variant: string, slug: string): string {
  const idx = hashSlug(slug) % TITLE_TEMPLATES.length;
  return TITLE_TEMPLATES[idx](casino, game, variant);
}

export function getStrategyDescription(casino: string, game: string, slug: string): string {
  const idx = hashSlug(slug + "desc") % DESC_SNIPPETS.length;
  const main = DESC_SNIPPETS[idx](casino, game);
  return `${main} Tools and guides only – no strategy is 100%. Gamble responsibly.`;
}
