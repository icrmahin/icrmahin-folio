import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

export default function CTA() {
  return (
    <section
      aria-labelledby="contact-title"
      className="mx-auto max-w-xl px-6 py-8 pb-16"
      id="contract"
    >
      <div className="flex flex-col gap-5 border-y border-border py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs text-accent">Have a project in mind?</p>
          <h2 className="mt-1 text-xl font-medium text-text" id="contact-title">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-2 text-xs text-text-subtle">
            Reach me through my GitHub profile.
          </p>
        </div>
        <a
          className="inline-flex min-h-10 items-center justify-center gap-2 self-start rounded-md bg-accent px-4 text-xs font-medium text-accent-foreground transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus sm:self-auto"
          href="https://github.com/icrmahin"
          rel="noreferrer"
          target="_blank"
        >
          Connect on GitHub
          <ArrowUpRightIcon aria-hidden="true" size={14} />
        </a>
      </div>
    </section>
  );
}
