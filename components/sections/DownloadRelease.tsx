'use client';

import { useEffect, useState } from 'react';
import { LATEST_RELEASE_URL, releaseFromGithub, type AppRelease } from '@/lib/githubRelease';
import styles from './GetTheApp.module.css';

const arrow = (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M5 11 11 5M6 5h5v5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Asks GitHub for the latest release and points the download at that APK. */
export default function DownloadRelease({ initial }: { initial: AppRelease }) {
  const [release, setRelease] = useState(initial);

  useEffect(() => {
    const controller = new AbortController();
    fetch(LATEST_RELEASE_URL, {
      headers: { Accept: 'application/vnd.github+json' },
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((data) => {
        const next = releaseFromGithub(data);
        if (next) setRelease(next);
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  return (
    <>
      <div className={styles.actions}>
        <a className={`btn-primary ${styles.download}`} href={release.apk}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M8 2.5v8M4.5 7 8 10.5 11.5 7M3 13.5h10"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Download APK
        </a>
        <span className={styles.meta}>
          v{release.version} · {release.apkSize}
        </span>
      </div>
      <a className={styles.link} href={release.notes}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
        </svg>
        Release notes on GitHub
        {arrow}
      </a>
    </>
  );
}
