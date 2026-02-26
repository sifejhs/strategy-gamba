import Link from "next/link";

/** 404 – keeps users & crawlers on site, strengthens internal linking for SEO */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold text-slate-100">Page not found</h1>
      <p className="mt-2 text-slate-400 text-center max-w-md">
        The page you’re looking for doesn’t exist. Use the links below to find strategy and sports betting tips.
      </p>
      <nav className="mt-8 flex flex-wrap gap-4 justify-center" aria-label="Quick links">
        <Link
          href="/en"
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500"
        >
          Home (English)
        </Link>
        <Link
          href="/en/stake-mines-strategy"
          className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
        >
          Stake mines strategy
        </Link>
        <Link
          href="/en/strategies"
          className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
        >
          All strategies
        </Link>
        <Link
          href="/en/sports"
          className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
        >
          Sports betting
        </Link>
      </nav>
    </div>
  );
}
