import EarlyAccessForm from './EarlyAccessForm';
import styles from './EarlyAccess.module.css';

export default function EarlyAccess() {
  return (
    <section id="access" className={styles.section} aria-labelledby="access-title">
      <div aria-hidden="true" className={styles.ring} style={{ width: 900, height: 900 }} />
      <div aria-hidden="true" className={styles.ring} style={{ width: 600, height: 600, borderColor: 'var(--line-1)' }} />
      <div aria-hidden="true" className={`ring-ping ${styles.ping}`} />
      <div className={`reveal ${styles.inner}`}>
        <h2 id="access-title" className={styles.quote}>
          “What is different here, what is around or above me,{' '}
          <em>and have I seen any of it before?”</em>
        </h2>
        <p className="body" style={{ maxWidth: '34em' }}>
          Sotreus answers with evidence, provenance, confidence, freshness — and restraint. Join
          early access for the Android app and the first Sotreus Edge field units.
        </p>
        <EarlyAccessForm />
        <a href="https://x.com/netsepio" className={styles.social}>
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
            <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />
          </svg>
          Follow progress on X · @netsepio
        </a>
      </div>
    </section>
  );
}
