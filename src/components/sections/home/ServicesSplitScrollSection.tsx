"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Layers,
  Palette,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { ROUTES } from "@/constants/navigation";
import { CORE_SERVICES, SERVICE_CATEGORIES } from "@/data/services";
import type { ServiceCategory, ServiceItem } from "@/types";
import { Eyebrow } from "@/components/ui/Eyebrow";

const SERVICE_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "mobile-web": Smartphone,
  saas: Layers,
  "erp-crm": Workflow,
  cloud: Cloud,
  ecommerce: ShoppingBag,
  "qa-testing": ShieldCheck,
  "ui-ux": Palette,
  "digital-marketing": TrendingUp,
};

const PILLAR_METRICS: Record<
  ServiceCategory,
  { value: string; label: string }[]
> = {
  "it-solutions": [
    { value: "Full-Stack", label: "Web, Mobile & Cloud" },
    { value: "98%", label: "Release Reliability" },
    { value: "SaaS & ERP", label: "Scalable Foundations" },
    { value: "Full-Cycle", label: "Build to SLA Support" },
  ],
  creative: [
    { value: "Brand & Growth", label: "Unified Strategy" },
    { value: "Design System", label: "Unified UI / UX Tokens" },
    { value: "SEO & Paid", label: "Targeted Acquisition" },
    { value: "ROI-First", label: "Conversion Focused" },
  ],
};

const PILLAR_SUMMARIES: Record<ServiceCategory, string> = {
  "it-solutions":
    "Custom web & mobile platforms, multi-tenant SaaS, ERP/CRM automation, resilient cloud infrastructure, e-commerce, and QA assurance.",
  creative:
    "Memorable visual identity, cohesive UI/UX design systems, technical SEO, and data-backed digital campaigns built for measurable pipeline growth.",
};

const PILLAR_PILLS: Record<ServiceCategory, string> = {
  "it-solutions": "Engineering Services",
  creative: "Brand & Growth Disciplines",
};

