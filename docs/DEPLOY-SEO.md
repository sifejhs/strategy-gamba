# Production SEO Checklist 2026 – Deploy & Rank Without Penalties

This doc is the **production-ready SEO checklist** for Strategy Gamba: deploy steps, technical SEO, and 2026 best practices so the site ranks strongly without triggering Helpful Content System or thin-content penalties.

---

## Where to upload your site

**Deploy on Vercel** (recommended in the v0 plan):

1. **Push your code to GitHub** (if not already).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → **Import** your repo.
3. **Root Directory**: leave default (or set to `referral-casino` if the repo root is the parent folder).
4. **Build**: Vercel will detect Next.js and use `npm run build`. No extra config needed.
5. **Environment variables** (optional):
   - `ADMIN_PASSWORD` – override default admin password.
   - `BLOB_READ_WRITE_TOKEN` – for admin upload of the download .zip (create a Blob store in Vercel project → Storage).
6. **Domain**: In Vercel project → **Settings → Domains**, add your domain (e.g. `strategy-gamba.com`). Vercel will handle DNS and free SSL (HTTPS).

After deploy, your site is live at `https://your-project.vercel.app` or your custom domain. Use **Vercel Speed Insights** (already added in the app) to monitor Core Web Vitals in the Vercel dashboard.

---

## SEO checklist vs v0 plan

### Phase 1: Domain & setup
| Item | Status |
|------|--------|
| Short, memorable domain (.com) | Use your chosen domain (e.g. strategy-gamba.com) |
| DNS & SSL via Vercel | Configure domain in Vercel → automatic HTTPS |

### Phase 2: Technical SEO
| Item | Status |
|------|--------|
| Flat URL hierarchy (≤3 clicks) | Done – `/en`, `/en/strategies`, `/en/stake-mines-strategy` |
| Descriptive URL slugs | Done – no IDs, readable slugs |
| Internal linking (hub/spoke) | Done – strategies, sports, bonus, guides, related links |
| Core Web Vitals (LCP, INP, CLS) | Next.js Image where used; explicit sizes; Speed Insights added |
| Vercel Speed Insights | Added in root layout |
| Edge / CDN | Vercel Edge by default when deployed |
| ISR/SSG | All main pages statically generated (SSG) |

### Phase 3: On-page SEO
| Item | Status |
|------|--------|
| Unique `<title>` per page | Done – `generateMetadata` per route, locale-aware |
| Meta descriptions 150–160 chars | Done – per page/locale |
| Open Graph & Twitter Card | Done – og:title, og:description, og:image (1200×630), twitter:summary_large_image on all key pages |
| Canonical URLs | Done – `buildHreflang()` with canonical + hreflang + x-default |
| Structured data (JSON-LD) | Done – Organization (with @id, description), WebSite (publisher, SearchAction), Article, FAQPage, BreadcrumbList, ItemList on list pages |
| theme-color & referrer | Done – theme-color in root layout; referrer strict-origin-when-cross-origin |
| One H1 per page, semantic hierarchy | Done – h1/h2 structure |
| Alt text on images | Done – CasinoLogo alt from translations |
| Descriptive internal anchor text | Done – related links, CTA copy |

### Phase 4: Crawlability & indexing (2026)
| Item | Status |
|------|--------|
| XML sitemap index | Done – `/sitemap.xml` is an index; segments at `/sitemap/0`, `/sitemap/1`, … (~5k URLs each) for crawl budget |
| robots.txt with sitemap ref | Done – `app/robots.ts`, allow `/`, disallow `/admin`, `/api`, sitemap URL absolute |
| noindex on admin | Done – `admin/layout.tsx` robots: noindex, nofollow |
| Submit to Google Search Console | You: add property, submit `https://yourdomain.com/sitemap.xml` |
| Submit to Bing Webmaster Tools | You: add site, submit same sitemap URL |
| Indexing API (optional) | For fast discovery after deploy: use GSC URL Inspection or Indexing API in batches for key URLs |

### Phase 5 & 6: Content, links, monitoring
| Item | Status |
|------|--------|
| Content strategy / topic clusters | Site structure supports it (strategies, sports, guides) |
| Vercel Speed Insights | Added – monitor in Vercel dashboard |
| GSC + GA4 + optional Ahrefs/Moz | You: set up and link in GSC/GA4 |

---

## 2026: Avoid penalties – what we do and do not do

| Do | Do not |
|----|--------|
| Unique title/meta per page (locale + slug) | No generic "Topic - Site" only |
| Substantial content (strategy pages 1500–2500 words, hash-varied sections) | No thin or template-only swap pages |
| Hash-based content variants (intros, key points, glossary, etc.) so pages differ | No high cross-page similarity |
| E-E-A-T: About page, BeGambleAware/GamCare in footer, disclaimer | No unsubstantiated claims or missing trust signals |
| FAQ schema + visible FAQ on strategy, sport, guide, bonus, guides/bonus/payments index | No empty or duplicate FAQ schema |
| Segmented sitemap (~5k URLs per file) | No single huge sitemap that wastes crawl budget |
| SSG for all indexable pages; no client-only critical content | No blocking JS for main content |
| Keywords in metadata and content naturally (getMetaKeywords, locale keywords) | No keyword stuffing or hidden text |

See `docs/QUALITY-PAGES.md` and `docs/ELITE-SEO.md` for the full quality bar and elite SEO list.

---

## Optional improvements you can add later

- **Vercel Analytics** – `npm i @vercel/analytics` and add `<Analytics />` in root layout for traffic/audience.
- **Lighthouse CI** – run on preview deploys to catch regressions (e.g. in GitHub Actions).
- **Indexing API** – submit key URLs in batches after deploy for faster discovery.
- **More structured data** – e.g. `HowTo` on strategy pages for step-by-step snippets; `LocalBusiness` if you have a physical presence.

---

## After first deploy

1. In **Google Search Console**: add property for `https://yourdomain.com`, then **Sitemaps** → submit `https://yourdomain.com/sitemap.xml`.
2. In **Bing Webmaster Tools**: add site, submit the same sitemap URL.
3. In **Vercel**: open your project → **Speed Insights** to see Core Web Vitals once traffic arrives.
4. Run `npm run deploy:ping` (or the ping/indexnow scripts) after big content updates to notify search engines.

Your codebase already implements the critical and high-priority items from the v0 SEO plan; deploy on Vercel and complete the “you” steps above for a full rollout.
