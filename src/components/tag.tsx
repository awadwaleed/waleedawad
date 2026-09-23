import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded border border-border bg-sunken px-2 py-0.5 font-mono text-xs text-dim">
      {children}
    </li>
  );
}

export function TagList({ items, className = "" }: { items: string[]; className?: string }) {
  if (items.length === 0) return null;
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  );
}
