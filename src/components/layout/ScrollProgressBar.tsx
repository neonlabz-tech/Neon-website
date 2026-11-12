"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollProgressBar() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      rafId = 0;
      const bar = barRef.current;
      if (!bar) return;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        maxScroll > 0
          ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
          : 0;

      bar.style.transform = `scaleX(${progress})`;
    };

    const scheduleUpdate = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(scheduleUpdate);
      resizeObserver.observe(document.body);
    }

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver?.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-[#6d3fea]/10 dark:bg-white/[0.05]"
    >
      <div
        ref={barRef}
        style={{ transform: "scaleX(0)" }}
        className="h-full w-full origin-left bg-gradient-to-r from-[#6d3fea] via-[#c312fb] to-[#0ea5e9] shadow-[0_0_8px_rgba(109,63,234,0.35)] will-change-transform dark:from-[#8b5cf6] dark:via-[#e879f9] dark:to-[#38bdf8] dark:shadow-[0_0_12px_rgba(168,85,247,0.65)]"
      />
    </div>
  );
}
