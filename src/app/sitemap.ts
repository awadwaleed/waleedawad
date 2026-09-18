import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/projects";
import { getPostSlugs } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/projects", "/blog", "/resume", "/contact"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = getProjectSlugs().map((slug) => ({
    url: `${siteConfig.url}/projects/${slug}`,
    lastModified: new Date(),
  }));

  const postRoutes = getPostSlugs().map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...postRoutes];
}
