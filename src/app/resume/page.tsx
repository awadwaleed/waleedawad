import type { Metadata } from "next";
import Link from "next/link";
import { education, experience, skills, talks } from "@content/resume";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { TagList } from "@/components/tag";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Resume",
  description: `${siteConfig.name}'s education, skills, and experience.`,
};

// Mono rather than pixel: Pixelify's 5 reads like an S, and dates must be unambiguous.
const DATE = "font-mono text-sm text-dim tabular-nums";

export default function ResumePage() {
  return (
    <Container className="py-12 sm:py-16">
      <PageHeader
        title="Resume"
        description={
          <>
            Education, skills, and experience. Projects have{" "}
            <Link href="/projects" className="text-accent underline underline-offset-2 hover:opacity-80">
              their own page
            </Link>
            .
          </>
        }
      />

      <section className="mt-12">
        <SectionHeading>Education</SectionHeading>
        <ul className="mt-5 space-y-6">
          {education.map((entry) => (
            <li key={entry.school}>
              <h3 className="font-semibold text-text">{entry.school}</h3>
              <ul className="mt-1.5 space-y-1">
                {entry.degrees.map((degree) => (
                  <li
                    key={degree.credential}
                    className="flex flex-wrap items-baseline justify-between gap-x-4"
                  >
                    <span className="text-text">{degree.credential}</span>
                    <span className={DATE}>{degree.period}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <SectionHeading>Skills</SectionHeading>
        <dl className="mt-5 space-y-4">
          {skills.map(({ group, items, display = "tags" }) => (
            <div key={group} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:items-baseline">
              <dt className="text-sm font-medium text-dim">{group}</dt>
              <dd>
                {display === "tags" ? (
                  <TagList items={items} />
                ) : (
                  <p className="text-sm leading-6 text-text">{items.join(" · ")}</p>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </section>

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
                  {job.role} <span className="font-normal text-dim">· {job.company}</span>
                </h3>
                <span className={DATE}>{job.period}</span>
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

      {talks.length > 0 && (
        <section className="mt-12">
          <SectionHeading>Speaking</SectionHeading>
          <ul className="mt-5 space-y-6">
            {talks.map((talk) => (
              <li key={talk.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-semibold text-text">&ldquo;{talk.title}&rdquo;</h3>
                  <span className={DATE}>{talk.date}</span>
                </div>
                <p className="mt-0.5 text-sm text-dim">{talk.venue}</p>
                <p className="mt-2 leading-7 text-text">{talk.summary}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
  );
}
