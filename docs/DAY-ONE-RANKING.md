# Day-one ranking – where to host, what to deploy, how to rank fast

## v0 and this project

[v0 builds SEO-optimized sites by default](https://vercel.com/blog/how-v0-is-building-seo-optimized-sites-by-default) (metadata, Core Web Vitals, SSR, JSON-LD). This project goes further: 20 languages with hreflang, 45k+ strategy/bonus/guide/sport pages, sitemap + IndexNow + ping scripts, Article/FAQ/Breadcrumb/Organization schema, and full control over every page. Deploy this repo to Vercel for the same infra (edge, speed) plus our SEO layer. You can use v0 to design UI and port it here, or deploy this as-is.

This is the **peak-of-peak** playbook: where to put your site, what to do the day you deploy, and how to get indexed and ranking as fast as possible (even before Google’s normal refresh).

---

## 1. Where to host (best for fast indexing)

Your project is **Next.js**. These options are best for speed + SEO:

| Host | Why use it | Indexing speed |
|------|------------|----------------|
| **Vercel** | Made for Next.js, global CDN, instant deploy from Git. Free tier. | Very fast – crawlers hit a fast, stable URL. |
| **Netlify** | Great for static/Next.js, CDN, easy deploy. | Very fast. |
| **Cloudflare Pages** | Strong CDN, good free tier. | Very fast. |
| **Railway / Render** | Good if you need Node server (e.g. `next start`). | Fast. |

**Recommendation:** **Vercel** – zero config for Next.js, automatic HTTPS, and search engines see a fast, reliable site.

- **V0** = UI builder (you design in V0, then you can export or rebuild in your repo). You don’t “host on V0”. You host the **built Next.js app** (this repo) on Vercel/Netlify/etc.
- **AI site builders** = same idea: you end up with a site; deploy that site on a proper host (Vercel, Netlify, etc.) and use the steps below to get indexed.

---

## 2. What to deploy

- **What:** This **referral-casino** (Strategy Gamba) Next.js app.
- **How:**
  1. Push the code to **GitHub** (or GitLab/Bitbucket).
  2. Connect the repo to **Vercel** (or Netlify): Import Project → select repo → deploy.
  3. Add your **custom domain** in the host’s dashboard (e.g. `strategy-gamba.com`).
  4. In the project set **SITE_BASE** / **metadataBase** to that domain (e.g. in `src/lib/seo-hreflang.ts`: `https://strategy-gamba.com`).
  5. Redeploy so sitemap and all links use the final URL.

You deploy **this one site**; no need to “deploy to Google” – you submit your URL/sitemap to search engines (next section).

---

## 3. How to be ranked from the first day (exact steps)

Do these **on the same day you go live** (and repeat after big updates).

### Step A – Right after deploy

1. **Ping sitemap (Google, Bing, Yandex)**  
   From your machine or a CI step (replace with your real domain):
   ```bash
   SITE=https://your-domain.com npm run ping
   ```
   This tells Google/Bing/Yandex: “my sitemap is here, please crawl it.”

2. **IndexNow (Bing + Yandex – near-instant)**  
   ```bash
   SITE=https://your-domain.com npm run indexnow
   ```
   Bing and Yandex can pick up URLs within minutes. Your project already has the key file set up.

3. **Check the key file**  
   Open: `https://your-domain.com/strategy-gamba-indexnow-key.txt`  
   It must return the key text. If not, fix the file in `public/` and redeploy.

### Step B – Same day (search consoles)

4. **Google Search Console**  
   - Go to [Google Search Console](https://search.google.com/search-console).  
   - Add property: your domain (e.g. `https://your-domain.com`).  
   - Verify (HTML tag or DNS, as offered).  
   - **Submit sitemap:** `https://your-domain.com/sitemap.xml`.  
   - Optional: **URL Inspection** → paste 2–3 important URLs (e.g. homepage, one strategy page) → “Request indexing”. This can speed up first crawl.

5. **Bing Webmaster**  
   - Go to [Bing Webmaster](https://www.bing.com/webmasters).  
   - Add your site and verify.  
   - Submit sitemap: `https://your-domain.com/sitemap.xml`.  
   - Bing often indexes very quickly after sitemap submit.

6. **Yandex** (if you care about RU traffic)  
   - [Yandex Webmaster](https://webmaster.yandex.com/) → add site → verify → submit sitemap.

### Step C – Optional but powerful for “first day” effect

7. **Google Indexing API** (for 10–20 key URLs)  
   - Use for high-value URLs (e.g. homepage, top strategy pages).  
   - Setup: [Indexing API quickstart](https://developers.google.com/search/apis/indexing-api/v3/quickstart) (service account + domain verification).  
   - After deploy, call the API to “notify” Google for those URLs; they can be crawled within hours instead of days.

8. **Verification meta tags**  
   - In Search Console / Bing / Yandex you get a meta tag.  
   - Add it in `src/app/layout.tsx` (or via env) so every page has it.  
   - Helps verification and can help crawlers trust the site.

---

## 4. Why this gets you “ranked” as fast as possible

- **Ping + IndexNow** = engines **discover** your sitemap/URLs immediately instead of waiting for a random crawl.
- **Submitting sitemap in Search Console / Bing** = you tell the engine “here are all my URLs” so they **prioritise** crawling.
- **Request indexing** (Google) on a few URLs = those URLs can be crawled **within hours**.
- **Indexing API** = direct “new URL” signal to Google for chosen pages = **fastest** first crawl for those.
- **Hosting on Vercel/Netlify** = fast, stable, global CDN = crawlers don’t timeout and see a “real” site from day one.

“Rank #1” from day one still depends on competition and backlinks, but **being indexed from day one** is what this setup maximises. Once you’re in the index, you can then work on content and links to move to R1.

---

## 5. Checklist – copy and do on launch day

```
[ ] Code pushed to GitHub (or other Git).
[ ] Repo connected to Vercel (or Netlify) and first deploy done.
[ ] Custom domain added and SITE_BASE / metadataBase set to final URL.
[ ] Redeploy so sitemap.xml uses final domain.
[ ] Run: SITE=https://your-domain.com npm run ping
[ ] Run: SITE=https://your-domain.com npm run indexnow
[ ] Open https://your-domain.com/strategy-gamba-indexnow-key.txt – returns key.
[ ] Google Search Console: add property, verify, submit sitemap.xml.
[ ] (Optional) Google URL Inspection → Request indexing for 2–3 main URLs.
[ ] Bing Webmaster: add site, verify, submit sitemap.xml.
[ ] (Optional) Yandex Webmaster: add site, submit sitemap.
[ ] (Optional) Add verification meta tags in layout.
[ ] (Optional) Set up Google Indexing API for 10–20 key URLs.
```

---

## 6. Summary

- **Host:** Vercel (or Netlify / Cloudflare Pages) – not “V0” or “AI site” as a host; they’re tools, you host the built site.
- **Deploy:** This Next.js app, with your real domain and correct `SITE_BASE`.
- **Rank from first day:** Ping sitemap + IndexNow + submit sitemap in Google + Bing (and optionally Yandex, Indexing API, verification tags). That’s the peak-of-peak path to be indexed and eligible to rank as fast as possible.
