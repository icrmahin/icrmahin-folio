import Link from "next/link";
import { ArrowLeftIcon, ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import type { Project } from "@/lib/projects";
import ProjectArtwork from "./ProjectArtwork";

export default function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="mx-auto max-w-xl px-6 pb-16">
      <header className="mt-10">
        <div className="flex justify-between">
          <p className="text-xs text-accent">{project.category}</p>
          <Link
            className="inline-flex items-center gap-2 text-xs text-text-muted transition-colors hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            href="/#works"
          >
            <ArrowLeftIcon aria-hidden="true" size={14} />
            Back
          </Link>
        </div>
        <h1 className="mt-2 text-3xl font-medium text-text">{project.title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>
      </header>
      <div className="mt-8 overflow-hidden rounded-md border border-border">
        <ProjectArtwork visual={project.visual} />
      </div>
      <div className="mt-8 grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
        <section>
          <h2 className="text-xs font-medium uppercase text-text-subtle">
            Overview
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {project.overview}
          </p>
        </section>
        <section>
          <h2 className="text-xs font-medium uppercase text-text-subtle">
            Implementation
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {project.implementation}
          </p>
        </section>
      </div>
      <section className="mt-8 border-t border-border pt-6">
        <h2 className="text-xs font-medium uppercase text-text-subtle">
          Highlights
        </h2>
        <ul className="mt-3 space-y-2">
          {project.highlights.map((highlight) => (
            <li className="text-sm text-text-muted" key={highlight}>
              {highlight}
            </li>
          ))}
        </ul>
      </section>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
        <ul className="flex flex-wrap gap-2 text-xs text-text-subtle">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <a
          className="inline-flex items-center gap-2 text-xs font-medium text-text transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          href={project.repository}
          rel="noreferrer"
          target="_blank"
        >
          View source
          <ArrowUpRightIcon aria-hidden="true" size={14} />
        </a>
      </div>
    </article>
  );
}
