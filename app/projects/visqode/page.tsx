import type { Metadata } from "next";
import CaseStudy from "@/components/projects/CaseStudy";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Visqode.nvim Case Study",
};

export default function VisqodePage() {
  return <CaseStudy project={projects.visqode} />;
}
