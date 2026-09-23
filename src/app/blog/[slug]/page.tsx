import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { TagList } from "@/components/tag";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/format";
import { Mdx } from "@/lib/mdx";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const post = getPostBySlug((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: { title: post.title, description: post.summary, type: "article" },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const post = getPostBySlug((await params).slug);
  if (!post) notFound();

  return (
    <Container className="py-12 sm:py-16">
      <Link href="/blog" className="inline-flex items-center gap-2 font-pixel text-sm text-dim transition hover:text-accent">
        <span aria-hidden>◀</span> All posts
      </Link>

      <article className="mt-6">
        <PageHeader
          title={post.title}
          eyebrow={
            <>
              <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
            </>
          }
        />
        <TagList items={post.tags} className="mt-5" />

        <div className="mt-10 border-t-2 border-border pt-8">
          <Mdx source={post.content} />
        </div>
      </article>
    </Container>
  );
}
