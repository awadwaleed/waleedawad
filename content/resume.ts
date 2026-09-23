// Resume content rendered at /resume. Edit this file; the page picks it up automatically.
// Keep it in sync with public/resume.pdf (the downloadable copy).

export type ResumeJob = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export type ResumeEducation = {
  school: string;
  credential: string;
  period: string;
};

export const experience: ResumeJob[] = [
  {
    company: "PLACEHOLDER — Company Name",
    role: "Role title",
    period: "Month Year — Present",
    bullets: [
      "Replace this entry in content/resume.ts with your real experience.",
      "Lead with impact, use specifics over generalities.",
    ],
  },
];

export const education: ResumeEducation[] = [
  { school: "PLACEHOLDER — School Name", credential: "Degree, Major", period: "Year — Year" },
];

export const skills: { group: string; items: string[] }[] = [
  // e.g. { group: "Languages", items: ["TypeScript", "Python", "Java"] },
];
