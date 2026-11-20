import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import type { Project } from "@/lib/projects";
import ProjectArtwork from "@/components/projects/ProjectArtwork";

export default function ProjectCard({
  project,
  featured = false,
  number,
}: {
  project: Project;
  featured?: boolean;
  number: string;
}) {
  const cardClass = featured
    ? "project-card project-card--featured scroll-reveal"
    : "project-card scroll-reveal";

  return (
    <article className={cardClass}>
      <Link
        aria-label={`Read the ${project.title} case study`}
        className="project-card__art"
        href={`/projects/${project.slug}`}
        tabIndex={-1}
      >
        <ProjectArtwork visual={project.visual} />
      </Link>
      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{number} / {project.category}</span>
          <span>Case study</span>
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="project-card__description">{project.description}</p>
        <ul aria-label={`${project.title} technologies`} className="tech-list">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <Link className="text-link" href={`/projects/${project.slug}`}>
          Read case study <ArrowUpRightIcon aria-hidden="true" size={15} />
        </Link>
      </div>
    </article>
  );
}
