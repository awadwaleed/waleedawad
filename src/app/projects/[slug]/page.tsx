import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
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
      <Link href="/projects" className="text-sm text-slate-500 hover:text-teal-700 dark:hover:text-teal-400">
        &larr; All projects
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
          {project.title}
        </h1>
        <StatusBadge status={project.status} />
      </div>

      {project.role && <p className="mt-2 text-slate-500 dark:text-slate-400">{project.role}</p>}

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
          >
            {tech}
          </li>
        ))}
      </ul>

      {(project.links?.github || project.links?.demo || project.links?.writeup) && (
        <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
          {project.links?.demo && (
            <a href={project.links.demo} className="text-teal-700 hover:text-teal-900 dark:text-teal-400">
              Live demo &rarr;
            </a>
          )}
          {project.links?.github && (
            <a href={project.links.github} className="text-teal-700 hover:text-teal-900 dark:text-teal-400">
              Source &rarr;
            </a>
          )}
          {project.links?.writeup && (
            <a href={project.links.writeup} className="text-teal-700 hover:text-teal-900 dark:text-teal-400">
              Write-up &rarr;
            </a>
          )}
        </div>
      )}

      <div className="mt-10 border-t border-slate-200 pt-10 dark:border-slate-800">
        <Mdx source={project.content} />
      </div>
    </Container>
  );
}
