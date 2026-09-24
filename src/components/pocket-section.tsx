import type { ReactNode } from "react";
import { PixelIcon, type PixelIconName } from "@/components/pixel-icon";
import { pocketStyle, type Pocket } from "@/lib/pocket";

/**
 * A page section with its own identity color: an icon + label heading and a colored rail
 * down the left edge. Children can use `--pocket` (e.g. `text-(--pocket)`) for accents.
 */
export function PocketSection({
  id,
  title,
  pocket,
  icon,
  children,
}: {
  id: string;
  title: string;
  pocket: Pocket;
  icon: PixelIconName;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      style={pocketStyle(pocket)}
      className="reveal mt-12 scroll-mt-24"
    >
      <h2
        id={`${id}-heading`}
        className="inline-flex items-center gap-2 rounded-md bg-(--pocket)/12 px-2.5 py-1 font-pixel text-base font-medium tracking-wider text-(--pocket) uppercase"
      >
        <PixelIcon name={icon} />
        {title}
      </h2>
      <div className="mt-5 border-l-2 border-(--pocket)/40 pl-6">{children}</div>
    </section>
  );
}
