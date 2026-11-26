import React from "react";
import { Quote, Star } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CLIENT_TESTIMONIALS } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials"
      className="relative bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
        <div className="text-center">
          <Eyebrow label="CLIENT TESTIMONIALS" />
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-[-0.03em] text-[#0f0b24] sm:text-4xl lg:text-5xl">
            Trusted by{" "}
            <span className="neon-gradient-text">Happy Clients</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {CLIENT_TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="glass-card relative flex flex-col justify-between rounded-3xl !border-[1.5px] !border-[#6d3fea]/25 p-5 transition-all duration-300 ease-out hover:z-10 hover:scale-[1.04] hover:!border-[#6d3fea]/60 hover:shadow-[0_24px_54px_-16px_rgba(109,63,234,0.22)] sm:p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div
                    className="flex items-center gap-1"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="ml-2 font-mono text-xs font-semibold text-[#5b2ee0]">
                      5.0
                    </span>
                  </div>

                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc] text-[#6d3fea]">
                    <Quote className="h-4 w-4" />
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#474269] sm:text-base">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-[#0f0b24]/[0.08] pt-4">
                <div>
                  <h3 className="text-sm font-semibold text-[#0f0b24] sm:text-base">
                    {item.client}
                  </h3>
                  <p className="text-xs text-[#645e8a]">{item.projectType}</p>
                </div>

                <span className="shrink-0 whitespace-nowrap rounded-full border border-[#6d3fea]/20 bg-[#f6f4fc] px-3 py-1 text-[11px] font-medium text-[#5b2ee0]">
                  Verified Client
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
