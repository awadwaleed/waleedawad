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
      <h1 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        Contact
      </h1>
      <p className="mt-4 max-w-xl text-dim">
        The fastest way to reach me is email. I&rsquo;m also on LinkedIn and GitHub.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href={`mailto:${siteConfig.email}`}
          className="rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-medium text-accent-ink transition hover:opacity-90"
        >
          Email {siteConfig.email}
        </a>
        <ExternalLink
          href={siteConfig.linkedin}
          className="rounded-lg border border-border px-5 py-2.5 text-center text-sm font-medium text-text transition hover:border-accent hover:text-accent"
        >
          LinkedIn
        </ExternalLink>
        <ExternalLink
          href={siteConfig.github}
          className="rounded-lg border border-border px-5 py-2.5 text-center text-sm font-medium text-text transition hover:border-accent hover:text-accent"
        >
          GitHub
        </ExternalLink>
      </div>
    </Container>
  );
}
