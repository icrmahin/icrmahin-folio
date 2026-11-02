import Hero from "../sections/Hero";
import GitHubActivity from "../sections/GitHubActivity";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import CTA from "../sections/CTA";

export default function Page() {
  return (
    <>
      <Hero />
      <GitHubActivity />
      <Projects />
      <Experience />
      <CTA />
    </>
  );
}
