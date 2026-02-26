import type { Locale } from "@/lib/locales";
import { getTranslations } from "@/lib/translations";
import DownloadButton from "./DownloadButton";

/** Full CTA block: improve win chance by following our prediction and strategy tools – link to download on every page */
export default function DownloadCta({ lang = "en" }: { lang?: Locale }) {
  const t = getTranslations(lang);
  const cta = t.downloadCta ?? "Improve your win chance – follow our prediction and strategy tools. Download our software below to get the full toolset.";
  return (
    <section id="download" className="mt-10 rounded-xl border-2 border-emerald-500/50 bg-emerald-950/30 p-6 text-center">
      <h2 className="text-xl font-semibold text-emerald-400">
        Download our software – prediction & strategy tools
      </h2>
      <p className="mt-2 text-slate-300">
        {cta}
      </p>
      <div className="mt-4">
        <DownloadButton lang={lang} />
      </div>
    </section>
  );
}
