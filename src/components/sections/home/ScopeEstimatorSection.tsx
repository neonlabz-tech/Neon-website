"use client";

import React, { useState } from "react";
import { ROUTES } from "@/constants/navigation";
import {
  ESTIMATOR_ADDONS,
  ESTIMATOR_SCALES,
  ESTIMATOR_TRACKS,
} from "@/data/estimator";
import type { EstimatorScale } from "@/types";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ActionPill } from "@/components/ui/ActionPill";
import { BrandOrbEmblem } from "@/components/ui/BrandLogo";

export function ScopeEstimatorSection() {
  const [selectedTrackId, setSelectedTrackId] = useState(ESTIMATOR_TRACKS[0].id);
  const [selectedScaleId, setSelectedScaleId] =
    useState<EstimatorScale["id"]>("growth");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "uiux",
    "qa",
  ]);

  const activeTrack =
    ESTIMATOR_TRACKS.find((t) => t.id === selectedTrackId) ??
    ESTIMATOR_TRACKS[0];
  const activeScale =
    ESTIMATOR_SCALES.find((s) => s.id === selectedScaleId) ??
    ESTIMATOR_SCALES[1];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addonWeeks = selectedAddons.length;
  const minWeeks = Math.max(
    3,
    Math.round(activeTrack.baseWeeks * activeScale.multiplier + addonWeeks * 0.5)
  );
  const maxWeeks = minWeeks + (activeScale.id === "enterprise" ? 4 : 2);
  const intensity = Math.min(1, (minWeeks - 3) / 14);

  const selectedAddonNames = ESTIMATOR_ADDONS.filter((a) =>
    selectedAddons.includes(a.id)
  ).map((a) => a.label);

  const planSummary = `${activeTrack.title} (${activeScale.label})${
    selectedAddonNames.length > 0
      ? ` + ${selectedAddonNames.join(", ")}`
      : ""
  } — Est. ${minWeeks}-${maxWeeks} weeks`;

  return (
    <section
      id="estimator"
      className="scroll-mt-10 bg-white py-16 sm:scroll-mt-6 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
        <div className="text-center">
          <Eyebrow label="PROJECT SCOPE ESTIMATOR" />
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-[-0.03em] text-[#0f0b24] sm:text-4xl lg:text-5xl">
            Plan Your <span className="neon-gradient-text">Build Timeline</span>{" "}
            Before We Meet
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 lg:grid-cols-12 lg:items-stretch">
          <div className="flex flex-col justify-between gap-4 lg:col-span-5">
            {ESTIMATOR_TRACKS.map((track) => {
              const active = track.id === activeTrack.id;
              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setSelectedTrackId(track.id)}
                  className={`w-full rounded-2xl p-5 text-left transition-all duration-200 sm:p-6 ${
                    active
                      ? "ios-glass-btn-active"
                      : "glass-card hover:border-[#6d3fea]/35"
                  }`}
                >
                  <div className="flex flex-col gap-2.5 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                    <div className="flex items-start gap-3 sm:items-center">
                      <BrandOrbEmblem className="h-10 w-10 shrink-0 p-2" />
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-base font-medium text-[#0f0b24]">
                            {track.title}
                          </span>
                          <span className="rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-2.5 py-0.5 text-[10px] font-medium text-[#5b2ee0]">
                            {track.tag}
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs text-[#645e8a]">
                          {track.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 pl-[52px] font-mono text-xs font-semibold text-[#0f0b24] sm:pl-0 sm:text-sm">
                      {track.highlightLabel}
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between text-[11px] text-[#645e8a]">
                      <span>Sprint Velocity Match</span>
                      <span className="font-mono text-[#0f0b24]">
                        {track.fillPercent}%
                      </span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#0f0b24]/[0.06]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#7975ff] via-[#8c2bff] to-[#c312fb] transition-all duration-300"
                        style={{ width: `${track.fillPercent}%` }}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="glass-card-strong flex flex-col justify-between rounded-3xl p-5 sm:p-8 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em] text-[#0f0b24] sm:text-2xl">
                    Custom Plan Estimator
                  </h3>
                  <p className="mt-1 text-xs text-[#474269] sm:text-sm">
                    {activeTrack.summary}
                  </p>
                </div>
                <span className="rounded-full border border-[#0c7a56]/25 bg-[#0c7a56]/10 px-3 py-1 font-mono text-[11px] font-medium text-[#0c7a56]">
                  {activeTrack.title}
                </span>
              </div>

              <div className="mt-6">
                <span className="text-xs font-medium text-[#0f0b24]">
                  Project Scale
                </span>
                <div className="mt-2.5 grid grid-cols-3 gap-2 sm:gap-2.5">
                  {ESTIMATOR_SCALES.map((scale) => {
                    const active = scale.id === activeScale.id;
                    return (
                      <button
                        key={scale.id}
                        type="button"
                        onClick={() => setSelectedScaleId(scale.id)}
                        className={`rounded-full px-2 py-2.5 text-xs font-medium sm:px-3 sm:text-sm ${
                          active
                            ? "ios-glass-btn-active text-[#5b2ee0]"
                            : "ios-glass-btn text-[#474269] hover:text-[#0f0b24]"
                        }`}
                      >
                        {scale.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5">
                <span className="text-xs font-medium text-[#0f0b24]">
                  Included Capabilities (select any)
                </span>
                <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
                  {ESTIMATOR_ADDONS.map((addon) => {
                    const active = selectedAddons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        className={`rounded-full px-3 py-2 text-xs font-medium ${
                          active
                            ? "ios-glass-btn-active text-[#5b2ee0]"
                            : "ios-glass-btn text-[#474269] hover:text-[#0f0b24]"
                        }`}
                      >
                        {addon.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#0f0b24]/[0.08] bg-[#faf9fe] p-5 sm:p-6">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                  <div>
                    <span className="text-xs text-[#645e8a]">
                      Estimated Delivery Window
                    </span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-mono text-3xl font-semibold tracking-tight text-[#0c7a56] sm:text-4xl">
                        {minWeeks}–{maxWeeks} Weeks
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#645e8a]">
                      Scope: {activeScale.sprintLabel} ·{" "}
                      {selectedAddons.length} add-on modules included
                    </p>
                  </div>

                  <div
                    aria-hidden="true"
                    className="flex h-16 items-end gap-1.5"
                  >
                    {Array.from({ length: 10 }).map((_, index) => {
                      const base = 22 + index * 7;
                      const heightPercent = Math.min(
                        100,
                        Math.round(base * (0.62 + intensity * 0.48))
                      );
                      return (
                        <div
                          key={index}
                          className="w-2 rounded-t-full bg-gradient-to-t from-[#6d3fea] via-[#9b76ff] to-[#e10afa] transition-all duration-300"
                          style={{ height: `${heightPercent}%` }}
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 border-t border-[#0f0b24]/[0.08] pt-4 text-xs sm:grid-cols-3 sm:gap-4">
                  <div>
                    <span className="text-[#645e8a]">Workflow</span>
                    <p className="mt-0.5 font-medium text-[#0f0b24]">
                      Weekly Sprints
                    </p>
                  </div>
                  <div>
                    <span className="text-[#645e8a]">Quality</span>
                    <p className="mt-0.5 font-medium text-[#0f0b24]">
                      QA &amp; Security
                    </p>
                  </div>
                  <div>
                    <span className="text-[#645e8a]">Post-Launch</span>
                    <p className="mt-0.5 font-medium text-[#0f0b24]">
                      Ongoing Support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <ActionPill
                href={`${ROUTES.contact}?plan=${encodeURIComponent(planSummary)}`}
                label="Request Custom Plan"
              />
              <span className="text-xs text-[#645e8a]">
                Final timeline and custom quote confirmed after discovery call.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
