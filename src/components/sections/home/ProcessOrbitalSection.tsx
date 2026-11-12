"use client";

import React, { useEffect, useRef, useState } from "react";
import { PROCESS_STEPS } from "@/data/company";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BrandOrbEmblem } from "@/components/ui/BrandLogo";

const DESKTOP_STEP_GRID_CLASSES = [
  "hidden lg:block lg:col-span-4 lg:col-start-1 lg:row-start-1",
  "hidden lg:block lg:col-span-4 lg:col-start-9 lg:row-start-1",
  "hidden lg:block lg:col-span-4 lg:col-start-9 lg:row-start-2",
  "hidden lg:block lg:col-span-4 lg:col-start-1 lg:row-start-2",
];

const ORBIT_RING_RADIUS = 134;
const ORBIT_RING_CIRCUMFERENCE = 2 * Math.PI * ORBIT_RING_RADIUS;

export function ProcessOrbitalSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lastScrollStepRef = useRef(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updateStepFromScroll = () => {
      rafId = 0;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const nextStep =
        progress < 0.25
          ? 0
          : progress < 0.5
            ? 1
            : progress < 0.75
              ? 2
              : 3;

      if (nextStep !== lastScrollStepRef.current) {
        lastScrollStepRef.current = nextStep;
        setActiveStep(nextStep);
      }
    };

    const scheduleUpdate = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateStepFromScroll);
      }
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    scheduleUpdate();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  const jumpToStep = (stepIdx: number) => {
    setActiveStep(stepIdx);
    const section = sectionRef.current;
    if (!section) return;

    const scrollable = section.offsetHeight - window.innerHeight;
    if (scrollable <= 0) return;

    const targetRatio = (stepIdx + 0.35) / 4;
    const sectionTopDoc = section.getBoundingClientRect().top + window.scrollY;
    lastScrollStepRef.current = stepIdx;
    window.scrollTo({
      top:
        sectionTopDoc +
        scrollable * Math.min(0.95, Math.max(0.05, targetRatio)),
      behavior: "smooth",
    });
  };

  const arcDashOffset =
    ORBIT_RING_CIRCUMFERENCE * (1 - activeStep * 0.25);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative h-[260vh] bg-white py-0 lg:h-[290vh]"
    >
      <div className="sticky top-0 flex min-h-dvh flex-col justify-center pt-[68px] pb-3 sm:pt-20 sm:pb-8 lg:min-h-screen lg:py-14">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <div className="text-center">
            <Eyebrow label="OUR WORK PROCESS" />
            <h2 className="mx-auto mt-2.5 max-w-2xl text-2xl leading-[1.15] font-bold tracking-[-0.03em] text-[#0f0b24] sm:mt-5 sm:text-4xl lg:text-5xl">
              From Idea to{" "}
              <span className="neon-gradient-text">Production</span> in Four Clear
              Steps
            </h2>
          </div>

          <div className="mt-3.5 grid grid-cols-1 items-center gap-3 sm:mt-8 sm:gap-5 lg:mt-12 lg:grid-cols-12 lg:grid-rows-2 lg:gap-6">
            {/* Orbital Progress Hub (Pinned cleanly on mobile & desktop) */}
            <div className="flex flex-col items-center justify-center lg:col-span-4 lg:col-start-5 lg:row-span-2 lg:row-start-1">
              <div className="relative flex h-44 w-44 items-center justify-center min-[390px]:h-52 min-[390px]:w-52 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <div className="absolute inset-0 rounded-full border border-[#0f0b24]/10" />
                <div className="animate-orbit-slow absolute inset-5 rounded-full border border-dashed border-[#6d3fea]/30 sm:inset-8 lg:inset-9" />
                <div className="absolute inset-7 rounded-full bg-[radial-gradient(circle,rgba(109,63,234,0.12)_0%,rgba(195,18,251,0.05)_65%,transparent_100%)] blur-md sm:inset-10 lg:inset-12" />

                {/* Clockwise glowing orbital progress arc (01 -> 02 -> 03 -> 04) */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 320 320"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                >
                  <defs>
                    <linearGradient
                      id="process-arc-grad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#7975ff" />
                      <stop offset="50%" stopColor="#c312fb" />
                      <stop offset="100%" stopColor="#e10afa" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="160"
                    cy="160"
                    r={ORBIT_RING_RADIUS}
                    fill="none"
                    stroke="rgba(121, 117, 255, 0.14)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="160"
                    cy="160"
                    r={ORBIT_RING_RADIUS}
                    fill="none"
                    stroke="url(#process-arc-grad)"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeDasharray={ORBIT_RING_CIRCUMFERENCE}
                    strokeDashoffset={arcDashOffset}
                    transform="rotate(-90 160 160)"
                    className="transition-[stroke-dashoffset] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(195, 18, 251, 0.65))",
                    }}
                  />
                </svg>

                {/* Rotating center-to-active-node radial beam + plasma shoot (clipped inside ring radius) */}
                <div
                  aria-hidden="true"
                  style={{ transform: `rotate(${activeStep * 90}deg)` }}
                  className="pointer-events-none absolute inset-2 overflow-hidden rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  {/* Soft luminous spotlight cone toward active step */}
                  <div className="absolute bottom-1/2 left-1/2 h-[44%] w-16 -translate-x-1/2 rounded-full bg-gradient-to-t from-[#7975ff]/15 via-[#8c2bff]/30 to-[#e10afa]/50 blur-md" />
                  {/* Crisp laser shaft pointing from center hub into active circle node */}
                  <div className="absolute bottom-1/2 left-1/2 h-[44%] w-[2.5px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#7975ff]/30 via-[#c312fb] to-white shadow-[0_0_16px_rgba(225,10,250,0.9)]" />
                  {/* Animated energy beam pulse shooting outward from hub to active badge */}
                  <div className="animate-orbital-beam absolute bottom-1/2 left-1/2 flex h-10 w-3 -translate-x-1/2 flex-col items-center sm:h-12">
                    <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_14px_3px_rgba(255,255,255,0.95),0_0_24px_6px_rgba(225,10,250,0.85)]" />
                    <span className="-mt-1 h-8 w-1 rounded-full bg-gradient-to-b from-white via-[#e10afa] to-transparent sm:h-10" />
                  </div>
                </div>

                {[
                  { idx: 0, pos: "top-1.5 sm:top-2 left-1/2 -translate-x-1/2" },
                  { idx: 1, pos: "right-1.5 sm:right-2 top-1/2 -translate-y-1/2" },
                  { idx: 2, pos: "bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2" },
                  { idx: 3, pos: "left-1.5 sm:left-2 top-1/2 -translate-y-1/2" },
                ].map((node) => {
                  const isActive = activeStep === node.idx;
                  return (
                    <button
                      key={node.idx}
                      type="button"
                      aria-label={`Select step ${PROCESS_STEPS[node.idx].step}`}
                      onClick={() => jumpToStep(node.idx)}
                      className={`absolute ${node.pos} z-10 flex h-7 w-7 items-center justify-center rounded-full font-mono text-[10.5px] font-semibold transition-all duration-300 min-[390px]:h-8 min-[390px]:w-8 sm:h-9 sm:w-9 sm:text-xs ${
                        isActive
                          ? "scale-115 bg-gradient-to-br from-[#6d3fea] to-[#9333ea] text-white shadow-[0_8px_20px_-4px_rgba(109,63,234,0.48)]"
                          : "ios-glass-btn text-[#474269] hover:text-[#0f0b24]"
                      }`}
                    >
                      {PROCESS_STEPS[node.idx].step}
                    </button>
                  );
                })}

                <BrandOrbEmblem className="relative z-10 h-[66px] w-[66px] p-3.5 min-[390px]:h-20 min-[390px]:w-20 min-[390px]:p-4 sm:h-28 sm:w-28 sm:p-6" />
              </div>

              {/* Compact step progress pills underneath orbit wheel (mobile & desktop) */}
              <div className="mt-3 flex items-center gap-2 lg:mt-5">
                {PROCESS_STEPS.map((item, idx) => (
                  <button
                    key={item.step}
                    type="button"
                    aria-label={`Jump to ${item.title}`}
                    onClick={() => jumpToStep(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeStep === idx
                        ? "w-7 bg-gradient-to-r from-[#7975ff] via-[#c312fb] to-[#e10afa] shadow-[0_4px_12px_rgba(195,18,251,0.45)]"
                        : "w-2 bg-[#0f0b24]/15 hover:bg-[#0f0b24]/35"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Mobile & Tablet (< lg): Fixed-stage vertical moving boxes synced with scroll while circle holds */}
            <div className="mx-auto w-full max-w-lg lg:hidden">
              <div className="relative -mx-4 overflow-hidden px-4 pt-2 pb-9 sm:-mx-5 sm:px-5 sm:pt-4 sm:pb-14 [mask-image:linear-gradient(to_bottom,black_0%,black_78%,rgba(0,0,0,0.45)_92%,transparent_100%)]">
                <div className="grid grid-cols-1">
                  {PROCESS_STEPS.map((item, stepIdx) => {
                    const delta = stepIdx - activeStep;
                    const isActive = delta === 0;
                    const isNextPeek = delta === 1;
                    const isInteractable = isActive || isNextPeek;

                    let cardMotionClass =
                      "translate-y-[calc(200%+24px)] scale-[0.95] opacity-0 pointer-events-none z-0";
                    if (isActive) {
                      cardMotionClass =
                        "translate-y-0 scale-100 opacity-100 z-20";
                    } else if (isNextPeek) {
                      cardMotionClass =
                        "translate-y-[calc(100%+12px)] scale-[0.97] opacity-70 z-10";
                    } else if (delta < 0) {
                      cardMotionClass =
                        "-translate-y-[calc(100%+16px)] scale-[0.96] opacity-0 pointer-events-none z-0";
                    }

                    return (
                      <button
                        key={item.step}
                        type="button"
                        tabIndex={isInteractable ? undefined : -1}
                        aria-hidden={!isInteractable}
                        onClick={() => jumpToStep(stepIdx)}
                        className={`relative col-start-1 row-start-1 w-full rounded-2xl p-4 text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-5 ${cardMotionClass} ${
                          isActive
                            ? "border-2 border-[#7c3aed] bg-gradient-to-br from-white via-[#f5f0ff] to-[#ebe2ff] shadow-[0_0_0_2px_rgba(121,117,255,0.28),0_0_26px_rgba(109,63,234,0.42),0_0_46px_-4px_rgba(195,18,251,0.48)]"
                            : "glass-card"
                        }`}
                      >
                        <div
                          className={`border-b border-dashed pb-2 text-xs font-semibold uppercase tracking-[0.16em] ${
                            isActive
                              ? "border-[#6d3fea]/35 text-[#4f28c9]"
                              : "border-[#0f0b24]/15 text-[#0f0b24]"
                          }`}
                        >
                          {item.title}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-[#474269]">
                          {item.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Desktop (>= lg): Four corner step cards flanking center orbital wheel */}
            {PROCESS_STEPS.map((item, stepIdx) => {
              const active = activeStep === stepIdx;
              return (
                <button
                  key={item.step}
                  type="button"
                  onPointerEnter={(e) => {
                    if (e.pointerType !== "touch") setActiveStep(stepIdx);
                  }}
                  onClick={() => jumpToStep(stepIdx)}
                  className={`relative w-full rounded-2xl p-5 text-left transition-all duration-300 sm:p-6 ${DESKTOP_STEP_GRID_CLASSES[stepIdx]} ${
                    active
                      ? "z-10 scale-[1.015] border-2 border-[#7c3aed] bg-gradient-to-br from-white via-[#f5f0ff] to-[#ebe2ff] shadow-[0_0_0_2px_rgba(121,117,255,0.3),0_0_28px_rgba(109,63,234,0.44),0_0_52px_-4px_rgba(195,18,251,0.5)]"
                      : "glass-card opacity-75 hover:border-[#6d3fea]/40 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`border-b border-dashed pb-3 text-xs font-semibold uppercase tracking-[0.16em] ${
                      active
                        ? "border-[#6d3fea]/35 text-[#4f28c9]"
                        : "border-[#0f0b24]/15 text-[#0f0b24]"
                    }`}
                  >
                    {item.title}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#474269]">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
