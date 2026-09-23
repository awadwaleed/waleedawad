import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { TagList } from "@/components/tag";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on what I'm building and learning.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container className="py-12 sm:py-16">
      <PageHeader title="Blog" description="Notes on what I’m building and learning." />

      {posts.length === 0 ? (
        <p className="mt-10 font-pixel text-dim">No posts yet — check back soon.</p>
      ) : (
        <ul className="mt-10 divide-y-2 divide-border">
          {posts.map((post) => (
            <li key={post.slug} className="py-6 first:pt-0">
              <p className="font-pixel text-sm text-dim">
                <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
              </p>
              <Link href={`/blog/${post.slug}`} className="group mt-1 block">
                <h2 className="font-pixel text-xl text-text transition group-hover:text-accent">
                  {post.title}
                </h2>
              </Link>
              <p className="mt-2 leading-7 text-dim">{post.summary}</p>
              <TagList items={post.tags} className="mt-3" />
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
