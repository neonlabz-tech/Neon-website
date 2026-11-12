import React from "react";
import Link from "next/link";

interface ActionPillProps {
  href?: string;
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  size?: "md" | "sm";
  compactMobile?: boolean;
}

function DottedArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-0.5"
    >
      <circle cx="3" cy="8" r="1.1" fill="white" opacity="0.6" />
      <circle cx="6" cy="8" r="1.1" fill="white" opacity="0.8" />
      <circle cx="9" cy="8" r="1.15" fill="white" />
      <circle cx="12" cy="8" r="1.2" fill="white" />
      <circle cx="9.2" cy="5.2" r="1.1" fill="white" />
      <circle cx="9.2" cy="10.8" r="1.1" fill="white" />
      <circle cx="6.8" cy="3.5" r="0.95" fill="white" opacity="0.65" />
      <circle cx="6.8" cy="12.5" r="0.95" fill="white" opacity="0.65" />
    </svg>
  );
}

export function ActionPill({
  href,
  label,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  size = "md",
  compactMobile = false,
}: ActionPillProps) {
  const padding = compactMobile
    ? "p-1 pr-2.5 gap-1.5 text-[11px] min-[390px]:pr-3 min-[390px]:gap-2 min-[390px]:text-xs sm:p-1.5 sm:pr-5 sm:gap-3.5 sm:text-sm"
    : size === "sm"
      ? "p-1 pr-4 text-[13px] gap-2.5"
      : "p-1.5 pr-5 text-sm gap-3.5";
  const badgeSize = compactMobile
    ? "h-7 w-8 min-[390px]:w-9 sm:h-8 sm:w-12"
    : size === "sm"
      ? "h-7 w-10"
      : "h-8 w-12";

  const inner = (
    <>
      <span
        className={`inline-flex shrink-0 ${badgeSize} items-center justify-center rounded-full border border-white/35 bg-gradient-to-br from-[#8c5cff] via-[#6d3fea] to-[#9b5cff] shadow-[inset_0_1px_1px_rgba(255,255,255,0.55),0_6px_18px_rgba(109,63,234,0.38)] transition-all duration-300 group-hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_8px_22px_rgba(140,43,255,0.5)]`}
      >
        <DottedArrow />
      </span>
      <span className="whitespace-nowrap font-medium tracking-[-0.01em] text-[#0f0b24] dark:text-white">
        {label}
      </span>
    </>
  );

  const baseClasses = `ios-glass-btn group inline-flex items-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed ${padding} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {inner}
    </button>
  );
}
