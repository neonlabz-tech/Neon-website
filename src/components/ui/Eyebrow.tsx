import React from "react";

interface EyebrowProps {
  label: string;
  align?: "center" | "left";
}

export function Eyebrow({ label, align = "center" }: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-2 sm:gap-3.5 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      {align === "center" ? (
        <span
          aria-hidden="true"
          className="h-px w-3 shrink-0 bg-gradient-to-r from-transparent to-[#0f0b24]/18 min-[360px]:w-6 sm:w-16 md:w-24 dark:to-white/25"
        />
      ) : null}
      <span className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6d3fea] sm:gap-2 sm:text-[11px] sm:tracking-[0.34em] dark:text-[#b8a2f3]">
        <svg
          width="11"
          height="11"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="shrink-0 text-[#6d3fea] dark:text-white"
        >
          <path
            d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z"
            fill="currentColor"
          />
        </svg>
        <span>{label}</span>
      </span>
      <span
        aria-hidden="true"
        className="h-px w-3 shrink-0 bg-gradient-to-l from-transparent to-[#0f0b24]/18 min-[360px]:w-6 sm:w-16 md:w-24 dark:to-white/25"
      />
    </div>
  );
}
