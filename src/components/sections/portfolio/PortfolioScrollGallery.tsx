"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { ROUTES } from "@/constants/navigation";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { Eyebrow } from "@/components/ui/Eyebrow";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface FanPreset {
  x: number;
  y: number;
  rot: number;
  scale: number;
  z: number;
}

const FAN_PRESETS: FanPreset[] = [
  { x: 0, y: 0, rot: 0, scale: 1, z: 120 },
  { x: -24, y: 8, rot: -4.5, scale: 0.975, z: 110 },
  { x: 24, y: 8, rot: 4.5, scale: 0.975, z: 100 },
  { x: -46, y: 16, rot: -8.5, scale: 0.95, z: 90 },
  { x: 46, y: 16, rot: 8.5, scale: 0.95, z: 80 },
  { x: 64, y: 24, rot: 11.5, scale: 0.925, z: 70 },
  { x: -60, y: 24, rot: -10.5, scale: 0.92, z: 60 },
  { x: 54, y: 28, rot: 9.5, scale: 0.91, z: 50 },
  { x: -50, y: 30, rot: -8.0, scale: 0.9, z: 40 },
  { x: 40, y: 32, rot: 6.5, scale: 0.89, z: 30 },
  { x: -32, y: 34, rot: -5.0, scale: 0.88, z: 20 },
  { x: 18, y: 36, rot: 3.0, scale: 0.87, z: 10 },
];

// Mobile-safe stacked deck presets: stays inside 1-col viewport bounds with zero horizontal clipping
const MOBILE_FAN_PRESETS: FanPreset[] = [
  { x: 0, y: 0, rot: 0, scale: 1, z: 120 },
  { x: 0, y: 14, rot: -1.4, scale: 0.935, z: 110 },
  { x: 0, y: 24, rot: 1.4, scale: 0.905, z: 100 },
  { x: 0, y: 34, rot: -1.8, scale: 0.87, z: 90 },
  { x: 0, y: 42, rot: 1.8, scale: 0.835, z: 80 },
  { x: 0, y: 49, rot: -2.1, scale: 0.8, z: 70 },
  { x: 0, y: 52, rot: 1.6, scale: 0.785, z: 60 },
  { x: 0, y: 54, rot: -1.4, scale: 0.77, z: 50 },
  { x: 0, y: 56, rot: 1.2, scale: 0.76, z: 40 },
  { x: 0, y: 57, rot: -1.0, scale: 0.75, z: 30 },
  { x: 0, y: 58, rot: 0.8, scale: 0.74, z: 20 },
  { x: 0, y: 59, rot: -0.6, scale: 0.735, z: 10 },
];

const STACK_BACKING_CLASSES = [
  "bg-white border-[#0f0b24]/20 shadow-[0_20px_48px_-14px_rgba(15,11,36,0.16)]",
  "bg-[#faf9fe] border-[#0f0b24]/[0.18] shadow-[0_14px_34px_-14px_rgba(15,11,36,0.12)]",
  "bg-[#f6f4fc] border-[#0f0b24]/[0.18] shadow-[0_14px_34px_-14px_rgba(15,11,36,0.12)]",
  "bg-[#f4f7fd] border-[#0f0b24]/[0.18] shadow-[0_14px_34px_-14px_rgba(15,11,36,0.12)]",
  "bg-[#f3fbf7] border-[#0f0b24]/[0.18] shadow-[0_14px_34px_-14px_rgba(15,11,36,0.12)]",
  "bg-[#f8f5fe] border-[#0f0b24]/[0.18] shadow-[0_14px_34px_-14px_rgba(15,11,36,0.12)]",
];

// Hold the stacked deck pinned briefly after reaching it before separating smoothly
const PIN_HOLD = 100;
const PIN_SPREAD = 320;
const PIN_TOTAL = PIN_HOLD + PIN_SPREAD;
const ITEM_COUNT = PORTFOLIO_ITEMS.length;

interface CardOffsets {
  dx: number;
  dy: number;
}

interface DeckGeometry {
  deckH: number;
  fullH: number;
  mobile: boolean;
  offsets: CardOffsets[];
}

