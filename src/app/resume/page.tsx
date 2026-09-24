import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { education, experience, skills, talks } from "@content/resume";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { PocketSection } from "@/components/pocket-section";
import { SectionNav, type SectionNavItem } from "@/components/section-nav";
import { TagList } from "@/components/tag";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Resume",
  description: `${siteConfig.name}'s education, skills, and experience.`,
};

// Mono rather than pixel: Pixelify's 5 reads like an S, and dates must be unambiguous.
const DATE = "font-mono text-sm text-dim tabular-nums";

// One entry per section, in page order. The same data drives the jump menu and the headings.
const SECTIONS = {
  education: { id: "education", label: "Education", pocket: "sky", icon: "cap" },
  skills: { id: "skills", label: "Skills", pocket: "teal", icon: "spark" },
  experience: { id: "experience", label: "Experience", pocket: "rose", icon: "briefcase" },
  speaking: { id: "speaking", label: "Speaking", pocket: "fuchsia", icon: "mic" },
} satisfies Record<string, SectionNavItem>;

// Hover tint on read-only rows: a reading aid only, so no cursor change.
const ROW = "-mx-3 rounded-md px-3 py-2 transition-colors hover:bg-(--pocket)/6";

function Section({ section, children }: { section: SectionNavItem; children: ReactNode }) {
  return (
    <PocketSection id={section.id} title={section.label} pocket={section.pocket} icon={section.icon}>
      {children}
    </PocketSection>
  );
}

export default function ResumePage() {
  const navItems = [
    SECTIONS.education,
    SECTIONS.skills,
    SECTIONS.experience,
    ...(talks.length > 0 ? [SECTIONS.speaking] : []),
  ];

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

      <SectionNav items={navItems} className="mt-8" />

      <Section section={SECTIONS.education}>
        <ul className="space-y-6">
          {education.map((entry) => (
            <li key={entry.school}>
              <h3 className="font-semibold text-text">{entry.school}</h3>
              <ul className="mt-1">
                {entry.degrees.map((degree) => (
                  <li
                    key={degree.credential}
                    className={`flex flex-wrap items-baseline justify-between gap-x-4 ${ROW} py-1`}
                  >
                    <span className="text-text">{degree.credential}</span>
                    <span className={DATE}>{degree.period}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section section={SECTIONS.skills}>
        <dl className="space-y-1">
          {skills.map(({ group, items, display = "tags" }) => (
            <div
              key={group}
              className={`grid gap-2 sm:grid-cols-[9rem_1fr] sm:items-baseline ${ROW}`}
            >
              <dt className="text-sm font-semibold text-(--pocket)">{group}</dt>
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
      </Section>

      <Section section={SECTIONS.experience}>
        <ol className="space-y-6">
          {experience.map((job) => {
            const current = job.period.endsWith("Present");
            return (
              <li key={`${job.company}-${job.period}`} className={`relative ${ROW}`}>
                {/* Marker on the section rail; filled = current role. */}
                <span
                  aria-hidden
                  className={`absolute top-[15px] -left-[18px] size-2.5 rounded-sm border-2 border-(--pocket) ${
                    current ? "bg-(--pocket)" : "bg-bg"
                  }`}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-semibold text-text">
                    {job.role} <span className="font-normal text-dim">· {job.company}</span>
                  </h3>
                  <span className={DATE}>{job.period}</span>
                </div>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 leading-7 text-text marker:text-(--pocket)">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </Section>

      {talks.length > 0 && (
        <Section section={SECTIONS.speaking}>
          <ul className="space-y-4">
            {talks.map((talk) => (
              <li key={talk.title} className={ROW}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-semibold text-text">&ldquo;{talk.title}&rdquo;</h3>
                  <span className={DATE}>{talk.date}</span>
                </div>
                <p className="mt-0.5 text-sm text-dim">{talk.venue}</p>
                <p className="mt-2 leading-7 text-text">{talk.summary}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </Container>
  );
}
