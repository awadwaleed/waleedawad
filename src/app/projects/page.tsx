import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { StatusBadge } from "@/components/status-badge";
import { getAllProjects, PROJECT_STATUSES, STATUS_DESCRIPTION } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects I've built, including work still in progress.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Container size="wide" className="py-12 sm:py-16">
      <PageHeader
        title="Projects"
        description="Everything here is real work, at whatever stage it’s actually at — some finished, some still moving."
      />

      <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-dim">
        {PROJECT_STATUSES.map((status) => (
          <div key={status} className="flex items-center gap-2">
            <dt>
              <StatusBadge status={status} />
            </dt>
            <dd>{STATUS_DESCRIPTION[status]}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
