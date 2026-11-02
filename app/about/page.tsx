import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

export const metadata: Metadata = {
  title: "About",
};

const focusAreas = [
  {
    title: "Product engineering",
    description:
      "Building mobile and web products from interface through implementation.",
  },
  {
    title: "Interface systems",
    description:
      "Shaping clear, responsive experiences with reusable components and thoughtful interaction.",
  },
  {
    title: "Developer tools",
    description:
      "Creating tools and environments that make focused work more comfortable.",
  },
];

const tools = [
  "React",
  "Next.js",
  "TypeScript",
  "Expo",
  "React Native",
  "Supabase",
  "Lua",
];

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-xl px-6 pb-16 pt-8">
      <Link
        className="inline-flex items-center gap-2 text-xs text-text-muted transition-colors hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        href="/#about"
      >
        <ArrowLeftIcon aria-hidden="true" size={14} />
        Back to home
      </Link>
      <header className="mt-10 border-b border-border pb-6">
        <p className="text-xs text-accent">About</p>
        <h1 className="mt-2 text-3xl font-medium text-text">A. Mahin</h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-text-muted">
          I design, build, and ship digital products through thoughtful design
          and practical engineering. My work spans mobile commerce, product
          websites, and developer tools.
        </p>
      </header>
      <section aria-labelledby="focus-title" className="mt-8">
        <h2
          className="text-xs font-medium uppercase text-text-subtle"
          id="focus-title"
        >
          Areas of focus
        </h2>
        <div className="mt-3 divide-y divide-border">
          {focusAreas.map((area) => (
            <article className="py-4 first:pt-0" key={area.title}>
              <h3 className="text-sm font-medium text-text">{area.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-text-muted">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section
        aria-labelledby="tools-title"
        className="mt-8 border-t border-border pt-6"
      >
        <h2
          className="text-xs font-medium uppercase text-text-subtle"
          id="tools-title"
        >
          Tools I work with
        </h2>
        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-xs text-text-muted">
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </section>
      <a
        className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-text transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        href="https://github.com/icrmahin"
        rel="noreferrer"
        target="_blank"
      >
        Explore my GitHub
        <ArrowUpRightIcon aria-hidden="true" size={14} />
      </a>
    </article>
  );
}
