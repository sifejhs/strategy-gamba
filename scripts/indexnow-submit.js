/**
 * IndexNow – instant URL submission to Bing, Yandex, etc. (fast indexing).
 * 1. Ensure public/INDEXNOW_KEY.txt exists and contains the key (e.g. run: echo "your-random-key-32chars" > public/INDEXNOW_KEY.txt)
 * 2. SITE=https://strategy-gamba.vercel.app node scripts/indexnow-submit.js
 *
 * Or use key from env: INDEXNOW_KEY=xxx node scripts/indexnow-submit.js
 */
const fs = require("fs");
const path = require("path");
const SITE = process.env.SITE || "https://strategy-gamba.vercel.app";
const KEY_FILE = path.join(__dirname, "..", "public", "INDEXNOW_KEY.txt");
const KEY = process.env.INDEXNOW_KEY || (fs.existsSync(KEY_FILE) ? fs.readFileSync(KEY_FILE, "utf8").trim() : null);

const TOP_URLS = [
  SITE + "/en",
  SITE + "/en/stake-mines-strategy",
  SITE + "/en/stake-crash-predictor",
  SITE + "/en/roobet-crash-strategy",
  SITE + "/en/strategies",
  SITE + "/en/sports",
  SITE + "/en/sport/football",
  SITE + "/en/sport/esports",
  SITE + "/zh",
  SITE + "/es",
];

async function submit() {
  if (!KEY) {
    console.warn("No INDEXNOW_KEY. Create public/INDEXNOW_KEY.txt with a random string (e.g. 32 chars) or set INDEXNOW_KEY env.");
    return;
  }
  const keyLocation = `${SITE}/${KEY}.txt`;
  const host = SITE.replace(/^https?:\/\//, "").split("/")[0];
  const body = {
    host,
    key: KEY,
    keyLocation,
    urlList: TOP_URLS,
  };
  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    console.log("IndexNow:", res.status, res.statusText);
  } catch (e) {
    console.warn("IndexNow error:", e.message);
  }
}

const key = KEY && KEY.length >= 8 ? KEY.trim() : null;
if (key) submit();
else console.warn("Key too short or missing. Use at least 8 chars in public/INDEXNOW_KEY.txt");
