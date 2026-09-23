import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Panel } from "@/components/panel";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <Container className="py-12 sm:py-16">
      <PageHeader
        title="Contact"
        description="The fastest way to reach me is email. I’m also on LinkedIn and GitHub."
      />

      <Panel className="mt-10 p-6 sm:p-8">
        <p className="font-pixel text-sm text-dim">Email</p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-1 block font-mono text-lg break-all text-accent transition hover:opacity-80 sm:text-2xl"
        >
          {siteConfig.email}
        </a>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`mailto:${siteConfig.email}`}>Send an email</ButtonLink>
          <ButtonLink href={siteConfig.linkedin} variant="secondary">
            LinkedIn <span aria-hidden>↗</span>
          </ButtonLink>
          <ButtonLink href={siteConfig.github} variant="secondary">
            GitHub <span aria-hidden>↗</span>
          </ButtonLink>
        </div>
      </Panel>
    </Container>
  );
}
