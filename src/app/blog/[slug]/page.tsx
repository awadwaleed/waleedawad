import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Mdx } from "@/lib/mdx";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  if (!getPostSlugs().includes(slug)) return {};
  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.summary,
    openGraph: { title: post.title, description: post.summary, type: "article" },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  if (!getPostSlugs().includes(slug)) notFound();
  const post = getPostBySlug(slug);

  return (
    <Container className="py-16 sm:py-20">
      <Link href="/blog" className="text-sm text-dim transition hover:text-accent">
        &larr; All posts
      </Link>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-2 text-sm text-dim">
        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        {" · "}
        {post.readingTime}
      </p>

      <div className="mt-10 border-t border-border pt-10">
        <Mdx source={post.content} />
      </div>
    </Container>
  );
}
