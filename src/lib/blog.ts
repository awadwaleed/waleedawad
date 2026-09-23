import readingTime from "reading-time";
import { byDateDesc, loadCollection, type Entry } from "@/lib/content";

export type Post = Entry<{
  title: string;
  summary: string;
  date: string;
  tags: string[];
  draft: boolean;
  readingTime: string;
}>;

function loadPosts(): Post[] {
  return loadCollection("blog", (f, content) => ({
    title: f.string("title"),
    summary: f.string("summary"),
    date: f.date("date"),
    tags: f.stringArray("tags"),
    draft: f.boolean("draft"),
    readingTime: readingTime(content).text,
  })).sort(byDateDesc);
}

/** Published posts only. Drafts never reach pages, static params, or the sitemap. */
export function getAllPosts(): Post[] {
  return loadPosts().filter((post) => !post.draft);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
