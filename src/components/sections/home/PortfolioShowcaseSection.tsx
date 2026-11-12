"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ROUTES } from "@/constants/navigation";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ActionPill } from "@/components/ui/ActionPill";

const FEATURED_PORTFOLIO_ITEMS = PORTFOLIO_ITEMS.slice(0, 6);
const FEATURED_COUNT = FEATURED_PORTFOLIO_ITEMS.length;
const START_HOLD = 0.06;
const END_HOLD = 0.14;
const ACTIVE_SPAN = 1 - START_HOLD - END_HOLD;

export function PortfolioShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const maxShiftRef = useRef(0);
  const rafIdRef = useRef(0);
  const lastFrameTimeRef = useRef(0);

  const [isDesktop, setIsDesktop] = useState(false);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const applyVisualState = useCallback((progress: number) => {
    const track = trackRef.current;
    if (!track) return;

    const maxShift = maxShiftRef.current;
    const offsetX = progress * maxShift;
    track.style.transform = `translate3d(-${offsetX.toFixed(2)}px, 0, 0)`;

    if (progressBarRef.current) {
      const pct = 50 + progress * 50;
      progressBarRef.current.style.width = `${pct.toFixed(1)}%`;
    }

    const maxStep = Math.max(1, FEATURED_COUNT - 3);
    const nextStep = Math.min(maxStep, Math.max(0, Math.round(progress * maxStep)));
    setActiveIndex((prev) => (prev === nextStep ? prev : nextStep));
    setCanPrev(progress > 0.015);
    setCanNext(progress < 0.985);
  }, []);

  const tickAnimation = useCallback(
    function step(now: number) {
      const prevTime = lastFrameTimeRef.current || now;
      const dt = Math.min(0.05, Math.max(0.001, (now - prevTime) / 1000));
      lastFrameTimeRef.current = now;

      const target = targetProgressRef.current;
      const current = currentProgressRef.current;
      const diff = target - current;

      if (Math.abs(diff) <= 0.0004) {
        currentProgressRef.current = target;
        applyVisualState(target);
        rafIdRef.current = 0;
        lastFrameTimeRef.current = 0;
        return;
      }

      // Frame-rate-independent damping so mouse wheel steps glide calmly and settle when scrolling stops
      const alpha = 1 - Math.exp(-11 * dt);
      const next = current + diff * alpha;
      currentProgressRef.current = next;
      applyVisualState(next);

      rafIdRef.current = requestAnimationFrame(step);
    },
    [applyVisualState],
  );

  const syncFromScroll = useCallback(
    (immediate = false) => {
      const section = sectionRef.current;
      const stage = stageRef.current;
      const track = trackRef.current;
      if (!section || !stage || !track) return;

      const desktop = window.innerWidth >= 1024;
      setIsDesktop((prev) => (prev === desktop ? prev : desktop));

      if (!desktop) {
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = 0;
        }
        lastFrameTimeRef.current = 0;
        targetProgressRef.current = 0;
        currentProgressRef.current = 0;
        maxShiftRef.current = 0;
        track.style.transform = "";
        return;
      }

      const scrollable = section.offsetHeight - window.innerHeight;
      const maxShift = Math.max(0, track.scrollWidth - stage.clientWidth);
      maxShiftRef.current = maxShift;

      if (scrollable <= 0 || maxShift <= 0) {
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = 0;
        }
        targetProgressRef.current = 0;
        currentProgressRef.current = 0;
        track.style.transform = "";
        if (progressBarRef.current) {
          progressBarRef.current.style.width = "100%";
        }
        setCanPrev(false);
        setCanNext(false);
        setActiveIndex(0);
        return;
      }

      const rect = section.getBoundingClientRect();
      const raw = Math.min(1, Math.max(0, -rect.top / scrollable));
      // Lock page vertically via sticky runway: settle briefly, glide steadily left-to-right across all 6 projects, then release down
      const targetProgress =
        raw <= START_HOLD
          ? 0
          : raw >= 1 - END_HOLD
            ? 1
            : (raw - START_HOLD) / ACTIVE_SPAN;

      targetProgressRef.current = targetProgress;

      if (immediate) {
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = 0;
        }
        lastFrameTimeRef.current = 0;
        currentProgressRef.current = targetProgress;
        applyVisualState(targetProgress);
        return;
      }

      if (!rafIdRef.current) {
        lastFrameTimeRef.current = 0;
        rafIdRef.current = requestAnimationFrame(tickAnimation);
      }
    },
    [applyVisualState, tickAnimation],
  );

  useEffect(() => {
    const handleScroll = () => syncFromScroll(false);
    const handleResize = () => syncFromScroll(true);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      if (stageRef.current) resizeObserver.observe(stageRef.current);
      if (trackRef.current) resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    syncFromScroll(true);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = 0;
      }
      resizeObserver?.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [syncFromScroll]);

  const scrollToStep = (targetStep: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const scrollable = section.offsetHeight - window.innerHeight;
    if (scrollable <= 0) return;

    const maxStep = Math.max(1, FEATURED_COUNT - 3);
    const clampedStep = Math.min(maxStep, Math.max(0, targetStep));
    const rawTarget = START_HOLD + (clampedStep / maxStep) * ACTIVE_SPAN;
    const sectionTopDoc = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTopDoc + scrollable * rawTarget,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative bg-white py-16 sm:py-24 lg:h-[420vh] lg:py-0"
    >
      <div className="lg:sticky lg:top-0 lg:flex lg:min-h-dvh lg:flex-col lg:justify-center lg:pt-[76px] lg:pb-6">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow label="PORTFOLIO & SOLUTIONS" align="left" />
              <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-[-0.03em] text-[#0f0b24] sm:text-4xl lg:mt-3 lg:text-[42px] xl:text-5xl">
                Software Built to{" "}
                <span className="neon-gradient-text">Perform in Production</span>
              </h2>
            </div>
            <ActionPill href={ROUTES.portfolio} label="View All Case Studies" />
          </div>

          {/* Desktop pinned horizontal viewport (stops vertical page movement while gliding across all 6 projects, then continues down) */}
          <div className="relative mt-8 lg:mt-7">
            <div ref={stageRef} className="relative overflow-hidden py-2">
              {isDesktop && canPrev ? (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white/90 to-transparent"
                />
              ) : null}
              {isDesktop && canNext ? (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white/90 to-transparent"
                />
              ) : null}

              <div
                ref={trackRef}
                className="grid grid-cols-1 gap-5 will-change-transform md:grid-cols-2 lg:grid-cols-none lg:grid-flow-col lg:auto-cols-[calc((100%-40px)/3)]"
              >
                {FEATURED_PORTFOLIO_ITEMS.map((item) => (
                  <Link
                    key={item.slug}
                    href={`${ROUTES.portfolio}/${item.slug}`}
                    className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6d3fea]/40"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px opacity-75 transition-opacity group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
                      }}
                    />

                    <div>
                      {/* Preview Cover via next/image */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc] lg:aspect-auto lg:h-[clamp(150px,22dvh,225px)]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        {item.liveUrl ? (
                          <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#0c7a56] shadow-sm backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#0c7a56]" />
                            Live Project
                          </span>
                        ) : null}
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-2">
                        <span className="rounded-full border border-[#6d3fea]/18 bg-[#f6f4fc] px-3 py-1 text-[11px] font-medium text-[#5b2ee0]">
                          {item.category}
                        </span>
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#0f0b24]/10 bg-[#faf9fe] text-[#474269] transition-all group-hover:border-[#6d3fea] group-hover:bg-[#6d3fea] group-hover:text-white">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>

                      <h3 className="mt-3 text-xl font-medium tracking-[-0.02em] text-[#0f0b24]">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-relaxed text-[#474269]">
                        {item.tagline}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2 border-t border-[#0f0b24]/[0.08] pt-3.5">
                      {item.metrics.map((metric) => (
                        <span
                          key={metric.label}
                          className="rounded-lg border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-2.5 py-1 font-mono text-[11px] text-[#474269]"
                        >
                          {metric.value}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop horizontal scroll progress & quick left/right controls */}
            <div className="mt-3.5 hidden items-center justify-between gap-4 lg:flex">
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-32 overflow-hidden rounded-full bg-[#0f0b24]/[0.08]">
                  <div
                    ref={progressBarRef}
                    style={{ width: "50%" }}
                    className="h-full rounded-full bg-gradient-to-r from-[#7975ff] via-[#c312fb] to-[#e10afa]"
                  />
                </div>
                <span className="font-mono text-xs font-medium tracking-wider text-[#645e8a] tabular-nums">
                  {String(Math.min(activeIndex + 3, FEATURED_COUNT)).padStart(2, "0")} /{" "}
                  {String(FEATURED_COUNT).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Scroll portfolio left"
                  disabled={!canPrev}
                  onClick={() => scrollToStep(activeIndex - 1)}
                  className="ios-glass-btn inline-flex h-9 w-9 items-center justify-center rounded-full text-[#0f0b24] transition-opacity disabled:pointer-events-none disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Scroll portfolio right"
                  disabled={!canNext}
                  onClick={() => scrollToStep(activeIndex + 1)}
                  className="ios-glass-btn inline-flex h-9 w-9 items-center justify-center rounded-full text-[#0f0b24] transition-opacity disabled:pointer-events-none disabled:opacity-40"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