function ServiceFeatureCard({
  service,
  variant = "it",
}: {
  service: ServiceItem;
  variant?: "it" | "creative";
}) {
  const Icon = SERVICE_ICONS[service.id] ?? (variant === "creative" ? Sparkles : Code2);
  const isCreative = variant === "creative";

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`glass-card group relative block overflow-hidden rounded-3xl p-4 transition-all duration-300 hover:-translate-y-1 sm:p-5 lg:p-6 ${
        isCreative
          ? "hover:border-[#c312fb]/40"
          : "hover:border-[#6d3fea]/40"
      }`}
    >
      {/* Subtle hover-revealed cover wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 760px"
          className="object-cover opacity-15 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/75" />
      </div>

      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent to-transparent opacity-65 transition-opacity group-hover:opacity-100 ${
          isCreative ? "via-[#c312fb]/70" : "via-[#7975ff]/70"
        }`}
      />

      <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-12 md:items-center md:gap-5">
        {/* Visual Preview Thumbnail */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc] md:col-span-5 md:aspect-[3/2]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b24]/55 via-transparent to-transparent" />
          <div className="absolute bottom-2.5 left-2.5 flex items-center gap-2 rounded-full border border-white/25 bg-[#0f0b24]/75 px-3 py-1 backdrop-blur-md">
            <Icon className="h-3.5 w-3.5 text-[#d7c9ff]" />
            <span className="font-mono text-[10.5px] font-medium text-white">
              {service.shortTitle}
            </span>
          </div>
        </div>

        {/* Service Details + Core Offerings Breakdown */}
        <div className="md:col-span-7">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span
                className={`text-[10.5px] font-semibold uppercase tracking-[0.2em] ${
                  isCreative ? "text-[#9c16c7]" : "text-[#5b2ee0]"
                }`}
              >
                {service.eyebrow}
              </span>
              <h4 className="mt-0.5 text-xl font-semibold tracking-[-0.02em] text-[#0f0b24] sm:text-2xl">
                {service.title}
              </h4>
            </div>

            <span
              className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0f0b24]/10 bg-[#faf9fe] text-[#474269] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#7975ff] group-hover:to-[#e10afa] group-hover:text-white ${
                isCreative
                  ? "group-hover:border-[#c312fb]"
                  : "group-hover:border-[#6d3fea]"
              }`}
            >
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#474269]">
            {service.description}
          </p>

          {/* 4 Sub-Offerings Chips Grid */}
          <div className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {service.offerings.slice(0, 4).map((offering) => (
              <div
                key={offering.title}
                className="rounded-xl border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-3 py-1.5 text-xs font-medium text-[#0f0b24]"
              >
                {offering.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ServicesSplitScrollSection() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(0);

  const itServices = CORE_SERVICES.filter(
    (service) => service.category === "it-solutions"
  );
  const creativeServices = CORE_SERVICES.filter(
    (service) => service.category === "creative"
  );

  useEffect(() => {
    let rafId = 0;

    const updateActivePillar = () => {
      rafId = 0;
      const probeY = window.innerHeight * 0.4;
      let nextIdx = 0;

      for (let i = 0; i < chapterRefs.current.length; i += 1) {
        const el = chapterRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY) {
          nextIdx = i;
        }
      }

      if (nextIdx !== activeIndexRef.current) {
        activeIndexRef.current = nextIdx;
        setActivePillarIndex(nextIdx);
      }
    };

    const scheduleUpdate = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateActivePillar);
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

  const scrollToPillar = (index: number) => {
    const targetEl = chapterRefs.current[index];
    if (!targetEl) return;
    targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="services" className="relative bg-white py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
        {/* Mobile & Tablet Header (< lg) */}
        <div className="lg:hidden">
          <Eyebrow label="OUR SERVICES" align="left" />
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#0f0b24] sm:text-4xl">
            Complete{" "}
            <span className="neon-gradient-text">IT Solutions &amp; Creative</span>{" "}
            Services
          </h2>
        </div>

        {/* Mobile Sticky Pillar Switcher (< lg) */}
        <div className="sticky top-[68px] z-20 mt-5 mb-8 lg:hidden">
          <div className="ios-glass-navbar grid grid-cols-2 gap-1.5 rounded-full p-1.5 backdrop-blur-2xl">
            {SERVICE_CATEGORIES.map((category, idx) => {
              const isActive = activePillarIndex === idx;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => scrollToPillar(idx)}
                  className={`flex items-center justify-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "bg-gradient-to-r from-[#6d3fea] to-[#c312fb] text-white shadow-[0_8px_20px_-6px_rgba(109,63,234,0.45)]"
                      : "text-[#474269] hover:text-[#0f0b24]"
                  }`}
                >
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-16">
          {/* Desktop Left Sticky Pillar Rail */}
          <aside className="hidden lg:sticky lg:top-20 lg:col-span-5 lg:block lg:self-start xl:top-24">
            <Eyebrow label="OUR SERVICES" align="left" />
            <h2 className="mt-2.5 text-2xl leading-[1.15] font-bold tracking-[-0.03em] text-[#0f0b24] xl:mt-3 xl:text-3xl 2xl:text-4xl">
              Core{" "}
              <span className="neon-gradient-text">Service Pillars</span>
            </h2>

            <div className="mt-5 space-y-4 xl:mt-7 xl:space-y-6">
              {SERVICE_CATEGORIES.map((category, idx) => {
                const isActive = activePillarIndex === idx;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => scrollToPillar(idx)}
                    aria-current={isActive ? "true" : undefined}
                    className={`group relative flex w-full cursor-pointer items-start gap-4 rounded-2xl py-1.5 pr-3 pl-5 text-left transition-all duration-500 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-35 hover:opacity-75"
                    }`}
                  >
                    {/* Animated active indicator rail */}
                    <span
                      aria-hidden="true"
                      className={`absolute top-1.5 bottom-1.5 left-0 w-[3px] rounded-full transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-b from-[#7975ff] via-[#c312fb] to-[#e10afa] shadow-[0_0_14px_rgba(195,18,251,0.55)]"
                          : "bg-[#0f0b24]/15"
                      }`}
                    />

                    <div className="min-w-0 flex-1">
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#645e8a]">
                        {category.eyebrow}
                      </span>

                      <div
                        className={`mt-1 text-2xl font-bold tracking-[-0.03em] transition-all duration-300 xl:text-[34px] 2xl:text-[40px] ${
                          isActive ? "neon-gradient-text" : "text-[#0f0b24]"
                        }`}
                      >
                        {category.label}
                      </div>

                      <p className="mt-1.5 line-clamp-3 text-[13px] leading-relaxed text-[#474269] xl:text-sm">
                        {PILLAR_SUMMARIES[category.id]}
                      </p>

                      <div className="mt-2.5 inline-flex items-center gap-2 rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-3 py-0.5 text-[11px] font-medium text-[#5b2ee0] xl:py-1">
                        <span>{PILLAR_PILLS[category.id]}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 border-t border-[#0f0b24]/[0.08] pt-4 xl:mt-7 xl:pt-5">
              <Link
                href={ROUTES.services}
                className="group inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#5b2ee0] transition-colors hover:text-[#0f0b24]"
              >
                <span>Browse Complete Service Directory</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </aside>

          {/* Right Scrolling Chapters */}
          <div className="space-y-16 sm:space-y-20 lg:col-span-7 lg:space-y-28">
            {/* Chapter: IT Solutions */}
            <div
              id="pillar-it-solutions"
              ref={(el) => {
                chapterRefs.current[0] = el;
              }}
              className="scroll-mt-36 lg:scroll-mt-24"
            >
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#6d3fea]/20 bg-[#f6f4fc] px-3.5 py-1 text-xs font-medium text-[#5b2ee0]">
                  <Code2 className="h-3.5 w-3.5" />
                  <span>{SERVICE_CATEGORIES[0].label}</span>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#474269] sm:text-base">
                  {SERVICE_CATEGORIES[0].description}
                </p>
              </div>

              <div className="space-y-5">
                {itServices.map((service) => (
                  <ServiceFeatureCard
                    key={service.id}
                    service={service}
                    variant="it"
                  />
                ))}
              </div>

              {/* IT Solutions Highlight Metrics Strip */}
              <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-[#5b2ee0] via-[#7048ff] to-[#9333ea] p-5 text-white shadow-[0_18px_44px_-16px_rgba(109,63,234,0.38)] sm:p-6">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
                  {PILLAR_METRICS["it-solutions"].map((metric) => (
                    <div key={metric.label}>
                      <div className="text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                        {metric.value}
                      </div>
                      <div className="mt-0.5 text-[11px] font-medium text-white/85 sm:text-xs">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chapter: Creative */}
            <div
              id="pillar-creative"
              ref={(el) => {
                chapterRefs.current[1] = el;
              }}
              className="scroll-mt-36 lg:scroll-mt-24"
            >
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#c312fb]/22 bg-[#faf5ff] px-3.5 py-1 text-xs font-medium text-[#9c16c7]">
                  <Palette className="h-3.5 w-3.5" />
                  <span>{SERVICE_CATEGORIES[1].label}</span>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#474269] sm:text-base">
                  {SERVICE_CATEGORIES[1].description}
                </p>
              </div>

              <div className="space-y-5">
                {creativeServices.map((service) => (
                  <ServiceFeatureCard
                    key={service.id}
                    service={service}
                    variant="creative"
                  />
                ))}
              </div>

              {/* Creative Highlight Metrics Strip */}
              <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-[#7048ff] via-[#a21caf] to-[#c312fb] p-5 text-white shadow-[0_18px_44px_-16px_rgba(195,18,251,0.38)] sm:p-6">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
                  {PILLAR_METRICS.creative.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                        {metric.value}
                      </div>
                      <div className="mt-0.5 text-[11px] font-medium text-white/85 sm:text-xs">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
