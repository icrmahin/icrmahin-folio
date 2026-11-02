import type { Metadata } from "next";
import CaseStudy from "@/components/projects/CaseStudy";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Sifa Pharma Case Study",
};

export default function SifaPharmaPage() {
  return <CaseStudy project={projects.sifaPharma} />;
}
