"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Sparkles,
  Layers,
  FolderGit2,
  BookOpen,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Globe,
  Smartphone,
  Palette,
} from "lucide-react";
import {
  MAIN_NAV_LINKS,
  NAV_FEATURED_SERVICES,
  ROUTES,
} from "@/constants/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ActionPill } from "@/components/ui/ActionPill";

const ICONS = {
  home: Home,
  sparkles: Sparkles,
  services: Layers,
  folder: FolderGit2,
  book: BookOpen,
} as const;

const SERVICE_DROPDOWN_ICONS = {
  globe: Globe,
  layers: Layers,
  smartphone: Smartphone,
  palette: Palette,
} as const;

export function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollYRef = useRef(0);

  const [openPath, setOpenPath] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrollState, setScrollState] = useState<{
    hidden: boolean;
    overHero: boolean;
    path: string;
  }>({ hidden: false, overHero: pathname === "/", path: pathname });

  const mobileOpen = openPath === pathname;
  const isHidden =
    scrollState.hidden && scrollState.path === pathname && !mobileOpen;
  const overDarkHero =
    pathname === "/" &&
    (scrollState.path === pathname ? scrollState.overHero : true);

  const closeAllMenus = useCallback(() => {
    setOpenPath(null);
    setServicesOpen(false);
  }, []);

  useEffect(() => {
    lastScrollYRef.current = Math.max(window.scrollY, 0);

    const checkOverHero = () => {
      if (pathname !== "/") return false;
      const heroEl = document.getElementById("hero-section");
      if (!heroEl) return window.scrollY < 480;
      return heroEl.getBoundingClientRect().bottom > 88;
    };

    const syncInitial = () => {
      const heroMatch = checkOverHero();
      setScrollState((prev) =>
        prev.path === pathname && prev.overHero === heroMatch && !prev.hidden
          ? prev
          : { hidden: false, overHero: heroMatch, path: pathname }
      );
    };

    const initRafId = requestAnimationFrame(syncInitial);

    const onScrollOrResize = () => {
      const currentY = Math.max(window.scrollY, 0);
      const delta = currentY - lastScrollYRef.current;
      const heroMatch = checkOverHero();

      if (currentY <= 40) {
        lastScrollYRef.current = currentY;
        setScrollState((prev) =>
          prev.path === pathname && !prev.hidden && prev.overHero === heroMatch
            ? prev
            : { hidden: false, overHero: heroMatch, path: pathname }
        );
        return;
      }

      if (delta > 8) {
        lastScrollYRef.current = currentY;
        setScrollState((prev) =>
          prev.path === pathname && prev.hidden && prev.overHero === heroMatch
            ? prev
            : { hidden: true, overHero: heroMatch, path: pathname }
        );
      } else if (delta < -8) {
        lastScrollYRef.current = currentY;
        setScrollState((prev) =>
          prev.path === pathname && !prev.hidden && prev.overHero === heroMatch
            ? prev
            : { hidden: false, overHero: heroMatch, path: pathname }
        );
      } else {
        setScrollState((prev) =>
          prev.path === pathname && prev.overHero === heroMatch
            ? prev
            : {
                hidden: prev.path === pathname ? prev.hidden : false,
                overHero: heroMatch,
                path: pathname,
              }
        );
      }
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      cancelAnimationFrame(initRafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAllMenus();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen, closeAllMenus]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-300 ease-out sm:px-6 sm:pt-4 lg:px-10 ${
        overDarkHero ? "dark" : ""
      } ${isHidden ? "pointer-events-none -translate-y-full" : ""}`}
    >
      <div className="relative mx-auto w-full max-w-[1440px] 2xl:max-w-[1560px]">
        {/* Single Unified Scroll-Aware Floating Navbar Pill */}
        <div className="ios-glass-navbar flex w-full items-center justify-between gap-2 rounded-full px-2.5 py-1.5 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 sm:gap-3 sm:px-4 sm:py-2 xl:grid xl:grid-cols-[1fr_auto_1fr] xl:gap-4">
          <Link
            href={ROUTES.home}
            onClick={closeAllMenus}
            aria-label="NeonLabz Home"
            className="shrink-0 justify-self-start rounded-full py-1 pr-1 pl-1.5 transition-opacity hover:opacity-90 sm:pl-2.5"
          >
            <BrandLogo
              priority
              tone={overDarkHero ? "light" : "dark"}
              className="[&_img]:h-5 [&_img]:sm:h-7"
            />
          </Link>

          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-1 justify-self-center lg:flex"
          >
            {MAIN_NAV_LINKS.map((item) => {
              const Icon = ICONS[item.iconName];
              const active = isActive(item.href);

              if (item.href === ROUTES.services) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      onClick={closeAllMenus}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                        active
                          ? "ios-glass-tab-active text-[#4f28c9] dark:text-white"
                          : "border border-transparent text-[#474269] hover:bg-[#0f0b24]/[0.05] hover:text-[#0f0b24] dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white"
                      }`}
                    >
                      <Icon
                        className={`h-3.5 w-3.5 ${
                          active
                            ? "text-[#6d3fea] dark:text-[#d7c9ff]"
                            : "text-[#645e8a] dark:text-white/75"
                        }`}
                      />
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    <div
                      className={`absolute top-full left-1/2 w-[360px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                        servicesOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-1 opacity-0"
                      }`}
                    >
                      <div className="rounded-2xl border border-[#0f0b24]/10 bg-white/95 p-2 shadow-[0_24px_60px_-16px_rgba(15,11,36,0.22)] backdrop-blur-2xl dark:border-white/15 dark:bg-[#120d31]/95 dark:shadow-[0_24px_60px_-16px_rgba(0,0,0,0.65)]">
                        <div className="flex flex-col gap-1">
                          {NAV_FEATURED_SERVICES.map((svc) => {
                            const SvcIcon =
                              SERVICE_DROPDOWN_ICONS[svc.iconName];
                            return (
                              <Link
                                key={svc.href}
                                href={svc.href}
                                onClick={closeAllMenus}
                                className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-[#6d3fea]/[0.07] dark:hover:bg-white/[0.08]"
                              >
                                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#6d3fea]/20 bg-[#6d3fea]/10 text-[#6d3fea] transition-colors group-hover:bg-[#6d3fea] group-hover:text-white dark:border-white/15 dark:bg-white/10 dark:text-[#d7c9ff] dark:group-hover:bg-[#6d3fea] dark:group-hover:text-white">
                                  <SvcIcon className="h-4 w-4" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-[13px] font-semibold text-[#0f0b24] transition-colors group-hover:text-[#5b2ee0] dark:text-white dark:group-hover:text-[#d7c9ff]">
                                    {svc.title}
                                  </span>
                                  <span className="block truncate text-xs text-[#645e8a] dark:text-white/65">
                                    {svc.description}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>

                        <div className="mt-2 border-t border-[#0f0b24]/10 pt-2 dark:border-white/10">
                          <Link
                            href={ROUTES.services}
                            onClick={closeAllMenus}
                            className="group flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-[#5b2ee0] transition-colors hover:bg-[#6d3fea]/[0.08] dark:text-[#d7c9ff] dark:hover:bg-white/[0.08]"
                          >
                            <span>Complete Service Directory</span>
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeAllMenus}
                  className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                    active
                      ? "ios-glass-tab-active text-[#4f28c9] dark:text-white"
                      : "border border-transparent text-[#474269] hover:bg-[#0f0b24]/[0.05] hover:text-[#0f0b24] dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                >
                  <Icon
                    className={`h-3.5 w-3.5 ${
                      active
                        ? "text-[#6d3fea] dark:text-[#d7c9ff]"
                        : "text-[#645e8a] dark:text-white/75"
                    }`}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 justify-self-end sm:gap-2.5">
            <div className="hidden sm:block">
              <ActionPill
                href={ROUTES.contact}
                label="Let’s Connect"
                size="sm"
              />
            </div>

            <button
              type="button"
              onClick={() =>
                setOpenPath((prev) => (prev === pathname ? null : pathname))
              }
              aria-label={
                mobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              className="ios-glass-btn inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[#0f0b24] sm:h-10 sm:w-10 lg:hidden dark:text-white"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <>
          <div
            aria-hidden="true"
            onClick={() => setOpenPath(null)}
            className="fixed inset-0 -z-20 bg-[#0f0b24]/25 backdrop-blur-md lg:hidden dark:bg-[#09061a]/60"
          />
          <div className="ios-glass-drawer mx-auto mt-3 w-full max-w-[1440px] overflow-hidden rounded-2xl lg:hidden 2xl:max-w-[1560px]">
            <nav
              aria-label="Mobile Navigation"
              className="flex max-h-[calc(100dvh-5.5rem)] flex-col gap-1.5 overflow-y-auto p-4"
            >
              {MAIN_NAV_LINKS.map((item) => {
                const Icon = ICONS[item.iconName];
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAllMenus}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                      active
                        ? "ios-glass-tab-active text-[#4f28c9] dark:text-white"
                        : "text-[#0f0b24] hover:bg-[#0f0b24]/[0.05] hover:text-[#0f0b24] dark:text-white/95 dark:hover:bg-white/10 dark:hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4 text-[#6d3fea] dark:text-[#c3b0fa]" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="mt-2 border-t border-[#0f0b24]/10 pt-3 sm:hidden dark:border-white/15">
                <ActionPill
                  href={ROUTES.contact}
                  label="Let’s Connect"
                  className="w-full justify-center"
                />
              </div>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
