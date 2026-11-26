"use client";

import React, { useState } from "react";
import { COMPANY_INFO } from "@/data/company";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Instant WhatsApp contact"
      className="fixed right-5 bottom-5 z-50 flex items-center sm:right-7 sm:bottom-7"
    >
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Neon Labz on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#20ba5a] via-[#25d366] to-[#2ee274] text-white shadow-[0_10px_28px_-4px_rgba(37,211,102,0.52)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_36px_-2px_rgba(37,211,102,0.68)] active:scale-95 sm:h-15 sm:w-15"
      >
        {/* Animated green pulse ping ring */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-full bg-[#25d366]/40 opacity-75"
        />

        {/* Ambient glow halo */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-1 -z-10 rounded-full bg-[#25d366]/30 blur-md transition-opacity duration-300 group-hover:bg-[#25d366]/50"
        />

        {/* Crisp WhatsApp Icon */}
        <WhatsAppIcon className="h-7 w-7 fill-current drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />

        {/* Expandable Tooltip / Label on desktop */}
        <span
          role="tooltip"
          className={`pointer-events-none absolute right-full mr-3.5 hidden items-center whitespace-nowrap rounded-full border border-white/20 bg-[#0f0b24]/90 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-all duration-300 sm:inline-flex ${
            isHovered
              ? "translate-x-0 opacity-100"
              : "translate-x-2 opacity-0"
          }`}
        >
          <span className="mr-1.5 h-2 w-2 rounded-full bg-[#25d366] animate-pulse" />
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
