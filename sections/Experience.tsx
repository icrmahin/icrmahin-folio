export default function Experience() {
  return (
    <section
      aria-labelledby="experience-title"
      className="mx-auto max-w-xl px-6 py-8"
      id="experience"
    >
      <header className="mb-5">
        <h2 className="text-lg font-medium text-text" id="experience-title">
          Experience
        </h2>
      </header>
      <article className="border-y border-border py-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-sm font-medium text-text">Product Builder</h3>
          <span className="text-xs text-text-subtle">Current focus</span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-text-muted">
          I design, build, and ship digital products through thoughtful design
          and practical engineering.
        </p>
      </article>
    </section>
  );
}
