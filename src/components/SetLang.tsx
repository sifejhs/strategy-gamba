"use client";

import { useEffect } from "react";

export default function SetLang({ lang }: { lang: string }) {
  useEffect(() => {
    if (typeof document !== "undefined" && document.documentElement) {
      document.documentElement.lang = lang;
    }
  }, [lang]);
  return null;
}
