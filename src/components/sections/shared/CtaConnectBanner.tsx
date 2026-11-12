"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { ROUTES } from "@/constants/navigation";
import { COMPANY_INFO } from "@/data/company";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ActionPill } from "@/components/ui/ActionPill";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function CtaConnectBanner() {
  const cardRef = useRef<HTMLDivElement>(null);
  const ambientGlowRef = useRef<HTMLDivElement>(null);
  const flutedRefractRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const hotspotRef = useRef<HTMLDivElement>(null);
  const rimGlowRef = useRef<HTMLDivElement>(null);

  const stateRef = useRef({
    hovering: false,
    targetX: 0.5,
    targetY: 0.5,
    curX: 0.5,
    curY: 0.5,
    curActive: 0,
    rafId: 0,
  });

  const ensureAnimating = useCallback(() => {
    if (stateRef.current.rafId) return;

    const paintStep = () => {
      const s = stateRef.current;
      const card = cardRef.current;
      if (!card) {
        s.rafId = 0;
        return;
      }

      const targetActive = s.hovering ? 1 : 0;
      const posEase = 0.14;
      const fadeEase = 0.12;

      s.curX += (s.targetX - s.curX) * posEase;
      s.curY += (s.targetY - s.curY) * posEase;
      s.curActive += (targetActive - s.curActive) * fadeEase;

      const xPct = (s.curX * 100).toFixed(2);
      const yPct = (s.curY * 100).toFixed(2);
      const nx = s.curX - 0.5;
      const ny = s.curY - 0.5;
      const activeStr = s.curActive.toFixed(3);

      card.style.setProperty("--cta-x", `${xPct}%`);
      card.style.setProperty("--cta-y", `${yPct}%`);

      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = activeStr;
      }
      if (hotspotRef.current) {
        hotspotRef.current.style.opacity = activeStr;
      }
      if (rimGlowRef.current) {
        rimGlowRef.current.style.opacity = activeStr;
      }
      if (flutedRefractRef.current) {
        flutedRefractRef.current.style.opacity = activeStr;
        flutedRefractRef.current.style.transform = `translate3d(${(nx * -18).toFixed(2)}px, 0, 0)`;
      }
      if (ambientGlowRef.current) {
        ambientGlowRef.current.style.transform = `translate3d(${(nx * 26).toFixed(2)}px, ${(ny * 14).toFixed(2)}px, 0)`;
      }

      const stillMoving =
        Math.abs(s.targetX - s.curX) > 0.001 ||
        Math.abs(s.targetY - s.curY) > 0.001 ||
        Math.abs(targetActive - s.curActive) > 0.002;

      if (stillMoving) {
        s.rafId = requestAnimationFrame(paintStep);
      } else {
        s.rafId = 0;
      }
    };

    stateRef.current.rafId = requestAnimationFrame(paintStep);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const coarseQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    let sweepRaf = 0;
    let isVisible = false;

    const runAmbientSweep = (now: number) => {
      if (!isVisible || stateRef.current.hovering || !coarseQuery.matches) {
        sweepRaf = 0;
        return;
      }

      const t = now * 0.001;
      const sx = 0.5 + 0.28 * Math.sin(t * 0.65);
      const sy = 0.48 + 0.14 * Math.cos(t * 0.9);
      const s = stateRef.current;
      s.curX = sx;
      s.curY = sy;
      s.curActive = 0.68;

      card.style.setProperty("--cta-x", `${(sx * 100).toFixed(2)}%`);
      card.style.setProperty("--cta-y", `${(sy * 100).toFixed(2)}%`);

      if (spotlightRef.current) spotlightRef.current.style.opacity = "0.68";
      if (hotspotRef.current) hotspotRef.current.style.opacity = "0.6";
      if (rimGlowRef.current) rimGlowRef.current.style.opacity = "0.65";
      if (flutedRefractRef.current) {
        flutedRefractRef.current.style.opacity = "0.7";
        flutedRefractRef.current.style.transform = `translate3d(${((sx - 0.5) * -16).toFixed(2)}px, 0, 0)`;
      }
      if (ambientGlowRef.current) {
        ambientGlowRef.current.style.transform = `translate3d(${((sx - 0.5) * 20).toFixed(2)}px, ${((sy - 0.5) * 12).toFixed(2)}px, 0)`;
      }

      sweepRaf = requestAnimationFrame(runAmbientSweep);
    };

    const observer =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              isVisible = entries.some((entry) => entry.isIntersecting);
              if (isVisible && coarseQuery.matches && !sweepRaf) {
                sweepRaf = requestAnimationFrame(runAmbientSweep);
              }
            },
            { threshold: 0.1 }
          )
        : null;

    observer?.observe(card);

    const state = stateRef.current;
    return () => {
      observer?.disconnect();
      if (sweepRaf) cancelAnimationFrame(sweepRaf);
      if (state.rafId) cancelAnimationFrame(state.rafId);
    };
  }, []);

  const updatePointerTarget = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    stateRef.current.targetX = Math.min(
      1,
      Math.max(0, (e.clientX - rect.left) / rect.width)
    );
    stateRef.current.targetY = Math.min(
      1,
      Math.max(0, (e.clientY - rect.top) / rect.height)
    );
    ensureAnimating();
  };

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    stateRef.current.hovering = true;
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const rx = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
        const ry = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));
        // Snap near cursor on entry so highlight emerges directly under pointer
        if (stateRef.current.curActive < 0.05) {
          stateRef.current.curX = rx;
          stateRef.current.curY = ry;
        }
        stateRef.current.targetX = rx;
        stateRef.current.targetY = ry;
      }
    }
    ensureAnimating();
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    stateRef.current.hovering = false;
    ensureAnimating();
  };

  return (
    <section id="connect" className="bg-white py-14 sm:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
        <div
          ref={cardRef}
          onPointerEnter={handlePointerEnter}
          onPointerMove={updatePointerTarget}
          onPointerLeave={handlePointerLeave}
          style={
            {
              "--cta-x": "50%",
              "--cta-y": "50%",
            } as React.CSSProperties
          }
          className="dark relative overflow-hidden rounded-3xl border border-white/15 bg-[#09061a] bg-gradient-to-b from-[#09061a] via-[#120d31] to-[#1a1345] px-6 py-14 text-center text-white shadow-[0_28px_70px_-20px_rgba(15,11,36,0.42)] sm:px-12 sm:py-20"
        >
          {/* Fluted vertical glass ribs layered above obsidian indigo base */}
          <div
            aria-hidden="true"
            className="fluted-stripes pointer-events-none absolute inset-0"
          />

          {/* Ambient center glow (shifts gently with cursor motion) */}
          <div
            ref={ambientGlowRef}
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/2 h-64 w-[540px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(140,43,255,0.35)_0%,transparent_70%)] blur-2xl will-change-transform"
          />

          {/* Cursor-following broad plasma aura inside this banner only */}
          <div
            ref={spotlightRef}
            aria-hidden="true"
            style={{
              opacity: 0,
              background:
                "radial-gradient(520px circle at var(--cta-x) var(--cta-y), rgba(195, 18, 251, 0.22) 0%, rgba(121, 117, 255, 0.16) 38%, rgba(56, 189, 248, 0.08) 65%, transparent 82%)",
            }}
            className="pointer-events-none absolute inset-0"
          />

          {/* Interactive fluted-glass rib refraction around cursor */}
          <div
            ref={flutedRefractRef}
            aria-hidden="true"
            style={{
              opacity: 0,
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0) 0px, rgba(255,255,255,0.22) 10px, rgba(225,10,250,0.16) 18px, rgba(121,117,255,0.14) 26px, rgba(255,255,255,0) 36px)",
              maskImage:
                "radial-gradient(360px 260px at var(--cta-x) var(--cta-y), black 0%, rgba(0,0,0,0.45) 45%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(360px 260px at var(--cta-x) var(--cta-y), black 0%, rgba(0,0,0,0.45) 45%, transparent 80%)",
            }}
            className="pointer-events-none absolute -inset-x-6 inset-y-0 will-change-transform"
          />

          {/* Crisp specular hotspot tracking pointer directly */}
          <div
            ref={hotspotRef}
            aria-hidden="true"
            style={{
              opacity: 0,
              background:
                "radial-gradient(210px circle at var(--cta-x) var(--cta-y), rgba(255, 255, 255, 0.28) 0%, rgba(225, 10, 250, 0.16) 44%, transparent 78%)",
            }}
            className="pointer-events-none absolute inset-0 mix-blend-screen"
          />

          {/* Reactive neon border rim illuminated near cursor */}
          <div
            ref={rimGlowRef}
            aria-hidden="true"
            style={{
              opacity: 0,
              padding: "1.5px",
              background:
                "radial-gradient(340px circle at var(--cta-x) var(--cta-y), rgba(225, 10, 250, 0.85) 0%, rgba(121, 117, 255, 0.65) 42%, transparent 75%)",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
            }}
            className="pointer-events-none absolute inset-0 rounded-3xl"
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <Eyebrow label="LET’S CONNECT" />
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Ready to Turn Your Idea Into{" "}
              <span className="neon-gradient-text">Digital Reality?</span>
            </h2>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <ActionPill href={ROUTES.contact} label="Request a Meeting" />

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ios-glass-btn-mint inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium text-[#92eec5]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
