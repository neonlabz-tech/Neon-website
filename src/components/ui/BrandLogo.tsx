import React from "react";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/company";

interface BrandLogoProps {
  compact?: boolean;
  priority?: boolean;
  tone?: "auto" | "dark" | "light";
  className?: string;
}

export function BrandLogo({
  compact = false,
  priority = false,
  tone = "auto",
  className = "",
}: BrandLogoProps) {
  if (compact) {
    return (
      <span className={`inline-flex items-center select-none ${className}`}>
        <Image
          src={COMPANY_INFO.logoMarkSrc}
          alt={COMPANY_INFO.wordmark}
          width={40}
          height={40}
          priority={priority}
          className="h-9 w-9 object-contain drop-shadow-[0_0_12px_rgba(140,43,255,0.55)]"
        />
      </span>
    );
  }

  if (tone === "dark") {
    return (
      <span className={`inline-flex items-center select-none ${className}`}>
        <Image
          src={COMPANY_INFO.logoDarkSrc}
          alt={COMPANY_INFO.wordmark}
          width={1600}
          height={229}
          priority={priority}
          className="h-6 w-auto object-contain sm:h-7"
        />
      </span>
    );
  }

  if (tone === "light") {
    return (
      <span className={`inline-flex items-center select-none ${className}`}>
        <Image
          src={COMPANY_INFO.logoWhiteSrc}
          alt={COMPANY_INFO.wordmark}
          width={1600}
          height={229}
          priority={priority}
          className="h-6 w-auto object-contain sm:h-7"
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center select-none ${className}`}>
      <Image
        src={COMPANY_INFO.logoDarkSrc}
        alt={COMPANY_INFO.wordmark}
        width={1600}
        height={229}
        priority={priority}
        className="h-6 w-auto object-contain sm:h-7 dark:hidden"
      />
      <Image
        src={COMPANY_INFO.logoWhiteSrc}
        alt={COMPANY_INFO.wordmark}
        width={1600}
        height={229}
        priority={priority}
        className="hidden h-6 w-auto object-contain sm:h-7 dark:block"
      />
    </span>
  );
}

export function BrandOrbEmblem({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-full border border-[#0f0b24]/10 bg-white p-4 shadow-[0_12px_32px_-12px_rgba(15,11,36,0.14)] dark:border-white/25 dark:bg-[#1a1344] dark:shadow-[0_0_45px_rgba(140,43,255,0.55)] ${className}`}
    >
      <Image
        src={COMPANY_INFO.logoMarkSrc}
        alt="NeonLabz Emblem"
        width={270}
        height={270}
        priority={priority}
        className="h-full w-full object-contain drop-shadow-[0_0_16px_rgba(140,43,255,0.3)] dark:drop-shadow-[0_0_18px_rgba(195,18,251,0.5)]"
      />
    </div>
  );
}
