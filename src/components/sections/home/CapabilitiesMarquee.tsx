import React from "react";
import { TECH_STACK_MARQUEE } from "@/data/techStack";

export function CapabilitiesMarquee() {
  return (
    <section
      aria-label="Technologies and Languages We Use"
      dir="ltr"
      className="relative overflow-hidden border-y border-[#0f0b24]/[0.06] bg-[#faf9fe] py-7 sm:py-9 lg:py-10"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#faf9fe] to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#faf9fe] to-transparent sm:w-32" />

      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            aria-hidden={groupIndex === 1}
            className="flex shrink-0 items-center gap-14 pr-14 sm:gap-16 sm:pr-16 lg:gap-24 lg:pr-24"
          >
            {[0, 1].map((repeatIdx) =>
              TECH_STACK_MARQUEE.map((tech) => {
                const isPrimaryPass = groupIndex === 0 && repeatIdx === 0;
                const isMonochromeWhite = tech.color.toUpperCase() === "#FFFFFF";
                return (
                  <svg
                    key={`${groupIndex}-${repeatIdx}-${tech.id}`}
                    role={isPrimaryPass ? "img" : undefined}
                    aria-label={isPrimaryPass ? tech.name : undefined}
                    aria-hidden={isPrimaryPass ? undefined : true}
                    viewBox="0 0 24 24"
                    className={`h-14 w-14 shrink-0 transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16 lg:h-20 lg:w-20 ${tech.rounded ? "rounded-[8px] sm:rounded-[10px] lg:rounded-[12px]" : ""} ${isMonochromeWhite ? "text-[#0f0b24] drop-shadow-[0_4px_12px_rgba(15,11,36,0.1)]" : ""}`}
                    style={
                      isMonochromeWhite
                        ? undefined
                        : {
                            filter: `drop-shadow(0 4px 12px ${tech.color}28)`,
                          }
                    }
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
                );
              })
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
