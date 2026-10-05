import Eyebrow from '@/components/Eyebrow';
import styles from './Roadmap.module.css';

const STAGES = [
  {
    tag: 'V1 · PHONE',
    color: 'var(--sensed)',
    title: 'Android sensing + memory',
    text: 'BLE + visible Wi-Fi · Encounter memory · Places + journeys · Tagging + signatures · Evidence-based attention',
    variant: 'current',
  },
  {
    tag: 'V1.1 · CONTEXT',
    color: 'var(--network)',
    title: 'Airspace, drones + orbit',
    text: 'Aircraft / ADS-B data · Drone Remote ID · Satellite pass prediction · Public situational feeds',
  },
  {
    tag: 'V2 · SOTREUS EDGE',
    color: 'var(--fog)',
    title: 'Always-on companion',
    text: 'ESP32-S3 + BLE + 2.4 GHz Wi-Fi · Local storage + optional GNSS · Continuous observation · Mesh Mode via Meshtastic',
  },
  {
    tag: 'FUTURE',
    color: 'var(--predicted)',
    title: 'Personal context graph',
    text: 'Local radios + sky + orbit + trusted nodes, across time and place',
    variant: 'future',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section">
      <div className={`container ${styles.inner}`}>
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
