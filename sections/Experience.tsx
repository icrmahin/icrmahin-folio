const principles = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "Start with the people, constraints and job the product needs to do. Avoid designing around assumptions.",
  },
  {
    number: "02",
    title: "Shape the experience",
    description:
      "Turn the problem into clear flows, information structure and a visual system before adding complexity.",
  },
  {
    number: "03",
    title: "Build and refine",
    description:
      "Implement the working product, test the important paths and improve the parts that matter to real use.",
  },
];

export default function Experience() {
  return (
    <section aria-labelledby="approach-title" className="shell section" id="approach">
      <header className="section-header">
        <div>
          <p className="eyebrow">Working method / 03</p>
          <h2 id="approach-title">Think it through. Make it work. Refine what matters.</h2>
        </div>
        <p className="section-header__note">
          Product work is a sequence of decisions, not a stack of tools. This is
          the process I use to keep design and engineering connected.
        </p>
      </header>
      <div className="approach-grid">
        {principles.map((principle) => (
          <article className="approach-card scroll-reveal" key={principle.number}>
            <span className="approach-card__number">{principle.number}</span>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
