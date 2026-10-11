import Link from 'next/link';
import { LogoMark, Wordmark } from '@/components/Logo';
import { withBase } from './navLinks';
import styles from './SiteFooter.module.css';

export default function SiteFooter({ home = true }: { home?: boolean }) {
  const a = (href: string) => withBase(href, home);
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <span className={styles.brand}>
              <LogoMark variant="compact" size={30} />
              <Wordmark />
            </span>
            <p className={styles.about}>
              Sotreus reports what it can observe, what external sources report, and what is only
              predicted — and keeps those categories distinct.
            </p>
          </div>
          <div className={styles.navCol}>
            <nav className={styles.nav} aria-label="Footer">
              <Link href={a('#download')}>Download</Link>
              <Link href={a('#discover')}>Discover</Link>
              <Link href={a('#devices')}>Devices</Link>
              <Link href={a('#access')}>Subscribe</Link>
            </nav>
            <div className={styles.social}>
              <a href="https://x.com/netsepio" target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.725-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
                </svg>
                X
              </a>
              <a href="https://github.com/NetSepio/sotreus" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className={styles.legal}>
          <span>Sotreus © 2026 NetSepio LLC. All rights reserved.</span>
          <span className={styles.legalLinks}>
            <Link href="/privacy/">Privacy</Link>
            <Link href="/terms/">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
