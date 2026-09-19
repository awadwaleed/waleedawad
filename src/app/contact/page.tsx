import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
        Contact
      </h1>
      <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400">
        The fastest way to reach me is email. I&rsquo;m also on LinkedIn and GitHub.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href={`mailto:${siteConfig.email}`}
          className="rounded-full bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
        >
          Email {siteConfig.email}
        </a>
        <ExternalLink
          href={siteConfig.linkedin}
          className="rounded-full border border-slate-300 px-5 py-2.5 text-center text-sm font-medium text-slate-700 transition hover:border-teal-600 hover:text-teal-800 dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-500 dark:hover:text-teal-400"
        >
          LinkedIn
        </ExternalLink>
        <ExternalLink
          href={siteConfig.github}
          className="rounded-full border border-slate-300 px-5 py-2.5 text-center text-sm font-medium text-slate-700 transition hover:border-teal-600 hover:text-teal-800 dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-500 dark:hover:text-teal-400"
        >
          GitHub
        </ExternalLink>
      </div>
    </Container>
  );
}
