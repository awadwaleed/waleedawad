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
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
          Resume
        </h1>
        <a
          href="/resume.pdf"
          download
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
        >
          Download PDF
        </a>
      </div>

      <section className="mt-10">
        <h2 className="text-sm font-medium tracking-widest text-slate-500 uppercase dark:text-slate-400">
          Experience
        </h2>
        <div className="mt-4 space-y-8">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {job.role} &middot; {job.company}
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">{job.period}</span>
              </div>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-700 dark:text-slate-300">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-medium tracking-widest text-slate-500 uppercase dark:text-slate-400">
          Education
        </h2>
        <div className="mt-4 space-y-3">
          {education.map((entry) => (
            <div key={entry.school} className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                {entry.school} &middot; {entry.credential}
              </h3>
              <span className="text-sm text-slate-500 dark:text-slate-400">{entry.period}</span>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
