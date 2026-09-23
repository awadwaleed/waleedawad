import type { ReactNode } from "react";

export function SectionHeading({
  children,
  as: Tag = "h2",
  className = "",
}: {
  children: ReactNode;
  as?: "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag className={`font-pixel text-sm tracking-wider text-dim uppercase ${className}`}>
      {children}
    </Tag>
  );
}
