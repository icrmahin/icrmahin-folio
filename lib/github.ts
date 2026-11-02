export type RepositoryLanguage = {
  name: string;
  bytes: number;
  share: number;
};

export async function getRepositoryLanguages(
  repository: string,
): Promise<RepositoryLanguage[] | null> {
  try {
    const url = new URL(repository);
    const [, owner, name] = url.pathname.split("/");
    if (!owner || !name) return null;

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${name}/languages`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 86400 },
      },
    );

    if (!response.ok) return null;

    const languages = (await response.json()) as Record<string, number>;
    const total = Object.values(languages).reduce(
      (sum, bytes) => sum + bytes,
      0,
    );
    if (total === 0) return null;

    return Object.entries(languages)
      .sort(([, first], [, second]) => second - first)
      .slice(0, 5)
      .map(([name, bytes]) => ({
        name,
        bytes,
        share: Math.round((bytes / total) * 100),
      }));
  } catch {
    return null;
  }
}
