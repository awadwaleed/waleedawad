import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";

const mdxComponents = {
  a: (props: ComponentProps<"a">) => (
    <a
      {...props}
      className="text-teal-700 underline underline-offset-2 hover:text-teal-900 dark:text-teal-400 dark:hover:text-teal-300"
    />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2 {...props} className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100" />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 {...props} className="mt-8 mb-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100" />
  ),
  p: (props: ComponentProps<"p">) => (
    <p {...props} className="mb-5 leading-7 text-slate-700 dark:text-slate-300" />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul {...props} className="mb-5 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300" />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol {...props} className="mb-5 list-decimal space-y-2 pl-6 text-slate-700 dark:text-slate-300" />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      {...props}
      className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.85em] text-slate-800 dark:bg-slate-800 dark:text-slate-200"
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      {...props}
      className="mb-6 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit"
    />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      {...props}
      className="mb-5 border-l-2 border-teal-600 pl-4 italic text-slate-600 dark:text-slate-400"
    />
  ),
};

export function Mdx({ source }: { source: string }) {
  return <MDXRemote source={source} components={mdxComponents} />;
}
