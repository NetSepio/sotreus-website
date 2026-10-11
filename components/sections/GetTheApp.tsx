import Image from 'next/image';
import Eyebrow from '@/components/Eyebrow';
import dappStoreBadge from '@/assets/solana-dapp-store-badge.svg';
import videoPoster from '@/assets/sotreus-video-poster.webp';
import { getLatestRelease } from '@/lib/githubRelease';
import DownloadRelease from './DownloadRelease';
import VideoFacade from './VideoFacade';
import styles from './GetTheApp.module.css';

const VIDEO = {
  id: 'jyrSy24Syec',
  title: 'Sotreus | Private, Local-first Situational Awareness',
};

// Official dApp Store deep link; it only resolves on a phone with the dApp Store installed.
const DAPP_STORE = 'solanadappstore://details?id=com.sotreus.app';

export default async function GetTheApp() {
  const release = await getLatestRelease();
  return (
    <section className="section" aria-labelledby="download-title">
      <div id="download" className={`container nav-target ${styles.inner}`}>
        <div className={`reveal ${styles.head}`}>
          <Eyebrow>Download Now</Eyebrow>
          <h2 id="download-title" className="h2">
            Android App is LIVE. <em>Install Now.</em>
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
            <DownloadRelease initial={release} />
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
