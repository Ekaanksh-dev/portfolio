const USERNAME = "Ekaanksh-dev";
const BASE_URL = "https://api.github.com";

/**
 * Fetch public repos and derive stats.
 * Returns { repoCount, stars, languages, topRepos }
 */
export async function fetchGithubStats() {
  const res = await fetch(`${BASE_URL}/users/${USERNAME}/repos?per_page=100&sort=updated`, {
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

  const repos = await res.json();

  const repoCount = repos.length;
  const stars     = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

  const langMap = {};
  for (const repo of repos) {
    if (repo.language) {
      langMap[repo.language] = (langMap[repo.language] || 0) + 1;
    }
  }
  const languages = Object.keys(langMap).length;

  const topRepos = repos
    .filter(r => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)
    .map(r => ({
      name:        r.name,
      description: r.description,
      stars:       r.stargazers_count,
      forks:       r.forks_count,
      language:    r.language,
      url:         r.html_url,
      updatedAt:   r.updated_at,
    }));

  return { repoCount, stars, languages, topRepos };
}
