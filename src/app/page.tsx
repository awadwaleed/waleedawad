import Link from "next/link";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { getFeaturedProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  const featuredProjects = getFeaturedProjects(2);

  return (
    <main>
      <Container className="flex flex-col justify-center py-20 sm:py-28">
        <p className="mb-5 text-sm font-medium tracking-widest text-accent uppercase">
          Software engineer
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-text sm:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-dim">
          I build things end-to-end and write about what I learn along the way. Currently looking
          for software engineering roles — some of what&rsquo;s below is finished, some is still
          in progress.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
          <Link
            href="/resume"
            className="rounded-lg bg-accent px-4 py-2 text-accent-ink transition hover:opacity-90"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-accent-2 px-4 py-2 text-accent-2-ink transition hover:opacity-90"
          >
            Contact
          </Link>
        </div>
      </Container>

      {featuredProjects.length > 0 && (
        <Container className="pb-24">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="text-sm font-medium tracking-widest text-dim uppercase">
              Selected projects
            </h2>
            <Link href="/projects" className="text-sm text-accent transition hover:opacity-80">
              View all &rarr;
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      )}
    </main>
  );
}
