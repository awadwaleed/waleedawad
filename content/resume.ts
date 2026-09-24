// Resume content rendered at /resume. Edit this file; the page picks it up automatically.
// This page is the public resume (there is no downloadable PDF), so keep it current.
// Intentionally omitted from the web version: phone, email (shown site-wide), citizenship,
// GPA, and projects (those live on /projects).

export type ResumeEducation = {
  school: string;
  degrees: { credential: string; period: string }[];
};

export type ResumeJob = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export type ResumeSkillGroup = {
  group: string;
  items: string[];
  /** "tags" for concrete tools; "text" for broad concepts, which read better as a sentence. */
  display?: "tags" | "text";
};

export type ResumeTalk = {
  title: string;
  venue: string;
  date: string;
  summary: string;
};

export const education: ResumeEducation[] = [
  {
    school: "George Mason University",
    degrees: [
      { credential: "M.S. Computer Science", period: "Aug 2025 – Dec 2027" },
      { credential: "B.S. Computer Science", period: "May 2023 – Dec 2026" },
    ],
  },
];

export const skills: ResumeSkillGroup[] = [
  {
    group: "Languages",
    items: ["Java", "C", "Python", "SQL", "TypeScript", "JavaScript", "Go", "Haskell"],
  },
  {
    group: "Technologies",
    items: [
      "React",
      "Vue.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "AWS",
      "Docker",
      "Kubernetes",
      "Linux",
    ],
  },
  {
    group: "AI development",
    items: [
      "LLMs",
      "Generative AI",
      "AI agents",
      "RAG",
      "Embeddings",
      "Vector databases",
      "Tool calling",
      "Model serving",
    ],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub Actions", "CI/CD", "Unit testing", "Debugging"],
  },
  {
    group: "Concepts",
    display: "text",
    items: [
      "Data structures and algorithms",
      "Object-oriented programming",
      "Software design",
      "Backend development",
      "Distributed systems",
      "Operating systems",
      "Concurrent programming",
      "Networking",
    ],
  },
];

export const experience: ResumeJob[] = [
  {
    company: "TUMI",
    role: "Associate Manager",
    period: "Jun 2024 – Present",
    bullets: [
      "Managed store operations and led team performance to consistently exceed sales and service goals",
      "Increased store conversion from 10% to 13% (a 30% lift)",
      "Consistently met units-per-transaction and average-transaction targets; captured client info for 80% of shoppers",
    ],
  },
  {
    company: "Kate Spade New York",
    role: "Supervisor",
    period: "Jan 2022 – Jan 2023",
    bullets: [
      "Led a client outreach initiative using data-driven insights to improve retention by 10%",
      "Motivated and coached a team of associates, increasing sales performance by 20%",
      "Boosted average transaction value 12% by analyzing sales and customer feedback to refine strategy",
    ],
  },
];

export const talks: ResumeTalk[] = [
  {
    title: "Stuck, Reset, Comeback",
    venue: "Invited speaker, Department of Computer Science, Northern Virginia Community College",
    date: "Nov 2025",
    summary:
      "A talk to computer science students on resilience, overcoming setbacks, and rebuilding momentum.",
  },
];
