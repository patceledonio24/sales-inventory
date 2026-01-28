"use client";

import { useEffect } from "react";

export default function AutoPrint() {
  useEffect(() => {
    // Give the browser a moment to layout before printing
    const t = window.setTimeout(() => {
      window.print();
    }, 300);

    return () => window.clearTimeout(t);
  }, []);

  return null;
}
