# Peak SEO – Rank #1 & Fast Indexing (Google + All World Engines)

## Everything related to casino (full coverage)

The site now covers:

- **Strategies**: Casino × game × variant (mines, dice, crash, blackjack, etc.) in 20 languages – each with unique title, description, keywords, Article + FAQ JSON-LD, related links.
- **Sports**: Football, soccer, basketball, tennis, esports, UFC, etc. – match prediction and betting tips, all referencing download.
- **Bonus**: Bonus codes and welcome bonus per casino (Stake bonus, Roobet bonus, no deposit, promo codes).
- **Payments**: Crypto deposits and withdrawals (Bitcoin, Ethereum, USDT), withdrawal time.
- **Guides**: RTP, provably fair, crypto deposits, bonus codes, responsible gambling, mobile casino, live casino, no deposit.
- **Keywords**: Strategy, predictor, bonus code, RTP, provably fair, crypto casino, no deposit, plus typos in all languages.
- **Internal linking**: Related links on every strategy page (same casino, same game, bonus/payments/guides).

Use this to target every major casino-related search (strategy, bonus, payments, guides, sports) in one site.

## Day-one indexing (run after every deploy)

### 1. Ping sitemap (Google, Bing, Yandex)
```bash
SITE=https://your-domain.com npm run ping
```
Or add to your deploy pipeline so it runs right after `npm run build` and deploy.

### 2. IndexNow (Bing, Yandex – instant crawl)
```bash
SITE=https://your-domain.com npm run indexnow
```
Requires `public/INDEXNOW_KEY.txt` and `public/<key>.txt` (same key). Already set up with `strategy-gamba-indexnow-key`. After first deploy, ensure `https://your-domain.com/strategy-gamba-indexnow-key.txt` returns that key.

### 3. Baidu (China)
- Register at [Baidu Webmaster](https://ziyuan.baidu.com/).
- Add your site and get the verification meta tag and/or token.
- Submit sitemap in the dashboard (they don’t support simple ping URL like Google).

---

## Search console verification (optional but recommended)

Add verification meta tags in `app/layout.tsx` or via env so each engine can verify ownership:

| Engine        | Meta tag / method |
|---------------|--------------------|
| **Google**    | Google Search Console → Add property → HTML tag `content="xxx"` → add `<meta name="google-site-verification" content="xxx" />` in layout. |
| **Bing**      | Bing Webmaster → Add site → HTML meta → `<meta name="msvalidate.01" content="xxx" />`. |
| **Yandex**    | Yandex Webmaster → Add site → Meta tag → `<meta name="yandex-verification" content="xxx" />`. |
| **Baidu**     | Baidu Webmaster → 网站认证 → 代码认证 → `<meta name="baidu-site-verification" content="xxx" />`. |

You can use env vars and only render these when set, e.g. `process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION`.

---

## What’s already in the project for peak ranking

- **hreflang + x-default** on every localized page (Google + international engines).
- **Canonical URL** on every page.
- **Sitemap** at `/sitemap.xml` (all pages).
- **robots.txt** allowing all and pointing to sitemap.
- **Structured data**: WebSite, Organization, Article, FAQPage, BreadcrumbList.
- **Preconnect / dns-prefetch** for your domain and major engines.
- **404 page** with internal links (keeps crawlers and users on site).
- **Ping + IndexNow scripts** for fast discovery after deploy.

---

## Google Indexing API (optional, for critical URLs)

For a few high-value URLs you can use the [Indexing API](https://developers.google.com/search/apis/indexing-api/v3/quickstart) (requires service account and verification). Best for “publish and notify Google immediately” on 10–20 URLs. Not required if you ping the sitemap and use Search Console.

---

## Checklist before launch

1. Set `metadataBase` / `SITE_BASE` to your real domain in `src/lib/seo-hreflang.ts`.
2. Deploy, then run: `SITE=https://your-domain.com npm run ping` and `npm run indexnow`.
3. In Google Search Console: add property, verify, submit sitemap.
4. In Bing Webmaster: add site, verify, submit sitemap.
5. (Optional) Add verification meta tags for Google, Bing, Yandex, Baidu.
6. (Optional) For Baidu, add site in Baidu Webmaster and submit sitemap there.
