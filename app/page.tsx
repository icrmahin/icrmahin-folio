import Hero from "../sections/Hero";
import GitHubActivity from "../sections/GitHubActivity";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <GitHubActivity />
      <CTA />
      <Footer />
    </>
  );
}
