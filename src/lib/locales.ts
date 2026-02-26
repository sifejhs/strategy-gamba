/** Top 20 world languages by usage – SEO for all at once */
export const LOCALES = [
  "en",
  "zh",
  "es",
  "hi",
  "ar",
  "pt",
  "ru",
  "ja",
  "de",
  "fr",
  "ko",
  "tr",
  "vi",
  "it",
  "nl",
  "pl",
  "id",
  "th",
  "bn",
  "ms",
] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(s: string): s is Locale {
  return (LOCALES as readonly string[]).includes(s);
}

export function getLocaleName(locale: Locale): string {
  const names: Record<Locale, string> = {
    en: "English",
    zh: "中文",
    es: "Español",
    hi: "हिन्दी",
    ar: "العربية",
    pt: "Português",
    ru: "Русский",
    ja: "日本語",
    de: "Deutsch",
    fr: "Français",
    ko: "한국어",
    tr: "Türkçe",
    vi: "Tiếng Việt",
    it: "Italiano",
    nl: "Nederlands",
    pl: "Polski",
    id: "Bahasa Indonesia",
    th: "ไทย",
    bn: "বাংলা",
    ms: "Bahasa Melayu",
  };
  return names[locale];
}
