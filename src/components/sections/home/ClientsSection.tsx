import React from "react";
import Image from "next/image";
import { CLIENT_LOGOS } from "@/data/clients";

const INNER_WHITE_LOGO_IDS = new Set(["tj-fashion-mall", "magnify", "techna"]);

function getLogoSizeClass(id: string, compact: boolean) {
  if (id === "templateza") {
    return compact ? "h-6 sm:h-7 lg:h-8" : "h-7 sm:h-8 lg:h-9";
  }
  if (id === "magnify") {
    return compact ? "h-7 sm:h-8 lg:h-9" : "h-8 sm:h-9 lg:h-10";
  }
  if (id === "jenthu-nails-bridal" || id === "ceylon-thamizhachi") {
    return compact ? "h-10 sm:h-11 lg:h-13" : "h-12 sm:h-12 lg:h-13";
  }
  if (id === "eva-glowing-skin") {
    return compact ? "h-14 sm:h-15 lg:h-16" : "h-15 sm:h-16 lg:h-18";
  }
  return compact ? "h-10 sm:h-11 lg:h-12" : "h-11 sm:h-12 lg:h-14";
}

export function ClientsTrustCard({
  compact = false,
  id,
  tone = "auto",
}: {
  compact?: boolean;
  id?: string;
  tone?: "auto" | "light" | "dark";
}) {
  return (
    <div
      id={id}
      dir="ltr"
      aria-label="Our Esteemed Clients"
      className={`relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] ${compact ? "py-3 sm:py-4" : "py-4 sm:py-6"
        }`}
    >
      <div className="flex w-max animate-clients-marquee items-center">
        {[0, 1].map((groupIndex) => (
          <ul
            key={groupIndex}
            aria-hidden={groupIndex === 1}
            className="flex shrink-0 items-center gap-16 pr-16 sm:gap-24 sm:pr-24 lg:gap-32 lg:pr-32 xl:gap-36 xl:pr-36"
          >
            {[0, 1].map((repeatIndex) =>
              CLIENT_LOGOS.map((client) => {
                const isPrimaryPass = groupIndex === 0 && repeatIndex === 0;
                const usesCutoutInvert = INNER_WHITE_LOGO_IDS.has(client.id);
                const sizeClass = getLogoSizeClass(client.id, compact);

                const filterClass =
                  tone === "light"
                    ? usesCutoutInvert
                      ? "opacity-85 [filter:grayscale(1)_invert(1)_brightness(1.35)_contrast(1.3)] hover:opacity-100 hover:[filter:grayscale(1)_invert(1)_brightness(1.55)_contrast(1.35)]"
                      : "opacity-80 brightness-0 invert hover:opacity-100"
                    : tone === "dark"
                      ? "opacity-75 grayscale hover:opacity-100 hover:grayscale-0"
                      : usesCutoutInvert
                        ? "opacity-75 grayscale hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:[filter:grayscale(1)_invert(1)_brightness(1.35)_contrast(1.3)] dark:hover:opacity-100 dark:hover:[filter:grayscale(1)_invert(1)_brightness(1.55)_contrast(1.35)]"
                        : "opacity-75 grayscale hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:brightness-0 dark:invert dark:hover:opacity-100 dark:hover:brightness-0 dark:hover:invert";

                return (
                  <li
                    key={`${groupIndex}-${repeatIndex}-${client.id}`}
                    title={client.name}
                    aria-hidden={isPrimaryPass ? undefined : true}
                    className="flex shrink-0 items-center justify-center"
                  >
                    <Image
                      src={client.logoSrc}
                      alt={isPrimaryPass ? client.name : ""}
                      width={client.width}
                      height={client.height}
                      loading="eager"
                      draggable={false}
                      className={`${sizeClass} w-auto select-none object-contain transition-all duration-300 hover:scale-105 ${filterClass}`}
                    />
                  </li>
                );
              })
            )}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function ClientsSection() {
  return (
    <section
      id="clients"
      aria-label="Our Esteemed Clients"
      className="relative py-6 sm:py-8 lg:py-10"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
        <ClientsTrustCard />
      </div>
    </section>
  );
}
