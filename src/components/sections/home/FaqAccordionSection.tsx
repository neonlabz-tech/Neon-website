"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/data/company";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function FaqAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="scroll-mt-10 bg-white py-16 sm:scroll-mt-6 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1400px]">
        <div className="text-center">
          <Eyebrow label="FREQUENTLY ASKED QUESTIONS" />
          <h2 className="mx-auto mt-5 max-w-xl text-3xl font-bold tracking-[-0.03em] text-[#0f0b24] sm:text-4xl lg:text-5xl">
            Answers Before{" "}
            <span className="neon-gradient-text">We Kick Off</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-3.5 sm:mt-12 md:grid-flow-dense md:grid-cols-2 md:gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#6d3fea]/35 bg-[#faf9fe] shadow-[0_14px_34px_-12px_rgba(109,63,234,0.14)] md:col-span-2"
                    : "border-[#0f0b24]/[0.08] bg-white shadow-[0_12px_32px_-12px_rgba(15,11,36,0.08)] hover:border-[#0f0b24]/20"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(idx)}
                  className="flex min-h-[72px] w-full cursor-pointer items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d3fea]/45 sm:px-6 sm:py-5"
                >
                  <span className="text-sm font-medium text-[#0f0b24] sm:text-base">
                    {faq.question}
                  </span>
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      isOpen
                        ? "bg-gradient-to-br from-[#6d3fea] to-[#9333ea] text-white shadow-[0_4px_12px_rgba(109,63,234,0.35)]"
                        : "ios-glass-btn text-[#474269]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-[#0f0b24]/[0.08] px-5 pt-3 pb-5 text-sm leading-relaxed text-[#474269] sm:px-6">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
