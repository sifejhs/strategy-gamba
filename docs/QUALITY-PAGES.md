# Per-Page Quality Bar (46k+ Pages)

This doc defines the **quality threshold** each page must meet so the site benefits from programmatic scale instead of triggering the Helpful Content System or thin-content penalties. We evolve pages for quality; we do not reduce the number of static pages.

---

## Checklist: What Every Page Must Have

| Requirement | How we meet it |
|-------------|-----------------|
| **Unique title tag** | Every strategy/sport/guide/bonus page has a locale- and slug-specific title from `getStrategyTitleForLocale`, `sportPageTitle`, `guidePageTitle`, `bonusCasinoTitle`, or page-specific `generateMetadata`. No generic "Topic - Site Name" only. |
| **Unique meta description** | Same: locale- and slug-specific descriptions from translation templates and helpers. |
| **Substantive, unique content** | Strategy pages: **~1500–2500 words** – two intros (hash-selected), **Key points** (8 of 12 bullets), strong download CTA, Why it matters, Common mistakes (5 of 6), Step-by-step, When to use tools, Glossary (3 of 4 terms), Summary, visible FAQ (4 Q&As), then 3 body sections, second CTA, related links. Guides/bonus/sports: unique copy per page type and locale. |
| **Unique data or perspective** | Each page is a distinct casino+game+variant or sport/guide/bonus combo. Intros, key points, why-matters, mistakes, when-to-use, glossary subset, and summary are hash-selected per slug so pages differ and are not thin or duplicate. |
| **Structured data** | Article + FAQ + Breadcrumb on strategy pages; ItemList on list pages; FAQPage on guides, bonus, payments; Organization/WebSite in layout. |
| **2–3+ internal links** | Strategy: RelatedLinks (same casino, same game, hub links) + footer (About, bonus, payments, guides). List pages link to all children; hub pages linked from home. |
| **Answers a real search query** | Strategy pages target "[Casino] [Game] strategy/predictor/tips"; sport/guide/bonus pages target real keyword clusters. Keywords per locale in `keywords.ts`. |
| **Fast load (LCP &lt; 2.5s)** | All pages are statically generated (SSG). No client-only content for SEO. Vercel Speed Insights in layout. |

---

## What We Do Not Do (Avoid Penalties)

- **No template-only swap** — We use multiple intros, multiple title/description templates, and Key points so content differs by slug.
- **No thin pages** — Each strategy page targets **1500–2500 words** with two intros, 8 key points, strong download CTA, Why it matters, Common mistakes, Step-by-step, When to use tools, Glossary, Summary, visible FAQ, 3 body sections, 2 CTAs, RelatedLinks, and disclaimer.
- **No high similarity** — Hash-based selection of intro, intro2, key points (8 of 12), why-matters, mistakes (5 of 6), when-to-use, glossary (3 of 4), and summary reduces cross-page duplication.
- **No crawl waste** — Sitemap is **segmented** (~5k URLs per file); robots disallow `/admin` and `/api`; all important content is server-rendered.

---

## Sitemap Segmentation (Crawl Budget)

- **`/sitemap.xml`** — Sitemap index that references segment files.
- **`/sitemap/0`, `/sitemap/1`, …** — Each segment contains up to **5,000 URLs**. Google recommends splitting large sitemaps so they are processed more reliably.
- Logic lives in `src/lib/sitemap-entries.ts` and route handlers under `src/app/sitemap.xml/` and `src/app/sitemap/[id]/`.

---

## Optional Future Improvements (Without Reducing Pages)

- **Word count** — Strategy pages now target **1500–2500 words** for “substantive” pages. Content is delivered via second intro, 8 key points (from 12), Why it matters, Common mistakes, Steps, When to use, Glossary, Summary, and visible FAQ. Optional: add similar depth to sport, guide, and bonus casino. Old note: adding one more section (e.g. “Common mistakes” or “Glossary”) per template would increase length while staying unique via templates.
- **More intro/body variants** — Add more entries to `intros`, `strategyIntro2`, `strategyWhyMattersBody`, `strategyCommonMistakesItems`, etc. in `translations.ts` so the hash-selected content has even more variety.
- **Indexing API** — For eligible URLs, submit in batches via Google Search Console or Indexing API to speed up discovery after deploy.

---

## Summary

We keep all static pages and improve **quality** and **crawl efficiency**: unique titles/descriptions, varied body content and Key points, structured data, internal links, segmented sitemap, and SSG for performance. This aligns with the “programmatic SEO done right” bar so the site can scale without triggering quality or crawl-budget issues.
