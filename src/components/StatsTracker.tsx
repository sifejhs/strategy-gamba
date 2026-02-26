"use client";

import { useEffect, useRef } from "react";

const SESSION_KEY = "sg_session_id";

function getSessionId(): string {
  if (typeof window === "undefined") return "anonymous";
  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = "s_" + Math.random().toString(36).slice(2) + "_" + Date.now();
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export default function StatsTracker() {
  const sent = useRef(false);
  useEffect(() => {
    if (sent.current) return;
    const path = window.location.pathname;
    if (path.startsWith("/admin")) return;
    sent.current = true;
    fetch("/api/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "pageview", sessionId: getSessionId() }),
    }).catch(() => {});
  }, []);
  return null;
}
