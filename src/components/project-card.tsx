import Link from "next/link";
import type { Project } from "@/lib/projects";
import { StatusBadge } from "@/components/status-badge";
import { TagList } from "@/components/tag";

/** A project as a game cartridge: a label strip on top, the details below. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="panel group flex flex-col transition hover:-translate-y-0.5 hover:border-accent"
    >
      <div className="flex items-center justify-between gap-3 border-b-2 border-border px-5 py-3">
        <h3 className="font-pixel text-lg text-text transition group-hover:text-accent">
          {project.title}
        </h3>
        <StatusBadge status={project.status} />
      </div>
      <div className="flex flex-1 flex-col px-5 py-4">
        <p className="text-sm leading-6 text-dim">{project.summary}</p>
        <TagList items={project.stack} className="mt-auto pt-4" />
      </div>
    </Link>
  );
}
