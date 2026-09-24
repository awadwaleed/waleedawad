import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { Panel } from "@/components/panel";

export default function NotFound() {
  return (
    <Container className="py-20 sm:py-28">
      <Panel className="px-6 py-10 text-center sm:px-10">
        <p className="font-pixel text-base font-medium tracking-wide text-dim">Error 404</p>
        <h1 className="mt-3 font-pixel text-4xl text-text sm:text-5xl">GAME OVER</h1>
        <p className="mx-auto mt-4 max-w-sm text-dim">
          This page doesn&rsquo;t exist or has moved.
        </p>
        <p className="mt-8 font-pixel text-base font-medium tracking-wide text-text">Continue?</p>
        <div className="mt-3 flex justify-center gap-3">
          <ButtonLink href="/">Yes — go home</ButtonLink>
          <ButtonLink href="/projects" variant="secondary">
            See projects
          </ButtonLink>
        </div>
      </Panel>
    </Container>
  );
}
