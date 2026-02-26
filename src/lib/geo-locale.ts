import type { Locale } from "./locales";
import { LOCALES, DEFAULT_LOCALE, isLocale } from "./locales";

/**
 * Country code (ISO 3166-1) → locale for SEO and geo redirect.
 * Covers all 20 languages so user gets the right language from their IP.
 */
const COUNTRY_TO_LOCALE: Record<string, Locale> = {
  US: "en",
  GB: "en",
  AU: "en",
  CA: "en",
  IE: "en",
  NZ: "en",
  IN: "hi",
  CN: "zh",
  TW: "zh",
  HK: "zh",
  SG: "en",
  MY: "ms",
  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  CL: "es",
  PE: "es",
  VE: "es",
  EC: "es",
  FR: "fr",
  BE: "fr",
  CH: "de",
  DE: "de",
  AT: "de",
  PT: "pt",
  BR: "pt",
  RU: "ru",
  UA: "ru",
  KZ: "ru",
  JP: "ja",
  KR: "ko",
  SA: "ar",
  AE: "ar",
  EG: "ar",
  QA: "ar",
  KW: "ar",
  TR: "tr",
  IT: "it",
  NL: "nl",
  PL: "pl",
  ID: "id",
  TH: "th",
  VN: "vi",
  BD: "bn",
};

/** Accept-Language first code to our locale (e.g. "fr" → "fr", "pt-BR" → "pt") */
const LANG_TO_LOCALE: Record<string, Locale> = {
  en: "en",
  zh: "zh",
  "zh-cn": "zh",
  "zh-tw": "zh",
  es: "es",
  hi: "hi",
  ar: "ar",
  pt: "pt",
  ru: "ru",
  ja: "ja",
  de: "de",
  fr: "fr",
  ko: "ko",
  tr: "tr",
  vi: "vi",
  it: "it",
  nl: "nl",
  pl: "pl",
  id: "id",
  th: "th",
  bn: "bn",
  ms: "ms",
};

/**
 * Get best locale from request: country (Vercel geo) first, then Accept-Language, then default.
 */
export function getLocaleFromRequest(
  countryCode: string | undefined,
  acceptLanguage: string | undefined
): Locale {
  const country = countryCode?.toUpperCase();
  if (country && COUNTRY_TO_LOCALE[country]) {
    return COUNTRY_TO_LOCALE[country];
  }
  if (acceptLanguage) {
    const parts = acceptLanguage.split(",").map((s) => s.trim().split(";")[0].toLowerCase());
    for (const part of parts) {
      const code = part.slice(0, 2);
      const full = part.slice(0, 5);
      if (isLocale(code)) return code;
      if (LANG_TO_LOCALE[full]) return LANG_TO_LOCALE[full];
      if (LANG_TO_LOCALE[code]) return LANG_TO_LOCALE[code];
    }
  }
  return DEFAULT_LOCALE;
}

export { COUNTRY_TO_LOCALE, LANG_TO_LOCALE };
