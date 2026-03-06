import type { Metadata } from "next";
import { LOCALES, type Locale } from "./locales";

/** Production domain – used for canonicals so preview/staging never declare themselves as canonical. */
const PRODUCTION_BASE = "https://strategy-gamba.vercel.app";

/** True only on Vercel production; use for canonicals base and robots (noindex on preview). */
export const IS_PRODUCTION = process.env.VERCEL_ENV === "production";

/**
 * Canonical site base URL (no trailing slash).
 * On production we use SITE_URL if set (e.g. custom domain); on preview/staging we always use
 * PRODUCTION_BASE so canonicals point to the live site and Google doesn’t index preview URLs.
 */
const BASE =
  IS_PRODUCTION && process.env.SITE_URL
    ? process.env.SITE_URL.replace(/\/+$/, "")
    : PRODUCTION_BASE;

const DEFAULT_LANG: Locale = "en";

/** Normalize path: no leading/trailing slashes, no double slashes. Ensures canonical is unique and self-referencing. */
function normalizePath(p: string): string {
  return p.replace(/^\/+|\/+$/g, "").replace(/\/+/g, "/") || "";
}

/** Build alternates (canonical + hreflang + x-default). Canonical = this page's URL so each page is self-referencing. */
export function buildHreflang(
  currentLang: Locale,
  pathAfterLang: string
): NonNullable<Metadata["alternates"]> {
  const path = normalizePath(pathAfterLang);
  const canonical = path ? `${BASE}/${currentLang}/${path}` : `${BASE}/${currentLang}`;
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale] = path ? `${BASE}/${locale}/${path}` : `${BASE}/${locale}`;
  }
  languages["x-default"] = path ? `${BASE}/${DEFAULT_LANG}/${path}` : `${BASE}/${DEFAULT_LANG}`;
  return { canonical, languages };
}

/** Full URL for a locale and path (no leading slash on path) */
export function localeUrl(locale: Locale, path: string): string {
  const p = path.replace(/^\//, "");
  return p ? `${BASE}/${locale}/${p}` : `${BASE}/${locale}`;
}

export function getMetadataBase() {
  return new URL(BASE);
}

export { BASE as SITE_BASE };
