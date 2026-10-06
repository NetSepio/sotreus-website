import Link from 'next/link';
import { LogoMark, Wordmark } from '@/components/Logo';
import MobileNav from './MobileNav';
import { NAV_LINKS, withBase } from './navLinks';
import styles from './SiteHeader.module.css';

/** `home` is false on secondary pages (privacy, terms) so anchors point back to the landing page. */
export default function SiteHeader({ home = true }: { home?: boolean }) {
  const links = NAV_LINKS.map((l) => ({ ...l, href: withBase(l.href, home) }));
  const ctaHref = withBase('#access', home);
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href={home ? '#top' : '/'} aria-label="Sotreus home" className={styles.brand}>
          <LogoMark variant="compact" size={30} />
          <Wordmark />
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <Link className={`btn-primary ${styles.cta}`} href={ctaHref}>
            Get early access
          </Link>
          <MobileNav links={links} ctaHref={ctaHref} />
        </div>
      </div>
    </header>
  );
}
