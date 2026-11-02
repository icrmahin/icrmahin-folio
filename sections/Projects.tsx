import { featuredProjects } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  return (
    <section
      aria-labelledby="projects-title"
      className="mx-auto max-w-xl px-6"
      id="works"
    >
      <header className="mb-5 flex items-end justify-between gap-4">
        <h2 className="text-lg font-medium text-text" id="projects-title">
          My Craft&apos;s
        </h2>
      </header>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
