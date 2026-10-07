'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { NavLink } from './navLinks';
import styles from './MobileNav.module.css';

export default function MobileNav({
  links,
  ctaHref,
}: {
  links: readonly NavLink[];
  ctaHref: string;
}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <div className={styles.root}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          {open ? (
            <path
              d="M3.5 3.5l9 9M12.5 3.5l-9 9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M2 5h12M2 11h12"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          )}
        </svg>
        Menu
      </button>
      <nav id="mobile-nav" aria-label="Mobile" className={styles.panel} hidden={!open}>
        <ul className={styles.list}>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className={`btn-primary ${styles.cta}`}
              href={ctaHref}
              onClick={() => setOpen(false)}
            >
              Download
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
