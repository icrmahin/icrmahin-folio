import type { Metadata } from "next";
import CaseStudy from "@/components/projects/CaseStudy";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Hibbullah Landing — Product site",
  description:
    "Case study: a responsive static product landing page built with semantic HTML, vanilla CSS and vanilla JavaScript.",
  alternates: { canonical: "/projects/hibbullah-landing" },
  openGraph: {
    title: "Hibbullah Landing — A. Mahin",
    description:
      "A lightweight product site for the Hibbullah Android pharmacy application.",
  },
};

export default function HibbullahLandingPage() {
  return <CaseStudy project={projects.hibbullahLanding} />;
}
