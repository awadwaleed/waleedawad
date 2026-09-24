import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Panel } from "@/components/panel";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: "Background, current focus, and the kind of roles I'm looking for.",
};

// The at-a-glance "trainer card". Every line here is a summary of the prose below.
const profile: { label: string; value: string }[] = [
  { label: "Studying", value: "B.S. + M.S. Computer Science, George Mason University" },
  { label: "Working", value: "IT Administrator · Associate Manager at TUMI" },
  { label: "Interests", value: "Backend, full-stack, and systems engineering" },
  { label: "Seeking", value: "Entry-level software engineering roles" },
];

export default function AboutPage() {
  return (
    <Container className="py-12 sm:py-16">
      <PageHeader title="About" />

      <Panel className="mt-8 overflow-hidden">
        <div className="flex items-center justify-between border-b-2 border-border bg-sunken px-5 py-2.5">
          <span className="font-pixel text-base font-medium tracking-wide text-dim uppercase">Profile</span>
          <span aria-hidden className="font-pixel text-base font-medium tracking-wide text-dim">
            P1
          </span>
        </div>
        <div className="flex flex-col gap-6 p-5 sm:flex-row sm:items-center sm:p-6">
          <div
            aria-hidden
            className="lcd flex size-24 shrink-0 items-center justify-center rounded-sm border-2 border-border font-pixel text-3xl text-text"
          >
            WA
          </div>
          <div className="min-w-0">
            <p className="font-pixel text-2xl text-text">{siteConfig.name}</p>
            <dl className="mt-3 grid gap-x-4 gap-y-1.5 sm:grid-cols-[7rem_1fr]">
              {profile.map(({ label, value }) => (
                <div key={label} className="contents">
                  <dt className="font-pixel text-base font-medium tracking-wide text-dim">{label}</dt>
                  <dd className="text-text">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Panel>

      <div className="mt-12 space-y-12">
        <section>
          <SectionHeading>Background</SectionHeading>
          <div className="mt-4 space-y-5 leading-7 text-text">
            <p>
              I&rsquo;m a Computer Science student at George Mason University pursuing both my
              B.S. and M.S. while building practical experience across software development, IT,
              and leadership.
            </p>
            <p>
              Alongside my studies, I work as an IT Administrator, where I support real-world
              systems, networking, access management, endpoints, security, and technical
              operations. I also work as an Associate Manager at TUMI, where I&rsquo;ve developed
              experience leading teams, solving operational problems, and working in a
              fast-paced professional environment.
            </p>
            <p>
              Through my coursework and projects, I&rsquo;ve built full-stack applications,
              worked with microservice architectures, developed compilers and language tooling,
              and explored areas including networking, backend development, software design, and
              distributed systems. I&rsquo;m especially drawn to understanding how software works
              as a complete system, from the application layer down to the infrastructure
              supporting it.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading>What I&rsquo;m focused on now</SectionHeading>
          <div className="mt-4 space-y-5 leading-7 text-text">
            <p>
              Right now, I&rsquo;m focused on completing my Computer Science degrees while
              continuing to build practical engineering experience through software development
              and my professional work.
            </p>
            <p>
              I&rsquo;m strengthening my skills in full-stack and backend development, data
              structures and algorithms, networking, distributed systems, testing, and software
              design. My goal is to keep moving beyond simply writing working code toward
              understanding how reliable, maintainable software is designed, tested, deployed,
              and supported in real environments.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading>What I&rsquo;m looking for</SectionHeading>
          <div className="mt-4 space-y-5 leading-7 text-text">
            <p>
              I&rsquo;m looking for an entry-level software engineering role where I can
              contribute to real products, learn from experienced engineers, and grow into
              greater technical ownership.
            </p>
            <p>
              I&rsquo;m particularly interested in backend, full-stack, and systems-oriented
              engineering, but I&rsquo;m more interested in strong engineering problems than any
              one framework or technology. I&rsquo;m drawn to teams that value solid
              fundamentals, thoughtful design, collaboration, code quality, and continuous
              learning.
            </p>
            <p>
              I want to join an environment where I can apply my computer science foundation,
              hands-on technical experience, and professional leadership experience while
              continuing to develop into a well-rounded software engineer.
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
}
