# Multi-language deep check – all locales, canonicals, keywords

## Locales (20)

All pages use **LOCALES** from `src/lib/locales.ts`:  
en, zh, es, hi, ar, pt, ru, **ja**, de, fr, ko, tr, vi, it, nl, pl, id, th, bn, ms.

---

## Canonicals – every language self-referencing

- **buildHreflang(currentLang, pathAfterLang)** in `src/lib/seo-hreflang.ts`:
  - **Canonical** = `${BASE}/${currentLang}/${path}` → each URL points to itself (e.g. `/ja/stake-mines-strategy` → canonical is that same URL).
  - **languages** = all 20 locales get the same path with their locale (e.g. `ja` → `.../ja/...`, `zh` → `.../zh/...`).
  - **x-default** = English (`/en/...`) for global fallback.
- Used on: home, strategies, sports, bonus, guides, payments, about, strategy slugs, sport/guide/bonus slugs. No page type is missing.

---

## Hreflang – complete

- Every `[lang]` page returns **alternates** with:
  - **canonical** = that page’s own URL.
  - **languages** = all 20 locale codes + **x-default** (en).
- So Japanese pages get `<link rel="alternate" hreflang="ja" href=".../ja/..." />` and equivalent for all other locales. No locale missing.

---

## Keywords per language

- **src/lib/keywords.ts**: **LOCALE_KEYWORDS** has an entry for **every** locale, including:
  - **ja**: "Stake 戦略", "Roobet 予測", "クラッシュ予測", "暗号カジノ", "スポーツベッティング", "試合予測", etc.
  - zh, es, hi, ar, pt, ru, de, fr, ko, tr, vi, it, nl, pl, id, th, bn, ms: same (locale-specific terms + fallback).
- **getMetaKeywords(locale)** uses `LOCALE_KEYWORDS[locale] ?? LOCALE_KEYWORDS.en` → Japanese (and all others) get keywords in their language in `<meta name="keywords">`.

---

## Titles & descriptions per language

- **All 20 locales** now have **full translations** for:
  - **titleTemplates** (10 variants) – strategy page `<title>` in that language
  - **descSnippets** (10 variants) – strategy page meta description in that language
  - **intros** (5 variants) – strategy page body intro in that language
  - **bodyParagraph**, **bodyDisclaimer**
  - **sportsTitle**, **sportsDesc**, **bonusTitle**, **bonusDesc**, **paymentsTitle**, **paymentsDesc**, **guidesTitle**, **guidesDesc**
  - **sportPageTitle(n)**, **sportPageDesc(n)**, **bonusCasinoTitle(n)**, **bonusCasinoDesc(n)**, **guidePageTitle(n)**, **guidePageDesc(n)**
  - **strategiesListTitle**, **strategiesListDesc**, **viewAll**, **examplePages**, **byGame**, **byCasino**, **homeTitle**, **homeDesc**, **disclaimer**, etc.
- **Strategy pages** (`[lang]/[slug]`): Every locale (en, zh, es, hi, ar, pt, ru, ja, de, fr, ko, tr, vi, it, nl, pl, id, th, bn, ms) gets titles and meta descriptions **in that language**.
- **List/section pages** and **sport/guide/bonus detail pages**: All use **getTranslations(locale)** and have localized strings for every locale.

---

## Sitemap – all languages

- **getSitemapEntries()** loops **for (const lang of LOCALES)** for:
  - home, strategies, sports, bonus, payments, guides, about;
  - bonus/[casinoSlug], guide/[guideSlug], [strategy slug], sport/[sportSlug].
- So every indexable URL exists for **all 20 locales** (e.g. `/ja/`, `/ja/strategies`, `/ja/stake-mines-strategy`, …). No locale missing.

---

## HTML lang & Open Graph

- **SetLang** (client): Sets `document.documentElement.lang = lang` so the page’s `<html lang>` becomes the current locale (ja, zh, etc.) after hydration. Good for accessibility and crawlers that run JS.
- **openGraph.locale**: Set from `lang` in `[lang]` layout and passed where needed → e.g. Japanese pages get correct OG locale.

---

## Summary

| Check | Status |
|-------|--------|
| 20 locales in LOCALES | OK |
| Canonical = own URL per page (all types, all langs) | OK |
| Hreflang: all 20 + x-default on every page | OK |
| Keywords in locale language (all 20) | OK |
| Full titles/descriptions for all 20 locales (strategy + sections + sport/guide/bonus) | OK |
| Sitemap includes all locales for all page types | OK |
| HTML lang set per locale (SetLang) | OK |
| Open Graph locale per page | OK |

Everything is aligned for multi-language (including Japanese): canonicals and hreflang are correct, keywords are per language, and Japanese has full title/description coverage.
