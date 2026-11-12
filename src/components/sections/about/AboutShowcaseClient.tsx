"use client";

import React, { useEffect, useRef, useState } from "react";
import { ShieldCheck, Zap, HardDrive, Cpu, Target, Eye } from "lucide-react";
import { ROUTES } from "@/constants/navigation";
import {
  COMPANY_INFO,
  OUTSTANDING_FEATURES,
  STATS_METRICS,
} from "@/data/company";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ActionPill } from "@/components/ui/ActionPill";

const FEATURE_ICONS = [ShieldCheck, Zap, HardDrive, Cpu];

const ABOUT_KPIS = [
  {
    id: "years-experience",
    target: 5,
    decimals: 0,
    padZero: true,
    suffix: "+",
    label: "Years Experience",
    accentClass: "text-[#0f0b24]",
  },
  {
    id: "success-rate",
    target: 98,
    decimals: 0,
    padZero: false,
    suffix: "%",
    label: "Success Rate",
    accentClass: "text-[#0c7a56]",
  },
  {
    id: "active-countries",
    target: 2,
    decimals: 0,
    padZero: true,
    suffix: "",
    label: "Active Countries",
    accentClass: "text-[#5b2ee0]",
  },
  {
    id: "client-rating",
    target: 4.9,
    decimals: 1,
    padZero: false,
    suffix: "★",
    label: "Client Rating",
    accentClass: "text-[#d97706]",
  },
] as const;

const COUNT_DURATION_MS = 1500;

function formatKpiValue(
  target: number,
  decimals: number,
  padZero: boolean,
  suffix: string,
  progress: number
): string {
  const current = Math.min(target, target * progress);
  if (decimals > 0) {
    return `${current.toFixed(decimals)}${suffix}`;
  }
  const rounded = Math.round(current);
  const padded = padZero && rounded < 10 ? `0${rounded}` : `${rounded}`;
  return `${padded}${suffix}`;
}

