import type { ComponentProps } from "react";

/** A GBA-style dialog box. See the `panel` utility in globals.css. */
export function Panel({ className = "", ...props }: ComponentProps<"div">) {
  return <div className={`panel ${className}`} {...props} />;
}
