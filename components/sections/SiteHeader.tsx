import { LogoMark, Wordmark } from '@/components/Logo';
import MobileNav from './MobileNav';
import { NAV_LINKS } from './navLinks';
import styles from './SiteHeader.module.css';

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" aria-label="Sotreus home" className={styles.brand}>
          <LogoMark variant="compact" size={30} />
          <Wordmark />
        </a>
        <nav className={styles.nav} aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <a className={`btn-primary ${styles.cta}`} href="#access">
            Get early access
          </a>
          <MobileNav links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}
