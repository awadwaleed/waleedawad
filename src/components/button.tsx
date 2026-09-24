import Link from "next/link";
import type { ReactNode } from "react";
import { ExternalLink } from "@/components/external-link";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-md border-2 px-4 py-2 font-pixel text-base font-semibold tracking-wide transition active:translate-x-px active:translate-y-px active:shadow-none";

const VARIANT = {
  primary:
    "border-accent bg-accent text-accent-ink shadow-[3px_3px_0_0_var(--color-shadow)] hover:brightness-110",
  secondary:
    "border-border bg-surface text-text shadow-[3px_3px_0_0_var(--color-shadow)] hover:border-accent hover:text-accent",
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANT;
  className?: string;
  /** Renders a plain <a download> (for files in /public). */
  download?: boolean;
};

/**
 * A link styled as a button. Internal paths use next/link, http(s) URLs open in a new tab,
 * and `mailto:` / downloads use a plain anchor.
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  download,
}: ButtonLinkProps) {
  const classes = `${BASE} ${VARIANT[variant]} ${className}`;

  if (href.startsWith("http")) {
    return (
      <ExternalLink href={href} className={classes}>
        {children}
      </ExternalLink>
    );
  }
  if (download || href.startsWith("mailto:")) {
    return (
      <a href={href} download={download} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
