import Link from 'next/link';
import type { ReactNode } from 'react';
import SiteHeader from '@/components/sections/SiteHeader';
import SiteFooter from '@/components/sections/SiteFooter';
import styles from './LegalPage.module.css';

export type LegalSection = { id: string; title: string; body: ReactNode };

type Props = {
  title: string;
  intro: ReactNode;
  updated: string;
  summary: ReactNode[];
  sections: LegalSection[];
  current: 'privacy' | 'terms';
};

export default function LegalPage({ title, intro, updated, summary, sections, current }: Props) {
  return (
    <>
      <SiteHeader home={false} />
      <main className={styles.main}>
        <div className={`container ${styles.inner}`}>
          <header className={styles.head}>
            <div className={styles.eyebrow}>Sotreus legal</div>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.intro}>{intro}</div>
            <p className={styles.updated}>Last updated · {updated}</p>
            <nav aria-label="Legal documents" className={styles.switcher}>
              <Link href="/privacy/" aria-current={current === 'privacy' ? 'page' : undefined}>
                Privacy policy
              </Link>
              <Link href="/terms/" aria-current={current === 'terms' ? 'page' : undefined}>
                Terms
              </Link>
              <a href="mailto:support@netsepio.com">Contact</a>
            </nav>
          </header>

          <section aria-labelledby="summary-title" className={styles.summary}>
            <h2 id="summary-title" className={styles.summaryTitle}>
              At a glance
            </h2>
            <ul className={styles.summaryList}>
              {summary.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <div className={styles.layout}>
            <nav aria-label="On this page" className={styles.toc}>
              <div className={styles.tocTitle}>On this page</div>
              <ol>
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>
                      <span className={styles.tocNum}>{String(i + 1).padStart(2, '0')}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className={styles.body}>
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className={styles.section}>
                  <h2 className={styles.h2}>
                    <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                    {s.title}
                  </h2>
                  {s.body}
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter home={false} />
    </>
  );
}
