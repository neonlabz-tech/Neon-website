"use client";

import React, { useEffect, useRef, useState } from "react";
import { HOME_COMPANY_STATS } from "@/data/company";
import type { StatMetricItem } from "@/types";

const COUNT_DURATION_MS = 1600;

function formatStatValue(item: StatMetricItem, progress: number): string {
  const current = Math.min(item.target, item.target * progress);
  const decimals = item.decimals ?? 0;
  const suffix = item.suffix ?? "";

  if (decimals > 0) {
    return `${current.toFixed(decimals)}${suffix}`;
  }

  const rounded = Math.round(current);
  const formatted = item.padZero && rounded < 10 ? `0${rounded}` : `${rounded}`;
  return `${formatted}${suffix}`;
}

export function StatsAndGuarantees() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      const rafId = requestAnimationFrame(() => setHasEntered(true));
      return () => cancelAnimationFrame(rafId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEntered) return;

    let rafId = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const raw = Math.min(1, (now - startTime) / COUNT_DURATION_MS);
      const eased = 1 - Math.pow(1 - raw, 3);
      setProgress(eased);

      if (raw < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [hasEntered]);

  return (
    <section
      id="stats"
      ref={sectionRef}
      aria-label="Company Performance Metrics"
      className="border-y border-[#0f0b24]/[0.06] bg-[#faf9fe] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
        {/* Midnight Obsidian Master Card with Glowing Neon Highlights */}
        <div className="dark relative overflow-hidden rounded-3xl border border-white/15 bg-[#09061a] bg-gradient-to-b from-[#09061a] via-[#120d31] to-[#1a1345] px-6 py-12 text-center text-white shadow-[0_28px_70px_-20px_rgba(15,11,36,0.5)] sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          {/* Top illuminated laser rail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/2 h-[1.5px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c312fb]/70 to-transparent"
          />

          {/* Bottom subtle accent rail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#7975ff]/40 to-transparent"
          />

          {/* Ambient cosmic plasma glow behind the card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 h-[380px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(140,43,255,0.22)_0%,rgba(109,63,234,0.12)_45%,transparent_70%)] blur-3xl will-change-transform"
          />

          <div className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-10 lg:grid-cols-4 lg:gap-8">
            {HOME_COMPANY_STATS.map((stat, index) => {
              const displayValue = formatStatValue(stat, progress);
              const finalValue = formatStatValue(stat, 1);
              const isNotLast = index < HOME_COMPANY_STATS.length - 1;

              return (
                <div
                  key={stat.id}
                  style={{ transitionDelay: `${index * 110}ms` }}
                  className={`relative transition-all duration-700 ease-out ${
                    hasEntered
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  {/* Vertical subtle hairline divider on desktop */}
                  {isNotLast ? (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-4 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/12 to-transparent lg:block"
                    />
                  ) : null}

                  <div className="group flex flex-col items-center text-center transition-transform duration-300 ease-out hover:-translate-y-1">
                    <span className="sr-only">
                      {finalValue} {stat.label}
                    </span>

                    <div
                      aria-hidden="true"
                      className="relative text-4xl font-bold tracking-[-0.03em] text-white tabular-nums drop-shadow-[0_4px_24px_rgba(140,43,255,0.4)] transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#d7c9ff] group-hover:to-[#38bdf8] group-hover:bg-clip-text group-hover:text-transparent sm:text-6xl lg:text-7xl"
                    >
                      {/* Localized radial aura behind number */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -z-10 scale-150 rounded-full bg-gradient-to-tr from-[#7975ff]/30 via-[#c312fb]/25 to-transparent blur-2xl opacity-60 transition-opacity duration-300 group-hover:scale-175 group-hover:opacity-100"
                      />
                      {displayValue}
                    </div>

                    {/* Luminous neon underline that expands on hover */}
                    <span
                      aria-hidden="true"
                      className="mt-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-[#7975ff] via-[#c312fb] to-[#e10afa] shadow-[0_0_14px_rgba(195,18,251,0.7)] transition-all duration-300 group-hover:w-20 sm:mt-4"
                    />

                    <p className="mt-2.5 text-xs font-medium text-white/75 transition-colors duration-300 group-hover:text-white sm:mt-3 sm:text-base">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
