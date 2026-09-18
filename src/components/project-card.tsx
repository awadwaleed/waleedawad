import Link from "next/link";
import type { Project } from "@/lib/projects";
import { StatusBadge } from "@/components/status-badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl border border-slate-200 p-5 transition hover:border-teal-600/40 hover:bg-teal-50/40 dark:border-slate-800 dark:hover:border-teal-500/30 dark:hover:bg-teal-500/5"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-slate-900 group-hover:text-teal-800 dark:text-slate-100 dark:group-hover:text-teal-400">
          {project.title}
        </h3>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.summary}</p>
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
    </Link>
  );
}
