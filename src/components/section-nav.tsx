"use client";

import { useEffect, useRef, useState } from "react";
import { PixelIcon, type PixelIconName } from "@/components/pixel-icon";
import { pocketStyle, type Pocket } from "@/lib/pocket";

export type SectionNavItem = { id: string; label: string; pocket: Pocket; icon: PixelIconName };

/** Sticky jump menu for a long page. Highlights the section currently being read. */
export function SectionNav({ items, className = "" }: { items: SectionNavItem[]; className?: string }) {
  const [active, setActive] = useState(items[0]?.id);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const last = items[items.length - 1]?.id;
    // The last section may be too short to ever reach the band, so the page bottom selects it.
    const atBottom = () =>
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    const observer = new IntersectionObserver(
      (entries) => {
        if (atBottom()) return setActive(last);
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      // A section counts as "current" while it crosses a band just below the sticky menu.
      { rootMargin: "-20% 0px -70% 0px" },
    );
    for (const { id } of items) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    const onScroll = () => {
      if (atBottom()) setActive(last);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [items]);

  // On narrow screens the menu scrolls sideways; keep the current chip in view. Scrolls only
  // the menu itself (not the page), so it never fights the reader's vertical scrolling.
  useEffect(() => {
    const list = listRef.current;
    const chip = list?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!list || !chip || list.scrollWidth <= list.clientWidth) return;
    const left = chip.offsetLeft - (list.clientWidth - chip.offsetWidth) / 2;
    list.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label="On this page"
      className={`sticky top-0 z-10 -mx-5 border-b-2 border-border bg-bg/90 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8 ${className}`}
    >
      <ul ref={listRef} className="relative flex gap-2 overflow-x-auto [scrollbar-width:none]">
        {items.map(({ id, label, pocket, icon }) => {
          const current = id === active;
          return (
            <li key={id} style={pocketStyle(pocket)}>
              <a
                href={`#${id}`}
                aria-current={current ? "true" : undefined}
                onClick={() => setActive(id)}
                className={`flex shrink-0 items-center gap-2 rounded-md border-2 px-3 py-1 font-pixel text-base font-medium tracking-wide transition ${
                  current
                    ? "border-(--pocket) bg-(--pocket) text-surface"
                    : "border-border text-dim hover:border-(--pocket) hover:text-(--pocket)"
                }`}
              >
                <PixelIcon name={icon} className="max-sm:hidden" />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
