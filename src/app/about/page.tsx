import type { Metadata } from "next";
import React from "react";
import { COMPANY_INFO } from "@/data/company";
import { AboutShowcaseClient } from "@/components/sections/about/AboutShowcaseClient";
import { CtaConnectBanner } from "@/components/sections/shared/CtaConnectBanner";

export const metadata: Metadata = {
  title: "About Us",
  description: COMPANY_INFO.aboutSummary,
};

export default function AboutPage() {
  return (
    <div className="relative overflow-x-clip">
      <AboutShowcaseClient />
      <CtaConnectBanner />
    </div>
  );
}
