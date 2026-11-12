import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ROUTES } from "@/constants/navigation";
import { BLOG_POSTS } from "@/data/blog";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CtaConnectBanner } from "@/components/sections/shared/CtaConnectBanner";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Engineering articles and software growth insights from Neon Labz.",
};

export default function BlogPage() {
  return (
    <div className="relative overflow-x-clip bg-white">
      <section className="relative bg-white pt-28 pb-10 sm:pt-36 sm:pb-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_62%_46%_at_50%_30%,rgba(109,63,234,0.06)_0%,rgba(140,43,255,0.02)_46%,transparent_74%)] sm:h-[480px]"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 text-center sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <Eyebrow label="NEON LABZ INSIGHTS" />
          <h1 className="mx-auto mt-6 max-w-3xl text-3xl font-medium tracking-[-0.04em] text-[#0f0b24] sm:text-5xl lg:text-6xl">
            Engineering Notes &amp; Digital Strategy
          </h1>
        </div>
      </section>

      <section className="border-y border-[#0f0b24]/[0.06] bg-[#faf9fe] py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`${ROUTES.blog}/${post.slug}`}
                className="glass-card group flex flex-col justify-between rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6d3fea]/35 sm:p-6"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-2">
                    <span className="rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-3 py-1 text-[11px] font-medium text-[#5b2ee0]">
                      {post.category}
                    </span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] text-[#474269] transition-all group-hover:border-[#6d3fea] group-hover:bg-[#6d3fea] group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <h2 className="mt-4 text-xl font-medium leading-snug text-[#0f0b24]">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#474269]">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#0f0b24]/[0.08] pt-4 font-mono text-xs text-[#645e8a]">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaConnectBanner />
    </div>
  );
}