export function PortfolioScrollGallery() {
  const [isDeckStacked, setIsDeckStacked] = useState(true);

  const runwayRef = useRef<HTMLDivElement>(null);
  const gridWrapperRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const backingRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hintRef = useRef<HTMLDivElement>(null);
  const geometryRef = useRef<DeckGeometry | null>(null);
  const isStackedRef = useRef(true);

  const getStickyTop = () => {
    if (window.innerWidth < 640) return 68;
    if (window.innerWidth < 768) return 80;
    return 88;
  };

  const applyScrollTransforms = useCallback(() => {
    const geom = geometryRef.current;
    const runway = runwayRef.current;
    const wrapper = gridWrapperRef.current;
    if (!geom || !runway || !wrapper) return;

    const presets = geom.mobile ? MOBILE_FAN_PRESETS : FAN_PRESETS;

    const stickyTop = getStickyTop();
    const runwayRect = runway.getBoundingClientRect();

    // Wait until user reaches the cards collection (stickyTop) + brief PIN_HOLD delay, then spread smoothly
    const scrolledIntoSection = Math.max(0, stickyTop - runwayRect.top);
    const raw = (scrolledIntoSection - PIN_HOLD) / PIN_SPREAD;
    const clamped = Math.min(1, Math.max(0, raw));
    const eased = clamped * clamped * (3 - 2 * clamped);
    const inv = 1 - eased;

    const stackedNow = eased < 0.85;
    if (stackedNow !== isStackedRef.current) {
      isStackedRef.current = stackedNow;
      setIsDeckStacked(stackedNow);
    }

    if (hintRef.current) {
      const hintOpacity = Math.max(0, 1 - eased * 2.5);
      hintRef.current.style.opacity = hintOpacity.toFixed(3);
      hintRef.current.style.pointerEvents = hintOpacity > 0.1 ? "auto" : "none";
      hintRef.current.style.visibility =
        hintOpacity > 0.02 ? "visible" : "hidden";
    }

    if (inv <= 0.001) {
      runway.style.height = `${(geom.fullH + PIN_TOTAL).toFixed(1)}px`;
      wrapper.style.height = "";
      for (let i = 0; i < ITEM_COUNT; i += 1) {
        const slot = slotRefs.current[i];
        const backing = backingRefs.current[i];
        const content = contentRefs.current[i];
        if (slot) {
          slot.style.transform = "";
          slot.style.transformOrigin = "";
          slot.style.zIndex = "";
        }
        if (backing) {
          backing.style.opacity = "0";
        }
        if (content) {
          content.style.opacity = "1";
        }
      }
      return;
    }

    const currentH = geom.deckH + (geom.fullH - geom.deckH) * eased;
    wrapper.style.height = `${currentH.toFixed(1)}px`;
    runway.style.height = `${(currentH + PIN_TOTAL).toFixed(1)}px`;

    for (let i = 0; i < ITEM_COUNT; i += 1) {
      const slot = slotRefs.current[i];
      const offset = geom.offsets[i];
      if (!slot || !offset) continue;

      const preset = presets[i] ?? presets[presets.length - 1];
      const tx = (offset.dx + preset.x) * inv;
      const ty = (offset.dy + preset.y) * inv;
      const rot = preset.rot * inv;
      const scale = 1 - (1 - preset.scale) * inv;

      slot.style.transformOrigin = "50% 82%";
      slot.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
      slot.style.zIndex = String(preset.z);

      const backing = backingRefs.current[i];
      if (backing) {
        backing.style.opacity = inv.toFixed(3);
      }

      const content = contentRefs.current[i];
      if (content) {
        content.style.opacity =
          i === 0 ? "1" : (0.1 + 0.9 * eased).toFixed(3);
      }
    }
  }, []);

  const measureGeometry = useCallback(() => {
    const grid = gridRef.current;
    if (!grid || ITEM_COUNT === 0) return;

    const slots = slotRefs.current.slice(0, ITEM_COUNT);
    if (slots.some((el) => !el)) return;

    const isMobile = window.innerWidth < 768;
    const c0 = slots[0]!;
    const deckLeft = (grid.clientWidth - c0.offsetWidth) / 2;
    const deckTop = c0.offsetTop + (isMobile ? 2 : 6);
    const deckH = c0.offsetHeight + (isMobile ? 68 : 60);

    let fullH = 0;
    const offsets: CardOffsets[] = slots.map((slot) => {
      const el = slot!;
      fullH = Math.max(fullH, el.offsetTop + el.offsetHeight);
      return {
        dx: deckLeft - el.offsetLeft,
        dy: deckTop - el.offsetTop,
      };
    });

    geometryRef.current = {
      deckH,
      fullH,
      mobile: isMobile,
      offsets,
    };

    applyScrollTransforms();
  }, [applyScrollTransforms]);

  useIsomorphicLayoutEffect(() => {
    measureGeometry();
  }, [measureGeometry]);

  useEffect(() => {
    let rafId = 0;
    let lastWidth = window.innerWidth;

    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          rafId = 0;
          applyScrollTransforms();
        });
      }
    };

    const handleGridResize = () => {
      measureGeometry();
    };

    const handleWindowResize = () => {
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        measureGeometry();
      }
    };

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && gridRef.current) {
      resizeObserver = new ResizeObserver(handleGridResize);
      resizeObserver.observe(gridRef.current);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleWindowResize, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver?.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [applyScrollTransforms, measureGeometry]);

  const spreadCardsOnScroll = () => {
    const runway = runwayRef.current;
    if (!runway) return;
    const runwayDocTop = runway.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: runwayDocTop - getStickyTop() + PIN_TOTAL + 8,
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-label="Our Portfolio Projects"
      className="relative bg-white pb-12 sm:pb-16"
    >
      {/* Top atmospheric radial glow synced with Services editorial white surface */}
      <div className="relative bg-white pt-20 pb-2 sm:pt-24 sm:pb-3">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(ellipse_62%_46%_at_50%_30%,rgba(109,63,234,0.06)_0%,rgba(140,43,255,0.02)_46%,transparent_74%)] sm:h-[420px]"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 text-center sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <Eyebrow label="OUR PORTFOLIO" />
          <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-medium tracking-[-0.04em] text-[#0f0b24] sm:mt-4 sm:text-5xl lg:text-6xl">
            Solutions Engineered for{" "}
            <span className="neon-gradient-text">Real Business Growth</span>
          </h1>
        </div>
      </div>

      {/* Sticky Scroll Runway: Keeps portfolio deck stacked on first paint, fans open as user scrolls */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
        <div ref={runwayRef} className="relative mt-4 sm:mt-6">
          <div className="sticky top-[68px] sm:top-20 md:top-[88px]">
            <div ref={gridWrapperRef} className="relative">
              <div
                ref={gridRef}
                className="grid auto-rows-fr grid-cols-1 gap-5 sm:gap-6 md:auto-rows-auto md:grid-cols-2"
              >
                {PORTFOLIO_ITEMS.map((item, index) => {
                  const isBuriedInDeck = isDeckStacked && index > 0;
                  const backingClass =
                    STACK_BACKING_CLASSES[
                      index % STACK_BACKING_CLASSES.length
                    ];

                  return (
                    <div
                      key={item.slug}
                      ref={(el) => {
                        slotRefs.current[index] = el;
                      }}
                      className="relative will-change-transform"
                    >
                      <article
                        id={item.slug}
                        onClick={(e) => {
                          if (isBuriedInDeck) {
                            e.preventDefault();
                            spreadCardsOnScroll();
                          }
                        }}
                        className={`glass-card isolate group relative flex h-full scroll-mt-28 flex-col justify-between overflow-hidden rounded-3xl !border-[1.5px] !border-[#0f0b24]/20 p-4 shadow-[0_14px_36px_-14px_rgba(15,11,36,0.14)] transition-[border-color,box-shadow,transform] duration-300 dark:!border-white/25 sm:p-5 lg:p-6 ${
                          isBuriedInDeck
                            ? "cursor-pointer"
                            : "hover:-translate-y-1 hover:!border-[#6d3fea]/50 hover:shadow-[0_20px_44px_-16px_rgba(15,11,36,0.16)]"
                        }`}
                      >
                        {/* Solid card plate active only while stacked in the fanned deck */}
                        <div
                          ref={(el) => {
                            backingRefs.current[index] = el;
                          }}
                          aria-hidden="true"
                          className={`pointer-events-none absolute inset-0 -z-10 rounded-3xl border-[1.5px] ${backingClass}`}
                        />

                        <div
                          ref={(el) => {
                            contentRefs.current[index] = el;
                          }}
                          className="flex h-full flex-col justify-between"
                        >
                          <div>
                            {/* Top visual header row */}
                            <div className="flex items-start justify-between gap-3 sm:gap-4">
                              <div className="flex min-w-0 flex-wrap items-center gap-2.5 sm:gap-3">
                                <div
                                  className={`relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-[#0f0b24]/[0.08] sm:h-12 sm:w-12 sm:rounded-2xl ${
                                    item.liveUrl ? "bg-[#f6f4fc]" : "bg-[#050217]"
                                  }`}
                                >
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 640px) 40px, 48px"
                                    className={`transition-transform duration-500 group-hover:scale-105 ${
                                      item.liveUrl
                                        ? "object-cover object-top"
                                        : "object-contain p-1"
                                    }`}
                                  />
                                </div>
                                <span className="rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#5b2ee0] sm:px-3 sm:py-1 sm:text-[11px] sm:tracking-[0.2em]">
                                  {item.category}
                                </span>
                                {item.liveUrl ? (
                                  <span className="inline-flex items-center gap-1 rounded-full border border-[#0c7a56]/20 bg-[#0c7a56]/[0.08] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#0c7a56]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#0c7a56]" />
                                    Live
                                  </span>
                                ) : null}
                              </div>
                              <span className="shrink-0 font-mono text-xs text-[#645e8a]">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                            </div>

                            {/* Card Title with Stretched Link to /portfolio/[slug] */}
                            <h2 className="mt-2.5 text-lg font-medium tracking-[-0.02em] text-[#0f0b24] transition-colors group-hover:text-[#5b2ee0] sm:mt-3.5 sm:text-xl">
                              <Link
                                href={`${ROUTES.portfolio}/${item.slug}`}
                                tabIndex={isBuriedInDeck ? -1 : undefined}
                                className={`after:absolute after:inset-0 focus:outline-none ${
                                  isBuriedInDeck ? "pointer-events-none" : ""
                                }`}
                              >
                                {item.title}
                              </Link>
                            </h2>

                            <p className="mt-1.5 line-clamp-2 text-[12.5px] leading-relaxed text-[#474269] sm:mt-2 sm:text-sm">
                              {item.overview}
                            </p>

                            {/* Key Deliverables */}
                            <ul className="mt-3 space-y-1.5 border-t border-[#0f0b24]/[0.08] pt-3 sm:mt-3.5 sm:space-y-2 sm:pt-3.5">
                              {item.whatWeDid.slice(0, 3).map((point) => (
                                <li
                                  key={point}
                                  className="flex items-start gap-2 text-[12px] text-[#474269] sm:gap-2.5 sm:text-[13px]"
                                >
                                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6d3fea] sm:h-4 sm:w-4" />
                                  <span className="line-clamp-1 sm:line-clamp-2">
                                    {point}
                                  </span>
                                </li>
                              ))}
                            </ul>

                            {/* Outcome Metrics Pills */}
                            <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-3.5">
                              {item.metrics.map((metric) => (
                                <span
                                  key={metric.label}
                                  className="rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-2.5 py-0.5 text-[10px] font-medium text-[#474269] sm:px-3 sm:text-[11px]"
                                >
                                  {metric.value}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Footer Action Row */}
                          <div className="mt-3 flex flex-wrap items-center justify-between gap-2.5 border-t border-[#0f0b24]/[0.08] pt-3 sm:mt-4 sm:gap-3 sm:pt-4">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5b2ee0] transition-colors group-hover:text-[#0f0b24] sm:gap-2 sm:text-sm">
                              <span>Explore Case Study</span>
                              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
                            </span>

                            {item.liveUrl ? (
                              <a
                                href={item.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                tabIndex={isBuriedInDeck ? -1 : undefined}
                                className={`ios-glass-btn relative z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium text-[#0f0b24] sm:px-3.5 sm:py-1.5 sm:text-xs ${
                                  isBuriedInDeck ? "pointer-events-none" : ""
                                }`}
                              >
                                <span>Visit Live Site</span>
                                <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                              </a>
                            ) : (
                              <Link
                                href={`${ROUTES.contact}?service=${encodeURIComponent(item.title)}`}
                                tabIndex={isBuriedInDeck ? -1 : undefined}
                                className={`ios-glass-btn relative z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium text-[#0f0b24] sm:px-3.5 sm:py-1.5 sm:text-xs ${
                                  isBuriedInDeck ? "pointer-events-none" : ""
                                }`}
                              >
                                <span>Request Similar</span>
                                <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>

              {/* Subtle scroll-to-separate cue pinned cleanly under stacked deck */}
              <div
                ref={hintRef}
                className="absolute inset-x-0 bottom-0 z-[130] flex justify-center"
              >
                <button
                  type="button"
                  onClick={spreadCardsOnScroll}
                  className="ios-glass-btn inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-[#474269]"
                >
                  <span>Scroll to separate all {ITEM_COUNT} projects</span>
                  <ChevronDown className="h-3.5 w-3.5 text-[#6d3fea]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
