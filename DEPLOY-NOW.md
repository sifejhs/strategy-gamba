# Deploy now – one-time steps

Your code is already on GitHub: **https://github.com/sifejhs/strategy-gamba**

## Option 1: Vercel dashboard (easiest)

1. Open **https://vercel.com** and sign in with **GitHub**.
2. If you already have a project for **strategy-gamba**:
   - Open it → **Deployments**. The latest push may have **auto-deployed** already.
   - If not, click **Redeploy** on the latest deployment (or **Deploy**).
3. If you don’t have a project yet:
   - Click **Add New** → **Project**.
   - Choose **sifejhs/strategy-gamba**.
   - **Root Directory:** leave empty (app is at repo root).
   - Click **Deploy**.

Your site will be live at **https://strategy-gamba.vercel.app** (or your custom domain).

---

## Option 2: Deploy from your PC with Vercel CLI

1. Open **PowerShell** in this folder:
   ```
   cd C:\Users\Sifeddine\Desktop\strategy-gamba-repo
   ```
2. Log in (browser will open once):
   ```
   npx vercel login
   ```
3. Deploy to production:
   ```
   npx vercel --prod
   ```
4. Follow the prompts (link to existing project or create new one).

After that, every `git push origin main` will auto-deploy from GitHub.
