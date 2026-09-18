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

      <div className="mt-10 space-y-12">
        <section>
          <h2 className="text-sm font-medium tracking-widest text-slate-500 uppercase dark:text-slate-400">
            Background
          </h2>
          <div className="mt-4 space-y-5 leading-7 text-slate-700 dark:text-slate-300">
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
          <h2 className="text-sm font-medium tracking-widest text-slate-500 uppercase dark:text-slate-400">
            What I&rsquo;m focused on now
          </h2>
          <div className="mt-4 space-y-5 leading-7 text-slate-700 dark:text-slate-300">
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
          <h2 className="text-sm font-medium tracking-widest text-slate-500 uppercase dark:text-slate-400">
            What I&rsquo;m looking for
          </h2>
          <div className="mt-4 space-y-5 leading-7 text-slate-700 dark:text-slate-300">
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
