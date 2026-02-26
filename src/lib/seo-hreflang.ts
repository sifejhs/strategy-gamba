import type { Metadata } from "next";
import { LOCALES, type Locale } from "./locales";

const BASE = "https://strategy-gamba.com";

const DEFAULT_LANG: Locale = "en";

/** Build alternates (canonical + hreflang + x-default) for Google & all engines. x-default = English for global fallback. */
export function buildHreflang(
  currentLang: Locale,
  pathAfterLang: string
): NonNullable<Metadata["alternates"]> {
  const path = pathAfterLang.replace(/^\//, "");
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
