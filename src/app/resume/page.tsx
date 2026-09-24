import type { Metadata } from "next";
import { education, experience, skills } from "@content/resume";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { TagList } from "@/components/tag";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Resume",
  description: `${siteConfig.name}'s resume.`,
};

export default function ResumePage() {
  return (
    <Container className="py-12 sm:py-16">
      <PageHeader title="Resume">
        <ButtonLink href="/resume.pdf" download>
          Download PDF
        </ButtonLink>
      </PageHeader>

      <section className="mt-12">
        <SectionHeading>Experience</SectionHeading>
        <ol className="mt-5 space-y-8 border-l-2 border-border pl-6">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span
                aria-hidden
                className="absolute top-2 -left-[31px] size-2.5 rounded-sm border-2 border-border bg-surface"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-semibold text-text">
                  {job.role} <span className="text-dim">&middot;</span> {job.company}
                </h3>
                <span className="font-pixel text-base font-medium tracking-wide text-dim">{job.period}</span>
              </div>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 leading-7 text-text marker:text-dim">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <SectionHeading>Education</SectionHeading>
        <ul className="mt-5 space-y-3">
          {education.map((entry) => (
            <li
              key={`${entry.school}-${entry.credential}`}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
            >
              <h3 className="font-semibold text-text">
                {entry.school} <span className="text-dim">&middot;</span> {entry.credential}
              </h3>
              <span className="font-pixel text-base font-medium tracking-wide text-dim">{entry.period}</span>
            </li>
          ))}
        </ul>
      </section>

      {skills.length > 0 && (
        <section className="mt-12">
          <SectionHeading>Skills</SectionHeading>
          <dl className="mt-5 space-y-3">
            {skills.map(({ group, items }) => (
              <div key={group} className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:items-baseline">
                <dt className="text-sm text-dim">{group}</dt>
                <dd>
                  <TagList items={items} />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}
    </Container>
  );
}
