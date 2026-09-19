import type { Metadata } from "next";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
        Contact
      </h1>
      <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400">
        The fastest way to reach me is email — I&rsquo;ll get back to you as soon as I can.
      </p>

      <div className="mt-8">
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-block rounded-full bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
        >
          Email {siteConfig.email}
        </a>
      </div>
    </Container>
  );
}
