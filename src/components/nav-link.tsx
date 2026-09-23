"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Menu item with the GBA ▶ cursor on the current page (and on hover/focus). */
export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`group flex shrink-0 items-center gap-1 py-1 font-pixel text-sm transition ${
        active ? "text-text" : "text-dim hover:text-text"
      }`}
    >
      <span
        aria-hidden
        className={`text-[0.7em] text-accent transition ${
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
        }`}
      >
        ▶
      </span>
      {label}
    </Link>
  );
}
