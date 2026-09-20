import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-3 py-8 text-sm text-dim sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {year} {siteConfig.name}
        </p>
        <div className="flex gap-4">
          <ExternalLink href={siteConfig.github} className="transition hover:text-accent">
            GitHub
          </ExternalLink>
          <ExternalLink href={siteConfig.linkedin} className="transition hover:text-accent">
            LinkedIn
          </ExternalLink>
          <a href={`mailto:${siteConfig.email}`} className="transition hover:text-accent">
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
