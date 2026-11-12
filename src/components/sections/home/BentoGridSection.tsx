"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Layers,
  TrendingUp,
  Sparkles,
  ThumbsUp,
  Star,
  RefreshCw,
  CheckCircle2,
  Shield,
  Zap,
} from "lucide-react";
import { ROUTES } from "@/constants/navigation";
import { BrandOrbEmblem } from "@/components/ui/BrandLogo";

const DELIVERY_BARS = [
  { label: "PM", value: "90%", height: "h-24" },
  { label: "Tech", value: "92%", height: "h-28" },
  { label: "Time", value: "94%", height: "h-32" },
  { label: "CSAT", value: "95%", height: "h-36" },
];

export function BentoGridSection() {
  const router = useRouter();
  const [idea, setIdea] = useState("");

  const handleLaunch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = idea.trim();
    const target = trimmed
      ? `${ROUTES.contact}?idea=${encodeURIComponent(trimmed)}`
      : ROUTES.contact;
    router.push(target);
  };

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="glass-card relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 sm:p-7 lg:col-span-4">
            <div className="relative mb-8 space-y-2.5 pt-2">
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#0f0b24]/[0.08] bg-white px-3.5 py-2.5 shadow-[0_8px_24px_-12px_rgba(15,11,36,0.1)] sm:px-4">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-[#0f0b24]">
                  <Zap className="h-3.5 w-3.5 shrink-0 text-[#6d3fea]" />
                  Scalable Architecture
                </span>
                <span className="rounded-full border border-[#0c7a56]/25 bg-[#0c7a56]/10 px-2.5 py-0.5 text-[10px] font-medium text-[#0c7a56]">
                  Production Ready
                </span>
              </div>

              <div className="ml-2 flex flex-wrap gap-2 opacity-90 sm:ml-4">
                <span className="rounded-lg border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-3 py-1.5 text-[11px] text-[#474269]">
                  Web &amp; Mobile
                </span>
                <span className="rounded-lg border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-3 py-1.5 text-[11px] text-[#474269]">
                  SaaS Platforms
                </span>
                <span className="rounded-lg border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-3 py-1.5 text-[11px] text-[#474269]">
                  ERP / CRM
                </span>
              </div>

              <div className="ml-4 flex flex-wrap gap-2 opacity-80 sm:ml-8">
                <span className="rounded-lg border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-3 py-1.5 text-[11px] text-[#645e8a]">
                  Cloud Backups
                </span>
                <span className="rounded-lg border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-3 py-1.5 text-[11px] text-[#645e8a]">
                  QA Verified
                </span>
              </div>
            </div>

            <div>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0f0b24]/[0.08] bg-[#f6f4fc]">
                <Layers className="h-4 w-4 text-[#6d3fea]" />
              </div>
              <h2 className="text-xl font-medium tracking-[-0.02em] text-[#0f0b24]">
                End-to-End IT &amp; Software Studio
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[#474269]">
                Software engineering, cloud, UI/UX, QA, and digital growth under
                one roof.
              </p>
            </div>
          </div>

          <div className="glass-card relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 sm:p-7 lg:col-span-4">
            <div className="mb-6 flex h-44 items-end justify-center gap-2.5 pt-4 sm:gap-3">
              {DELIVERY_BARS.map((bar) => (
                <div
                  key={bar.label}
                  className="flex max-w-[3.5rem] flex-1 flex-col items-center gap-2 sm:w-14 sm:flex-none"
                >
                  <span className="font-mono text-[11px] font-medium text-[#5b2ee0]">
                    {bar.value}
                  </span>
                  <div
                    className={`flex w-full ${bar.height} flex-col items-center justify-end rounded-t-2xl rounded-b-lg border border-[#6d3fea]/20 bg-gradient-to-b from-[#6d3fea]/20 to-[#f6f4fc] p-2`}
                  >
                    <span className="text-[10px] font-medium text-[#0f0b24]">
                      {bar.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0f0b24]/[0.08] bg-[#f6f4fc]">
                <TrendingUp className="h-4 w-4 text-[#6d3fea]" />
              </div>
              <h2 className="text-xl font-medium tracking-[-0.02em] text-[#0f0b24]">
                Measurable Delivery
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[#474269]">
                95% client satisfaction and 94% on-time project execution.
              </p>
            </div>
          </div>

          <div className="glass-card relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-7 lg:col-span-4 lg:row-span-2">
            <div className="flex flex-col items-center pt-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-4 py-1.5 text-xs text-[#474269]">
                <Shield className="h-3.5 w-3.5 text-[#6d3fea]" />
                <span>Overall Rating</span>
                <Star className="h-3.5 w-3.5 fill-[#fdc913] text-[#fdc913]" />
                <span className="font-semibold text-[#0f0b24]">4.9</span>
                <span className="text-[#0c7a56]">(98% Success)</span>
              </div>

              <div className="relative my-7 flex items-center justify-center">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#7975ff]/20 via-[#8c2bff]/15 to-[#e10afa]/20 blur-2xl"
                />
                <BrandOrbEmblem className="h-28 w-28 p-6" />
              </div>

              <div className="relative w-full space-y-3 px-1 pb-4">
                <div className="-rotate-2 rounded-xl border border-[#0f0b24]/[0.08] bg-white p-3.5 shadow-[0_12px_32px_-12px_rgba(15,11,36,0.08)]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0f0b24]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0c7a56]" />
                      Business Client
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-3 w-3 fill-[#fdc913] text-[#fdc913]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#474269]">
                    &ldquo;Great experience working with Neon Labz. Fast
                    delivery, good communication, and high-quality work.&rdquo;
                  </p>
                </div>

                <div className="rotate-1 rounded-xl border border-[#0f0b24]/[0.08] bg-[#faf9fe] p-4 shadow-[0_12px_32px_-12px_rgba(15,11,36,0.1)]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0f0b24]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#6d3fea]" />
                      Enterprise Partner
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-3 w-3 fill-[#fdc913] text-[#fdc913]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#474269]">
                    &ldquo;Professional and reliable service. The team delivered
                    exactly what we needed and improved our business
                    performance.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0f0b24]/[0.08] bg-[#f6f4fc]">
                <ThumbsUp className="h-4 w-4 text-[#6d3fea]" />
              </div>
              <h2 className="text-xl font-medium tracking-[-0.02em] text-[#0f0b24]">
                4.9-Star Client Trust
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[#474269]">
                Trusted by startups and growing businesses for reliable delivery
                and real-time support.
              </p>
            </div>
          </div>

          <div className="glass-card relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8 lg:col-span-8">
            <form
              onSubmit={handleLaunch}
              className="ios-glass-bar relative z-10 mx-auto my-6 flex w-full max-w-xl items-center gap-2 rounded-full p-1.5 pl-4 transition-colors focus-within:border-[#6d3fea] sm:p-2 sm:pl-5"
            >
              <input
                type="text"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Tell us what software you want to build..."
                aria-label="Describe your software project idea"
                className="min-w-0 flex-1 bg-transparent text-base text-[#0f0b24] placeholder:text-[#645e8a] focus:outline-none sm:text-base"
              />
              <button
                type="submit"
                aria-label="Start project inquiry with this idea"
                className="ios-glass-btn-active inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#5b2ee0] hover:scale-105 sm:h-11 sm:w-11"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            </form>

            <div className="relative z-10 pt-2">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0f0b24]/[0.08] bg-[#f6f4fc]">
                <Sparkles className="h-4 w-4 text-[#6d3fea]" />
              </div>
              <h2 className="text-xl font-medium tracking-[-0.02em] text-[#0f0b24]">
                Turn Ideas into Digital Reality
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[#474269]">
                Type a quick brief above—our engineering team helps plan,
                design, build, and launch tailored systems from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
