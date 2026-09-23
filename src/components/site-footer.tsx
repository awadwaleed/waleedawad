import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t-2 border-border bg-surface">
      <Container
        size="wide"
        className="flex flex-col gap-3 py-6 text-sm text-dim sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="font-pixel">
          &copy; {year} {siteConfig.name}
        </p>
        <ul className="flex gap-5">
          <li>
            <ExternalLink href={siteConfig.github} className="transition hover:text-accent">
              GitHub
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={siteConfig.linkedin} className="transition hover:text-accent">
              LinkedIn
            </ExternalLink>
          </li>
          <li>
            <a href={`mailto:${siteConfig.email}`} className="transition hover:text-accent">
              Email
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
