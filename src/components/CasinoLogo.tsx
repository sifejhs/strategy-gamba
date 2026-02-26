/** Casino logo placeholder – initial in a box. SEO-friendly with locale alt; no external assets. */
export default function CasinoLogo({
  name,
  alt,
  size = 48,
  className = "",
}: {
  name: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg bg-slate-800 border border-slate-600 flex-shrink-0 font-bold text-emerald-400 ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.45 }}
      title={alt}
      aria-label={alt}
    >
      {initial}
    </span>
  );
}
