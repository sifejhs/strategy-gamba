import type { Locale } from "@/lib/locales";
import { getTranslations } from "@/lib/translations";
import TrackedDownloadButton from "./TrackedDownloadButton";

export default function DownloadButton({ lang = "en" }: { lang?: Locale }) {
  const t = getTranslations(lang);
  return <TrackedDownloadButton label={t.downloadBtn} />;
}
