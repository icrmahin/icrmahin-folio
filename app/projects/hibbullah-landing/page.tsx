import type { Metadata } from "next";
import CaseStudy from "@/components/projects/CaseStudy";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Hibbullah Landing Case Study",
};

export default function HibbullahLandingPage() {
  return <CaseStudy project={projects.hibbullahLanding} />;
}
