import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ProjectStatus = "live" | "in-progress" | "shipped";

export type ProjectLinks = {
  github?: string;
  demo?: string;
  writeup?: string;
};

export type ProjectFrontmatter = {
  title: string;
  summary: string;
  status: ProjectStatus;
  stack: string[];
  role?: string;
  date: string;
  featured?: boolean;
  links?: ProjectLinks;
};

export type Project = ProjectFrontmatter & {
  slug: string;
  content: string;
};

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(slug: string): Project {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { ...(data as ProjectFrontmatter), slug, content };
}

export function getAllProjects(): Project[] {
  return getProjectSlugs()
    .map(getProjectBySlug)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedProjects(limit = 2): Project[] {
  const all = getAllProjects();
  const featured = all.filter((project) => project.featured);
  return (featured.length > 0 ? featured : all).slice(0, limit);
}

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  live: "Live",
  "in-progress": "In Progress",
  shipped: "Shipped",
};
