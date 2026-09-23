import type { ReactNode } from "react";

const WIDTH = {
  prose: "max-w-3xl",
  wide: "max-w-5xl",
} as const;

export function Container({
  children,
  className = "",
  size = "prose",
}: {
  children: ReactNode;
  className?: string;
  size?: keyof typeof WIDTH;
}) {
  return <div className={`mx-auto w-full px-5 sm:px-8 ${WIDTH[size]} ${className}`}>{children}</div>;
}
