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
        <p className="mb-5 text-sm font-medium tracking-widest text-teal-800 uppercase dark:text-teal-400">
          Software engineer
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl dark:text-slate-100">
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          I build things end-to-end and write about what I learn along the way. Currently looking
          for software engineering roles — some of what&rsquo;s below is finished, some is still
          in progress.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
          <Link
            href="/resume"
            className="rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-slate-300 px-4 py-2 text-slate-700 transition hover:border-teal-600 hover:text-teal-800 dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-500 dark:hover:text-teal-400"
          >
            Contact
          </Link>
        </div>
      </Container>

      {featuredProjects.length > 0 && (
        <Container className="pb-24">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="text-sm font-medium tracking-widest text-slate-500 uppercase dark:text-slate-400">
              Selected projects
            </h2>
            <Link href="/projects" className="text-sm text-teal-700 hover:text-teal-900 dark:text-teal-400">
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
