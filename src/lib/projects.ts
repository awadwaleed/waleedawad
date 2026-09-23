import { byDateDesc, loadCollection, type Entry } from "@/lib/content";

export const PROJECT_STATUSES = ["live", "in-progress", "shipped"] as const;
export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  live: "Live",
  "in-progress": "In Progress",
  shipped: "Shipped",
};

export const STATUS_DESCRIPTION: Record<ProjectStatus, string> = {
  live: "running and publicly usable",
  "in-progress": "actively being built",
  shipped: "finished, not currently hosted",
};

const LINK_KEYS = ["github", "demo", "writeup"] as const;
export type ProjectLinks = Partial<Record<(typeof LINK_KEYS)[number], string>>;

export type Project = Entry<{
  title: string;
  summary: string;
  status: ProjectStatus;
  stack: string[];
  role?: string;
  date: string;
  featured: boolean;
  links: ProjectLinks;
}>;

function loadProjects(): Project[] {
  return loadCollection("projects", (f) => ({
    title: f.string("title"),
    summary: f.string("summary"),
    status: f.oneOf("status", PROJECT_STATUSES),
    stack: f.stringArray("stack"),
    role: f.optionalString("role"),
    date: f.date("date"),
    featured: f.boolean("featured"),
    links: f.stringRecord("links", LINK_KEYS),
  })).sort(byDateDesc);
}

export function getAllProjects(): Project[] {
  return loadProjects();
}

export function getProjectBySlug(slug: string): Project | undefined {
  return loadProjects().find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 2): Project[] {
  const all = loadProjects();
  const featured = all.filter((project) => project.featured);
  return (featured.length > 0 ? featured : all).slice(0, limit);
}
