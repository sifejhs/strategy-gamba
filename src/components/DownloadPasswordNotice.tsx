/** Big, visible archive password – shown on every download section across the site */
const PASSWORD = "1234";

export default function DownloadPasswordNotice() {
  return (
    <div className="mt-3 rounded-lg border-2 border-amber-500/60 bg-amber-950/50 px-4 py-3 text-center">
      <p className="text-sm font-medium text-amber-200/90 uppercase tracking-wide">
        Archive password
      </p>
      <p className="mt-1 text-2xl font-bold text-amber-400 tracking-wide">
        {PASSWORD}
      </p>
    </div>
  );
}
