import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";

const mdxComponents = {
  a: ({ href, ...props }: ComponentProps<"a">) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
        className="text-accent underline underline-offset-2 transition hover:opacity-80"
      />
    );
  },
  h2: (props: ComponentProps<"h2">) => (
    <h2 {...props} className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-text" />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 {...props} className="mt-8 mb-3 text-xl font-semibold tracking-tight text-text" />
  ),
  p: (props: ComponentProps<"p">) => <p {...props} className="mb-5 leading-7 text-text" />,
  ul: (props: ComponentProps<"ul">) => (
    <ul {...props} className="mb-5 list-disc space-y-2 pl-6 text-text" />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol {...props} className="mb-5 list-decimal space-y-2 pl-6 text-text" />
  ),
  code: (props: ComponentProps<"code">) => (
    <code {...props} className="rounded bg-surface px-1.5 py-0.5 font-mono text-[0.85em] text-text" />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      {...props}
      className="mb-6 overflow-x-auto rounded-lg border border-border bg-bg p-4 text-sm text-text [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit"
    />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote {...props} className="mb-5 border-l-2 border-accent pl-4 text-dim italic" />
  ),
};

export function Mdx({ source }: { source: string }) {
  return <MDXRemote source={source} components={mdxComponents} />;
}
