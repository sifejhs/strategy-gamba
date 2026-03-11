# Getting more pages indexed (Google Search Console)

If you have many pages **"Explorée, actuellement non indexée"** (Crawled, currently not indexed), use these steps after deploying the latest fixes.

## What we fixed for indexation

- **Canonical + og:url** on every `[lang]` page so Google sees one URL per page (no duplicate).
- **Article JSON-LD** with `inLanguage` so each locale is treated as a distinct page.
- **Unique visible line** on each strategy page (Casino · Game · Variant) so content is clearly unique.

## How to re-run validation and ask Google to index

1. **Submit the sitemap again**
   - Search Console → **Sitemaps**.
   - If `https://strategy-gamba.vercel.app/sitemap.xml` is already there, click the three dots → **Resubmit sitemap** (or remove and add again).
   - This tells Google to recrawl the listed URLs.

2. **Request indexing for sample URLs**
   - Search Console → **URL Inspection**.
   - Paste a URL that is “Crawled, currently not indexed” (e.g. `https://strategy-gamba.vercel.app/de/stake-poker-strategy`).
   - Click **Request indexing**.
   - Repeat for a few URLs per language (e.g. 5–10). Google will recrawl and re-evaluate; it may then recrawl more from the sitemap.

3. **Give it time**
   - Validation and indexing can take days to weeks.
   - After recrawls, the “Crawled, currently not indexed” count should go down as more URLs get indexed.

4. **Optional: IndexNow (Bing/Yandex)**
   - The repo has `scripts/indexnow-submit.js`; you can run it to notify other engines of URLs.

## Sitemap URL

- **Index:** `https://strategy-gamba.vercel.app/sitemap.xml`
- **Robots:** `https://strategy-gamba.vercel.app/robots.txt` (references the sitemap).

Ensure the property in Search Console uses the same domain (`https://strategy-gamba.vercel.app`).
