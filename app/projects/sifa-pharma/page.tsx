import type { Metadata } from "next";
import CaseStudy from "@/components/projects/CaseStudy";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Sifa Pharma — Unverified archive",
  description:
    "An older project entry retained while its source repository and scope are being verified.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SifaPharmaPage() {
  return <CaseStudy project={projects.sifaPharma} />;
}
