import type { Metadata } from "next";
import CaseStudy from "@/components/projects/CaseStudy";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Hibbullah Case Study",
};

export default function HibbullahPage() {
  return <CaseStudy project={projects.hibbullah} />;
}
