import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import type { Project } from "@/lib/projects";
import ProjectArtwork from "./ProjectArtwork";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md border border-border bg-page transition-colors duration-200 hover:border-border-strong">
      <ProjectArtwork visual={project.visual} />
      <div className="flex flex-1 flex-col p-3">
        <p className="text-[10px] font-medium uppercase text-text-subtle">
          {project.category}
        </p>
        <h3 className="mt-1.5 text-base font-medium text-text">
          {project.title}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
          {project.description}
        </p>
        <ul
          aria-label={`${project.title} technologies`}
          className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-[10px] text-text-subtle"
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <Link
          className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-text transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          href={`/projects/${project.slug}`}
        >
          View case study
          <ArrowRightIcon aria-hidden="true" size={14} />
        </Link>
      </div>
    </article>
  );
}
