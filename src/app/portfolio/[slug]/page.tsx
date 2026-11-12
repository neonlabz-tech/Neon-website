import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import { ROUTES } from "@/constants/navigation";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ActionPill } from "@/components/ui/ActionPill";
import { CtaConnectBanner } from "@/components/sections/shared/CtaConnectBanner";

export async function generateStaticParams() {
  return PORTFOLIO_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = PORTFOLIO_ITEMS.find((p) => p.slug === slug);
  if (!item) return { title: "Portfolio" };
  return {
    title: item.title,
    description: item.tagline,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = PORTFOLIO_ITEMS.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="relative overflow-x-clip bg-white">
      <section className="relative bg-white pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_62%_46%_at_50%_30%,rgba(109,63,234,0.06)_0%,rgba(140,43,255,0.02)_46%,transparent_74%)] sm:h-[500px]"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <Link
            href={ROUTES.portfolio}
            className="inline-flex items-center gap-2 text-sm text-[#474269] transition-colors hover:text-[#0f0b24]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            {/* Left Copy, Actions & Metrics */}
            <div className="lg:col-span-6 xl:col-span-5">
              <Eyebrow label={item.category} align="left" />
              <h1 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-[#0f0b24] sm:text-5xl lg:text-[48px] lg:leading-[1.08] xl:text-[54px]">
                {item.projectTitle}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#474269] sm:text-lg">
                {item.tagline}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <ActionPill
                  href={`${ROUTES.contact}?service=${encodeURIComponent(item.title)}`}
                  label="Build Something Similar"
                />
                {item.liveUrl ? (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ios-glass-btn inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[#0f0b24] transition-all hover:-translate-y-0.5 hover:border-[#6d3fea]/45 hover:text-[#5b2ee0]"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 border-t border-[#0f0b24]/[0.08] pt-6 sm:grid-cols-3">
                {item.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="glass-card rounded-2xl p-4"
                  >
                    <div className="text-[11px] font-medium uppercase tracking-wider text-[#645e8a]">
                      {metric.label}
                    </div>
                    <div className="mt-1 font-mono text-base font-semibold text-[#5b2ee0] xl:text-lg">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Widescreen Showcase Visual */}
            <div className="lg:col-span-6 xl:col-span-7">
              <div className="glass-card-strong overflow-hidden rounded-3xl p-3 sm:p-4">
                <div
                  className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#0f0b24]/[0.08] ${
                    item.liveUrl ? "bg-[#f6f4fc]" : "bg-[#050217]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.projectTitle}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className={
                      item.liveUrl
                        ? "object-cover object-top"
                        : "object-contain p-4"
                    }
                  />
                  {item.liveUrl ? (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#0c7a56] shadow-sm backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0c7a56]" />
                      Live Project
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0f0b24]/[0.06] bg-[#faf9fe] py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1440px] space-y-6 px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <div className="glass-card-strong rounded-3xl p-7 sm:p-10">
            <h2 className="text-2xl font-medium text-[#0f0b24]">
              Project Overview
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[#474269] sm:text-base">
              {item.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="glass-card rounded-3xl p-7 sm:p-8">
              <h2 className="text-xl font-medium text-[#0f0b24]">
                What We Did
              </h2>
              <ul className="mt-4 space-y-3">
                {item.whatWeDid.map((step) => (
                  <li
                    key={step}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[#474269]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6d3fea]" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-3xl p-7 sm:p-8">
              <h2 className="text-xl font-medium text-[#0f0b24]">
                Project Results
              </h2>
              <ul className="mt-4 space-y-3">
                {item.results.map((result) => (
                  <li
                    key={result}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[#474269]"
                  >
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#0c7a56]" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <ActionPill
              href={`${ROUTES.contact}?service=${encodeURIComponent(item.title)}`}
              label="Build Something Similar"
            />
            {item.liveUrl ? (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ios-glass-btn inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[#0f0b24] transition-all hover:border-[#6d3fea]/45 hover:text-[#5b2ee0]"
              >
                <span>Open Live Site</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <CtaConnectBanner />
    </div>
  );
}
