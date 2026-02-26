/**
 * Ping all major search engines with sitemap URL for fast indexing (run after deploy).
 * Google, Bing, Yandex – day-1 discovery. Baidu needs separate submission with token.
 *
 * Usage: SITE=https://strategy-gamba.vercel.app node scripts/ping-search-engines.js
 * Or add to package.json: "postbuild": "node scripts/ping-search-engines.js"
 */
const SITE = process.env.SITE || "https://strategy-gamba.vercel.app";
const sitemapUrl = `${SITE}/sitemap.xml`;

const pings = [
  { name: "Google", url: `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}` },
  { name: "Bing", url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}` },
  { name: "Yandex", url: `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}` },
];

(async () => {
  console.log("Pinging search engines with sitemap:", sitemapUrl);
  for (const { name, url } of pings) {
    try {
      const res = await fetch(url, { method: "GET" });
      console.log(`${name}: ${res.status}`);
    } catch (e) {
      console.warn(`${name}: ${e.message}`);
    }
  }
  console.log("Done. For Baidu: submit sitemap in Baidu Webmaster with your token.");
})();
