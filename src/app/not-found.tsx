import React from "react";
import { ROUTES } from "@/constants/navigation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ActionPill } from "@/components/ui/ActionPill";

export default function NotFound() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-white px-4 pt-28 pb-20 text-center">
      <div className="glass-card-strong max-w-lg rounded-3xl p-6 sm:p-10">
        <Eyebrow label="404 ERROR" />
        <h1 className="mt-5 text-4xl font-medium tracking-[-0.03em] text-[#0f0b24] sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#474269]">
          The page you are looking for doesn’t exist or may have moved. Head
          back to the Neon Labz homepage to explore our services.
        </p>
        <div className="mt-7 flex justify-center">
          <ActionPill href={ROUTES.home} label="Back to Home" />
        </div>
      </div>
    </div>
  );
}
