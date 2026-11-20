import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react/ssr";
import type { Project } from "@/lib/projects";
import ProjectArtwork from "@/components/projects/ProjectArtwork";

export default function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="shell case-study">
      <Link className="case-study__back" href="/#work">
        <ArrowLeftIcon aria-hidden="true" size={14} />
        Back to selected work
      </Link>

      <header className="case-study__hero">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="case-study__lede">{project.description}</p>
          <dl className="case-study__meta">
            <div>
              <dt>Contribution</dt>
              <dd>{project.contribution}</dd>
            </div>
            <div>
              <dt>Technology</dt>
              <dd>{project.technologies.join(" · ")}</dd>
            </div>
          </dl>
        </div>
        <div className="case-study__art">
          <ProjectArtwork visual={project.visual} />
          <p className="case-study__art-note">
            Portfolio illustration — not a production screenshot or live product data.
          </p>
        </div>
      </header>

      <section aria-labelledby="overview-title" className="case-block">
        <div>
          <p className="eyebrow">01 / Overview</p>
          <h2 id="overview-title">The product</h2>
        </div>
        <div className="case-block__body">{project.overview}</div>
      </section>

      <section aria-labelledby="context-title" className="case-block">
        <div>
          <p className="eyebrow">02 / Context</p>
          <h2 id="context-title">The problem to solve</h2>
        </div>
        <div className="case-block__body">{project.context}</div>
      </section>

      <section aria-labelledby="approach-title" className="case-block">
        <div>
          <p className="eyebrow">03 / Decisions</p>
          <h2 id="approach-title">How it was approached</h2>
        </div>
        <div className="case-approach">
          {project.approach.map((step, index) => (
            <article key={step.title}>
              <p className="eyebrow">Decision / {String(index + 1).padStart(2, "0")}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="capabilities-title" className="case-block">
        <div>
          <p className="eyebrow">04 / Capabilities</p>
          <h2 id="capabilities-title">What it includes</h2>
        </div>
        <ul className="case-list">
          {project.capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="engineering-title" className="case-block">
        <div>
          <p className="eyebrow">05 / Implementation</p>
          <h2 id="engineering-title">Engineering notes</h2>
        </div>
        <ul className="case-list">
          {project.engineeringNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <footer className="case-study__footer">
        <div>
          <p>Want to review the implementation?</p>
          <p className="mt-1 text-text-subtle">The source repository is public.</p>
        </div>
        <a
          className="button button--quiet"
          href={project.repository}
          rel="noreferrer"
          target="_blank"
        >
          View source <ArrowUpRightIcon aria-hidden="true" size={15} />
        </a>
      </footer>
    </article>
  );
}
