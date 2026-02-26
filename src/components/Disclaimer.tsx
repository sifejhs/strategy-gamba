import Link from "next/link";
import type { Locale } from "@/lib/locales";
import { getTranslations } from "@/lib/translations";

/** E-E-A-T: outbound links to authoritative responsible-gambling sources (Google trust signal) */
const TRUST_LINKS = [
  { label: "BeGambleAware", href: "https://www.begambleaware.org" },
  { label: "GamCare", href: "https://www.gamcare.org.uk" },
];

export default function Disclaimer({ lang = "en" }: { lang?: Locale }) {
  const t = getTranslations(lang);
  return (
    <footer className="mt-16 border-t border-slate-700 bg-slate-900/50 px-4 py-8 text-center text-sm text-slate-400">
      <p className="mx-auto max-w-3xl font-medium text-amber-500/90">
        {t.disclaimerTitle}
      </p>
      <p className="mx-auto mt-2 max-w-3xl">{t.disclaimer}</p>
      <p className="mx-auto mt-4 max-w-3xl">
        {t.footerTrustLinks}{" "}
        {TRUST_LINKS.map((link, i) => (
          <span key={link.href}>
            {i > 0 && " · "}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              {link.label}
            </a>
          </span>
        ))}
      </p>
      <p className="mx-auto mt-2 max-w-3xl">
        <Link href={`/${lang}/about`} className="text-emerald-400 hover:underline">
          {t.aboutLinkLabel}
        </Link>
      </p>
    </footer>
  );
}
