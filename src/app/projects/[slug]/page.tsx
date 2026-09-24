import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { StatusBadge } from "@/components/status-badge";
import { TagList } from "@/components/tag";
import { formatDate } from "@/lib/format";
import { Mdx } from "@/lib/mdx";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getAllProjects().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, type: "article" },
  };
}

const LINK_LABEL = { demo: "Live demo", github: "Source", writeup: "Write-up" } as const;

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const project = getProjectBySlug((await params).slug);
  if (!project) notFound();

  const links = (Object.keys(LINK_LABEL) as (keyof typeof LINK_LABEL)[]).filter(
    (key) => project.links[key],
  );

  return (
    <Container className="py-12 sm:py-16">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-dim transition hover:text-accent">
        <span aria-hidden>◀</span> All projects
      </Link>

      <div className="mt-6">
        <PageHeader
          title={project.title}
          description={project.summary}
          eyebrow={
            <span className="flex flex-wrap items-center gap-3">
              <StatusBadge status={project.status} />
              <span>
                {[project.role, formatDate(project.date, "short")].filter(Boolean).join(" · ")}
              </span>
            </span>
          }
        />
      </div>

      <TagList items={project.stack} className="mt-5" />

      {links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map((key, i) => (
            <ButtonLink
              key={key}
              href={project.links[key]!}
              variant={i === 0 ? "primary" : "secondary"}
            >
              {LINK_LABEL[key]} <span aria-hidden>↗</span>
            </ButtonLink>
          ))}
        </div>
      )}

      <div className="mt-10 border-t-2 border-border pt-8">
        <Mdx source={project.content} />
      </div>
    </Container>
  );
}
