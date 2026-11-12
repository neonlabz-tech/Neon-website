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
        <div className="stats-panel-surface relative overflow-hidden rounded-3xl px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#7975ff]/45 to-transparent"
          />

          <div className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-10 lg:grid-cols-4 lg:gap-8">
            {HOME_COMPANY_STATS.map((stat, index) => {
              const displayValue = formatStatValue(stat, progress);
              const finalValue = formatStatValue(stat, 1);

              return (
                <div
                  key={stat.id}
                  style={{ transitionDelay: `${index * 110}ms` }}
                  className={`transition-all duration-700 ease-out ${
                    hasEntered
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  <div className="group flex flex-col items-center text-center transition-transform duration-300 ease-out hover:-translate-y-1">
                    <span className="sr-only">
                      {finalValue} {stat.label}
                    </span>

                    <div
                      aria-hidden="true"
                      className="relative text-4xl font-semibold tracking-[-0.03em] text-[#0f0b24] tabular-nums transition-transform duration-300 group-hover:scale-105 sm:text-6xl lg:text-7xl"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -z-10 scale-125 rounded-full bg-[#7048ff]/12 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                      />
                      {displayValue}
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-3 h-0.5 w-8 rounded-full bg-gradient-to-r from-[#7975ff] via-[#a492ed] to-[#e10afa] opacity-75 transition-all duration-300 group-hover:w-16 group-hover:opacity-100 sm:mt-4"
                    />

                    <p className="mt-2.5 text-xs font-medium text-[#474269] sm:mt-3 sm:text-base">
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
