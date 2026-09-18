import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type PostFrontmatter = {
  title: string;
  summary: string;
  date: string;
  tags?: string[];
  draft?: boolean;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
  readingTime: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    ...(data as PostFrontmatter),
    slug,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllPosts({ includeDrafts = false } = {}): Post[] {
  return getPostSlugs()
    .map(getPostBySlug)
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
