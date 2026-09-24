import type { CSSProperties } from "react";

/**
 * Section-identity colors ("pockets"). Setting `--pocket` on an element lets anything inside
 * use it via Tailwind's `text-(--pocket)`, `border-(--pocket)`, `bg-(--pocket)/10`, etc.
 */
export const POCKETS = ["sky", "teal", "rose", "fuchsia"] as const;
export type Pocket = (typeof POCKETS)[number];

export function pocketStyle(pocket: Pocket): CSSProperties {
  return { "--pocket": `var(--color-pocket-${pocket})` } as CSSProperties;
}
