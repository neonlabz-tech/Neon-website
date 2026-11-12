import type { Metadata } from "next";
import React from "react";
import { PortfolioScrollGallery } from "@/components/sections/portfolio/PortfolioScrollGallery";
import { CtaConnectBanner } from "@/components/sections/shared/CtaConnectBanner";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Neon Labz software engineering, e-commerce, mobile app, branding, QA testing, and digital marketing solutions.",
};

export default function PortfolioPage() {
  return (
    <div className="relative overflow-x-clip">
      <PortfolioScrollGallery />

      <CtaConnectBanner />
    </div>
  );
}
