# What to Zip and How to Deploy (Vercel / v0)

Use this when you want to **upload the project to Vercel** (or give it to someone / v0 to deploy). All **45,000+ pages are generated on Vercel** during `npm run build` – you do **not** zip the built site.

---

## 1. What to zip (include)

Zip the **entire `referral-casino` folder** but **exclude** the following so the archive is small and clean:

| Include | Exclude |
|--------|--------|
| `src/` | `node_modules/` |
| `public/` | `.next/` |
| `docs/` | `.git/` |
| `scripts/` | `.env` and `.env.local` (secrets) |
| `package.json` | `.vercel/` |
| `package-lock.json` | `*.log` |
| `next.config.mjs` | |
| `tailwind.config.ts` | |
| `postcss.config.mjs` | |
| `tsconfig.json` | |
| `.vercelignore` | |

**Result:** A zip with **only source code and config**. Size should be a few MB, not hundreds.

---

## 2. How to zip (Windows PowerShell)

**Option A – From the folder that contains `referral-casino`** (your project is in `Desktop\clipboard-monitor`). First go there, then run:

```powershell
cd C:\Users\Sifeddine\Desktop\clipboard-monitor
Compress-Archive -Path "referral-casino\src", "referral-casino\public", "referral-casino\docs", "referral-casino\scripts", "referral-casino\package.json", "referral-casino\package-lock.json", "referral-casino\next.config.mjs", "referral-casino\tailwind.config.ts", "referral-casino\postcss.config.mjs", "referral-casino\tsconfig.json", "referral-casino\.vercelignore", "referral-casino\*.md" -DestinationPath "referral-casino-upload.zip" -Force
```

**Option B – From inside `referral-casino`** (zip is created in the parent folder):

```powershell
cd C:\Users\Sifeddine\Desktop\clipboard-monitor\referral-casino
Compress-Archive -Path "src", "public", "docs", "scripts", "package.json", "package-lock.json", "next.config.mjs", "tailwind.config.ts", "postcss.config.mjs", "tsconfig.json", ".vercelignore", "*.md" -DestinationPath "..\referral-casino-upload.zip" -Force
```

If you prefer to zip the whole folder and then delete the big ones: zip `referral-casino` then open the zip and remove `node_modules` and `.next` from it (or use 7-Zip / WinRAR “exclude” options).

---

## 3. How much to include

- **Enough:** Everything in the table above. That’s the full app; Vercel will run `npm install` and `npm run build` and generate all pages on their servers.
- **Do not include:** `node_modules`, `.next`, `.git`, or any `.env` file that has secrets.

---

## 4. Prompt to give v0 (or the person who deploys)

Copy-paste this so they know exactly what to do:

---

**Deploy this Next.js app on Vercel**

- This is a **Next.js 14** app (App Router). Root of the project is the folder that contains `package.json` and `src/`.
- **Build:** Use default: `npm run build`. No extra build command or output directory.
- **Install:** `npm install` (Vercel does this automatically).
- **Root directory:** If the repo or zip has a parent folder, set Vercel “Root Directory” to `referral-casino` (or the folder that has `package.json`). If you upload only the contents of `referral-casino`, leave root blank.
- **Static generation:** The app generates **45,000+ static pages** at build time (SSG). The build can take **2–4 minutes**. Do not cancel; wait for “Build Completed”.
- **Optional env vars** (in Vercel → Settings → Environment Variables):
  - `ADMIN_PASSWORD` – admin area password
  - `BLOB_READ_WRITE_TOKEN` – only if you use Vercel Blob for the download file upload feature
- **Domain:** After deploy, add your domain in Vercel → Settings → Domains (e.g. strategy-gamba.com). Sitemap will be `https://yourdomain.com/sitemap.xml`.
- Do **not** upload `node_modules` or `.next` – only source code and config. Vercel will install dependencies and run the build.

---

## 5. If you use GitHub instead of zip

1. Push the repo to GitHub (without `node_modules` and `.next` – use `.gitignore`).
2. In Vercel: **Add New Project** → **Import** your GitHub repo.
3. Root Directory: `referral-casino` if the repo root is the parent folder, else leave default.
4. Deploy. Vercel will run `npm install` and `npm run build` and generate all pages.

---

## 6. After first deploy

1. Open **Google Search Console** and submit `https://yourdomain.com/sitemap.xml`.
2. Open **Bing Webmaster Tools** and submit the same sitemap URL.
3. See `docs/DEPLOY-SEO.md` for the full production SEO checklist.
