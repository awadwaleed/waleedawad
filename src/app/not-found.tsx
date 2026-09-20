import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-24">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text">
        Page not found
      </h1>
      <p className="mt-3 text-dim">
        The page you&rsquo;re looking for doesn&rsquo;t exist or moved.
      </p>
      <Link href="/" className="mt-6 text-sm font-medium text-accent transition hover:opacity-80">
        &larr; Back home
      </Link>
    </Container>
  );
}
