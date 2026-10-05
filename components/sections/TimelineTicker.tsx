import type { Provenance } from '@/components/ProvenanceGlyph';
import styles from './TimelineTicker.module.css';

const EVENTS: { time: string; text: string; kind: Provenance }[] = [
  { time: '21:39', text: 'New BLE fingerprint observed', kind: 'sensed' },
  { time: '21:41', text: 'Tagged device re-encountered', kind: 'sensed' },
  { time: '21:42', text: 'Aircraft crossed 6.2 km from session location', kind: 'network' },
  { time: '21:44', text: 'BLE fingerprint no longer observed', kind: 'sensed' },
  { time: '21:51', text: 'Compatible Remote ID broadcast observed · 312 m', kind: 'sensed' },
  { time: '22:07', text: 'Earth-observation pass begins · max elevation 61°', kind: 'predicted' },
];

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <div className={styles.track} aria-hidden={hidden || undefined}>
      {EVENTS.map((e) => (
        <span key={e.time} className={styles.item}>
          <span className={styles.time}>{e.time}</span>
          {e.text}
          <span className={styles.kind} style={{ color: `var(--${e.kind})` }}>
            {e.kind.toUpperCase()}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function TimelineTicker() {
  return (
    <div role="region" aria-label="Example journey timeline" className={styles.ticker}>
      <div className={`marquee ${styles.row}`}>
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}
