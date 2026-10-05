import Eyebrow from '@/components/Eyebrow';
import AttentionEngine from './AttentionEngine';
import styles from './Memory.module.css';

const STATES = [
  {
    title: 'Familiar',
    text: 'Matches this place’s baseline or a device you have marked as yours or expected.',
    dot: { opacity: 0.55 },
  },
  {
    title: 'New',
    text: 'Not seen in this place before. Most new things are ordinary — Sotreus simply notes them.',
    dot: {},
  },
  {
    title: 'Persistent',
    text: 'Present for an unusually long stretch of a session, rather than passing through.',
    dot: { boxShadow: '0 0 0 4px rgba(242,179,61,.2)' },
  },
  {
    title: 'Re-encountered',
    text: 'A distinctive fingerprint seen again in a different, unrelated place.',
    dot: { boxShadow: '0 0 0 4px rgba(242,179,61,.2),0 0 0 9px rgba(242,179,61,.1)' },
    highlight: true,
  },
];

export default function Memory() {
  return (
    <section className="section section-alt">
      <div className={`container ${styles.inner}`}>
        <div className={`reveal ${styles.head}`}>
          <div className={styles.headTitle}>
            <Eyebrow num="03">Encounter memory</Eyebrow>
            <h2 className="h2">
              A scanner shows you a list. <em>Sotreus remembers.</em>
            </h2>
          </div>
          <p className={`body ${styles.headText}`}>
            The meaningful question is not only “what is nearby?” but “have I encountered this
            before?” Local memory turns a noisy stream of radios into something you can read.
          </p>
        </div>

        <div className={styles.cards}>
          {STATES.map((s) => (
            <div key={s.title} className={`reveal ${styles.card} ${s.highlight ? styles.cardHi : ''}`}>
              <span className={styles.dot} style={s.dot} aria-hidden="true" />
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
            </div>
          ))}
        </div>

        <AttentionEngine />
      </div>
    </section>
  );
}
