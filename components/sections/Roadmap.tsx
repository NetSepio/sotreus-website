import Eyebrow from '@/components/Eyebrow';
import styles from './Roadmap.module.css';

const STAGES = [
  {
    tag: 'V1 · PHONE',
    color: 'var(--sensed)',
    title: 'Sensing, memory + sky',
    text: 'BLE + visible Wi-Fi · Encounter memory · Places + journeys · Aircraft, drones + satellite passes',
    variant: 'current',
  },
  {
    tag: 'V2 · SOTREUS EDGE',
    color: 'var(--fog)',
    title: 'Always-on companion',
    text: 'ESP32-S3 + BLE + 2.4 GHz Wi-Fi · Local storage + optional GNSS · Continuous observation · Mesh Mode via Meshtastic',
  },
  {
    tag: 'V3 · CONTEXT GRAPH',
    color: 'var(--predicted)',
    title: 'Personal context graph',
    text: 'Phone + Edge encounters · Across time and place · 360° physical protection',
    variant: 'future',
  },
];

export default function Roadmap() {
  return (
    <section className="section">
      <div id="roadmap" className={`container nav-target ${styles.inner}`}>
        <div className={`reveal ${styles.head}`}>
          <Eyebrow num="08">Roadmap</Eyebrow>
          <h2 className="h2">From the phone in your pocket to a personal context graph.</h2>
        </div>
        <ol className={styles.grid}>
          {STAGES.map((s) => (
            <li
              key={s.tag}
              className={`reveal ${styles.card} ${s.variant ? styles[s.variant] : ''}`}
            >
              <div className={styles.cardHead}>
                <span className={styles.tag} style={{ color: s.color }}>
                  {s.tag}
                </span>
                {s.variant === 'current' && (
                  <span className={styles.live} aria-hidden="true" />
                )}
              </div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
