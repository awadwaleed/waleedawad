# waleedawad.com

Personal software engineering portfolio built incrementally with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Local development

Install Node.js 24 LTS (including npm), then run:

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

Verify `node --version` and `npm --version` in your own terminal first. The initial setup used the Codex bundled Node runtime and temporary npm tooling; those do not install Node or npm for your normal terminal.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```

Type checking generates Next.js route types first, so it also works before starting the development server.

## Main files

- `src/app/page.tsx`: homepage content.
- `src/app/layout.tsx`: shared page structure and search metadata.
- `src/app/globals.css`: Tailwind import and base styles.
- `public/`: future images and other static files.
- `AGENTS.md`: project engineering instructions.

The first milestone is a minimal local homepage. GitHub, Vercel, domain configuration, portfolio sections, and feature tests are future checkpoints.

