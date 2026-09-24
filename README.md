# waleedawad.com

Personal software engineering portfolio. Next.js App Router, React, TypeScript, Tailwind CSS v4, MDX content.
The visual design is based on the Game Boy Advance SP.

## Local development

Requires Node.js 24 LTS.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Checks

```sh
npm run lint
npm run typecheck   # generates route types first
npm run build
```

## Adding content

Everything you edit day to day lives in `content/`. No other wiring is needed.

| What | Where | Notes |
| --- | --- | --- |
| Project | `content/projects/<slug>.mdx` | Frontmatter: `title`, `summary`, `status` (`live` \| `in-progress` \| `shipped`), `stack`, `date` (`YYYY-MM-DD`), optional `role`, `featured`, `links.github` / `links.demo` / `links.writeup`. `featured: true` puts it on the homepage (max 2). |
| Blog post | `content/blog/<slug>.mdx` | Frontmatter: `title`, `summary`, `date`, optional `tags`, `draft`. Drafts are never built or listed. The Blog nav link appears once the first post is published. |
| Resume | `content/resume.ts` | Education, skills, experience, and talks. This page is the public resume; there is no PDF download. |
| Bio | `src/app/about/page.tsx` | The profile card at the top summarizes the prose below it. |
| Name, links, nav | `src/lib/site-config.ts` | |

Frontmatter is validated at build time (`src/lib/content.ts`). A missing or mistyped field fails the build with the file name.

## Design system

Tokens live in `src/app/globals.css`. Dark mode is the Onyx SP shell (default), and light mode is the Platinum SP shell, chosen from the OS setting. Each color family has exactly one meaning:

- **`bg` / `surface` / `sunken` / `border` / `text` / `dim`**: neutral structure (the shell and screen).
- **`accent`** (GBA boot-logo indigo): interactive only. Used for links, the ▶ menu cursor, primary buttons, and focus rings.
- **`live` / `progress` / `shipped`**: project status only, styled like the SP's power LED (green = on, amber = charging, neutral = done).
- **`pocket-sky` / `pocket-teal` / `pocket-rose` / `pocket-fuchsia`**: section identity only (wayfinding on long pages like `/resume`), like the color-coded bag pockets in GBA-era RPGs. Always paired with a pixel icon, never used for links or status. Use `PocketSection` and `SectionNav`, which set `--pocket` for their children.

Type: `font-pixel` (Pixelify Sans) for headings, labels, nav, buttons, and badges. Geist Sans for body text, Geist Mono for code and tags. For readability, pixel text is never smaller than 16px (`text-base font-medium tracking-wide`); the one exception is status badges at 14px (`text-sm font-semibold tracking-wider`).

Shared building blocks are in `src/components/`: `Panel` (the GBA dialog box, also available as the `panel` utility), `PageHeader`, `SectionHeading`, `ButtonLink`, `TagList`, `StatusBadge`, `PixelIcon`, `PocketSection`, `SectionNav`, and `Container` (`size="prose" | "wide"`). Use these before writing new class strings, so a design change stays a one-file edit.
