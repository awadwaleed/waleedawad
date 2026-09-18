import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects I've built, including work still in progress.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
        Projects
      </h1>
      <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400">
        Everything here is real work, at whatever stage it&rsquo;s actually at — some finished,
        some still moving.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
