# Connect to GitHub (sifejhs/ge) and deploy

Your app on GitHub lives inside the repo **sifejhs/ge** in the folder **strategy-gamba-main**:  
[https://github.com/sifejhs/ge/tree/main/strategy-gamba-main](https://github.com/sifejhs/ge/tree/main/strategy-gamba-main)

---

## Step 1: Clone the GitHub repo

Open **PowerShell** and run:

```powershell
cd C:\Users\Sifeddine\Desktop
git clone https://github.com/sifejhs/ge.git
```

You get a folder `C:\Users\Sifeddine\Desktop\ge` with a subfolder `strategy-gamba-main`.

---

## Step 2: Copy your local project into the clone

Replace the contents of `ge\strategy-gamba-main` with your current project (the folder you’re working in):

**Option A – Using PowerShell (run from Desktop):**

```powershell
$source = "C:\Users\Sifeddine\Desktop\Nouveau dossier (50)\strategy-gamba-main"
$dest   = "C:\Users\Sifeddine\Desktop\ge\strategy-gamba-main"
Remove-Item -Path "$dest\*" -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item -Path "$source\*" -Destination $dest -Recurse -Force
```

**Option B – Manually:**  
Copy everything inside `Nouveau dossier (50)\strategy-gamba-main` (all files and folders like `src`, `public`, `package.json`, etc.) and paste into `Desktop\ge\strategy-gamba-main`, replacing existing files.

---

## Step 3: Push to GitHub

```powershell
cd C:\Users\Sifeddine\Desktop\ge
git add .
git status
git commit -m "Update strategy-gamba from local"
git push origin main
```

- If it asks for **username**: your GitHub username (e.g. `sifejhs`).
- If it asks for **password**: use a **Personal Access Token**, not your GitHub password.  
  Create one: GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)** → **Generate new token**. Give it `repo` scope, then paste it when Git asks for password.

If the default branch is `master` instead of `main`, use:

```powershell
git push origin master
```

---

## Step 4: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (with GitHub if needed).
2. **Add New** → **Project** → import the **sifejhs/ge** repository.
3. **Important:** set **Root Directory** to `strategy-gamba-main` (click “Edit”, enter `strategy-gamba-main`, confirm).
4. Leave **Framework Preset** as Next.js. Click **Deploy**.

Vercel will build and deploy the app from the `strategy-gamba-main` folder. Later deployments will run automatically on every `git push` to the branch you connected.

---

## Updating the site later

1. Edit the project in `Nouveau dossier (50)\strategy-gamba-main` (or in `ge\strategy-gamba-main` after copying once).
2. Run the **copy** again (Step 2) if you edited in “Nouveau dossier (50)”.
3. Then run (from `Desktop\ge`):

```powershell
cd C:\Users\Sifeddine\Desktop\ge
git add .
git commit -m "Your short description of changes"
git push origin main
```

Vercel will redeploy automatically.
