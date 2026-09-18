import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/container";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <Container className="flex flex-col gap-3 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:text-slate-400">
        <p>
          &copy; {year} {siteConfig.name}
        </p>
        <div className="flex gap-4">
          <a href={siteConfig.github} className="hover:text-teal-700 dark:hover:text-teal-400">
            GitHub
          </a>
          <a href={siteConfig.linkedin} className="hover:text-teal-700 dark:hover:text-teal-400">
            LinkedIn
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-teal-700 dark:hover:text-teal-400">
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
