import { LOCALES } from "@/lib/locales";
import { getAllStrategySlugs, SPORTS, CASINOS, GUIDES } from "@/lib/strategy-data";
import { SITE_BASE } from "@/lib/seo-hreflang";

export type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

const CHUNK_SIZE = 5000;

/** All sitemap entries – used for single sitemap or segmented sitemaps. */
export function getSitemapEntries(): SitemapEntry[] {
  const base = SITE_BASE;
  const entries: SitemapEntry[] = [];
  const now = new Date();

  for (const lang of LOCALES) {
    entries.push({ url: `${base}/${lang}`, lastModified: now, changeFrequency: "weekly", priority: 1 });
    entries.push({ url: `${base}/${lang}/strategies`, lastModified: now, changeFrequency: "weekly", priority: 0.95 });
    entries.push({ url: `${base}/${lang}/sports`, lastModified: now, changeFrequency: "weekly", priority: 0.95 });
    entries.push({ url: `${base}/${lang}/bonus`, lastModified: now, changeFrequency: "weekly", priority: 0.95 });
    entries.push({ url: `${base}/${lang}/payments`, lastModified: now, changeFrequency: "monthly", priority: 0.9 });
    entries.push({ url: `${base}/${lang}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.95 });
    entries.push({ url: `${base}/${lang}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 });
  }

  for (const lang of LOCALES) {
    for (const c of CASINOS) {
      entries.push({ url: `${base}/${lang}/bonus/${c.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.88 });
    }
  }

  for (const lang of LOCALES) {
    for (const g of GUIDES) {
      entries.push({ url: `${base}/${lang}/guide/${g.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.85 });
    }
  }

  const slugs = getAllStrategySlugs();
  for (const lang of LOCALES) {
    for (const slug of slugs) {
      entries.push({ url: `${base}/${lang}/${slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 });
    }
  }

  for (const lang of LOCALES) {
    for (const sport of SPORTS) {
      entries.push({ url: `${base}/${lang}/sport/${sport.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.85 });
    }
  }

  return entries;
}

/** Number of segment files needed (~5k URLs each for crawl budget). */
export function getSitemapSegmentCount(): number {
  const n = getSitemapEntries().length;
  return Math.ceil(n / CHUNK_SIZE) || 1;
}

/** Get one segment of the sitemap (0-indexed). Caller can reuse entries if needed. */
export function getSitemapSegment(segmentIndex: number): SitemapEntry[] {
  const entries = getSitemapEntries();
  const start = segmentIndex * CHUNK_SIZE;
  return entries.slice(start, start + CHUNK_SIZE);
}
