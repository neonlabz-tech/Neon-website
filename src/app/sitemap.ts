import type { MetadataRoute } from "next";
import { ROUTES } from "@/constants/navigation";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { BLOG_POSTS } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://theneonlabz.com";

  const staticRoutes = Object.values(ROUTES).map((route) => {
    const normalizedRoute = route === ROUTES.home ? "" : route;
    return {
      url: `${baseUrl}${normalizedRoute}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: normalizedRoute === "" ? 1 : 0.8,
    };
  });

  const portfolioRoutes = PORTFOLIO_ITEMS.map((item) => ({
    url: `${baseUrl}${ROUTES.portfolio}/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}${ROUTES.blog}/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...portfolioRoutes, ...blogRoutes];
}
