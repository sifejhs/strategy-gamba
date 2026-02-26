"use client";

import { useCallback } from "react";

const SESSION_KEY = "sg_session_id";

function getSessionId(): string {
  if (typeof window === "undefined") return "anonymous";
  const id = localStorage.getItem(SESSION_KEY);
  return id || "anonymous";
}

export default function TrackedDownloadButton({ label }: { label: string }) {
  const handleClick = useCallback((e: React.MouseEvent) => {
    fetch("/api/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "download_click", sessionId: getSessionId() }),
    }).catch(() => {});
    // Link will still navigate to #download
  }, []);

  return (
    <a
      href="/api/download"
      aria-label="Download our software – prediction and strategy tools"
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500"
    >
      <span aria-hidden>⬇</span> {label}
    </a>
  );
}
