import type { MetadataRoute } from "next";
import { featuredProjects } from "@/lib/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

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
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
