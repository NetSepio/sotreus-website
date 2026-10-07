import Image from 'next/image';
import Eyebrow from '@/components/Eyebrow';
import dappStoreBadge from '@/assets/solana-dapp-store-badge.svg';
import videoPoster from '@/assets/sotreus-video-poster.webp';
import VideoFacade from './VideoFacade';
import styles from './GetTheApp.module.css';

const VIDEO = {
  id: 'jyrSy24Syec',
  title: 'Sotreus | Private, Local-first Situational Awareness',
};

// Bump these together for each GitHub release.
const RELEASE = {
  version: '1.0.0',
  notes: 'https://github.com/NetSepio/sotreus/releases/tag/v1.0.0',
  apk: 'https://github.com/NetSepio/sotreus/releases/download/v1.0.0/Sotreus-1.0.0-generic.apk',
  apkSize: '56 MB',
};

// Official dApp Store deep link; it only resolves on a phone with the dApp Store installed.
const DAPP_STORE = 'solanadappstore://details?id=com.sotreus.app';

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

export default function GetTheApp() {
  return (
    <section id="download" className="section" aria-labelledby="download-title">
      <div className={`container ${styles.inner}`}>
        <div className={`reveal ${styles.head}`}>
          <Eyebrow>Available now · v{RELEASE.version}</Eyebrow>
          <h2 id="download-title" className="h2">
            Sotreus for Android is out. <em>Watch the walkthrough, then install it.</em>
          </h2>
        </div>

        <div className="reveal">
          <VideoFacade id={VIDEO.id} title={VIDEO.title} poster={videoPoster} />
          <p className={styles.videoNote}>Nothing loads from YouTube until you press play.</p>
        </div>

        <div className={styles.cards}>
          <article className={`reveal ${styles.card}`} aria-labelledby="dl-android">
            <span className={styles.tag}>GitHub Releases</span>
            <h3 id="dl-android" className={styles.title}>
              Any Android phone
            </h3>
            <p className={styles.text}>
              Download the APK from GitHub Releases and open it to install. The first time, Android
              asks you to allow installs from your browser.
            </p>
            <div className={styles.actions}>
              <a className={`btn-primary ${styles.download}`} href={RELEASE.apk}>
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
                v{RELEASE.version} · {RELEASE.apkSize}
              </span>
            </div>
            <a className={styles.link} href={RELEASE.notes}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
              </svg>
              Release notes on GitHub
              {arrow}
            </a>
          </article>

          <article className={`reveal ${styles.card}`} aria-labelledby="dl-solana">
            <span className={styles.tag}>Solana dApp Store</span>
            <h3 id="dl-solana" className={styles.title}>
              Solana Mobile phones
            </h3>
            <p className={styles.text}>
              On a Seeker or another Solana Mobile phone, install Sotreus from the Solana dApp
              Store, which also delivers its updates.
            </p>
            <div className={styles.actions}>
              <a className={styles.badge} href={DAPP_STORE}>
                <Image src={dappStoreBadge} alt="Get it on the Solana dApp Store" height={52} />
              </a>
            </div>
            <p className={styles.hint}>On a computer? Open this page on your Solana phone.</p>
          </article>
        </div>

        <p className={`reveal ${styles.note}`}>
          Install one build, not both. They share the package name{' '}
          <span className="mono">com.sotreus.app</span> but are signed with different keys, so
          neither can update the other.
        </p>
      </div>
    </section>
  );
}
