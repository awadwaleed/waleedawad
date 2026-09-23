import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects();
  const posts = getAllPosts();

  // Static pages have no content date, so they omit lastModified rather than claim "now".
  const staticRoutes = ["", "/about", "/projects", "/resume", "/contact"];
  if (posts.length > 0) staticRoutes.push("/blog");

  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}` })),
    ...projects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: project.date,
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
