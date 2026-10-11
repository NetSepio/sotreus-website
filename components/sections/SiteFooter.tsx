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
          <nav className={styles.nav} aria-label="Footer">
            <Link href={a('#download')}>Download</Link>
            <Link href={a('#discover')}>Discover</Link>
            <Link href={a('#devices')}>Devices</Link>
            <Link href={a('#access')}>Subscribe</Link>
            <a href="https://x.com/netsepio">X · @netsepio</a>
          </nav>
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
