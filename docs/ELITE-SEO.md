# Elite SEO: What We Already Do & What to Add

This doc maps the "elite tier" ideas (from the Vercel chat) to this codebase: what’s already in place and what you can do post-launch.

---

## Already Implemented in This Project

### E-E-A-T (Experience, Expertise, Authoritativeness, Trust)

| Idea | Status |
|------|--------|
| **About page** | ✅ `/about` for every locale with who we are, what we do, and trust/responsible gambling. |
| **Outbound links to authorities** | ✅ Footer links to BeGambleAware and GamCare on every page (Google trusts sites that cite quality sources). |
| **Trust in content** | ✅ Disclaimer on every page; About explains we’re not a casino and link to help resources. |

### AI Search & Featured Snippets

| Idea | Status |
|------|--------|
| **FAQ schema (Q&A format)** | ✅ Strategy pages have FAQ schema; **Guides, Bonus, Payments** now have FAQPage JSON-LD with 3–4 questions each so AI/overviews can cite us. |
| **Direct answers** | ✅ FAQ answers are short, factual sentences (snippet-friendly). |
| **Clear structure** | ✅ H1/H2 hierarchy and semantic sections across the site. |

### Programmatic SEO

| Idea | Status |
|------|--------|
| **Thousands of unique pages** | ✅ `generateStaticParams` builds 45k+ pages: every locale × strategy slug × sport × guide × bonus. |
| **Unique metadata per page** | ✅ Each page has its own title, description, and keywords (locale + slug). |
| **No thin/duplicate content** | ✅ Each strategy/sport/guide/bonus page has distinct copy from templates and data. |

### International SEO

| Idea | Status |
|------|--------|
| **hreflang** | ✅ Canonical + hreflang for all locales via `buildHreflang()`. |
| **Subdirectories by language** | ✅ `/en`, `/fr`, `/es`, etc. |
| **Localized content** | ✅ Titles, descriptions, and UI strings per locale; locale keywords for search. |
| **Geo redirect** | ✅ Middleware sends `/` to the right locale using IP (and Accept-Language fallback). |

### Technical & Crawlability

| Idea | Status |
|------|--------|
| **Critical content server-rendered** | ✅ Next.js SSG/RSC; no client-only content for SEO. |
| **Sitemap** | ✅ `/sitemap.xml` with all indexable URLs. |
| **robots.txt** | ✅ Allows crawl, disallows `/admin` and `/api`, references sitemap. |
| **noindex where needed** | ✅ Admin layout has `robots: noindex, nofollow`. |
| **Speed Insights** | ✅ Vercel Speed Insights in root layout for Core Web Vitals. |

### Conversion & Engagement

| Idea | Status |
|------|--------|
| **CTA on every page** | ✅ Download button and Download CTA block on all main pages. |
| **Internal linking** | ✅ Related links on strategy pages; hub pages (strategies, sports, bonus, guides) and footer (About, trust links). |

---

## What to Do Post-Launch (Process, Not Code)

These are strategy/ops, not changes in this repo:

1. **Pre-launch / early authority**  
   If you have the domain early: use a “coming soon” or blog, get a few backlinks and social profiles pointing at the domain before full launch.

2. **Content velocity**  
   Add a blog or “Resources” section and publish 2–4 strong articles per week (e.g. “Best crash strategy 2025”, “Stake vs Roobet”) to build topical authority. Use the same metadata + FAQ pattern.

3. **Backlinks**  
   Guest posts, directories, partnerships, linkable assets (e.g. one “definitive guide” per big topic). Submit to Search Console and Bing; monitor backlinks there or with Ahrefs/Moz.

4. **E-E-A-T deepening**  
   Add author bylines or “Reviewed by” on key guides if you have real people; add a clear contact or company details on About if you want to reinforce entity signals.

5. **Featured snippets**  
   For new content, use one clear definition paragraph per topic (e.g. “RTP is…”) and numbered steps or comparison tables where it fits. We already use FAQs; add more question-style H2s and FAQ schema as you add pages.

6. **Log file analysis**  
   On your host (e.g. Vercel), enable or export access logs and check how Googlebot crawls (which paths, how often) to tune crawl budget and fix any wasted crawling.

---

## Summary

- **In code:** About page, trust links in footer, FAQ schema on Guides/Bonus/Payments, programmatic pages, i18n + hreflang, sitemap/robots, Speed Insights, and CTAs are already aligned with the “elite” checklist.
- **Your side after launch:** Content cadence, backlinks, optional author/entity signals, and monitoring (Search Console, Speed Insights, logs) will take you the rest of the way without more code changes.

No code changes are required for “peak” beyond what’s listed above; the rest is content and marketing execution.
