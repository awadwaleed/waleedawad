import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getAllPosts } from "@/lib/blog";
import { Container } from "@/components/container";
import { NavLink } from "@/components/nav-link";

export function SiteHeader() {
  // Don't advertise an empty blog: the link appears once a post is published.
  const hasPosts = getAllPosts().length > 0;
  const links = siteConfig.navLinks.filter((link) => link.href !== "/blog" || hasPosts);

  return (
    <header className="border-b-2 border-border bg-surface">
      <Container
        size="wide"
        className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <Link href="/" className="flex items-center gap-2 font-pixel text-lg text-text">
          <span
            aria-hidden
            className="size-2 rounded-full bg-live shadow-[0_0_6px_var(--color-live)]"
          />
          {siteConfig.name}
        </Link>
        <nav aria-label="Main" className="-ml-[1em] overflow-x-auto pl-[1em]">
          <ul className="flex items-center gap-x-5 sm:gap-x-6">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
