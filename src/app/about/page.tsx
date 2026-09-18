import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "About",
  description: "Background, current focus, and the kind of roles I'm looking for.",
};

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
        About
      </h1>

      <div className="mt-8 space-y-5 leading-7 text-slate-700 dark:text-slate-300">
        <p>
          <em>
            PLACEHOLDER — replace this page (
            <code className="font-mono text-sm">src/app/about/page.tsx</code>) with a real bio.
          </em>
        </p>
        <p>
          <strong>Background.</strong> A couple of sentences on where you&rsquo;ve worked, what
          you&rsquo;ve built, and what kind of engineer you are.
        </p>
        <p>
          <strong>What I&rsquo;m focused on now.</strong> What you&rsquo;re currently learning,
          building, or exploring — this is what makes the &ldquo;in progress&rdquo; projects make
          sense.
        </p>
        <p>
          <strong>What I&rsquo;m looking for.</strong> The roles, company stage, or type of work
          you want a recruiter to picture as they read this.
        </p>
      </div>
    </Container>
  );
}
