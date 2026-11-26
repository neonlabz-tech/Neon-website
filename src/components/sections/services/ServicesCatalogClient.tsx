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
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Code2,
  Palette,
} from "lucide-react";
import { ROUTES } from "@/constants/navigation";
import { CORE_SERVICES, SERVICE_CATEGORIES } from "@/data/services";
import type { ServiceCategory } from "@/types";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const CATEGORY_ICONS: Record<
  ServiceCategory,
  React.ComponentType<{ className?: string }>
> = {
  "it-solutions": Code2,
  creative: Palette,
};

interface FanPreset {
  x: number;
  y: number;
  rot: number;
  scale: number;
  z: number;
}

const FAN_PRESETS_MULTI: FanPreset[] = [
  { x: 0, y: 0, rot: 0, scale: 1, z: 60 },
  { x: -24, y: 8, rot: -4.5, scale: 0.975, z: 50 },
  { x: 24, y: 8, rot: 4.5, scale: 0.975, z: 40 },
  { x: -46, y: 16, rot: -8.5, scale: 0.95, z: 30 },
  { x: 46, y: 16, rot: 8.5, scale: 0.95, z: 20 },
  { x: 64, y: 24, rot: 11.5, scale: 0.925, z: 10 },
];

const FAN_PRESETS_PAIR: FanPreset[] = [
  { x: -10, y: 0, rot: -2, scale: 1, z: 20 },
  { x: 26, y: 10, rot: 6.5, scale: 0.96, z: 10 },
];

// Mobile-safe stacked deck presets: stays cleanly inside 1-col viewport bounds with zero horizontal clipping
const MOBILE_FAN_PRESETS_MULTI: FanPreset[] = [
  { x: 0, y: 0, rot: 0, scale: 1, z: 60 },
  { x: 0, y: 14, rot: -1.4, scale: 0.935, z: 50 },
  { x: 0, y: 24, rot: 1.4, scale: 0.905, z: 40 },
  { x: 0, y: 34, rot: -1.8, scale: 0.87, z: 30 },
  { x: 0, y: 42, rot: 1.8, scale: 0.835, z: 20 },
  { x: 0, y: 49, rot: -2.1, scale: 0.8, z: 10 },
];

