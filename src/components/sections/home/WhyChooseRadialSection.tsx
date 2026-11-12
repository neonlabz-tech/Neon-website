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

const SPOKE_PATHS = [
  "M 500 200 L 412 60 L 360 60",
  "M 500 200 L 360 200",
  "M 500 200 L 412 340 L 360 340",
  "M 500 200 L 588 60 L 640 60",
  "M 500 200 L 640 200",
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
    idx: number,
    side: "left" | "right"
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
            ? "ios-glass-btn-active border-[#6d3fea]/40"
            : "glass-card hover:border-[#6d3fea]/30"
        }`}
      >
        {/* Mobile & Tablet (< lg): Horizontal neon spoke branch connecting card into center spine */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute top-1/2 -left-4 h-[2px] w-4 -translate-y-1/2 transition-all duration-300 lg:hidden ${
            isActive
              ? "bg-gradient-to-r from-[#7975ff] via-[#c312fb] to-[#e10afa] shadow-[0_0_10px_rgba(225,10,250,0.6)]"
              : "bg-[#0f0b24]/15"
          }`}
        />
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute top-1/2 -left-[21px] h-2.5 w-2.5 -translate-y-1/2 rounded-full transition-all duration-300 lg:hidden ${
            isActive
              ? "scale-115 bg-[#e10afa] shadow-[0_0_12px_3px_rgba(225,10,250,0.65)] ring-2 ring-[#faf9fe]"
              : "bg-[#0f0b24]/25 ring-2 ring-[#faf9fe]"
          }`}
        />

        {/* Desktop (>= lg): Radial spoke terminal dot on the card edge facing center orb */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full transition-all duration-300 lg:block ${
            side === "left" ? "-right-1.5" : "-left-1.5"
          } ${
            isActive
              ? "scale-110 bg-[#e10afa] shadow-[0_0_12px_3px_rgba(225,10,250,0.6)] ring-2 ring-[#faf9fe]"
              : "bg-[#0f0b24]/25 ring-2 ring-[#faf9fe]"
          }`}
        />

        <span
          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isActive
              ? "border-transparent bg-gradient-to-br from-[#6d3fea] to-[#9333ea] text-white shadow-[0_6px_16px_rgba(109,63,234,0.35)]"
              : "border-[#0f0b24]/[0.08] bg-[#faf9fe] text-[#645e8a] group-hover:text-[#5b2ee0]"
          }`}
        >
          <Icon className="h-4 w-4" />
        </span>

        <div className="min-w-0">
          <div className="text-sm font-semibold tracking-[-0.01em] text-[#0f0b24]">
            {pillar.title}
          </div>
          <p
            className={`mt-1 text-xs leading-relaxed transition-colors duration-300 ${
              isActive ? "text-[#474269]" : "text-[#645e8a]"
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
      className="relative overflow-x-clip border-y border-[#0f0b24]/[0.06] bg-[#faf9fe] py-16 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(109,63,234,0.08)_0%,rgba(121,117,255,0.04)_45%,transparent_72%)] blur-2xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
        <div className="text-center">
          <Eyebrow label="WHY NEON LABZ" />
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-[-0.03em] text-[#0f0b24] sm:text-4xl lg:text-5xl">
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
              <linearGradient
                id="why-spoke-active-left"
                x1="100%"
                y1="50%"
                x2="0%"
                y2="50%"
              >
                <stop offset="0%" stopColor="#7975ff" />
                <stop offset="55%" stopColor="#c312fb" />
                <stop offset="100%" stopColor="#e10afa" />
              </linearGradient>
              <linearGradient
                id="why-spoke-active-right"
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
              >
                <stop offset="0%" stopColor="#7975ff" />
                <stop offset="55%" stopColor="#c312fb" />
                <stop offset="100%" stopColor="#e10afa" />
              </linearGradient>
            </defs>

            {SPOKE_PATHS.map((d, idx) => {
              const isActive = idx === activeIndex;
              const isRight = idx >= 3;
              return (
                <g key={d}>
                  <path
                    d={d}
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    className={
                      isActive ? "stroke-transparent" : "stroke-[#0f0b24]/15"
                    }
                  />
                  {isActive ? (
                    <>
                      <path
                        d={d}
                        fill="none"
                        stroke={
                          isRight
                            ? "url(#why-spoke-active-right)"
                            : "url(#why-spoke-active-left)"
                        }
                        strokeOpacity={0.28}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      />
                      <path
                        d={d}
                        fill="none"
                        stroke={
                          isRight
                            ? "url(#why-spoke-active-right)"
                            : "url(#why-spoke-active-left)"
                        }
                        strokeWidth="2.25"
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
                className="animate-orb-core-pulse pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-[#7975ff]/30 via-[#8c2bff]/28 to-[#e10afa]/30 blur-2xl dark:from-[#7975ff]/55 dark:via-[#8c2bff]/50 dark:to-[#e10afa]/50"
              />
              <div
                aria-hidden="true"
                className="animate-orb-ripple pointer-events-none absolute inset-4 rounded-full border border-[#e10afa]/60 shadow-[0_0_22px_rgba(225,10,250,0.45)]"
              />
              <BrandOrbEmblem className="h-32 w-32 p-6 sm:h-40 sm:w-40 sm:p-8" />
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
              className="pointer-events-none absolute top-0 bottom-8 left-2.5 w-[2px] rounded-full bg-gradient-to-b from-[#6d3fea]/60 via-[#c312fb]/40 to-[#0f0b24]/15 lg:hidden"
            />
            <div className="relative z-10 grid grid-rows-3 gap-4 lg:order-1 lg:gap-5">
              {leftPillars.map((pillar, offset) =>
                renderPillarCard(pillar, offset, "left")
              )}
            </div>

            <div className="relative z-10 grid grid-rows-3 gap-4 lg:order-3 lg:gap-5">
              {rightPillars.map((pillar, offset) =>
                renderPillarCard(pillar, offset + 3, "right")
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
