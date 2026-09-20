import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";
import { StatusBadge } from "@/components/status-badge";
import { Mdx } from "@/lib/mdx";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  if (!getProjectSlugs().includes(slug)) return {};
  const project = getProjectBySlug(slug);
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, type: "article" },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  if (!getProjectSlugs().includes(slug)) notFound();
  const project = getProjectBySlug(slug);

  return (
    <Container className="py-16 sm:py-20">
      <Link href="/projects" className="text-sm text-dim transition hover:text-accent">
        &larr; All projects
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          {project.title}
        </h1>
        <StatusBadge status={project.status} />
      </div>

      {project.role && <p className="mt-2 text-dim">{project.role}</p>}

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-surface px-2.5 py-0.5 font-mono text-xs text-dim"
          >
            {tech}
          </li>
        ))}
      </ul>

      {(project.links?.github || project.links?.demo || project.links?.writeup) && (
        <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
          {project.links?.demo && (
            <ExternalLink href={project.links.demo} className="text-accent transition hover:opacity-80">
              Live demo &rarr;
            </ExternalLink>
          )}
          {project.links?.github && (
            <ExternalLink href={project.links.github} className="text-accent transition hover:opacity-80">
              Source &rarr;
            </ExternalLink>
          )}
          {project.links?.writeup && (
            <ExternalLink href={project.links.writeup} className="text-accent transition hover:opacity-80">
              Write-up &rarr;
            </ExternalLink>
          )}
        </div>
      )}

      <div className="mt-10 border-t border-border pt-10">
        <Mdx source={project.content} />
      </div>
    </Container>
  );
}
