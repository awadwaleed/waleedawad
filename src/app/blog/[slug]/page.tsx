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
      <Link href="/blog" className="text-sm text-slate-500 hover:text-teal-700 dark:hover:text-teal-400">
        &larr; All posts
      </Link>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
        {post.title}
      </h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        {" · "}
        {post.readingTime}
      </p>

      <div className="mt-10 border-t border-slate-200 pt-10 dark:border-slate-800">
        <Mdx source={post.content} />
      </div>
    </Container>
  );
}
