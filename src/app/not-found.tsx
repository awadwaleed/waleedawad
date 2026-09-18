import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-24">
      <p className="font-mono text-sm text-teal-700 dark:text-teal-400">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        Page not found
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        The page you&rsquo;re looking for doesn&rsquo;t exist or moved.
      </p>
      <Link href="/" className="mt-6 text-sm font-medium text-teal-700 hover:text-teal-900 dark:text-teal-400">
        &larr; Back home
      </Link>
    </Container>
  );
}
