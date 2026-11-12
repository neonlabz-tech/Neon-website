import type { Metadata } from "next";
import React, { Suspense } from "react";
import { Headphones, Workflow } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServicesCatalogClient } from "@/components/sections/services/ServicesCatalogClient";
import { ProcessTimelineSection } from "@/components/sections/services/ProcessTimelineSection";
import { CtaConnectBanner } from "@/components/sections/shared/CtaConnectBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Neon Labz IT Solutions and Creative services including web & mobile apps, SaaS, ERP/CRM, cloud infrastructure, e-commerce, QA testing, branding, UI/UX design, and digital marketing.",
};

export default function ServicesPage() {
  return (
    <div className="relative overflow-x-clip bg-white">
      <section className="relative bg-white pt-24 pb-3 sm:pt-28 sm:pb-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(ellipse_62%_46%_at_50%_30%,rgba(109,63,234,0.06)_0%,rgba(140,43,255,0.02)_46%,transparent_74%)] sm:h-[460px]"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 text-center sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <Eyebrow label="OUR SERVICES" />
          <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-medium tracking-[-0.04em] text-[#0f0b24] sm:text-5xl lg:text-6xl">
            We Provide Complete{" "}
            <span className="neon-gradient-text">IT &amp; Creative</span>{" "}
            Services
          </h1>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="mx-auto max-w-[1440px] px-4 py-12 text-center text-sm text-[#645e8a] sm:px-6 lg:px-10">
            Loading services...
          </div>
        }
      >
        <ServicesCatalogClient />
      </Suspense>

      <section className="border-y border-[#0f0b24]/[0.06] bg-[#faf9fe] py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc] text-[#5b2ee0]">
                  <Headphones className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-medium text-[#0f0b24]">
                  Real-Time IT Support
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#474269]">
                Our team provides fast and proactive assistance to minimize
                downtime and keep your digital operations running smoothly.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc] text-[#6d3fea]">
                  <Workflow className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-medium text-[#0f0b24]">
                  Strategic IT Projects
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#474269]">
                We help plan and execute large-scale IT initiatives, from system
                upgrades to full digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProcessTimelineSection />

      <CtaConnectBanner />
    </div>
  );
}
