"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  CalendarCheck,
  ChevronRight,
  ClipboardList,
  Layers,
  Rocket,
} from "lucide-react";
import { PROCESS_STEPS } from "@/data/company";
import { Eyebrow } from "@/components/ui/Eyebrow";

const STEP_ICONS = [Layers, CalendarCheck, ClipboardList, Rocket] as const;

const FIRECRACKER_COLORS = [
  "#f59e0b",
  "#ea580c",
  "#e10afa",
  "#9333ea",
  "#4f46e5",
  "#0ea5e9",
  "#fde047",
];

interface SparkParticle {
  x: number;
  y: number;
  px: number;
  py: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
  decay: number;
  twinkle: boolean;
}

interface ShockRing {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  color: string;
  alpha: number;
}

function FirecrackerCanvas({ burstTrigger }: { burstTrigger: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (burstTrigger === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const width = Math.max(rect.width, 320);
    const height = Math.max(rect.height, 260);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const particles: SparkParticle[] = [];
    const rings: ShockRing[] = [];
    let rafId = 0;

    const spawnBurst = (cx: number, cy: number, count: number, power: number) => {
      rings.push({
        x: cx,
        y: cy,
        radius: 4,
        maxRadius: 68 * power,
        color: "#fbbf24",
        alpha: 0.95,
      });
      rings.push({
        x: cx,
        y: cy,
        radius: 2,
        maxRadius: 92 * power,
        color: "#e10afa",
        alpha: 0.85,
      });

      for (let i = 0; i < count; i += 1) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.28;
        const speed = (2.6 + Math.random() * 4.8) * power;
        const color =
          FIRECRACKER_COLORS[
            Math.floor(Math.random() * FIRECRACKER_COLORS.length)
          ];

        particles.push({
          x: cx,
          y: cy,
          px: cx,
          py: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.15,
          color,
          size: 1.8 + Math.random() * 2.4,
          alpha: 1,
          decay: 0.014 + Math.random() * 0.012,
          twinkle: Math.random() > 0.55,
        });
      }
    };

    // Wave 1: Main blast around Rocket icon / left-top of card
    spawnBurst(width * 0.28, height * 0.36, 36, 1.05);

    // Wave 2 & 3: Staggered celebratory pops across card & header
    const t1 = setTimeout(() => {
      spawnBurst(width * 0.72, height * 0.3, 30, 0.92);
    }, 180);

    const t2 = setTimeout(() => {
      spawnBurst(width * 0.5, height * 0.22, 34, 1.0);
    }, 380);

    const renderFrame = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = rings.length - 1; i >= 0; i -= 1) {
        const ring = rings[i];
        ring.radius += (ring.maxRadius - ring.radius) * 0.14;
        ring.alpha *= 0.91;

        if (ring.alpha <= 0.03) {
          rings.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
        ctx.strokeStyle = ring.color;
        ctx.globalAlpha = ring.alpha;
        ctx.lineWidth = 2.2;
        ctx.shadowColor = ring.color;
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.restore();
      }

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const p = particles[i];
        p.px = p.x;
        p.py = p.y;
        p.vx *= 0.962;
        p.vy = p.vy * 0.962 + 0.095;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0.02) {
          particles.splice(i, 1);
          continue;
        }

        const flicker = p.twinkle ? 0.65 + Math.random() * 0.35 : 1;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha * flicker);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.lineCap = "round";
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;

        // Motion trail
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        // Glowing spark tip
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.48, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (particles.length > 0 || rings.length > 0) {
        rafId = requestAnimationFrame(renderFrame);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    };

    rafId = requestAnimationFrame(renderFrame);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (rafId) cancelAnimationFrame(rafId);
      ctx.clearRect(0, 0, width, height);
    };
  }, [burstTrigger]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute -inset-20 z-30 h-[calc(100%+10rem)] w-[calc(100%+10rem)]"
    />
  );
}

