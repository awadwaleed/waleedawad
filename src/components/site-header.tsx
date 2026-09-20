import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/container";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <Container className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-semibold tracking-tight text-text">
          {siteConfig.name}
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-dim transition hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
