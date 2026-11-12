"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { CORE_SERVICES } from "@/data/services";
import { Eyebrow } from "@/components/ui/Eyebrow";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const SERVICE_COUNT = CORE_SERVICES.length;
const AUTO_PLAY_INTERVAL_MS = 3200;

function getShortestWrappedDelta(index: number, center: number): number {
  let delta = (((index - center) % SERVICE_COUNT) + SERVICE_COUNT) % SERVICE_COUNT;
  if (delta >= SERVICE_COUNT / 2) {
    delta -= SERVICE_COUNT;
  }
  return delta;
}

export function ServicesShowcase() {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const shadeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frameRefs = useRef<(HTMLDivElement | null)[]>([]);

  const targetPosRef = useRef(0);
  const currentPosRef = useRef(0);
  const rafIdRef = useRef(0);
  const lastTimeRef = useRef(0);
  const isPausedRef = useRef(false);
  const dragRef = useRef<{
    active: boolean;
    pointerId: number;
    startX: number;
    startPos: number;
    moved: boolean;
  }>({
    active: false,
    pointerId: -1,
    startX: 0,
    startPos: 0,
    moved: false,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const paintCoverFlow = useCallback((pos: number) => {
    const stageWidth = stageRef.current?.clientWidth ?? 1200;
    const isMobile = stageWidth < 640;
    const isTablet = stageWidth >= 640 && stageWidth < 1024;
    const cardW = isMobile ? 210 : isTablet ? 256 : 304;

    const firstGap = cardW * (isMobile ? 0.68 : 0.78);
    const wingStep = cardW * (isMobile ? 0.31 : 0.36);

    let nearestIdx = 0;
    let smallestAbs = Infinity;

    for (let i = 0; i < SERVICE_COUNT; i += 1) {
      const delta = getShortestWrappedDelta(i, pos);
      const abs = Math.abs(delta);
      const sign = delta === 0 ? 0 : delta > 0 ? 1 : -1;

      if (abs < smallestAbs) {
        smallestAbs = abs;
        nearestIdx = i;
      }

      const cardEl = cardRefs.current[i];
      if (!cardEl) continue;

      const nearDist = Math.min(abs, 1) * firstGap;
      const tailDist = Math.max(0, abs - 1) * wingStep;
      const tx = sign * (nearDist + tailDist);

      const rotFactor = Math.min(1, abs);
      const rotEase = 1 - Math.pow(1 - rotFactor, 1.45);
      // Center face is flat (0deg); wings angle inward toward the center viewer
      const rotY = -sign * (rotEase * 58 + Math.max(0, abs - 1) * 3);

      const tz = 65 - Math.min(abs, 1) * 105 - Math.max(0, abs - 1) * 32;
      const scale = Math.max(
        0.74,
        1 - Math.min(abs, 1) * 0.1 - Math.max(0, abs - 1) * 0.045
      );

      // Hide far seam smoothly as cards wrap around behind the back wings
      const opacity =
        abs > 3.65 ? 0 : abs > 2.85 ? Math.max(0, 1 - (abs - 2.85) / 0.8) : 1;

      const zIndex = Math.round(100 - abs * 14);

      cardEl.style.transform = `translate3d(${tx.toFixed(2)}px, 0px, ${tz.toFixed(2)}px) rotateY(${rotY.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
      cardEl.style.zIndex = String(zIndex);
      cardEl.style.opacity = opacity.toFixed(3);
      cardEl.style.pointerEvents = opacity > 0.15 ? "auto" : "none";

      const shadeEl = shadeRefs.current[i];
      if (shadeEl) {
        const shadeAlpha = Math.min(
          0.48,
          Math.min(abs, 1) * 0.14 + Math.max(0, abs - 1) * 0.11
        );
        shadeEl.style.opacity = shadeAlpha.toFixed(3);
      }

      const frameEl = frameRefs.current[i];
      if (frameEl) {
        const isCenterFocus = abs < 0.28;
        frameEl.dataset.active = isCenterFocus ? "true" : "false";
      }
    }

    setActiveIndex((prev) => (prev === nearestIdx ? prev : nearestIdx));
  }, []);

  const startLoop = useCallback(() => {
    if (rafIdRef.current) return;
    lastTimeRef.current = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.05, Math.max(0.001, (now - lastTimeRef.current) / 1000));
      lastTimeRef.current = now;

      const diff = targetPosRef.current - currentPosRef.current;

      if (Math.abs(diff) < 0.0015 && !dragRef.current.active) {
        currentPosRef.current = targetPosRef.current;
        paintCoverFlow(currentPosRef.current);
        rafIdRef.current = 0;
        return;
      }

      // Frame-rate independent exponential smoothing for 60Hz/120Hz/144Hz monitors
      const factor = dragRef.current.active ? 0.35 : 1 - Math.exp(-9.5 * dt);
      currentPosRef.current += diff * factor;
      paintCoverFlow(currentPosRef.current);

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);
  }, [paintCoverFlow]);

  const stepBy = useCallback(
    (delta: number) => {
      targetPosRef.current = Math.round(targetPosRef.current) + delta;
      startLoop();
    },
    [startLoop]
  );

  const goToService = useCallback(
    (targetServiceIndex: number) => {
      const roundedCenter = Math.round(targetPosRef.current);
      const delta = getShortestWrappedDelta(targetServiceIndex, roundedCenter);
      if (delta === 0) return;
      targetPosRef.current = roundedCenter + delta;
      startLoop();
    },
    [startLoop]
  );

  useIsomorphicLayoutEffect(() => {
    paintCoverFlow(currentPosRef.current);
  }, [paintCoverFlow]);

  useEffect(() => {
    const handleResize = () => {
      paintCoverFlow(currentPosRef.current);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [paintCoverFlow]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (
        !isPausedRef.current &&
        !dragRef.current.active &&
        !document.hidden
      ) {
        stepBy(1);
      }
    }, AUTO_PLAY_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, [stepBy]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    if ((e.target as HTMLElement).closest("button[data-nav]")) return;

    dragRef.current = {
      active: true,
      pointerId: e.pointerId,
      startX: e.clientX,
      startPos: targetPosRef.current,
      moved: false,
    };
    isPausedRef.current = true;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.startX;

    if (!dragRef.current.moved) {
      if (Math.abs(dx) <= 6) return;
      dragRef.current.moved = true;
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // Ignore if pointer already released
      }
    }

    const pitchPx = window.innerWidth < 640 ? 150 : 210;
    targetPosRef.current = dragRef.current.startPos - dx / pitchPx;
    startLoop();
  };

  const finishDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    if (
      dragRef.current.moved &&
      e.currentTarget.hasPointerCapture(dragRef.current.pointerId)
    ) {
      e.currentTarget.releasePointerCapture(dragRef.current.pointerId);
    }
    dragRef.current.active = false;
    if (dragRef.current.moved) {
      targetPosRef.current = Math.round(targetPosRef.current);
      startLoop();
    }
    isPausedRef.current = false;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      stepBy(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      stepBy(1);
    }
  };

  const activeService = CORE_SERVICES[activeIndex] ?? CORE_SERVICES[0];

  return (
    <section
      id="services"
      className="services-showcase-bg relative overflow-x-clip py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
        <div className="text-center">
          <Eyebrow label="CORE IT & DIGITAL SERVICES" />
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-[-0.03em] text-[#0f0b24] sm:text-4xl lg:text-5xl">
            Eight Services,{" "}
            <span className="neon-gradient-text">One Engineering Partner</span>
          </h2>
        </div>
      </div>

      {/* 3D Apple Cover Flow Stage */}
      <div
        className="relative mt-8 w-full select-none sm:mt-10"
        onPointerEnter={(e) => {
          if (e.pointerType !== "touch") {
            isPausedRef.current = true;
          }
        }}
        onPointerLeave={(e) => {
          if (e.pointerType !== "touch" && !dragRef.current.active) {
            isPausedRef.current = false;
          }
        }}
        onFocusCapture={() => {
          isPausedRef.current = true;
        }}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            isPausedRef.current = false;
          }
        }}
      >
        {/* Subtle side atmosphere fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-[110] w-8 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-24 lg:w-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-[110] w-8 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-24 lg:w-40"
        />

        <button
          type="button"
          data-nav="true"
          onClick={() => stepBy(-1)}
          aria-label="Previous service"
          className="ios-glass-btn absolute top-1/2 left-3 z-[120] inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-[#0f0b24] hover:scale-110 sm:left-6 sm:h-11 sm:w-11 lg:left-10"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          data-nav="true"
          onClick={() => stepBy(1)}
          aria-label="Next service"
          className="ios-glass-btn absolute top-1/2 right-3 z-[120] inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-[#0f0b24] hover:scale-110 sm:right-6 sm:h-11 sm:w-11 lg:right-10"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* 3D Perspective Viewport */}
        <div
          ref={stageRef}
          tabIndex={0}
          role="region"
          aria-label="NeonLabz Core Services Cover Flow"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          onKeyDown={handleKeyDown}
          onClickCapture={(e) => {
            if (dragRef.current.moved) {
              e.preventDefault();
              e.stopPropagation();
              dragRef.current.moved = false;
            }
          }}
          style={{
            perspective: "1150px",
            perspectiveOrigin: "50% 48%",
          }}
          className="relative mx-auto flex h-[300px] w-full max-w-[1440px] cursor-grab items-center justify-center overflow-hidden touch-pan-y select-none focus:outline-none active:cursor-grabbing sm:h-[360px] lg:h-[420px]"
        >
          {/* Soft elliptical stage floor glow under the active center card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 left-1/2 h-14 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(15,11,36,0.12)_0%,transparent_72%)] blur-xl sm:w-80"
          />

          <div
            style={{ transformStyle: "preserve-3d" }}
            className="relative flex h-full w-full items-center justify-center"
          >
            {CORE_SERVICES.map((service, index) => {
              const isCentered = index === activeIndex;

              return (
                <div
                  key={service.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => {
                    if (dragRef.current.moved) return;
                    if (!isCentered) {
                      goToService(index);
                    }
                  }}
                  className="absolute will-change-transform"
                >
                  <div
                    ref={(el) => {
                      frameRefs.current[index] = el;
                    }}
                    className={`group relative h-[252px] w-[210px] overflow-hidden rounded-[22px] border-[2px] bg-[#f6f4fc] transition-[box-shadow,border-color] duration-300 sm:h-[308px] sm:w-[256px] sm:rounded-[26px] lg:h-[348px] lg:w-[304px] ${
                      isCentered
                        ? "border-white shadow-[0_24px_56px_-14px_rgba(15,11,36,0.28)]"
                        : "cursor-pointer border-[#0f0b24]/15 shadow-[0_18px_40px_-14px_rgba(15,11,36,0.2)]"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      draggable={false}
                      sizes="(max-width: 640px) 210px, (max-width: 1024px) 256px, 304px"
                      loading="eager"
                      className={`object-cover transition-transform duration-500 ${
                        isCentered ? "group-hover:scale-[1.03]" : ""
                      }`}
                    />

                    {/* Subtle machined metallic slab highlight rim */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-white/45 sm:rounded-[24px]"
                    />

                    {/* Depth shadow overlay on angled side wing cards */}
                    <div
                      ref={(el) => {
                        shadeRefs.current[index] = el;
                      }}
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[#0f0b24]"
                      style={{ opacity: 0 }}
                    />

                    {/* Click centered card to inspect full service page */}
                    {isCentered ? (
                      <Link
                        href={`/services/${service.slug}`}
                        draggable={false}
                        aria-label={`Explore ${service.title}`}
                        className="absolute inset-0 z-10 focus:outline-none"
                      />
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Service Title, Summary & Slide Dots */}
        <div className="mx-auto mt-3 max-w-xl px-4 text-center">
          <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#0f0b24] sm:text-xl">
            <Link
              href={`/services/${activeService.slug}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-[#6d3fea]"
            >
              <span>{activeService.title}</span>
              <ArrowRight className="h-4 w-4 text-[#6d3fea]" />
            </Link>
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-[#474269] sm:text-sm">
            {activeService.headline}
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Select service slide"
          className="mt-5 flex items-center justify-center gap-2.5"
        >
          {CORE_SERVICES.map((service, index) => {
            const isSelected = index === activeIndex;
            return (
              <button
                key={service.id}
                type="button"
                data-nav="true"
                role="tab"
                aria-selected={isSelected}
                aria-label={`Show ${service.title}`}
                onClick={() => goToService(index)}
                className={`h-3 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-dashed focus-visible:outline-[#6d3fea] focus-visible:outline-offset-4 ${
                  isSelected
                    ? "w-7 bg-gradient-to-r from-[#7975ff] via-[#a492ed] to-[#e10afa] opacity-100 shadow-[0_4px_14px_rgba(109,63,234,0.45)]"
                    : "w-3 bg-[#0f0b24]/15 opacity-75 hover:opacity-100"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
