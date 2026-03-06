# SEO & indexation audit – Strategy Gamba

**Date:** Double-check for high SEO, fast ranking, no indexation errors.

---

## ✅ What’s in good shape

### Canonicals & hreflang
- **Single source:** All canonicals and hreflang come from `src/lib/seo-hreflang.ts` (production base, path normalization).
- **Self-referencing:** Every `[lang]` page (home, strategies, sports, bonus, guide, payments, about, strategy slugs, sport/guide/bonus slugs) has **canonical = its own URL** → no “wrong canonical” indexation.
- **Preview safe:** On Vercel preview, `BASE` is forced to production URL → no preview URLs declared as canonical; **noindex** on preview so previews aren’t indexed.

### robots.txt
- **Allow:** `/`
- **Disallow:** `/admin`, `/admin/`
- **Sitemap:** `https://strategy-gamba.vercel.app/sitemap.xml` (absolute)
- **Admin:** `robots: noindex, nofollow` in admin layout.

### Sitemap
- **Index:** `/sitemap.xml` → sitemap index (middleware rewrites to API).
- **Segments:** `/sitemap/0`, `/sitemap/1`, … (~5k URLs each) → good for crawl budget.
- **URLs:** All indexable `[lang]` pages included (home, strategies, sports, bonus, payments, guides, about, strategy slugs, bonus/guide/sport slugs). Same base as canonicals, no trailing slash.

### Technical
- **trailingSlash: false** → one URL per page (no `/slug` vs `/slug/` duplicates).
- **metadataBase** set from same BASE → correct OG/Twitter URLs.
- **Google site verification** in root layout.

### Structured data (rich results)
- **Strategy pages:** Article + FAQ + HowTo JSON-LD.
- **Root:** WebSite + Organization (JsonLd).
- **Lists:** ItemList where used (strategies, sports, bonus).
- **Breadcrumbs:** BreadcrumbJsonLd on strategy pages.

### Production vs preview
- **Production:** `index, follow` on all public pages; canonicals point to production domain.
- **Preview:** `noindex, nofollow` everywhere; canonicals still point to production → no indexation errors from preview URLs.

---

## 🔧 Changes made in this audit

### Legacy routes (no `[lang]`)
- **`/strategies`** – Added `canonical: /en/strategies`, `robots: noindex, follow`.
- **`/casinos`** – Added `canonical: /en/bonus`, `robots: noindex, follow`.
- **`/casinos/[slug]`** – Added `canonical: /en/bonus/[slug]`, `robots: noindex, follow`.
- **`/games/[slug]`** – Added `canonical: /en/sports`, `robots: noindex, follow`.

So legacy URLs don’t compete for indexing; they point to the main `[lang]` versions and are not indexed.

---

## 📋 Checklist – indexation & ranking

| Item | Status |
|------|--------|
| Self-referencing canonicals on all main pages | ✅ |
| Hreflang + x-default on all `[lang]` pages | ✅ |
| Production base on preview (no preview canonicals) | ✅ |
| Noindex on preview deployments | ✅ |
| robots.txt allow /, disallow /admin, sitemap URL | ✅ |
| Sitemap index + segments, URLs match canonicals | ✅ |
| No duplicate URL forms (trailing slash) | ✅ |
| Legacy /strategies, /casinos, /games not indexed (canonical + noindex) | ✅ |
| Admin noindex | ✅ |
| Article/FAQ/HowTo/Breadcrumb/WebSite/Organization schema | ✅ |
| Unique titles/descriptions per page | ✅ |
| Google verification meta tag | ✅ |

---

## 🚀 For fast ranking (you’ve already got)

- Submit **sitemap** in [Google Search Console](https://search.google.com/search-console) (e.g. `https://strategy-gamba.vercel.app/sitemap.xml`).
- Optional: run `npm run ping` (or the ping script) after deploy so Google/Bing get the sitemap URL.
- Optional: IndexNow script for Bing/Yandex.
- Content: unique titles, descriptions, and body per strategy/sport/guide/bonus page → good for ranking.

---

## ⚠️ Not an issue

- **“Autre page avec balise canonique correcte”** in GSC: expected for URLs that correctly point their canonical elsewhere (e.g. `/` → `/en`, or preview URL → production). No fix needed.
- Legacy routes now have canonical + noindex → they won’t create duplicate-content or indexation errors.

---

**Summary:** Setup is strong for high SEO and indexation: correct canonicals, hreflang, sitemap, robots, structured data, and no duplicate or legacy URLs competing with main pages. Legacy routes are explicitly noindex with canonicals to the right `[lang]` pages.
