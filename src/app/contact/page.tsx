import type { Metadata } from "next";
import React, { Suspense } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { ContactFormClient } from "@/components/sections/contact/ContactFormClient";

export const metadata: Metadata = {
  title: "Let’s Connect",
  description:
    "Get in touch with Neon Labz (Pvt) Ltd. in Jaffna for custom software, web & mobile apps, SaaS, ERP/CRM, cloud, UI/UX, and digital marketing.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-x-clip bg-white pb-20 sm:pb-24">
      <section className="relative bg-white pt-28 pb-10 sm:pt-36 sm:pb-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_62%_46%_at_50%_30%,rgba(109,63,234,0.06)_0%,rgba(140,43,255,0.02)_46%,transparent_74%)] sm:h-[480px]"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 text-center sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <Eyebrow label="LET’S CONNECT" />
          <h1 className="mx-auto mt-6 max-w-3xl text-3xl font-medium tracking-[-0.04em] text-[#0f0b24] sm:text-5xl lg:text-6xl">
            Let’s Build Your Next Digital Solution
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Contact Info Cards */}
            <div className="space-y-4 lg:col-span-5">
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-3.5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc] text-[#6d3fea]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold text-[#0f0b24]">
                      Office Location
                    </h2>
                    <p className="mt-1 text-sm text-[#474269]">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-3.5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc] text-[#6d3fea]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold text-[#0f0b24]">
                      Email Us
                    </h2>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="mt-1 block text-sm text-[#5b2ee0] transition-colors hover:text-[#0f0b24]"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-3.5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc] text-[#6d3fea]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold text-[#0f0b24]">
                      Phone &amp; WhatsApp
                    </h2>
                    <a
                      href="tel:+94714312534"
                      className="mt-1 block text-sm text-[#474269] hover:text-[#0f0b24]"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ios-glass-btn-mint mt-3 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-[#0c7a56]"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      <span>Connect on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-3.5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc] text-[#6d3fea]">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold text-[#0f0b24]">
                      Fast Communication
                    </h2>
                    <p className="mt-1 text-xs leading-relaxed text-[#474269]">
                      Real-time IT support and responsive project planning from
                      initial discovery through deployment and ongoing
                      maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Contact Form */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="glass-card-strong h-96 animate-pulse rounded-3xl p-8" />
                }
              >
                <ContactFormClient />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
