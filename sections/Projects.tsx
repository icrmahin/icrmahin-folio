import { featuredProjects } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  return (
    <section aria-labelledby="work-title" className="shell section" id="work">
      <header className="section-header">
        <div>
          <p className="eyebrow">Selected work / 03</p>
          <h2 id="work-title">Products, tools, and the systems behind them.</h2>
        </div>
        <p className="section-header__note">
          A selection of product work and developer tools. Each case study
          focuses on the problem, the decisions and the implementation.
        </p>
      </header>
      <div className="work-grid">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            featured={index === 0}
            key={project.slug}
            number={String(index + 1).padStart(2, "0")}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
