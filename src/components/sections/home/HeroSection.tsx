"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Play,
  X,
  // Code2,
  // Cloud,
  // Smartphone,
  // ShieldCheck,
  // Layers,
  // Sparkles,
} from "lucide-react";
import { ROUTES } from "@/constants/navigation";
import { COMPANY_INFO } from "@/data/company";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ActionPill } from "@/components/ui/ActionPill";
// import { BrandOrbEmblem } from "@/components/ui/BrandLogo";
import { ClientsTrustCard } from "@/components/sections/home/ClientsSection";

// const LEFT_ORBIT_BADGES = [
//   {
//     label: "Web Apps",
//     icon: Code2,
//     tierClass: "animate-node-tier-3",
//     auraClass: "animate-node-aura-3",
//   },
//   {
//     label: "Mobile",
//     icon: Smartphone,
//     tierClass: "animate-node-tier-2",
//     auraClass: "animate-node-aura-2",
//   },
//   {
//     label: "SaaS Core",
//     icon: Layers,
//     tierClass: "animate-node-tier-1",
//     auraClass: "animate-node-aura-1",
//   },
// ];
//
// const RIGHT_ORBIT_BADGES = [
//   {
//     label: "Cloud",
//     icon: Cloud,
//     tierClass: "animate-node-tier-1",
//     auraClass: "animate-node-aura-1",
//   },
//   {
//     label: "UI / UX",
//     icon: Sparkles,
//     tierClass: "animate-node-tier-2",
//     auraClass: "animate-node-aura-2",
//   },
//   {
//     label: "QA Tested",
//     icon: ShieldCheck,
//     tierClass: "animate-node-tier-3",
//     auraClass: "animate-node-aura-3",
//   },
// ];
//
// const MOBILE_RADIAL_NODES = [
//   {
//     label: "Web Apps",
//     icon: Code2,
//     posClass: "left-[20%] top-[16%]",
//     pathD: "M 200 120 L 128 42 L 80 42",
//   },
//   {
//     label: "Mobile",
//     icon: Smartphone,
//     posClass: "left-[12%] top-[50%]",
//     pathD: "M 200 130 L 48 130",
//   },
//   {
//     label: "SaaS Core",
//     icon: Layers,
//     posClass: "left-[20%] top-[84%]",
//     pathD: "M 200 140 L 128 218 L 80 218",
//   },
//   {
//     label: "Cloud",
//     icon: Cloud,
//     posClass: "left-[80%] top-[16%]",
//     pathD: "M 200 120 L 272 42 L 320 42",
//   },
//   {
//     label: "UI / UX",
//     icon: Sparkles,
//     posClass: "left-[88%] top-[50%]",
//     pathD: "M 200 130 L 352 130",
//   },
//   {
//     label: "QA Tested",
//     icon: ShieldCheck,
//     posClass: "left-[80%] top-[84%]",
//     pathD: "M 200 140 L 272 218 L 320 218",
//   },
// ];

