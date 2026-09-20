import type { Metadata } from "next";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Resume",
  description: `${siteConfig.name}'s resume.`,
};

const experience: {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}[] = [
  {
    company: "PLACEHOLDER — Company Name",
    role: "Role title",
    period: "Month Year — Present",
    bullets: [
      "Replace this section (src/app/resume/page.tsx) with your real experience.",
      "Lead with impact, use specifics over generalities.",
    ],
  },
];

const education: { school: string; credential: string; period: string }[] = [
  { school: "PLACEHOLDER — School Name", credential: "Degree, Major", period: "Year — Year" },
];

export default function ResumePage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h1 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Resume
        </h1>
        <a
          href="/resume.pdf"
          download
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition hover:opacity-90"
        >
          Download PDF
        </a>
      </div>

      <section className="mt-10">
        <h2 className="text-sm font-medium tracking-widest text-dim uppercase">
          Experience
        </h2>
        <div className="mt-4 space-y-8">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-text">
                  {job.role} &middot; {job.company}
                </h3>
                <span className="text-sm text-dim">{job.period}</span>
              </div>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-text">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-medium tracking-widest text-dim uppercase">
          Education
        </h2>
        <div className="mt-4 space-y-3">
          {education.map((entry) => (
            <div key={entry.school} className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-text">
                {entry.school} &middot; {entry.credential}
              </h3>
              <span className="text-sm text-dim">{entry.period}</span>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
