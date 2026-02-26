import Link from "next/link";
import type { Locale } from "@/lib/locales";
import { getTranslations } from "@/lib/translations";
import { buildStrategySlug } from "@/lib/strategy-data";

/** Same casino + same game internal links – peak SEO, all languages */
export default function RelatedLinks({
  lang,
  casinoSlug,
  gameSlug,
  currentSlug,
}: {
  lang: Locale;
  casinoSlug: string;
  gameSlug: string;
  currentSlug: string;
}) {
  const t = getTranslations(lang);
  const variants = ["strategy", "predictor", "tips", "guide"] as const;
  const sameCombo = variants
    .map((v) => buildStrategySlug(casinoSlug, gameSlug, v))
    .filter((s) => s !== currentSlug)
    .slice(0, 3);
  const sameCasino = [
    buildStrategySlug(casinoSlug, "crash", "strategy"),
    buildStrategySlug(casinoSlug, "mines", "strategy"),
    buildStrategySlug(casinoSlug, "dice", "strategy"),
  ].filter((s) => s !== currentSlug && !sameCombo.includes(s)).slice(0, 3);
  const sameGame = [
    buildStrategySlug("stake", gameSlug, "strategy"),
    buildStrategySlug("roobet", gameSlug, "strategy"),
    buildStrategySlug("rollbit", gameSlug, "strategy"),
  ].filter((s) => s !== currentSlug).slice(0, 3);
  const gameName = gameSlug.replace(/-/g, " ");

  return (
    <aside className="mt-10 border-t border-slate-700 pt-8">
      <h2 className="text-lg font-semibold text-slate-200">{t.relatedLabel}</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {sameCombo.length > 0 && (
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wide">{t.moreGameVariant(gameName)}</p>
            <ul className="mt-1 space-y-1">
              {sameCombo.map((slug) => (
                <li key={slug}>
                  <Link href={`/${lang}/${slug}`} className="text-sm text-emerald-400 hover:underline">
                    {slug.replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide">{t.moreFromCasino}</p>
          <ul className="mt-1 space-y-1">
            {sameCasino.map((slug) => (
              <li key={slug}>
                <Link href={`/${lang}/${slug}`} className="text-sm text-emerald-400 hover:underline">
                  {slug.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide">{t.moreGameStrategies(gameName)}</p>
          <ul className="mt-1 space-y-1">
            {sameGame.map((slug) => (
              <li key={slug}>
                <Link href={`/${lang}/${slug}`} className="text-sm text-emerald-400 hover:underline">
                  {slug.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500">
        <Link href="#download" className="text-emerald-400 hover:underline">{t.downloadOurSoftware}</Link>
        {" · "}
        <Link href={`/${lang}/bonus`} className="text-emerald-400 hover:underline">{t.bonusCodesLabel}</Link>
        {" · "}
        <Link href={`/${lang}/payments`} className="text-emerald-400 hover:underline">{t.paymentsLabel}</Link>
        {" · "}
        <Link href={`/${lang}/guides`} className="text-emerald-400 hover:underline">{t.guidesLabel}</Link>
      </p>
    </aside>
  );
}
