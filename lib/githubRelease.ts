export type AppRelease = {
  version: string;
  notes: string;
  apk: string;
  apkSize: string;
};

export const LATEST_RELEASE_URL = 'https://api.github.com/repos/NetSepio/sotreus/releases/latest';

/** Used only if the GitHub API is unreachable. */
const FALLBACK: AppRelease = {
  version: '1.0.1',
  notes: 'https://github.com/NetSepio/sotreus/releases/tag/v1.0.1',
  apk: 'https://github.com/NetSepio/sotreus/releases/download/v1.0.1/Sotreus-1.0.1-generic.apk',
  apkSize: '56 MB',
};

type GithubAsset = { name: string; size: number; browser_download_url: string };
type GithubRelease = { tag_name?: string; html_url?: string; assets?: GithubAsset[] };

/** Pull version, generic APK, and size out of the GitHub releases payload. */
export function releaseFromGithub(data: GithubRelease): AppRelease | null {
  const apk = data.assets?.find((asset) => asset.name.endsWith('-generic.apk'));
  if (!apk || !data.tag_name || !data.html_url) return null;
  return {
    version: data.tag_name.replace(/^v/, ''),
    notes: data.html_url,
    apk: apk.browser_download_url,
    apkSize: `${Math.round(apk.size / 1_000_000)} MB`,
  };
}

/** Latest stable release. The page also requests this in the browser after load. */
export async function getLatestRelease(): Promise<AppRelease> {
  try {
    const res = await fetch(LATEST_RELEASE_URL, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'sotreus-website',
      },
    });
    if (!res.ok) return FALLBACK;
    return releaseFromGithub((await res.json()) as GithubRelease) ?? FALLBACK;
  } catch {
    return FALLBACK;
  }
}
