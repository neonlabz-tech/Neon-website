import React from "react";
import { HeroSection } from "@/components/sections/home/HeroSection";
// import { ClientsSection } from "@/components/sections/home/ClientsSection";
import { ServicesSplitScrollSection } from "@/components/sections/home/ServicesSplitScrollSection";
import { CapabilitiesMarquee } from "@/components/sections/home/CapabilitiesMarquee";
// import { ScopeEstimatorSection } from "@/components/sections/home/ScopeEstimatorSection";
import { StatsAndGuarantees } from "@/components/sections/home/StatsAndGuarantees";
import { ProcessOrbitalSection } from "@/components/sections/home/ProcessOrbitalSection";
import { PortfolioShowcaseSection } from "@/components/sections/home/PortfolioShowcaseSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { WhyChooseRadialSection } from "@/components/sections/home/WhyChooseRadialSection";
import { FaqAccordionSection } from "@/components/sections/home/FaqAccordionSection";
import { CtaConnectBanner } from "@/components/sections/shared/CtaConnectBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <ClientsSection /> */}
      <ServicesSplitScrollSection />
      <CapabilitiesMarquee />
      {/* <ScopeEstimatorSection /> */}
      <ProcessOrbitalSection />
      <StatsAndGuarantees />
      <PortfolioShowcaseSection />
      <TestimonialsSection />
      <WhyChooseRadialSection />
      <FaqAccordionSection />
      <CtaConnectBanner />
    </>
  );
}
