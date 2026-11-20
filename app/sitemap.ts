import type { MetadataRoute } from "next";
import { featuredProjects } from "@/lib/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.7 },
    ...featuredProjects.map((project) => ({
      path: `/projects/${project.slug}`,
      priority: project.slug === "hibbullah" ? 0.85 : 0.65,
    })),
  ];

  return paths.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date("2026-11-21T00:00:00.000Z"),
    changeFrequency: "monthly",
    priority,
  }));
}