export function AboutShowcaseClient() {
  const storyRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);

  const [storyEntered, setStoryEntered] = useState(false);
  const [statsEntered, setStatsEntered] = useState(false);
  const [featuresEntered, setFeaturesEntered] = useState(false);
  const [countProgress, setCountProgress] = useState(0);

  const [activeFeature, setActiveFeature] = useState(0);
  const isFeaturePausedRef = useRef(false);

  // Scroll-reveal observers matching Home's StatsAndGuarantees entrance motion
  useEffect(() => {
    const observeSection = (
      el: HTMLElement | null,
      onEnter: () => void
    ): (() => void) | undefined => {
      if (!el) return undefined;

      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        const rafId = requestAnimationFrame(onEnter);
        return () => cancelAnimationFrame(rafId);
      }

      if (typeof IntersectionObserver === "undefined") {
        const rafId = requestAnimationFrame(onEnter);
        return () => cancelAnimationFrame(rafId);
      }

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            onEnter();
            observer.disconnect();
          }
        },
        { threshold: 0.14 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    };

    const cleanStory = observeSection(storyRef.current, () =>
      setStoryEntered(true)
    );
    const cleanStats = observeSection(statsRef.current, () =>
      setStatsEntered(true)
    );
    const cleanFeatures = observeSection(featuresRef.current, () =>
      setFeaturesEntered(true)
    );

    return () => {
      cleanStory?.();
      cleanStats?.();
      cleanFeatures?.();
    };
  }, []);

  // Cubic ease-out count-up + capability bar fill triggered when Stats enters viewport
  useEffect(() => {
    if (!statsEntered) return;

    let rafId = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const raw = Math.min(1, (now - startTime) / COUNT_DURATION_MS);
      const eased = 1 - Math.pow(1 - raw, 3);
      setCountProgress(eased);

      if (raw < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [statsEntered]);

  // Smooth auto-spotlight cycle across the 4 core differentiators
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isFeaturePausedRef.current && !document.hidden) {
        setActiveFeature((prev) => (prev + 1) % OUTSTANDING_FEATURES.length);
      }
    }, 2800);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* 1. About Hero */}
      <section className="relative bg-white pt-28 pb-12 sm:pt-36 sm:pb-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_62%_46%_at_50%_30%,rgba(109,63,234,0.06)_0%,rgba(140,43,255,0.02)_46%,transparent_74%)] sm:h-[480px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 text-center sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <Eyebrow label="ABOUT NEON LABZ" />

          <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-[-0.04em] text-[#0f0b24] sm:text-5xl lg:text-6xl">
            We are a leading IT and{" "}
            <span className="neon-gradient-text">digital solutions</span>{" "}
            provider
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#474269] sm:text-base">
            {COMPANY_INFO.aboutSummary}
          </p>
        </div>
      </section>

      {/* 2. Our Story Banner + Side-by-Side Vision & Mission Cards */}
      <section
        ref={storyRef}
        className="border-y border-[#0f0b24]/[0.06] bg-[#faf9fe] py-12 sm:py-16"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <div className="space-y-6">
            {/* Our Story Full-Width Featured Card */}
            <div
              className={`glass-card-strong relative overflow-hidden rounded-3xl p-6 transition-all duration-700 ease-out sm:p-10 ${
                storyEntered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#6d3fea]/35 to-transparent"
              />

              <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-5">
                  <Eyebrow label="OUR STORY" align="left" />
                  <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-[#0f0b24] sm:text-3xl lg:text-4xl">
                    A Trusted Partner for{" "}
                    <span className="neon-gradient-text">
                      Modern IT Solutions
                    </span>
                  </h2>
                  <div className="mt-6">
                    <ActionPill
                      href={ROUTES.contact}
                      label="Work With Our Team"
                    />
                  </div>
                </div>

                <div className="space-y-4 lg:col-span-7">
                  <p className="text-sm leading-relaxed text-[#474269] sm:text-base">
                    {COMPANY_INFO.companyIntro}
                  </p>
                  <p className="text-sm leading-relaxed text-[#474269] sm:text-base">
                    {COMPANY_INFO.trustedPartnerCopy}
                  </p>
                </div>
              </div>
            </div>

            {/* Our Vision & Our Mission Dual Editorial Cards */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Left Card: Our Vision */}
              <div
                style={{ transitionDelay: "120ms" }}
                className={`transition-all duration-700 ease-out ${
                  storyEntered
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-[#0f0b24]/[0.08] bg-white p-7 text-[#0f0b24] shadow-[0_12px_32px_-12px_rgba(15,11,36,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6d3fea]/35 hover:shadow-[0_20px_44px_-16px_rgba(15,11,36,0.12)] sm:p-9">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6d3fea]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc] text-[#6d3fea] transition-transform duration-300 group-hover:scale-105">
                        <Eye className="h-5 w-5" />
                      </span>
                      <span className="rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5b2ee0]">
                        OUR VISION
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em] text-[#0f0b24]">
                      Our Vision
                    </h3>

                    <div className="mt-4">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 20"
                        fill="none"
                        className="mb-1.5 -ml-1 h-4 w-5 text-[#6d3fea]/45"
                      >
                        <path
                          d="M9.5 4.5C9.5 2.84 8.16 1.5 6.5 1.5C4.84 1.5 3.5 2.84 3.5 4.5C3.5 6.16 4.84 7.5 6.5 7.5C7.05 7.5 7.56 7.35 8 7.09C7.82 9.48 6.45 11.42 4.25 12.6L5.55 14.5C8.55 12.75 10.25 9.65 10.25 5.45C10.25 5.12 9.95 4.5 9.5 4.5ZM19.5 4.5C19.5 2.84 18.16 1.5 16.5 1.5C14.84 1.5 13.5 2.84 13.5 4.5C13.5 6.16 14.84 7.5 16.5 7.5C17.05 7.5 17.56 7.35 18 7.09C17.82 9.48 16.45 11.42 14.25 12.6L15.55 14.5C18.55 12.75 20.25 9.65 20.25 5.45C20.25 5.12 19.95 4.5 19.5 4.5Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                      <blockquote className="border-l-2 border-[#6d3fea]/45 pl-4 text-sm leading-relaxed text-[#474269] italic sm:text-base">
                        &ldquo;{COMPANY_INFO.vision}&rdquo;
                      </blockquote>
                    </div>
                  </div>

                  <div className="relative z-10 mt-7 border-t border-[#0f0b24]/[0.08] pt-4">
                    <div className="flex items-center gap-2.5 text-xs font-medium text-[#645e8a]">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#6d3fea]" />
                      <span>
                        Product-driven trust • Global innovation • Lasting impact
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Our Mission */}
              <div
                style={{ transitionDelay: "220ms" }}
                className={`transition-all duration-700 ease-out ${
                  storyEntered
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-[#0f0b24]/[0.08] bg-white p-7 text-[#0f0b24] shadow-[0_12px_32px_-12px_rgba(15,11,36,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6d3fea]/35 hover:shadow-[0_20px_44px_-16px_rgba(15,11,36,0.12)] sm:p-9">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8c2bff]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc] text-[#6d3fea] transition-transform duration-300 group-hover:scale-105">
                        <Target className="h-5 w-5" />
                      </span>
                      <span className="rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5b2ee0]">
                        OUR MISSION
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em] text-[#0f0b24]">
                      Our Mission
                    </h3>

                    <div className="mt-4">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 20"
                        fill="none"
                        className="mb-1.5 -ml-1 h-4 w-5 text-[#6d3fea]/45"
                      >
                        <path
                          d="M9.5 4.5C9.5 2.84 8.16 1.5 6.5 1.5C4.84 1.5 3.5 2.84 3.5 4.5C3.5 6.16 4.84 7.5 6.5 7.5C7.05 7.5 7.56 7.35 8 7.09C7.82 9.48 6.45 11.42 4.25 12.6L5.55 14.5C8.55 12.75 10.25 9.65 10.25 5.45C10.25 5.12 9.95 4.5 9.5 4.5ZM19.5 4.5C19.5 2.84 18.16 1.5 16.5 1.5C14.84 1.5 13.5 2.84 13.5 4.5C13.5 6.16 14.84 7.5 16.5 7.5C17.05 7.5 17.56 7.35 18 7.09C17.82 9.48 16.45 11.42 14.25 12.6L15.55 14.5C18.55 12.75 20.25 9.65 20.25 5.45C20.25 5.12 19.95 4.5 19.5 4.5Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                      <blockquote className="border-l-2 border-[#6d3fea]/45 pl-4 text-sm leading-relaxed text-[#474269] italic sm:text-base">
                        &ldquo;{COMPANY_INFO.mission}&rdquo;
                      </blockquote>
                    </div>
                  </div>

                  <div className="relative z-10 mt-7 border-t border-[#0f0b24]/[0.08] pt-4">
                    <div className="flex items-center gap-2.5 text-xs font-medium text-[#645e8a]">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#6d3fea]" />
                      <span>
                        Real-world solutions • Empowering entrepreneurs • Lasting
                        value
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Performance & Scale (Scroll-Triggered Count-Up KPIs + Animated Capability Bars) */}
      <section ref={statsRef} className="bg-white py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <div className="stats-panel-surface relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#6d3fea]/35 to-transparent"
            />

            <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <Eyebrow label="PERFORMANCE & SCALE" align="left" />
                <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-[#0f0b24] sm:text-4xl">
                  Measurable{" "}
                  <span className="neon-gradient-text">Standards</span> Across
                  Every Engagement
                </h2>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5">
                  {ABOUT_KPIS.map((kpi, idx) => (
                    <div
                      key={kpi.id}
                      style={{ transitionDelay: `${idx * 90}ms` }}
                      className={`transition-all duration-700 ease-out ${
                        statsEntered
                          ? "translate-y-0 opacity-100"
                          : "translate-y-5 opacity-0"
                      }`}
                    >
                      <div className="group h-full rounded-2xl border border-[#0f0b24]/[0.08] bg-[#faf9fe] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#6d3fea]/30 hover:bg-white">
                        <div
                          className={`font-mono text-2xl font-semibold tabular-nums transition-transform duration-300 group-hover:scale-105 sm:text-3xl ${kpi.accentClass}`}
                        >
                          {formatKpiValue(
                            kpi.target,
                            kpi.decimals,
                            kpi.padZero,
                            kpi.suffix,
                            countProgress
                          )}
                        </div>
                        <span
                          aria-hidden="true"
                          className="mt-2 block h-0.5 w-6 rounded-full bg-gradient-to-r from-[#6d3fea] via-[#8c2bff] to-[#e10afa] opacity-75 transition-all duration-300 group-hover:w-12 group-hover:opacity-100"
                        />
                        <div className="mt-2 text-xs text-[#645e8a]">
                          {kpi.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5 lg:col-span-7">
                {STATS_METRICS.capabilityBars.map((bar, idx) => {
                  const animatedPercent = Math.round(bar.value * countProgress);
                  return (
                    <div
                      key={bar.label}
                      style={{ transitionDelay: `${idx * 90}ms` }}
                      className={`transition-all duration-700 ease-out ${
                        statsEntered
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-[#0f0b24]">
                          {bar.label}
                        </span>
                        <span className="font-mono font-semibold text-[#5b2ee0] tabular-nums">
                          {animatedPercent}%
                        </span>
                      </div>
                      <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-[#0f0b24]/[0.06]">
                        <div
                          className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-[#6d3fea] via-[#8c2bff] to-[#c312fb] transition-[width] duration-1000 ease-out"
                          style={{
                            width: statsEntered ? `${bar.value}%` : "0%",
                            transitionDelay: `${140 + idx * 90}ms`,
                          }}
                        >
                          <span
                            aria-hidden="true"
                            className="animate-bar-shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Strengths (Interactive Auto-Spotlight Grid) */}
      <section
        ref={featuresRef}
        className="border-t border-[#0f0b24]/[0.06] bg-[#faf9fe] py-12 sm:py-16"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <div className="text-center">
            <Eyebrow label="OUTSTANDING IT FEATURES" />
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-[#0f0b24] sm:text-4xl">
              Why Teams Choose{" "}
              <span className="neon-gradient-text">Neon Labz</span>
            </h2>
          </div>

          <div
            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
            onPointerLeave={(e) => {
              if (e.pointerType !== "touch") {
                isFeaturePausedRef.current = false;
              }
            }}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                isFeaturePausedRef.current = false;
              }
            }}
          >
            {OUTSTANDING_FEATURES.map((feat, idx) => {
              const Icon = FEATURE_ICONS[idx % FEATURE_ICONS.length];
              const isActive = idx === activeFeature;

              return (
                <div
                  key={feat.title}
                  style={{ transitionDelay: `${idx * 85}ms` }}
                  className={`transition-all duration-700 ease-out ${
                    featuresEntered
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onPointerEnter={(e) => {
                      if (e.pointerType !== "touch") {
                        isFeaturePausedRef.current = true;
                        setActiveFeature(idx);
                      }
                    }}
                    onFocus={() => {
                      isFeaturePausedRef.current = true;
                      setActiveFeature(idx);
                    }}
                    onClick={() => {
                      setActiveFeature(idx);
                      isFeaturePausedRef.current = false;
                    }}
                    className={`group relative flex h-full w-full flex-col items-start overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 ${
                      isActive
                        ? "ios-glass-btn-active -translate-y-1"
                        : "glass-card hover:-translate-y-1 hover:border-[#6d3fea]/35"
                    }`}
                  >
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-transparent via-[#8c2bff] to-transparent opacity-100"
                          : "opacity-0"
                      }`}
                    />

                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "scale-105 border-transparent bg-gradient-to-br from-[#6d3fea] to-[#9333ea] text-white shadow-[0_8px_18px_-6px_rgba(109,63,234,0.45)]"
                          : "border-[#0f0b24]/[0.08] bg-[#f6f4fc] text-[#5b2ee0]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>

                    <h3 className="mt-4 text-lg font-semibold text-[#0f0b24]">
                      {feat.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#474269]">
                      {feat.description}
                    </p>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