export function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      id="hero-section"
      className="dark relative flex min-h-[min(100svh,840px)] flex-col overflow-x-clip bg-gradient-to-b from-[#09061a] via-[#0e0926] to-[#120d31] pt-20 pb-6 text-white sm:pt-24 sm:pb-8 lg:pt-[88px] lg:pb-10"
    >
      {/* Permanent midnight indigo atmospheric studio backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/hero/hero-studio-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50 select-none"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_78%_58%_at_50%_40%,rgba(9,6,26,0.34)_0%,rgba(14,9,38,0.74)_72%,rgba(18,13,49,0.92)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#120d31]/95 to-transparent" />
      </div>

      {/* Subtle neon atmospheric depth glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-180px] left-1/2 h-[560px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(109,63,234,0.32)_0%,rgba(140,43,255,0.14)_44%,transparent_74%)] blur-2xl lg:w-[1380px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-28 left-[-10%] hidden h-96 w-[420px] rounded-full bg-[radial-gradient(circle,rgba(121,117,255,0.18)_0%,transparent_70%)] blur-3xl lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-28 right-[-10%] hidden h-96 w-[420px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.14)_0%,transparent_70%)] blur-3xl lg:block"
      />

      <div className="relative z-10 mx-auto my-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-4 py-6 text-center sm:px-6 sm:py-8 lg:px-10 2xl:max-w-[1560px]">
        <div>
          <Eyebrow label={COMPANY_INFO.tagline} />

          <h1 className="mx-auto mt-4 max-w-4xl text-[36px] font-bold leading-[1.05] tracking-[-0.04em] text-white sm:mt-5 sm:text-5xl md:text-6xl lg:text-[66px] xl:max-w-5xl xl:text-[74px]">
            Innovative IT Solutions for{" "}
            <span className="neon-gradient-text">Modern Businesses</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base lg:text-lg xl:max-w-3xl">
            {COMPANY_INFO.heroDescription}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 min-[360px]:flex-nowrap min-[390px]:gap-2.5 sm:mt-6 sm:gap-4">
            <ActionPill
              href={ROUTES.contact}
              label="Get Started Today"
              compactMobile
            />

            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="ios-glass-btn inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full p-1 pr-2.5 text-[11px] font-medium text-white min-[390px]:gap-2 min-[390px]:pr-3 min-[390px]:text-xs sm:gap-2.5 sm:px-5 sm:py-3 sm:text-sm"
            >
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/35 bg-gradient-to-br from-[#7975ff] to-[#c312fb] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.55)] sm:h-6 sm:w-6">
                <Play className="ml-0.5 h-3 w-3 fill-current" />
              </span>
              <span>Watch Brand Intro</span>
            </button>
          </div>
        </div>

        {/* Preserved Orbital Showcase (commented out per user request)
        <div className="mt-7 sm:mt-8 lg:mt-9">
          {-- Desktop: scaled horizontal orbit + center-outward energy pulses --}
          <div className="relative mx-auto hidden w-full max-w-[1460px] items-center justify-between gap-2 md:flex md:gap-3 lg:gap-6 xl:gap-8">
            {-- Cosmic Violet-Magenta Light Beam backdrop via next/image --}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-1/2 w-[125%] -translate-x-1/2 -translate-y-1/2 [mask-image:linear-gradient(to_right,transparent_0%,black_14%,black_86%,transparent_100%)]"
            >
              <Image
                src="/images/hero/light-beam.svg"
                alt=""
                width={1440}
                height={240}
                priority
                className="h-40 w-full object-cover opacity-20 sm:h-48 lg:h-56 xl:h-64 dark:opacity-45"
              />
            </div>

            {-- Bidirectional Center -> Left & Center -> Right Laser Beam Pulses --}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-1/2 z-[5] h-16 -translate-y-1/2 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              {-- Crisp subtle dark-violet rail --}
              <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#6d3fea]/30 to-transparent dark:via-white/25" />

              {-- Leftward outward energy beam (Center -> SaaS Core -> Mobile -> Web Apps) --}
              <div className="absolute top-0 right-1/2 left-0 h-full overflow-hidden">
                <div className="animate-beam-left absolute inset-0">
                  <div className="relative flex h-full w-48 items-center">
                    <span className="h-3 w-3 shrink-0 rounded-full bg-[#e10afa] shadow-[0_0_16px_4px_rgba(225,10,250,0.45),0_0_26px_8px_rgba(109,63,234,0.3)] dark:bg-white dark:shadow-[0_0_16px_4px_rgba(255,255,255,0.95),0_0_28px_8px_rgba(225,10,250,0.85)]" />
                    <div className="h-5 w-48 -ml-2 rounded-full bg-gradient-to-r from-[#7975ff]/60 via-[#e10afa]/55 to-transparent blur-[5px] dark:from-white/90 dark:via-[#e10afa]/75" />
                    <div className="absolute top-1/2 left-1 h-[3px] w-44 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#6d3fea] via-[#e10afa] to-transparent dark:from-white dark:via-[#f0abfc]" />
                  </div>
                </div>
              </div>

              {-- Rightward outward energy beam (Center -> Cloud -> UI/UX -> QA Tested) --}
              <div className="absolute top-0 right-0 left-1/2 h-full overflow-hidden">
                <div className="animate-beam-right absolute inset-0">
                  <div className="relative ml-auto flex h-full w-48 items-center justify-end">
                    <div className="h-5 w-48 -mr-2 rounded-full bg-gradient-to-l from-[#7975ff]/60 via-[#e10afa]/55 to-transparent blur-[5px] dark:from-white/90 dark:via-[#e10afa]/75" />
                    <span className="h-3 w-3 shrink-0 rounded-full bg-[#e10afa] shadow-[0_0_16px_4px_rgba(225,10,250,0.45),0_0_26px_8px_rgba(109,63,234,0.3)] dark:bg-white dark:shadow-[0_0_16px_4px_rgba(255,255,255,0.95),0_0_28px_8px_rgba(225,10,250,0.85)]" />
                    <div className="absolute top-1/2 right-1 h-[3px] w-44 -translate-y-1/2 rounded-full bg-gradient-to-l from-[#6d3fea] via-[#e10afa] to-transparent dark:from-white dark:via-[#f0abfc]" />
                  </div>
                </div>
              </div>
            </div>

            {-- Left Node Group --}
            <div className="relative z-10 flex flex-1 items-center justify-evenly gap-2 lg:gap-4">
              {LEFT_ORBIT_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className={`relative flex h-20 w-20 flex-col items-center justify-center gap-1.5 overflow-hidden rounded-full border border-[#6d3fea]/20 bg-white/85 shadow-[0_10px_28px_rgba(109,63,234,0.12)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 lg:h-28 lg:w-28 lg:gap-2 xl:h-32 xl:w-32 2xl:h-36 2xl:w-36 dark:border-white/25 dark:bg-[#211854]/75 dark:shadow-none ${badge.tierClass}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(225,10,250,0.16)_0%,rgba(121,117,255,0.1)_55%,transparent_100%)] dark:bg-[radial-gradient(circle,rgba(225,10,250,0.34)_0%,rgba(121,117,255,0.16)_55%,transparent_100%)] ${badge.auraClass}`}
                    />
                    <Icon className="relative z-10 h-5 w-5 text-[#6d3fea] lg:h-7 lg:w-7 xl:h-8 xl:w-8 dark:text-[#e3d7ff]" />
                    <span className="relative z-10 text-[10px] font-medium tracking-wide text-[#120d31] lg:text-xs xl:text-[13px] dark:text-white/90">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {-- Center Emblem Hub --}
            <div className="relative z-10 shrink-0">
              <div
                aria-hidden="true"
                className="animate-orb-core-pulse pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-[#7975ff]/35 via-[#8c2bff]/30 to-[#e10afa]/30 blur-2xl dark:from-[#7975ff]/60 dark:via-[#8c2bff]/60 dark:to-[#e10afa]/60"
              />
              <div
                aria-hidden="true"
                className="animate-orb-ripple pointer-events-none absolute inset-0 rounded-full border border-[#e10afa]/70 shadow-[0_0_24px_rgba(225,10,250,0.5)]"
              />
              <BrandOrbEmblem
                priority
                className="h-36 w-36 p-7 lg:h-44 lg:w-44 lg:p-8 xl:h-48 xl:w-48 xl:p-9 2xl:h-52 2xl:w-52 2xl:p-10"
              />
            </div>

            {-- Right Node Group --}
            <div className="relative z-10 flex flex-1 items-center justify-evenly gap-2 lg:gap-4">
              {RIGHT_ORBIT_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className={`relative flex h-20 w-20 flex-col items-center justify-center gap-1.5 overflow-hidden rounded-full border border-[#6d3fea]/20 bg-white/85 shadow-[0_10px_28px_rgba(109,63,234,0.12)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 lg:h-28 lg:w-28 lg:gap-2 xl:h-32 xl:w-32 2xl:h-36 2xl:w-36 dark:border-white/25 dark:bg-[#211854]/75 dark:shadow-none ${badge.tierClass}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(225,10,250,0.16)_0%,rgba(121,117,255,0.1)_55%,transparent_100%)] dark:bg-[radial-gradient(circle,rgba(225,10,250,0.34)_0%,rgba(121,117,255,0.16)_55%,transparent_100%)] ${badge.auraClass}`}
                    />
                    <Icon className="relative z-10 h-5 w-5 text-[#6d3fea] lg:h-7 lg:w-7 xl:h-8 xl:w-8 dark:text-[#e3d7ff]" />
                    <span className="relative z-10 text-[10px] font-medium tracking-wide text-[#120d31] lg:text-xs xl:text-[13px] dark:text-white/90">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {-- Mobile Only: Radial hub with 3 left + 3 right connected circles & outward light pulses --}
          <div className="pb-6 md:hidden">
            <div className="relative mx-auto h-[280px] w-full max-w-[420px]">
              {-- Soft radial nebula aura behind mobile orb --}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 h-44 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(140,43,255,0.16)_0%,rgba(109,63,234,0.08)_55%,transparent_75%)] blur-xl dark:bg-[radial-gradient(circle,rgba(140,43,255,0.34)_0%,rgba(109,63,234,0.12)_55%,transparent_75%)]"
              />

              {-- Branching SVG rails + synchronized outward plasma beams --}
              <svg
                aria-hidden="true"
                viewBox="0 0 400 260"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 z-[5] h-full w-full"
              >
                <defs>
                  <filter
                    id="mobile-beam-glow"
                    filterUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="400"
                    height="260"
                  >
                    <feGaussianBlur stdDeviation="2.8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {MOBILE_RADIAL_NODES.map((node) => (
                  <g key={node.label}>
                    {-- Base subtle connector rail --}
                    <path
                      d={node.pathD}
                      fill="none"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                      className="stroke-[#6d3fea]/20 dark:stroke-white/15"
                    />

                    {-- Synchronized outward light streak --}
                    <path
                      d={node.pathD}
                      fill="none"
                      pathLength={100}
                      stroke="#e10afa"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="24 124"
                      filter="url(#mobile-beam-glow)"
                      vectorEffect="non-scaling-stroke"
                      className="animate-mobile-beam"
                    />
                    <path
                      d={node.pathD}
                      fill="none"
                      pathLength={100}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="16 132"
                      vectorEffect="non-scaling-stroke"
                      className="animate-mobile-beam stroke-[#7975ff] dark:stroke-white"
                    />
                  </g>
                ))}
              </svg>

              {-- Center Mobile Emblem Orb --}
              <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div
                  aria-hidden="true"
                  className="animate-orb-core-pulse pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-tr from-[#7975ff]/35 via-[#8c2bff]/30 to-[#e10afa]/30 blur-xl dark:from-[#7975ff]/60 dark:via-[#8c2bff]/60 dark:to-[#e10afa]/60"
                />
                <div
                  aria-hidden="true"
                  className="animate-orb-ripple pointer-events-none absolute inset-0 rounded-full border border-[#e10afa]/70 shadow-[0_0_20px_rgba(225,10,250,0.5)]"
                />
                <BrandOrbEmblem className="h-[104px] w-[104px] p-5 sm:h-28 sm:w-28 sm:p-6" />
              </div>

              {-- 6 Connected Circular Capability Nodes --}
              {MOBILE_RADIAL_NODES.map((node) => {
                const Icon = node.icon;
                return (
                  <div
                    key={node.label}
                    className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 ${node.posClass}`}
                  >
                    <div className="animate-mobile-node relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-[#6d3fea]/20 bg-white/90 shadow-[0_8px_22px_rgba(109,63,234,0.14)] backdrop-blur-xl sm:h-16 sm:w-16 dark:border-white/25 dark:bg-[#211854]/80 dark:shadow-[0_0_22px_rgba(109,63,234,0.3)]">
                      <span
                        aria-hidden="true"
                        className="animate-mobile-node-aura pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(225,10,250,0.18)_0%,rgba(121,117,255,0.1)_60%,transparent_100%)] dark:bg-[radial-gradient(circle,rgba(225,10,250,0.36)_0%,rgba(121,117,255,0.16)_60%,transparent_100%)]"
                      />
                      <Icon className="relative z-10 h-5 w-5 text-[#6d3fea] sm:h-6 sm:w-6 dark:text-[#e3d7ff]" />
                    </div>
                    <span className="absolute top-full left-1/2 mt-1 -translate-x-1/2 whitespace-nowrap text-[10.5px] font-medium tracking-wide text-[#120d31]/85 dark:text-white/85">
                      {node.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        */}
      </div>

      <div className="relative z-10 mx-auto mt-2 w-full max-w-[1680px] sm:mt-4">
        <ClientsTrustCard id="clients" compact tone="light" />
      </div>

      {videoOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="NeonLabz Brand Video"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/20 bg-[#140e36] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <span className="text-sm font-medium text-white">
                NeonLabz — {COMPANY_INFO.tagline}
              </span>
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                aria-label="Close video modal"
                className="ios-glass-btn rounded-full p-1.5 text-white/85"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`${COMPANY_INFO.youtubeEmbedUrl}?autoplay=1`}
                title="NeonLabz Brand Introduction"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
