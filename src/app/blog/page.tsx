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
      <h1 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        Blog
      </h1>

      {posts.length === 0 ? (
        <p className="mt-8 text-dim">No posts yet — check back soon.</p>
      ) : (
        <ul className="mt-10 space-y-8">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-border pb-8 last:border-0">
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-semibold text-text transition group-hover:text-accent">
                  {post.title}
                </h2>
              </Link>
              <p className="mt-1 text-sm text-dim">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                {" · "}
                {post.readingTime}
              </p>
              <p className="mt-3 text-dim">{post.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
