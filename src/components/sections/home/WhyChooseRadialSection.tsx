"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Cpu,
  TrendingUp,
  Puzzle,
  Code2,
  Users,
  Sparkles,
} from "lucide-react";
import { ROUTES } from "@/constants/navigation";
import { WHY_CHOOSE_PILLARS } from "@/data/company";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ActionPill } from "@/components/ui/ActionPill";
import { BrandOrbEmblem } from "@/components/ui/BrandLogo";

const PILLAR_ICONS = [Cpu, TrendingUp, Puzzle, Code2, Users, Sparkles];

// Spoke paths: 0.01 offset on horizontal lines guarantees non-zero bounding box height
// preventing SVG objectBoundingBox filter and gradient clipping in all browsers
const SPOKE_PATHS = [
  "M 500 200 L 412 60 L 360 60",
  "M 500 200 L 360 200.01",
  "M 500 200 L 412 340 L 360 340",
  "M 500 200 L 588 60 L 640 60",
  "M 500 200 L 640 200.01",
  "M 500 200 L 588 340 L 640 340",
] as const;

export function WhyChooseRadialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPausedRef.current && !document.hidden) {
        setActiveIndex((prev) => (prev + 1) % WHY_CHOOSE_PILLARS.length);
      }
    }, 2600);

    return () => clearInterval(intervalId);
  }, []);

  const leftPillars = WHY_CHOOSE_PILLARS.slice(0, 3);
  const rightPillars = WHY_CHOOSE_PILLARS.slice(3, 6);

  const renderPillarCard = (
    pillar: (typeof WHY_CHOOSE_PILLARS)[number],
    idx: number
  ) => {
    const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
    const isActive = idx === activeIndex;

    return (
      <button
        key={pillar.title}
        type="button"
        aria-pressed={isActive}
        onPointerEnter={(e) => {
          if (e.pointerType !== "touch") {
            isPausedRef.current = true;
            setActiveIndex(idx);
          }
        }}
        onPointerLeave={(e) => {
          if (e.pointerType !== "touch") {
            isPausedRef.current = false;
          }
        }}
        onFocus={() => {
          isPausedRef.current = true;
          setActiveIndex(idx);
        }}
        onBlur={() => {
          isPausedRef.current = false;
        }}
        onClick={() => setActiveIndex(idx)}
        className={`group relative flex h-full w-full items-center gap-3.5 rounded-2xl px-4 py-4 text-left transition-all duration-300 sm:rounded-[26px] sm:px-5 ${
          isActive
            ? "border border-[#e10afa]/60 bg-gradient-to-r from-[#1c1248] via-[#24155a] to-[#2e1368] shadow-[0_0_30px_rgba(225,10,250,0.32)]"
            : "border border-white/[0.08] bg-[#120c2e]/75 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:border-[#8c2bff]/40 hover:bg-[#18103c]/85"
        }`}
      >
        <span
          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isActive
              ? "border-transparent bg-gradient-to-br from-[#8c2bff] via-[#c312fb] to-[#e10afa] text-white shadow-[0_0_20px_rgba(225,10,250,0.55)]"
              : "border-white/[0.12] bg-[#1a1244] text-[#a78bfa] group-hover:border-[#8c2bff]/50 group-hover:text-white"
          }`}
        >
          <Icon className="h-4 w-4" />
        </span>

        <div className="min-w-0">
          <div className="text-sm font-semibold tracking-[-0.01em] text-white">
            {pillar.title}
          </div>
          <p
            className={`mt-1 text-xs leading-relaxed transition-colors duration-300 ${
              isActive ? "text-white/90" : "text-white/60"
            }`}
          >
            {pillar.description}
          </p>
        </div>
      </button>
    );
  };

  return (
    <section
      id="why-choose-us"
      className="dark relative overflow-x-clip border-y border-white/[0.08] bg-[#09061a] py-16 sm:py-24 lg:py-28"
    >
      {/* Deep ambient dark backdrop glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(140,43,255,0.22)_0%,rgba(109,63,234,0.12)_40%,transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[450px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(225,10,250,0.14)_0%,transparent_60%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
        <div className="text-center">
          <Eyebrow label="WHY NEON LABZ" />
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            Driven by <span className="neon-gradient-text">Innovation</span>{" "}
            and Technology
          </h2>
        </div>

        {/* Radial Hub: 3 Left Pillars | Center Orb with Spokes | 3 Right Pillars */}
        <div className="relative mt-10 grid grid-cols-1 gap-0 sm:mt-12 lg:grid-cols-[36%_28%_36%] lg:items-stretch lg:gap-0">
          {/* Desktop Radial Connector Lines */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
          >
            <defs>
              <filter
                id="why-spoke-glow"
                x="0"
                y="0"
                width="1000"
                height="400"
                filterUnits="userSpaceOnUse"
              >
                <feGaussianBlur stdDeviation="3.5" result="blur1" />
                <feGaussianBlur stdDeviation="7" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient
                id="why-spoke-active-left"
                gradientUnits="userSpaceOnUse"
                x1="500"
                y1="198"
                x2="360"
                y2="202"
              >
                <stop offset="0%" stopColor="#7975ff" />
                <stop offset="50%" stopColor="#c312fb" />
                <stop offset="100%" stopColor="#e10afa" />
              </linearGradient>
              <linearGradient
                id="why-spoke-active-right"
                gradientUnits="userSpaceOnUse"
                x1="500"
                y1="198"
                x2="640"
                y2="202"
              >
                <stop offset="0%" stopColor="#7975ff" />
                <stop offset="50%" stopColor="#c312fb" />
                <stop offset="100%" stopColor="#e10afa" />
              </linearGradient>
            </defs>

            {SPOKE_PATHS.map((d, idx) => {
              const isActive = idx === activeIndex;
              const isRight = idx >= 3;
              const activeStroke = isRight
                ? "url(#why-spoke-active-right)"
                : "url(#why-spoke-active-left)";

              return (
                <g key={d}>
                  {/* Inactive Base Path */}
                  <path
                    d={d}
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    className={
                      isActive ? "stroke-[#c312fb]/20" : "stroke-white/15"
                    }
                  />

                  {/* Active Glowing Spoke (Layered Neon Laser Beam) */}
                  {isActive ? (
                    <>
                      {/* Wide Ambient Neon Halo */}
                      <path
                        d={d}
                        fill="none"
                        stroke={activeStroke}
                        strokeOpacity={0.5}
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                        filter="url(#why-spoke-glow)"
                      />
                      {/* Core Laser Beam */}
                      <path
                        d={d}
                        fill="none"
                        stroke={activeStroke}
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                        filter="url(#why-spoke-glow)"
                      />
                      {/* Guaranteed Solid Neon Fallback Beam */}
                      <path
                        d={d}
                        fill="none"
                        stroke="#e10afa"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      />
                      {/* White-Hot Electric Core Filament */}
                      <path
                        d={d}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeOpacity={1}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      />
                    </>
                  ) : null}
                </g>
              );
            })}
          </svg>

          {/* Center Emblem Orb (Top on Mobile/Tablet, Center Column on Desktop) */}
          <div className="order-1 flex flex-col items-center justify-center pt-2 lg:order-2 lg:py-0">
            <div className="relative z-10 flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48">
              <div
                aria-hidden="true"
                className="animate-orb-core-pulse pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-[#7975ff]/45 via-[#8c2bff]/40 to-[#e10afa]/45 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="animate-orb-ripple pointer-events-none absolute inset-4 rounded-full border border-[#e10afa]/60 shadow-[0_0_28px_rgba(225,10,250,0.5)]"
              />
              <BrandOrbEmblem className="h-32 w-32 border border-white/20 bg-white p-6 shadow-[0_0_40px_rgba(195,18,251,0.55)] sm:h-40 sm:w-40 sm:p-8" />
            </div>

            {/* Mobile & Tablet (< lg): Neon Bridge Stem routing center orb down to left circuit bus */}
            <div
              aria-hidden="true"
              className="relative h-8 w-full lg:hidden"
            >
              <span className="absolute top-0 left-1/2 h-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#e10afa] via-[#c312fb] to-[#7975ff] shadow-[0_0_10px_rgba(225,10,250,0.55)]" />
              <span className="absolute top-4 right-1/2 left-2.5 h-[2px] rounded-tl-full bg-gradient-to-l from-[#7975ff] via-[#c312fb] to-[#6d3fea]" />
              <span className="absolute top-4 left-2.5 h-4 w-[2px] bg-[#6d3fea]/60" />
            </div>
          </div>

          {/* Pillar Cards Group: Connected Circuit Bus (< lg) -> 3 Left / 3 Right Desktop */}
          <div className="relative order-2 grid grid-cols-1 gap-4 pl-6 sm:gap-4 lg:contents lg:pl-0">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-0 bottom-8 left-2.5 w-[2px] rounded-full bg-gradient-to-b from-[#6d3fea]/60 via-[#c312fb]/40 to-white/10 lg:hidden"
            />
            <div className="relative z-10 grid grid-rows-3 gap-4 lg:order-1 lg:gap-5">
              {leftPillars.map((pillar, offset) =>
                renderPillarCard(pillar, offset)
              )}
            </div>

            <div className="relative z-10 grid grid-rows-3 gap-4 lg:order-3 lg:gap-5">
              {rightPillars.map((pillar, offset) =>
                renderPillarCard(pillar, offset + 3)
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <ActionPill href={ROUTES.contact} label="Start a Conversation" />
        </div>
      </div>
    </section>
  );
}
