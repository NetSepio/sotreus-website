import Eyebrow from '@/components/Eyebrow';
import styles from './Trust.module.css';

const PRINCIPLES = [
  [
    'No account required',
    'Scanning, memory, tagging and reports work without signing up for anything.',
  ],
  [
    'Local database first',
    'No mandatory cloud. Your radio history and places stay on your device, with optional encryption at rest.',
  ],
  [
    'Context is opt-in',
    'Aircraft and orbital feeds are modules you switch on. Local sensing works fully offline.',
  ],
  [
    'Your location, your call',
    'Sky queries run in Exact area, Coarse area or Off. Satellite passes are computed without sending your location anywhere.',
  ],
  ['Share safely', 'Exports default to coarse coordinates, time buckets and hashed identifiers.'],
  [
    'You set retention',
    'Keep everything, keep N days, keep tagged only — or delete a place or session outright.',
  ],
];

const NEVER = ['DEAUTHENTICATE', 'INJECT', 'JAM', 'EXPLOIT', 'INTERROGATE'];

export default function Trust() {
  return (
    <section id="trust" className="section section-alt">
      <div className={`container ${styles.inner}`}>
        <div className={`reveal ${styles.head}`}>
          <Eyebrow num="07">Privacy + trust</Eyebrow>
          <h2 className="h2">
            Privacy is architecture, <em>not a setting.</em>
          </h2>
          <p className="body">
            An awareness tool fails if it becomes another opaque collector. Sotreus is built so it
            can’t.
          </p>
        </div>
        <div className={styles.grid}>
          {PRINCIPLES.map(([title, text]) => (
            <div key={title} className={`reveal ${styles.item}`}>
              <h3 className={styles.itemTitle}>{title}</h3>
              <p className={styles.itemText}>{text}</p>
            </div>
          ))}
        </div>
        <div className={`reveal ${styles.receive}`}>
          <div className={styles.receiveCopy}>
            <h3 className={styles.receiveTitle}>Receive-only. Always.</h3>
            <p className={styles.itemText}>
              Sotreus listens to what is broadcast. It never interferes with anyone else’s systems.
            </p>
          </div>
          <div className={styles.chipsWrap}>
            <p className="visually-hidden" id="never-label">
              Sotreus never:
            </p>
            <ul className={styles.chips} aria-labelledby="never-label">
              {NEVER.map((n) => (
                <li key={n} className={styles.chip}>
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