export function ProcessTimelineSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [pinnedStep, setPinnedStep] = useState<number | null>(null);
  const [blastCount, setBlastCount] = useState(0);

  const isStepRevealed = (index: number) =>
    hoveredStep === index || (hoveredStep === null && pinnedStep === index);

  const handleEnterStep = (index: number) => {
    setHoveredStep(index);
    if (index === PROCESS_STEPS.length - 1) {
      setBlastCount((prev) => prev + 1);
    }
  };

  const handleClickStep = (index: number) => {
    const isFinal = index === PROCESS_STEPS.length - 1;
    if (isFinal) {
      setBlastCount((prev) => prev + 1);
      setPinnedStep((prev) => (prev === index && hoveredStep === null ? null : index));
      return;
    }
    setPinnedStep((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-x-clip bg-white pt-8 pb-2 sm:pt-10 sm:pb-4">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
        <div className="text-center">
          <Eyebrow label="TRANSPARENT WORKFLOW" />
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-[#0f0b24] sm:text-4xl">
            How Every Project Moves Forward
          </h2>
        </div>

        {/* Desktop Alternating Timeline (1 Above, 2 Below, 3 Above, 4 Below) */}
        <div className="mt-4 hidden lg:block">
          {/* Top Row: Step 01 & Step 03 */}
          <div className="grid grid-cols-4 items-end gap-6">
            {PROCESS_STEPS.map((item, index) => {
              const isTop = index % 2 === 0;
              if (!isTop) {
                return <div key={`spacer-top-${item.step}`} aria-hidden="true" />;
              }

              const StepIcon = STEP_ICONS[index] ?? Layers;
              const revealed = isStepRevealed(index);
              const cleanTitle = item.title.replace(/^\d+\.\s*/, "");

              return (
                <div
                  key={item.step}
                  className="flex min-h-[235px] flex-col items-stretch justify-end"
                >
                  <button
                    type="button"
                    onPointerEnter={(e) => {
                      if (e.pointerType !== "touch") handleEnterStep(index);
                    }}
                    onPointerLeave={(e) => {
                      if (e.pointerType !== "touch") setHoveredStep(null);
                    }}
                    onFocus={() => handleEnterStep(index)}
                    onBlur={() => setHoveredStep(null)}
                    onClick={() => handleClickStep(index)}
                    aria-expanded={revealed}
                    className={`group relative w-full cursor-pointer rounded-2xl p-5 text-left transition-all duration-300 ${
                      revealed
                        ? "ios-glass-btn-active -translate-y-1 shadow-[0_16px_38px_-14px_rgba(109,63,234,0.22)]"
                        : "glass-card hover:border-[#6d3fea]/35"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`inline-flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-300 ${
                            revealed
                              ? "bg-gradient-to-br from-[#6d3fea] to-[#9333ea] text-white shadow-[0_8px_18px_-6px_rgba(109,63,234,0.45)]"
                              : "border border-[#0f0b24]/[0.08] bg-[#f6f4fc] text-[#5b2ee0]"
                          }`}
                        >
                          <StepIcon className="h-4 w-4" />
                        </span>
                        <span className="font-mono text-xs font-semibold text-[#5b2ee0]">
                          STEP {item.step}
                        </span>
                      </div>
                      <span
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          revealed
                            ? "scale-125 bg-[#8c2bff] shadow-[0_0_8px_rgba(140,43,255,0.65)]"
                            : "bg-[#0f0b24]/15"
                        }`}
                      />
                    </div>

                    <h3 className="mt-3 text-lg font-medium tracking-[-0.02em] text-[#0f0b24]">
                      {cleanTitle}
                    </h3>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        revealed
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-3 border-t border-[#0f0b24]/[0.08] pt-3 text-sm leading-relaxed text-[#474269]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Downward connector stem to node */}
                  <div className="flex justify-center" aria-hidden="true">
                    <span
                      className={`h-8 w-[2px] transition-colors duration-300 ${
                        revealed
                          ? "bg-gradient-to-b from-[#6d3fea] to-[#c312fb]"
                          : "bg-gradient-to-b from-[#0f0b24]/12 to-[#6d3fea]/35"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Horizontal Spine with Step Nodes & Directional Arrows */}
          <div className="relative flex items-center" aria-hidden="true">
            <div className="pointer-events-none absolute right-[calc((100%-4.5rem)/8)] left-[calc((100%-4.5rem)/8)] top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#6d3fea]/30 via-[#8c2bff]/45 to-[#c312fb]/30" />

            {[
              "calc(25% - 0.375rem)",
              "50%",
              "calc(75% + 0.375rem)",
            ].map((leftPos) => (
              <div
                key={leftPos}
                style={{ left: leftPos }}
                className="pointer-events-none absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0f0b24]/15 bg-white p-1 text-[#5b2ee0] shadow-xs"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            ))}

            <div className="relative z-20 grid w-full grid-cols-4 gap-6">
              {PROCESS_STEPS.map((item, index) => {
                const revealed = isStepRevealed(index);
                return (
                  <div key={`node-${item.step}`} className="flex justify-center">
                    <button
                      type="button"
                      tabIndex={-1}
                      onPointerEnter={(e) => {
                        if (e.pointerType !== "touch") handleEnterStep(index);
                      }}
                      onPointerLeave={(e) => {
                        if (e.pointerType !== "touch") setHoveredStep(null);
                      }}
                      onClick={() => handleClickStep(index)}
                      aria-label={item.title}
                      className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full font-mono text-xs font-semibold transition-all duration-300 ${
                        revealed
                          ? "scale-115 bg-gradient-to-br from-[#6d3fea] via-[#8c2bff] to-[#c312fb] text-white shadow-[0_8px_22px_-4px_rgba(109,63,234,0.55)]"
                          : "ios-glass-btn text-[#5b2ee0]"
                      }`}
                    >
                      {item.step}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Row: Step 02 & Step 04 (with Final Delivery Firecracker Blast) */}
          <div className="grid grid-cols-4 items-start gap-6">
            {PROCESS_STEPS.map((item, index) => {
              const isBottom = index % 2 === 1;
              if (!isBottom) {
                return (
                  <div key={`spacer-bottom-${item.step}`} aria-hidden="true" />
                );
              }

              const StepIcon = STEP_ICONS[index] ?? Layers;
              const isFinalStep = index === PROCESS_STEPS.length - 1;
              const revealed = isStepRevealed(index);
              const cleanTitle = item.title.replace(/^\d+\.\s*/, "");

              return (
                <div
                  key={item.step}
                  className="flex min-h-[235px] flex-col items-stretch justify-start"
                >
                  {/* Upward connector stem from bottom card to node */}
                  <div className="flex justify-center" aria-hidden="true">
                    <span
                      className={`h-8 w-[2px] transition-colors duration-300 ${
                        revealed
                          ? "bg-gradient-to-b from-[#c312fb] to-[#6d3fea]"
                          : "bg-gradient-to-b from-[#6d3fea]/35 to-[#0f0b24]/12"
                      }`}
                    />
                  </div>

                  <div className="relative">
                    {isFinalStep ? (
                      <FirecrackerCanvas burstTrigger={blastCount} />
                    ) : null}

                    <button
                      type="button"
                      onPointerEnter={(e) => {
                        if (e.pointerType !== "touch") handleEnterStep(index);
                      }}
                      onPointerLeave={(e) => {
                        if (e.pointerType !== "touch") setHoveredStep(null);
                      }}
                      onFocus={() => handleEnterStep(index)}
                      onBlur={() => setHoveredStep(null)}
                      onClick={() => handleClickStep(index)}
                      aria-expanded={revealed}
                      className={`group relative z-10 w-full cursor-pointer rounded-2xl p-5 text-left transition-all duration-300 ${
                        revealed
                          ? "ios-glass-btn-active translate-y-1 shadow-[0_16px_38px_-14px_rgba(109,63,234,0.22)]"
                          : "glass-card hover:border-[#6d3fea]/35"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`inline-flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-300 ${
                              revealed
                                ? isFinalStep
                                  ? "bg-gradient-to-br from-[#6d3fea] via-[#c312fb] to-[#fdc913] text-white shadow-[0_8px_20px_-4px_rgba(195,18,251,0.5)]"
                                  : "bg-gradient-to-br from-[#6d3fea] to-[#9333ea] text-white shadow-[0_8px_18px_-6px_rgba(109,63,234,0.45)]"
                                : "border border-[#0f0b24]/[0.08] bg-[#f6f4fc] text-[#5b2ee0]"
                            }`}
                          >
                            <StepIcon
                              className={`h-4 w-4 transition-transform duration-300 ${
                                isFinalStep && revealed
                                  ? "-translate-y-0.5 rotate-12 scale-115"
                                  : ""
                              }`}
                            />
                          </span>
                          <span className="font-mono text-xs font-semibold text-[#5b2ee0]">
                            STEP {item.step}
                          </span>
                        </div>
                        <span
                          className={`h-2 w-2 rounded-full transition-all duration-300 ${
                            revealed
                              ? isFinalStep
                                ? "scale-125 bg-[#fdc913] shadow-[0_0_10px_rgba(253,201,19,0.75)]"
                                : "scale-125 bg-[#8c2bff] shadow-[0_0_8px_rgba(140,43,255,0.65)]"
                              : "bg-[#0f0b24]/15"
                          }`}
                        />
                      </div>

                      <h3 className="mt-3 text-lg font-medium tracking-[-0.02em] text-[#0f0b24]">
                        {cleanTitle}
                      </h3>

                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          revealed
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="mt-3 border-t border-[#0f0b24]/[0.08] pt-3 text-sm leading-relaxed text-[#474269]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline Fallback */}
        <div className="relative mt-10 space-y-4 pl-8 lg:hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-5 bottom-5 left-3.5 w-[2px] bg-gradient-to-b from-[#6d3fea]/30 via-[#8c2bff]/45 to-[#c312fb]/30"
          />

          {PROCESS_STEPS.map((item, index) => {
            const StepIcon = STEP_ICONS[index] ?? Layers;
            const isFinalStep = index === PROCESS_STEPS.length - 1;
            const revealed = isStepRevealed(index);
            const cleanTitle = item.title.replace(/^\d+\.\s*/, "");

            return (
              <div key={`mobile-${item.step}`} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute top-5 -left-8 flex h-7 w-7 items-center justify-center rounded-full font-mono text-[10px] font-semibold transition-all duration-300 ${
                    revealed
                      ? "bg-gradient-to-br from-[#6d3fea] via-[#8c2bff] to-[#c312fb] text-white shadow-[0_6px_16px_-4px_rgba(109,63,234,0.5)]"
                      : "ios-glass-btn text-[#5b2ee0]"
                  }`}
                >
                  {item.step}
                </span>

                {isFinalStep ? (
                  <FirecrackerCanvas burstTrigger={blastCount} />
                ) : null}

                <button
                  type="button"
                  onPointerEnter={(e) => {
                    if (e.pointerType !== "touch") handleEnterStep(index);
                  }}
                  onPointerLeave={(e) => {
                    if (e.pointerType !== "touch") setHoveredStep(null);
                  }}
                  onFocus={() => handleEnterStep(index)}
                  onBlur={() => setHoveredStep(null)}
                  onClick={() => handleClickStep(index)}
                  aria-expanded={revealed}
                  className={`relative z-10 w-full cursor-pointer rounded-2xl p-5 text-left transition-all duration-300 ${
                    revealed
                      ? "ios-glass-btn-active"
                      : "glass-card hover:border-[#6d3fea]/35"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-300 ${
                        revealed
                          ? isFinalStep
                            ? "bg-gradient-to-br from-[#6d3fea] via-[#c312fb] to-[#fdc913] text-white shadow-[0_6px_16px_-4px_rgba(195,18,251,0.45)]"
                            : "bg-gradient-to-br from-[#6d3fea] to-[#9333ea] text-white shadow-[0_6px_14px_-4px_rgba(109,63,234,0.45)]"
                          : "border border-[#0f0b24]/[0.08] bg-[#f6f4fc] text-[#5b2ee0]"
                      }`}
                    >
                      <StepIcon
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isFinalStep && revealed
                            ? "-translate-y-0.5 rotate-12 scale-115"
                            : ""
                        }`}
                      />
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#5b2ee0]">
                      STEP {item.step}
                    </span>
                  </div>

                  <h3 className="mt-2.5 text-lg font-medium text-[#0f0b24]">
                    {cleanTitle}
                  </h3>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      revealed
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-3 border-t border-[#0f0b24]/[0.08] pt-3 text-sm leading-relaxed text-[#474269]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
