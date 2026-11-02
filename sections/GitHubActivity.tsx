type Contribution = {
  date: string;
  count: number;
  level: number;
};

type ContributionResponse = {
  total: {
    lastYear: number;
  };
  contributions: Contribution[];
};

const levels = [
  "bg-surface-raised",
  "bg-accent/25",
  "bg-accent/50",
  "bg-accent/75",
  "bg-accent",
];

async function getContributions(): Promise<ContributionResponse | null> {
  try {
    const response = await fetch(
      "https://github-contributions-api.jogruber.de/v4/icrmahin?y=last",
      { next: { revalidate: 86400 } },
    );

    if (!response.ok) return null;

    const data = (await response.json()) as ContributionResponse;
    if (!Array.isArray(data.contributions)) return null;

    return data;
  } catch {
    return null;
  }
}

export default async function GitHubActivity() {
  const activity = await getContributions();

  return (
    <section
      aria-labelledby="github-activity-title"
      className="mx-auto max-w-xl px-6 pb-16"
    >
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-3">
        <div>
          <p className="mt-1 text-xs text-text-subtle">
            {activity
              ? `${activity.total.lastYear} contributions in the last year`
              : "Contribution data unavailable"}
          </p>
        </div>
        <a
          className="text-xs text-text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          href="https://github.com/icrmahin"
          rel="noreferrer"
          target="_blank"
        >
          github.com/icrmahin
        </a>
      </div>

      {activity ? (
        <>
          <div
            aria-label="Daily contributions over the last year"
            className="mt-4"
            role="region"
          >
            <ol className="grid w-full grid-flow-col grid-cols-[repeat(53,minmax(0,1fr))] grid-rows-7 gap-px sm:gap-[3px]">
              {activity.contributions.map((day) => (
                <li
                  aria-label={`${day.date}: ${day.count} contributions`}
                  className={`aspect-square min-w-0 rounded-[2px] ${levels[day.level] ?? levels[0]}`}
                  key={day.date}
                  title={`${day.date}: ${day.count} contributions`}
                />
              ))}
            </ol>
          </div>
        </>
      ) : null}
    </section>
  );
}
