import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getFeaturedProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  const featuredProjects = getFeaturedProjects(2);

  return (
    <>
      <Container size="wide" className="py-12 sm:py-20">
        {/* The hero is the SP's screen: bezel (panel) around an LCD. */}
        <div className="panel p-3 sm:p-4">
          <div className="lcd rounded-sm border-2 border-border px-6 py-12 sm:px-12 sm:py-16">
            <p className="font-pixel text-base font-medium tracking-wider text-accent uppercase">
              Software engineer
            </p>
            <h1 className="mt-3 font-pixel text-5xl font-semibold tracking-tight text-text sm:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-dim">
              I build things end-to-end and write about what I learn along the way. Currently
              looking for software engineering roles — some of what&rsquo;s below is finished, some
              is still in progress.
            </p>
            <p aria-hidden className="mt-10 font-pixel text-base font-medium tracking-wide text-dim">
              <span className="animate-blink">PRESS START</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <ButtonLink href="/projects">View projects</ButtonLink>
              <ButtonLink href="/resume" variant="secondary">
                Resume
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>

      {featuredProjects.length > 0 && (
        <Container size="wide">
          <div className="mb-5 flex items-baseline justify-between">
            <SectionHeading>Selected projects</SectionHeading>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-pixel text-base font-medium tracking-wide text-accent transition hover:opacity-80"
            >
              All projects <span aria-hidden>▶</span>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      )}
    </>
  );
}
