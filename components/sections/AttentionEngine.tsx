import styles from './AttentionEngine.module.css';

// Illustrative weights only.
const INPUTS = [
  { label: 'Novelty', w: 62 },
  { label: 'Persistence', w: 44 },
  { label: 'Re-encounter', w: 86 },
  { label: 'Known signature', w: 30 },
  { label: 'Your tag', w: 100 },
  { label: 'Context timing', w: 18, color: 'var(--network)' },
];

export default function AttentionEngine() {
  return (
    <div className={`reveal ${styles.engine}`}>
      <div className={styles.inputs}>
        <div className={styles.label} style={{ marginBottom: 4 }}>
          INPUTS
        </div>
        {INPUTS.map((i) => (
          <div key={i.label} className={styles.input}>
            <span className={styles.inputLabel}>{i.label}</span>
            <span className={styles.track} aria-hidden="true">
              <span
                className={`bar ${styles.fill}`}
                style={{ width: `${i.w}%`, background: i.color ?? 'var(--sensed)' }}
              />
            </span>
          </div>
        ))}
      </div>
      <div className={`hide-sm ${styles.connector}`} aria-hidden="true">
        <div className="flow" />
      </div>
      <div className={styles.score}>
        <div className={styles.label}>ATTENTION SCORE</div>
        <div className={styles.scoreValue}>0.74</div>
        <div className={styles.pill}>NEEDS ATTENTION</div>
        <div className={styles.label} style={{ color: 'var(--fog)', marginTop: 6 }}>
          NOT A THREAT SCORE.
        </div>
      </div>
      <div className={`hide-sm ${styles.connector}`} aria-hidden="true">
        <div className="flow" />
      </div>
      <div className={styles.event}>
        <div className={styles.label}>EXPLAINABLE EVENT</div>
        <div className={styles.eventTitle}>Repeated cross-location re-encounter observed</div>
        <div className={styles.eventText}>
          Your tagged device “Grey tag” was observed at Home, the Café and the Office this week.
          Signal history suggests proximity only — never direction.
        </div>
        <div className={styles.label} style={{ letterSpacing: '.1em' }}>
          CONFIDENCE · MEDIUM &nbsp;·&nbsp; <span className={styles.evidence}>VIEW EVIDENCE</span>
        </div>
      </div>
    </div>
  );
}
