import type { ReactNode } from "react";

export function PageHeader({
  title,
  eyebrow,
  description,
  children,
}: {
  title: ReactNode;
  eyebrow?: ReactNode;
  description?: ReactNode;
  /** Actions or metadata shown beside/below the title (buttons, badges). */
  children?: ReactNode;
}) {
  return (
    <header>
      {eyebrow && <div className="mb-3 font-pixel text-sm text-dim">{eyebrow}</div>}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-pixel text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          {title}
        </h1>
        {children}
      </div>
      {description && <p className="mt-4 max-w-xl leading-7 text-dim">{description}</p>}
    </header>
  );
}
