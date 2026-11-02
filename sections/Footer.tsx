import { ArrowUpIcon, ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-xl px-6 pb-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border py-4 text-xs text-text-subtle">
        <p>© 2026 A. Mahin</p>
        <nav aria-label="Footer navigation" className="flex items-center gap-4">
          <a
            className="inline-flex items-center gap-1.5 transition-colors hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            href="#about"
          >
            <ArrowUpIcon aria-hidden="true" size={14} />
            Back to top
          </a>
          <a
            className="inline-flex items-center gap-1.5 transition-colors hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            href="https://github.com/icrmahin"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
            <ArrowUpRightIcon aria-hidden="true" size={14} />
          </a>
        </nav>
      </div>
    </footer>
  );
}
