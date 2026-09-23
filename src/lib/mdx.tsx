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
  h2: ({ children, ...props }: ComponentProps<"h2">) => (
    <h2 {...props} className="mt-12 mb-4 flex items-baseline gap-2 font-pixel text-2xl text-text first:mt-0">
      <span aria-hidden className="text-[0.6em] text-dim">
        ■
      </span>
      {children}
    </h2>
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 {...props} className="mt-8 mb-3 font-pixel text-xl text-text" />
  ),
  h4: (props: ComponentProps<"h4">) => (
    <h4 {...props} className="mt-6 mb-2 font-semibold text-text" />
  ),
  p: (props: ComponentProps<"p">) => <p {...props} className="mb-5 leading-7 text-text" />,
  strong: (props: ComponentProps<"strong">) => (
    <strong {...props} className="font-semibold text-text" />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul {...props} className="mb-5 list-disc space-y-2 pl-6 text-text marker:text-dim" />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol {...props} className="mb-5 list-decimal space-y-2 pl-6 text-text marker:text-dim" />
  ),
  hr: (props: ComponentProps<"hr">) => (
    <hr {...props} className="my-10 border-0 border-t-2 border-dashed border-border" />
  ),
  // Plain <img> on purpose: MDX images have unknown dimensions, which next/image requires.
  img: ({ alt = "", ...props }: ComponentProps<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} loading="lazy" {...props} className="panel my-6 h-auto max-w-full p-1" />
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="mb-6 overflow-x-auto">
      <table {...props} className="w-full border-collapse text-left text-sm" />
    </div>
  ),
  th: (props: ComponentProps<"th">) => (
    <th {...props} className="border-b-2 border-border px-3 py-2 font-pixel font-normal text-dim" />
  ),
  td: (props: ComponentProps<"td">) => (
    <td {...props} className="border-b border-border px-3 py-2 text-text" />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      {...props}
      className="rounded border border-border bg-sunken px-1.5 py-0.5 font-mono text-[0.85em] text-text"
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      {...props}
      className="mb-6 overflow-x-auto rounded-md border-2 border-border bg-sunken p-4 text-sm text-text [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit"
    />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote {...props} className="mb-5 border-l-4 border-border pl-4 text-dim italic" />
  ),
};

export function Mdx({ source }: { source: string }) {
  return <MDXRemote source={source} components={mdxComponents} />;
}
