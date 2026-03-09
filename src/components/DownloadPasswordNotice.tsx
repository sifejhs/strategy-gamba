/** Big, visible archive password – shown on every download section (all pages & subpages) */
const PASSWORD = "1234";

export default function DownloadPasswordNotice() {
  return (
    <div className="mt-3 rounded-xl border-2 border-amber-500/70 bg-amber-950/60 px-5 py-4 text-center shadow-lg">
      <p className="text-sm font-semibold text-amber-200 uppercase tracking-wider">
        Archive password (for .zip / .rar)
      </p>
      <p className="mt-2 text-3xl font-bold text-amber-400 tracking-wide tabular-nums">
        {PASSWORD}
      </p>
    </div>
  );
}
