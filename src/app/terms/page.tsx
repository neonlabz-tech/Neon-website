import type { Metadata } from "next";
import React from "react";
import { COMPANY_INFO } from "@/data/company";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${COMPANY_INFO.legalName}.`,
};

export default function TermsPage() {
  return (
    <div className="bg-white pt-28 pb-20 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-[840px] px-4 sm:px-6">
        <Eyebrow label="LEGAL" align="left" />
        <h1 className="mt-5 text-3xl font-medium tracking-[-0.03em] text-[#0f0b24] sm:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-3 font-mono text-xs text-[#645e8a]">
          Effective Year: 2026 · {COMPANY_INFO.legalName}
        </p>

        <div className="glass-card mt-8 space-y-6 rounded-3xl p-7 text-sm leading-relaxed text-[#474269] sm:p-10 sm:text-base">
          <section>
            <h2 className="text-lg font-medium text-[#0f0b24]">
              1. Services &amp; Project Scopes
            </h2>
            <p className="mt-2">
              All timelines and scope estimates displayed on this website—including
              interactive project scope estimates—are provided for general planning
              purposes. Final deliverables, timelines, and pricing are governed by
              written project agreements between {COMPANY_INFO.legalName} and the
              client.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#0f0b24]">
              2. Intellectual Property
            </h2>
            <p className="mt-2">
              The NeonLabz name, logo, brand assets, and original content on this
              website belong to {COMPANY_INFO.legalName}. Client project ownership
              is defined in each signed service contract.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#0f0b24]">3. Contact</h2>
            <p className="mt-2">
              For questions regarding these terms, reach us at{" "}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-[#5b2ee0] underline underline-offset-4"
              >
                {COMPANY_INFO.email}
              </a>{" "}
              or {COMPANY_INFO.address}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
