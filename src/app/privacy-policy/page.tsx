import type { Metadata } from "next";
import React from "react";
import { COMPANY_INFO } from "@/data/company";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${COMPANY_INFO.legalName}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white pt-28 pb-20 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-[840px] px-4 sm:px-6">
        <Eyebrow label="LEGAL" align="left" />
        <h1 className="mt-5 text-3xl font-medium tracking-[-0.03em] text-[#0f0b24] sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 font-mono text-xs text-[#645e8a]">
          Effective Year: 2026 · {COMPANY_INFO.legalName}
        </p>

        <div className="glass-card mt-8 space-y-6 rounded-3xl p-7 text-sm leading-relaxed text-[#474269] sm:p-10 sm:text-base">
          <section>
            <h2 className="text-lg font-medium text-[#0f0b24]">
              1. Information We Collect
            </h2>
            <p className="mt-2">
              When you submit a project inquiry or contact {COMPANY_INFO.legalName}{" "}
              through our website, we collect the contact details you provide,
              including your name, phone number, email address, subject, and
              project message.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#0f0b24]">
              2. How We Use Information
            </h2>
            <p className="mt-2">
              We use your contact details solely to respond to inquiries, prepare
              project proposals, provide IT and software support, and deliver the
              services you request. We do not sell or rent personal information to
              third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#0f0b24]">
              3. Data Security &amp; Contact
            </h2>
            <p className="mt-2">
              We implement appropriate security and backup practices to protect
              communications and project records. For privacy questions or
              deletion requests, contact{" "}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-[#5b2ee0] underline underline-offset-4"
              >
                {COMPANY_INFO.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
