import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

export const metadata: Metadata = {
  title: "About",
  description:
    "About A. Mahin: an independent product engineer and builder working across product thinking, interface design and software implementation.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About A. Mahin",
    description:
      "Product thinking, interface design and practical software engineering.",
  },
};

const focusAreas = [
  {
    title: "Product thinking",
    description:
      "Clarifying the problem, constraints and product direction before committing to an interface or implementation.",
  },
  {
    title: "Interface design",
    description:
      "Designing usable flows, visual systems and responsive interfaces that make complex products easier to understand.",
  },
  {
    title: "Product engineering",
    description:
      "Building web and mobile experiences, connecting the interface to data and services, then refining the complete product.",
  },
  {
    title: "Developer tools",
    description:
      "Exploring editor themes and focused tools that improve the daily environment developers work in.",
  },
];

const tools = [
  "Figma",
  "React",
  "Next.js",
  "TypeScript",
  "Expo",
  "React Native",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "Cloudinary",
  "Zed",
];

export default function AboutPage() {
  return (
    <article className="shell about-layout">
      <figure className="about-portrait">
        <Image
          alt="Portrait of A. Mahin"
          className="rounded-[1px]"
          height={900}
          priority
          sizes="(max-width: 520px) 70vw, (max-width: 760px) 36vw, 320px"
          src="/pfp.png"
          width={720}
        />
        <figcaption className="about-portrait__caption">
          A. Mahin / Independent builder
        </figcaption>
      </figure>

      <div className="about-copy">
        <p className="eyebrow">About / icrmahin</p>
        <h1>
          Independent product <em>engineer.</em>
        </h1>
        <p className="about-lede">
          I work across product thinking, interface design and software
          development. I care about the complete path from understanding a
          problem to shaping the experience and building something people can
          actually use.
        </p>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-text-muted">
          My strongest contribution is connecting the product idea to the
          interface and the system behind it. I use design to make the problem
          legible, then engineering to make the solution real. The work I share
          here is a record of what I have built and the decisions behind it,
          rather than a list of technologies I have touched.
        </p>

        <section aria-labelledby="focus-title" className="about-block">
          <p className="eyebrow">01 / Focus</p>
          <h2 id="focus-title">Where I work</h2>
          <div className="focus-list">
            {focusAreas.map((area) => (
              <article className="focus-item" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="tools-title" className="about-block">
          <p className="eyebrow">02 / Toolkit</p>
          <h2 id="tools-title">Tools I use in practice</h2>
          <p>
            A working toolkit, not a claim of equal depth across every
            technology. The project case studies show where each tool is used.
          </p>
          <ul className="skill-list">
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="principles-title" className="about-block">
          <p className="eyebrow">03 / Principles</p>
          <h2 id="principles-title">How I approach the work</h2>
          <p>
            Resilience, adaptability and autonomy. I value clear reasoning,
            practical constraints and consistent progress toward a dependable
            product.
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="button button--accent" href="/#work">
            See selected work <ArrowUpRightIcon aria-hidden="true" size={15} />
          </Link>
          <a className="button button--quiet" href="mailto:icrmahin@gmail.com">
            Email me <ArrowUpRightIcon aria-hidden="true" size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}
