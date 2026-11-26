import React from "react";
import { TECH_STACK_MARQUEE } from "@/data/techStack";

export function CapabilitiesMarquee() {
  return (
    <section
      aria-label="Technologies and Languages We Use"
      dir="ltr"
      className="relative overflow-hidden border-y border-[#0f0b24]/[0.06] bg-[#faf9fe] py-5 sm:py-6 lg:py-7"
    >
      {/* Soft edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#faf9fe] to-transparent sm:w-28 lg:w-36" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#faf9fe] to-transparent sm:w-28 lg:w-36" />

      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            aria-hidden={groupIndex === 1}
            className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4 lg:gap-4.5 lg:pr-4.5"
          >
            {[0, 1].map((repeatIdx) =>
              TECH_STACK_MARQUEE.map((tech) => {
                const isPrimaryPass = groupIndex === 0 && repeatIdx === 0;
                const isMonochromeWhite =
                  tech.color.toUpperCase() === "#FFFFFF";

                return (
                  <div
                    key={`${groupIndex}-${repeatIdx}-${tech.id}`}
                    className="group flex shrink-0 items-center gap-2.5 rounded-2xl border border-[#0f0b24]/[0.08] bg-white px-3.5 py-2 shadow-[0_2px_8px_-2px_rgba(15,11,36,0.06),0_1px_2px_rgba(15,11,36,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6d3fea]/35 hover:shadow-[0_8px_20px_-4px_rgba(15,11,36,0.12)] sm:gap-3 sm:px-4 sm:py-2.5"
                  >
                    {/* Compact Icon */}
                    <div
                      className={`relative flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105 sm:h-7 sm:w-7 ${
                        tech.rounded
                          ? "overflow-hidden rounded-[6px] sm:rounded-[7px]"
                          : ""
                      }`}
                    >
                      <svg
                        role={isPrimaryPass ? "img" : undefined}
                        aria-label={isPrimaryPass ? tech.name : undefined}
                        aria-hidden={isPrimaryPass ? undefined : true}
                        viewBox="0 0 24 24"
                        className={`h-full w-full shrink-0 ${
                          isMonochromeWhite ? "text-[#0f0b24]" : ""
                        }`}
                        fill={isMonochromeWhite ? "currentColor" : tech.color}
                      >
                        {tech.paths.map((segment, segIdx) => (
                          <path
                            key={segIdx}
                            d={segment.d}
                            fill={
                              isMonochromeWhite
                                ? "currentColor"
                                : (segment.fill ?? tech.color)
                            }
                          />
                        ))}
                      </svg>
                    </div>

                    {/* Tech Name Label */}
                    <span className="text-xs font-semibold tracking-[-0.01em] text-[#0f0b24] select-none whitespace-nowrap sm:text-sm">
                      {tech.name}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
