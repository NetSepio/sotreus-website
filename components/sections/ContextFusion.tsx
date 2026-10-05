import Eyebrow from '@/components/Eyebrow';
import ProvenanceGlyph, { type Provenance } from '@/components/ProvenanceGlyph';
import styles from './ContextFusion.module.css';

const SOURCES: {
  kind: Provenance;
  glyph: number;
  source: string;
  text: string;
  title: string;
  rows: [string, string][];
}[] = [
  {
    kind: 'sensed',
    glyph: 10,
    source: 'Drone Remote ID',
    text: 'Observed directly by your phone or Sotreus Edge — BLE, Wi-Fi and compatible Remote ID broadcasts.',
    title: 'Remote ID broadcast observed',
    rows: [
      ['Drone altitude', '74 m'],
      ['Horizontal distance', '312 m'],
      ['Last message', '1.2 s ago'],
    ],
  },
  {
    kind: 'network',
    glyph: 11,
    source: 'Aircraft / ADS-B',
    text: 'Reported by an external provider over the internet. Always shown with its source and data age.',
    title: 'Aircraft nearby · 8',
    rows: [
      ['Closest', '6.2 km'],
      ['Lowest altitude', '2,900 ft'],
      ['Data freshness', '4 s'],
    ],
  },
  {
    kind: 'predicted',
    glyph: 12,
    source: 'Satellite passes',
    text: 'Computed on your device from public orbital elements. Your location never leaves the phone.',
    title: 'Earth-observation object',
    rows: [
      ['Pass begins → ends', '22:07 → 22:14'],
      ['Max elevation', '61°'],
      ['Orbit data age', '3 h 18 m'],
    ],
  },
];

const TIMELINE: { time: string; text: string; kind: Provenance; size: number; dim?: boolean }[] = [
  { time: '21:39', text: 'New BLE fingerprint observed', kind: 'sensed', size: 9 },
  { time: '21:41', text: 'Tagged device re-encountered', kind: 'sensed', size: 9 },
  { time: '21:42', text: 'Aircraft passed within the selected radius', kind: 'network', size: 11 },
  { time: '21:44', text: 'BLE fingerprint no longer observed', kind: 'sensed', size: 9, dim: true },
  { time: '22:07', text: 'Satellite pass overlapped this session', kind: 'predicted', size: 13 },
];

export default function ContextFusion() {
  return (
    <section id="context" className={`section ${styles.section}`}>
      <div aria-hidden="true" className={styles.orbitA} />
      <div aria-hidden="true" className={styles.orbitB} />
      <div className={`container ${styles.inner}`}>
        <div className={`reveal ${styles.head}`}>
          <Eyebrow num="04">Context fusion</Eyebrow>
          <h2 className={`h2 ${styles.title}`}>
            Look around. <em>Then look up.</em>
          </h2>
          <p className="body">
            Electronic awareness does not stop at the walls of a room. When you choose, Sotreus
            places aircraft, drone broadcasts and satellite passes on the same timeline as your local
            observations — and never blurs where each one came from.
          </p>
        </div>

        <div className={styles.cards}>
          {SOURCES.map((s) => (
            <div key={s.kind} className={`reveal ${styles.card}`}>
              <div className={styles.cardHead}>
                <span className={styles.kind} style={{ color: `var(--${s.kind})` }}>
                  <ProvenanceGlyph kind={s.kind} size={s.glyph} />
                  {s.kind.toUpperCase()}
                </span>
                <span className={styles.source}>{s.source}</span>
              </div>
              <p className={styles.cardText}>{s.text}</p>
              <div className={styles.readout}>
                <div style={{ color: 'var(--bone)' }}>{s.title}</div>
                {s.rows.map(([k, v]) => (
                  <div key={k} className={styles.readoutRow}>
                    <span>{k}</span>
                    <span style={{ color: 'var(--bone)' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal ${styles.timelineWrap}`}>
          <div className={styles.timelineCopy}>
            <h3 className="h3">One timeline. Three kinds of source.</h3>
            <p className={styles.timelineText}>
              Sotreus may say events <em>overlapped in time</em>. It will never say one caused the
              other. Temporal correlation stays temporal correlation.
            </p>
          </div>
          <ol className={styles.timeline}>
            {TIMELINE.map((e) => (
              <li key={e.time} className={styles.event}>
                <ProvenanceGlyph
                  kind={e.kind}
                  size={e.size}
                  className={styles.marker}
                  style={{ left: -Math.ceil(e.size / 2), top: 25.5 - e.size / 2, opacity: e.dim ? 0.5 : 1 }}
                />
                <span className={styles.time}>{e.time}</span>
                <span className={styles.eventText} style={e.dim ? { color: 'var(--muted)' } : undefined}>
                  {e.text}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <ul className={`reveal ${styles.disclaimers}`}>
          <li>An aircraft overhead is not proof of surveillance.</li>
          <li>A satellite pass is not proof of imaging.</li>
          <li>A drone broadcast is not proof of intent.</li>
        </ul>
      </div>
    </section>
  );
}
