import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Layers,
  Palette,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { ROUTES } from "@/constants/navigation";
import {
  CORE_SERVICES,
  SERVICE_CATEGORIES,
  getServiceBySlug,
} from "@/data/services";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ActionPill } from "@/components/ui/ActionPill";
import { CtaConnectBanner } from "@/components/sections/shared/CtaConnectBanner";

const CATEGORY_LABELS: Record<"it-solutions" | "creative", string> = {
  "it-solutions": "IT Solutions",
  creative: "Creative",
};

const ADVANTAGE_ICONS = [Zap, ShieldCheck, Layers, Sparkles] as const;

export async function generateStaticParams() {
  return CORE_SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Services" };
  return {
    title: service.title,
    description: service.heroSubheadline ?? service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const serviceIndex = CORE_SERVICES.findIndex((item) => item.slug === slug);

  if (serviceIndex === -1) {
    notFound();
  }

  const service = CORE_SERVICES[serviceIndex];
  const categoryId = service.category ?? "it-solutions";
  const categoryList = Array.isArray(SERVICE_CATEGORIES)
    ? SERVICE_CATEGORIES
    : [];
  const categoryLabel =
    categoryList.find((cat) => cat.id === categoryId)?.label ??
    CATEGORY_LABELS[categoryId] ??
    "IT Solutions";

  const backHref =
    categoryId === "creative"
      ? `${ROUTES.services}?category=creative`
      : ROUTES.services;

  const CategoryIcon = categoryId === "creative" ? Palette : Code2;

  const techTags = Array.isArray(service.techTags) ? service.techTags : [];
  const highlights = Array.isArray(service.highlights)
    ? service.highlights
    : [];
  const deliverables = Array.isArray(service.deliverables)
    ? service.deliverables
    : [];
  const offerings = Array.isArray(service.offerings) ? service.offerings : [];
  const advantages = Array.isArray(service.advantages)
    ? service.advantages
    : [];
  const relatedPortfolioSlugs = Array.isArray(service.relatedPortfolioSlugs)
    ? service.relatedPortfolioSlugs
    : [];

  const relatedPortfolio = PORTFOLIO_ITEMS.filter((item) =>
    relatedPortfolioSlugs.includes(item.slug)
  );

  const prevService =
    CORE_SERVICES[
      (serviceIndex - 1 + CORE_SERVICES.length) % CORE_SERVICES.length
    ];
  const nextService =
    CORE_SERVICES[(serviceIndex + 1) % CORE_SERVICES.length];

  return (
    <div className="relative overflow-x-clip bg-white">
      {/* Service Hero Section */}
      <section className="relative bg-white pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(ellipse_62%_46%_at_50%_30%,rgba(109,63,234,0.06)_0%,rgba(140,43,255,0.02)_46%,transparent_74%)] sm:h-[520px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          {/* Back & Category Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm text-[#474269] transition-colors hover:text-[#0f0b24]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to {categoryLabel}</span>
            </Link>

            <Link
              href={backHref}
              className="inline-flex items-center gap-2 rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-3.5 py-1 text-xs font-medium text-[#5b2ee0] transition-colors hover:border-[#6d3fea]/35"
            >
              <CategoryIcon className="h-3.5 w-3.5" />
              <span>{categoryLabel}</span>
            </Link>
          </div>

          {/* 2-Column Hero Grid */}
          <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Eyebrow label={service.eyebrow} align="left" />

              <h1 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-[#0f0b24] sm:text-5xl lg:text-[54px] lg:leading-[1.06]">
                {service.title}
              </h1>

              <p className="mt-3 text-lg font-medium tracking-[-0.02em] sm:text-xl">
                <span className="neon-gradient-text">{service.headline}</span>
              </p>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#474269] sm:text-[17px]">
                {service.heroSubheadline ?? service.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <ActionPill
                  href={`${ROUTES.contact}?service=${encodeURIComponent(service.title)}`}
                  label="Request This Service"
                />
                <Link
                  href="#what-we-build"
                  className="ios-glass-btn inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[#0f0b24]"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Tech / Tooling Strip */}
              {techTags.length > 0 ? (
                <div className="mt-8 border-t border-[#0f0b24]/[0.08] pt-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#645e8a]">
                    Core Stack &amp; Tooling
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {techTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-3 py-1 text-xs font-medium text-[#474269]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Hero Right Visual Preview Card */}
            <div className="lg:col-span-5">
              <div className="glass-card-strong overflow-hidden rounded-3xl p-4 sm:p-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-4 space-y-2.5 px-1 pb-1">
                  {highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2.5 text-sm text-[#0f0b24]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0c7a56]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 / The Bigger Picture Overview Section */}
      <section className="border-y border-[#0f0b24]/[0.06] bg-[#faf9fe] py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <div className="glass-card-strong relative overflow-hidden rounded-3xl p-7 sm:p-10 lg:p-12">
            <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#5b2ee0]">
                  01 / {service.biggerPictureEyebrow ?? "THE BIGGER PICTURE"}
                </div>
                <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#0f0b24] sm:text-3xl lg:text-4xl">
                  {service.biggerPictureTitle ?? service.headline}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#474269] sm:text-base">
                  {service.biggerPictureBody ?? service.description}
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-[#0f0b24]/[0.08] bg-[#faf9fe] p-5 sm:p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5b2ee0]">
                    Standard Deliverables
                  </div>
                  <ul className="mt-4 space-y-3">
                    {deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-[#474269]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6d3fea]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 / Categorized Capability Breakdown (What We Build / Craft) */}
      {offerings.length > 0 ? (
        <section
          id="what-we-build"
          className="scroll-mt-24 bg-white py-12 sm:py-16"
        >
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
            <div className="max-w-2xl">
              <div className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#5b2ee0]">
                02 / CAPABILITY MODULES
              </div>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-[#0f0b24] sm:text-4xl">
                {service.offeringsTitle ?? "What We Build"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#474269] sm:text-base">
                Structured components tailored to your roadmap—combine full
                delivery or start with the exact modules your team needs first.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2">
              {offerings.map((offering, index) => (
                <div
                  key={offering.title}
                  className="glass-card rounded-3xl p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs font-semibold text-[#5b2ee0]">
                      MODULE 0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-medium tracking-[-0.02em] text-[#0f0b24] sm:text-2xl">
                    {offering.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#474269]">
                    {offering.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-[#0f0b24]/[0.08] pt-5">
                    {(offering.points ?? []).map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-[#474269]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6d3fea]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 03 / Why Choose Neon Labz for This Service */}
      {advantages.length > 0 ? (
        <section className="border-y border-[#0f0b24]/[0.06] bg-[#faf9fe] py-12 sm:py-16">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
            <div className="text-center">
              <div className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#5b2ee0]">
                03 / ENGINEERING STANDARDS
              </div>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-[#0f0b24] sm:text-4xl">
                Why Partner With Neon Labz
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {advantages.map((adv, idx) => {
                const Icon = ADVANTAGE_ICONS[idx % ADVANTAGE_ICONS.length];
                return (
                  <div key={adv.title} className="glass-card rounded-2xl p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc] text-[#6d3fea]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-medium text-[#0f0b24]">
                      {adv.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#474269]">
                      {adv.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {/* 04 / Related Selected Work */}
      {relatedPortfolio.length > 0 ? (
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#5b2ee0]">
                  04 / SELECTED WORK
                </div>
                <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-[#0f0b24] sm:text-4xl">
                  Related Case Studies
                </h2>
              </div>

              <Link
                href={ROUTES.portfolio}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#5b2ee0] hover:text-[#0f0b24]"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2">
              {relatedPortfolio.map((work) => (
                <Link
                  key={work.slug}
                  href={`/portfolio/${work.slug}`}
                  className="glass-card group flex flex-col overflow-hidden rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6d3fea]/35 sm:p-6"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc]">
                    <Image
                      src={work.image}
                      alt={work.projectTitle}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-5 flex flex-1 flex-col justify-between">
                    <div>
                      <span className="rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#5b2ee0]">
                        {work.category}
                      </span>
                      <h3 className="mt-3.5 text-xl font-medium tracking-[-0.02em] text-[#0f0b24] group-hover:text-[#5b2ee0]">
                        {work.projectTitle}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#474269]">
                        {work.tagline}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-[#0f0b24]/[0.08] pt-4">
                      <div className="flex flex-wrap gap-2">
                        {work.metrics.slice(0, 2).map((metric) => (
                          <span
                            key={metric.label}
                            className="rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#474269]"
                          >
                            {metric.value}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5b2ee0]">
                        <span>Case Study</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Adjacent Services Switcher */}
      <section className="bg-white py-6">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href={`/services/${prevService.slug}`}
              className="glass-card group flex items-center justify-between gap-4 rounded-2xl p-5 transition-colors hover:border-[#6d3fea]/35"
            >
              <div className="flex items-center gap-3.5">
                <ArrowLeft className="h-4 w-4 shrink-0 text-[#5b2ee0] transition-transform duration-200 group-hover:-translate-x-1" />
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#645e8a]">
                    Previous Service
                  </div>
                  <div className="mt-1 text-base font-medium text-[#0f0b24] group-hover:text-[#5b2ee0]">
                    {prevService.title}
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href={`/services/${nextService.slug}`}
              className="glass-card group flex items-center justify-end gap-4 rounded-2xl p-5 text-right transition-colors hover:border-[#6d3fea]/35"
            >
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#645e8a]">
                  Next Service
                </div>
                <div className="mt-1 text-base font-medium text-[#0f0b24] group-hover:text-[#5b2ee0]">
                  {nextService.title}
                </div>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#5b2ee0] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <CtaConnectBanner />
    </div>
  );
}
