import type { Metadata } from "next";
import CaseStudy from "@/components/projects/CaseStudy";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Hibbullah — Pharmacy commerce app",
  description:
    "Case study: an Android-first pharmacy product connecting a customer storefront with shop operations, built with Expo, React Native and Supabase.",
  alternates: { canonical: "/projects/hibbullah" },
  openGraph: {
    title: "Hibbullah — A. Mahin",
    description:
      "An Android-first pharmacy product with customer and operations experiences.",
  },
};

export default function HibbullahPage() {
  return <CaseStudy project={projects.hibbullah} />;
}
