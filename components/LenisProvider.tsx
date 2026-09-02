"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;

    const startLenis = () => {
      if (mediaQuery.matches || lenis) return;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 2,
        autoRaf: true,
      });
    };

    const stopLenis = () => {
      lenis?.destroy();
      lenis = null;
    };

    const handlePreferenceChange = () => {
      if (mediaQuery.matches) {
        stopLenis();
      } else {
        startLenis();
      }
    };

    startLenis();
    mediaQuery.addEventListener("change", handlePreferenceChange);

    return () => {
      mediaQuery.removeEventListener("change", handlePreferenceChange);
      stopLenis();
    };
  }, []);

  return <>{children}</>;
}
