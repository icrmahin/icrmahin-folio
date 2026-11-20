import type { Metadata } from "next";
import CaseStudy from "@/components/projects/CaseStudy";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "WOLFVANE for Zed — Editor theme",
  description:
    "Case study: a restrained graphite theme for Zed with a deliberate syntax-color hierarchy.",
  alternates: { canonical: "/projects/wolfvane-zed-theme" },
  openGraph: {
    title: "WOLFVANE for Zed — A. Mahin",
    description:
      "A dark editor theme with a deliberate syntax hierarchy.",
  },
};

export default function WolfvaneZedThemePage() {
  return <CaseStudy project={projects.wolfvane} />;
}
