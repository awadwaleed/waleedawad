import Link from "next/link";
import type { Project } from "@/lib/projects";
import { StatusBadge } from "@/components/status-badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl border border-border bg-surface p-5 transition hover:border-accent/40"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-text transition group-hover:text-accent">
          {project.title}
        </h3>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-2 text-sm leading-6 text-dim">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-bg px-2.5 py-0.5 font-mono text-xs text-dim"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Link>
  );
}
