import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@/constants/navigation";
import { BLOG_POSTS } from "@/data/blog";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CtaConnectBanner } from "@/components/sections/shared/CtaConnectBanner";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Insights" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative overflow-x-clip bg-white pt-28 sm:pt-36">
      <article className="mx-auto w-full max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
        <Link
          href={ROUTES.blog}
          className="inline-flex items-center gap-2 text-sm text-[#474269] transition-colors hover:text-[#0f0b24]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Insights</span>
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-6">
            <Eyebrow label={post.category} align="left" />
            <h1 className="mt-5 text-3xl font-medium tracking-[-0.03em] text-[#0f0b24] sm:text-5xl lg:text-[46px] lg:leading-[1.08]">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 font-mono text-xs text-[#645e8a]">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <p className="mt-5 text-base leading-relaxed text-[#474269] sm:text-lg">
              {post.excerpt}
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-card-strong overflow-hidden rounded-3xl p-3 sm:p-4">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#0f0b24]/[0.08] bg-[#f6f4fc]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card-strong mt-10 grid grid-cols-1 gap-8 rounded-3xl p-7 sm:p-10 lg:grid-cols-2 lg:gap-10">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-xl font-medium text-[#0f0b24] sm:text-2xl">
                {section.heading}
              </h2>
              <p className="text-sm leading-relaxed text-[#474269] sm:text-base">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </article>

      <CtaConnectBanner />
    </div>
  );
}
