import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on what I'm building and learning.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
        Blog
      </h1>

      {posts.length === 0 ? (
        <p className="mt-8 text-slate-500 dark:text-slate-400">No posts yet — check back soon.</p>
      ) : (
        <ul className="mt-10 space-y-8">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-slate-200 pb-8 last:border-0 dark:border-slate-800">
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-semibold text-slate-900 group-hover:text-teal-800 dark:text-slate-100 dark:group-hover:text-teal-400">
                  {post.title}
                </h2>
              </Link>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                {" · "}
                {post.readingTime}
              </p>
              <p className="mt-3 text-slate-600 dark:text-slate-400">{post.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
