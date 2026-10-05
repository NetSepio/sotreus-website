import { LogoMark, Wordmark } from '@/components/Logo';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
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
          {/* Add [PRIVACY POLICY] and [TERMS] links once those pages exist. */}
          <nav className={styles.nav} aria-label="Footer">
            <a href="#how">How it works</a>
            <a href="#context">Sky context</a>
            <a href="#edge">Sotreus Edge</a>
            <a href="#trust">Privacy</a>
            <a href="https://x.com/netsepio">X · @netsepio</a>
          </nav>
        </div>
        <div className={styles.legal}>
          <span>Sotreus © 2026 NetSepio LLC. All rights reserved.</span>
          <span className={styles.domain}>SOTREUS.COM</span>
        </div>
      </div>
    </footer>
  );
}