const MOBILE_FAN_PRESETS_PAIR: FanPreset[] = [
  { x: 0, y: 0, rot: 0, scale: 1, z: 20 },
  { x: 0, y: 16, rot: 1.5, scale: 0.935, z: 10 },
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

export function ServicesCatalogClient() {
  const searchParams = useSearchParams();
  const initialCategory: ServiceCategory =
    searchParams.get("category") === "creative" ? "creative" : "it-solutions";

  const [activeCategory, setActiveCategory] =
    useState<ServiceCategory>(initialCategory);
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

  const activeCategoryMeta =
    SERVICE_CATEGORIES.find((cat) => cat.id === activeCategory) ??
    SERVICE_CATEGORIES[0];

  const visibleServices = CORE_SERVICES.filter(
    (service) => service.category === activeCategory
  );

  const getStickyTop = () => {
    if (window.innerWidth < 640) return 68;
    if (window.innerWidth < 768) return 80;
    return 88;
  };

  // Sync deep-link hash category on mount (e.g. /services#ui-ux -> creative tab)
  useEffect(() => {
    const hashId = window.location.hash.replace(/^#/, "");
    if (!hashId) return;

    const matched = CORE_SERVICES.find((s) => s.id === hashId);
    let scrollRafId = 0;

    const rafId = requestAnimationFrame(() => {
      if (matched) {
        setActiveCategory(matched.category);
      }

      const runway = runwayRef.current;
      if (runway) {
        const runwayDocTop =
          runway.getBoundingClientRect().top + window.scrollY;
        const spreadScrollTop = runwayDocTop - getStickyTop() + PIN_TOTAL + 24;
        if (window.scrollY < spreadScrollTop) {
          window.scrollTo({ top: spreadScrollTop, behavior: "auto" });
        }
      }

      scrollRafId = requestAnimationFrame(() => {
        document.getElementById(hashId)?.scrollIntoView({ behavior: "smooth" });
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(scrollRafId);
    };
  }, []);

  const applyScrollTransforms = useCallback(() => {
    const geom = geometryRef.current;
    const runway = runwayRef.current;
    const wrapper = gridWrapperRef.current;
    if (!geom || !runway || !wrapper) return;

    const count = visibleServices.length;
    const presets = geom.mobile
      ? count <= 2
        ? MOBILE_FAN_PRESETS_PAIR
        : MOBILE_FAN_PRESETS_MULTI
      : count <= 2
        ? FAN_PRESETS_PAIR
        : FAN_PRESETS_MULTI;

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
      hintRef.current.style.visibility = hintOpacity > 0.02 ? "visible" : "hidden";
    }

    if (inv <= 0.001) {
      runway.style.height = `${(geom.fullH + PIN_TOTAL).toFixed(1)}px`;
      wrapper.style.height = "";
      for (let i = 0; i < count; i += 1) {
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

    for (let i = 0; i < count; i += 1) {
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
        content.style.opacity = i === 0 ? "1" : (0.1 + 0.9 * eased).toFixed(3);
      }
    }
  }, [visibleServices.length]);

  const measureGeometry = useCallback(() => {
    const grid = gridRef.current;
    const count = visibleServices.length;
    if (!grid || count === 0) return;

    const slots = slotRefs.current.slice(0, count);
    if (slots.some((el) => !el)) return;

    const isMobile = window.innerWidth < 768;
    const c0 = slots[0]!;
    const deckLeft = (grid.clientWidth - c0.offsetWidth) / 2;
    const deckTop = c0.offsetTop + (isMobile ? 2 : 6);
    const deckH =
      c0.offsetHeight + (isMobile ? (count > 2 ? 74 : 52) : count > 2 ? 64 : 44);

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
  }, [applyScrollTransforms, visibleServices.length]);

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
    <section id="service-catalog" className="bg-white pt-4 pb-12 sm:pt-6 sm:pb-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
        {/* Two-Heading Segmented Switcher */}
        <div className="flex justify-center">
          <div
            role="tablist"
            aria-label="Service Categories"
            className="ios-glass-bar inline-flex items-center gap-1.5 rounded-full p-1.5"
          >
            {SERVICE_CATEGORIES.map((category) => {
              const Icon = CATEGORY_ICONS[category.id];
              const isSelected = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`services-panel-${category.id}`}
                  id={`services-tab-${category.id}`}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex cursor-pointer items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 sm:px-7 sm:py-3 sm:text-[15px] ${
                    isSelected
                      ? "bg-gradient-to-r from-[#5b2ee0] via-[#6d3fea] to-[#8c2bff] text-white shadow-[0_8px_22px_-4px_rgba(109,63,234,0.42)]"
                      : "text-[#474269] hover:bg-[#0f0b24]/[0.05] hover:text-[#0f0b24]"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Panel */}
        <div
          id={`services-panel-${activeCategoryMeta.id}`}
          role="tabpanel"
          aria-labelledby={`services-tab-${activeCategoryMeta.id}`}
          className="mt-7 sm:mt-8"
        >
          {/* Sticky Scroll Runway: Keeps deck stacked until reached, then opens all cards as you scroll */}
          <div ref={runwayRef} className="relative">
            <div className="sticky top-[68px] sm:top-20 md:top-[88px]">
              <div ref={gridWrapperRef} className="relative">
                <div
                  ref={gridRef}
                  className="grid auto-rows-fr grid-cols-1 gap-5 sm:gap-6 md:auto-rows-auto md:grid-cols-2"
                >
                  {visibleServices.map((service, index) => {
                    const isBuriedInDeck = isDeckStacked && index > 0;
                    const backingClass =
                      STACK_BACKING_CLASSES[
                        index % STACK_BACKING_CLASSES.length
                      ];

                    return (
                      <div
                        key={service.id}
                        ref={(el) => {
                          slotRefs.current[index] = el;
                        }}
                        className="relative will-change-transform"
                      >
                        <article
                          id={service.id}
                          onClick={(e) => {
                            if (isBuriedInDeck) {
                              e.preventDefault();
                              spreadCardsOnScroll();
                            }
                          }}
                          className={`glass-card isolate group relative flex h-full scroll-mt-28 flex-col justify-between overflow-hidden rounded-3xl !border-[1.5px] !border-[#0f0b24]/20 p-4 shadow-[0_14px_36px_-14px_rgba(15,11,36,0.14)] transition-[border-color,box-shadow,transform] duration-300 dark:!border-white/25 sm:p-7 lg:p-8 ${
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
                                <div className="flex items-center gap-3 sm:gap-3.5">
                                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc] sm:h-14 sm:w-14 sm:rounded-2xl">
                                    <Image
                                      src={service.image}
                                      alt={service.title}
                                      fill
                                      sizes="(max-width: 640px) 40px, 56px"
                                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                  </div>
                                  <span className="rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#5b2ee0] sm:px-3 sm:py-1 sm:text-[11px] sm:tracking-[0.2em]">
                                    {service.eyebrow}
                                  </span>
                                </div>
                                <span className="font-mono text-xs text-[#645e8a]">
                                  0{index + 1}
                                </span>
                              </div>

                              {/* Card Title with Stretched Link to /services/[slug] */}
                              <h3 className="mt-3 text-lg font-medium tracking-[-0.02em] text-[#0f0b24] transition-colors group-hover:text-[#5b2ee0] sm:mt-5 sm:text-2xl">
                                <Link
                                  href={`/services/${service.slug}`}
                                  tabIndex={isBuriedInDeck ? -1 : undefined}
                                  className={`after:absolute after:inset-0 focus:outline-none ${
                                    isBuriedInDeck ? "pointer-events-none" : ""
                                  }`}
                                >
                                  {service.title}
                                </Link>
                              </h3>

                              <p className="mt-1.5 line-clamp-3 text-[12.5px] leading-relaxed text-[#474269] sm:mt-3 sm:line-clamp-none sm:text-sm">
                                {service.description}
                              </p>

                              {/* Structured Key Capabilities */}
                              <ul className="mt-3 space-y-1.5 border-t border-[#0f0b24]/[0.08] pt-3 sm:mt-5 sm:space-y-2.5 sm:pt-5">
                                {service.offerings.map((offering) => (
                                  <li
                                    key={offering.title}
                                    className="flex items-start gap-2 text-[12px] text-[#0f0b24] sm:gap-2.5 sm:text-sm"
                                  >
                                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6d3fea] sm:h-4 sm:w-4" />
                                    <span>
                                      <strong className="font-medium text-[#0f0b24]">
                                        {offering.title}
                                      </strong>
                                      <span className="hidden text-[#474269] sm:inline">
                                        : {offering.points[0]}
                                      </span>
                                    </span>
                                  </li>
                                ))}
                              </ul>

                              {/* Stack Pills */}
                              <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-5">
                                {service.techTags.slice(0, 4).map((tag) => (
                                  <span
                                    key={tag}
                                    className="rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-2 py-0.5 text-[10px] font-medium text-[#474269] sm:px-2.5 sm:text-[11px]"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Footer Action Row */}
                            <div className="mt-3 flex flex-wrap items-center justify-between gap-2.5 border-t border-[#0f0b24]/[0.08] pt-3 sm:mt-7 sm:gap-3 sm:pt-5">
                              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5b2ee0] transition-colors group-hover:text-[#0f0b24] sm:gap-2 sm:text-sm">
                                <span>Explore Details</span>
                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
                              </span>

                              <Link
                                href={`${ROUTES.contact}?service=${encodeURIComponent(service.title)}`}
                                tabIndex={isBuriedInDeck ? -1 : undefined}
                                className={`ios-glass-btn relative z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium text-[#0f0b24] sm:px-3.5 sm:py-1.5 sm:text-xs ${
                                  isBuriedInDeck ? "pointer-events-none" : ""
                                }`}
                              >
                                <span>Request Quote</span>
                                <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                              </Link>
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
                  className="absolute inset-x-0 bottom-0 z-[70] flex justify-center"
                >
                  <button
                    type="button"
                    onClick={spreadCardsOnScroll}
                    className="ios-glass-btn inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-[#474269]"
                  >
                    <span>
                      Scroll to separate all {visibleServices.length} services
                    </span>
                    <ChevronDown className="h-3.5 w-3.5 text-[#6d3fea]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
