import ProvenanceGlyph from '@/components/ProvenanceGlyph';
import styles from './ListeningField.module.css';

const BLIPS = [
  { left: '24%', top: '80%', delay: '.6s' },
  { left: '46%', top: '82%', delay: '1.4s' },
  { left: '83%', top: '80%', delay: '2.1s' },
  { left: '79%', top: '30%', delay: '.2s' },
  { left: '18%', top: '52%', delay: '2.8s' },
  { left: '56%', top: '36%', delay: '1.9s' },
];

export default function ListeningField() {
  return (
    <div
      role="img"
      aria-label="Illustration of the Sotreus listening field: nearby radios shown as sensed, an aircraft as network-reported, and a satellite pass as predicted."
      className={styles.field}
    >
      {/* crosshair */}
      <div className={styles.crossH} />
      <div className={styles.crossV} />
      {/* static range rings */}
      <div className={styles.range} style={{ width: '32%', borderColor: 'var(--line-ring)' }} />
      <div className={styles.range} style={{ width: '64%', borderColor: 'var(--line-2)' }} />
      <div className={styles.range} style={{ width: '96%', borderColor: 'var(--line-1)' }} />
      {/* listening pulses */}
      <div className="ring-ping" />
      <div className="ring-ping" style={{ animationDelay: '2.5s' }} />
      <div className="ring-ping" style={{ animationDelay: '5s' }} />
      {/* orbit (PREDICTED) */}
      <div className={styles.orbitPath} />
      <div className={`orbit ${styles.orbit}`}>
        <ProvenanceGlyph kind="predicted" size={14} className={styles.satellite} />
      </div>
      <div className={styles.tag} style={{ left: '5%', top: '37%', color: 'var(--predicted)' }}>
        EO PASS · PREDICTED
      </div>
      {/* aircraft (NETWORK) */}
      <div className={`fly ${styles.flyTrack}`}>
        <div className={styles.point}>
          <ProvenanceGlyph kind="network" size={12} />
          <span className={styles.tagInline} style={{ color: 'var(--network)' }}>
            AIRCRAFT · 6.2 KM · 4 S OLD
          </span>
        </div>
      </div>
      {/* sensed radios */}
      <div className={styles.point} style={{ left: '30%', top: '62%' }}>
        <ProvenanceGlyph kind="sensed" size={10} />
        <span className={styles.tagInline} style={{ color: 'var(--bone)' }}>
          TAGGED · RE-ENCOUNTERED
        </span>
      </div>
      <div className={styles.point} style={{ left: '66%', top: '71%' }}>
        <ProvenanceGlyph kind="sensed" size={8} style={{ opacity: 0.6 }} />
        <span className={styles.tagInline} style={{ color: 'var(--muted)' }}>
          WI-FI AP · FAMILIAR
        </span>
      </div>
      <div className={styles.point} style={{ left: '68%', top: '52%' }}>
        <span className={styles.newDot}>
          <span className={`halo ${styles.halo}`} />
          <span className={styles.newCore} />
        </span>
        <span className={styles.tagInline} style={{ color: 'var(--sensed)' }}>
          NEW FINGERPRINT
        </span>
      </div>
      {BLIPS.map((b) => (
        <span
          key={`${b.left}-${b.top}`}
          className={`blip ${styles.blip}`}
          style={{ left: b.left, top: b.top, animationDelay: b.delay }}
        />
      ))}
      {/* you */}
      <div className={styles.you} />
      <div className={styles.youLabel}>YOU</div>
      {/* readouts */}
      <div className={styles.readoutL}>
        <span className={styles.observing}>
          <span className={`live-dot ${styles.liveDot}`} />
          OBSERVING
        </span>
        <span className="scan" style={{ color: 'var(--faint)' }}>
          SCAN FRESH · 3 S
        </span>
      </div>
      <div className={styles.readoutR}>
        <span>PLACE · OFFICE</span>
        <span>BASELINE · 14 VISITS</span>
      </div>
      <div className={styles.legend}>
        <span style={{ color: 'var(--sensed)' }}>
          <ProvenanceGlyph kind="sensed" size={9} />
          SENSED
        </span>
        <span style={{ color: 'var(--network)' }}>
          <ProvenanceGlyph kind="network" size={10} />
          NETWORK
        </span>
        <span style={{ color: 'var(--predicted)' }}>
          <ProvenanceGlyph kind="predicted" size={11} />
          PREDICTED
        </span>
      </div>
    </div>
  );
}
