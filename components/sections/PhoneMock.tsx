import ProvenanceGlyph from '@/components/ProvenanceGlyph';
import styles from './PhoneMock.module.css';

// Purely illustrative: numbers are example UI values, not stats. No fake status bar.
export default function PhoneMock() {
  return (
    <div
      role="img"
      aria-label="Sotreus app home screen showing the live environment, five answers and the attention feed"
      className={styles.phone}
    >
      <div className={styles.top}>
        <div className={styles.place}>
          <span className={styles.label}>PLACE</span>
          <span className={styles.placeName}>Office</span>
        </div>
        <span className={styles.chip}>
          <span className={`live-dot ${styles.liveDot}`} />
          OBSERVING
        </span>
      </div>
      <div className={styles.meta}>BLE + WI-FI · SCAN FRESH 3 S · BASELINE 14 VISITS</div>
      <div className={styles.tiles}>
        <div className={styles.tile}>
          <div className={styles.tileLabel}>HERE</div>
          <div className={styles.tileValue}>42</div>
          <div className={styles.tileSub}>radios · 7 families</div>
        </div>
        <div className={styles.tile}>
          <div className={styles.tileLabel}>FAMILIAR</div>
          <div className={styles.tileValue}>31</div>
          <div className={styles.tileSub}>match this place</div>
        </div>
        <div className={`${styles.tile} ${styles.tileChanged}`}>
          <div className={styles.tileLabel} style={{ color: 'var(--sensed)' }}>
            CHANGED
          </div>
          <div className={styles.tileValue}>3</div>
          <div className={styles.tileSub}>new since last visit</div>
        </div>
        <div className={styles.tile}>
          <div className={styles.tileLabel}>SEEN BEFORE</div>
          <div className={styles.tileValue}>1</div>
          <div className={styles.tileSub}>re-encounter</div>
        </div>
        <div className={`${styles.tile} ${styles.tileWide}`}>
          <div>
            <div className={styles.tileLabel}>ABOVE</div>
            <div className={styles.above}>8 aircraft · 1 pass in 30 min</div>
          </div>
          <div className={styles.glyphs}>
            <ProvenanceGlyph kind="network" size={10} />
            <ProvenanceGlyph kind="predicted" size={11} />
          </div>
        </div>
      </div>
      <div className={styles.label} style={{ marginTop: 2 }}>
        NEEDS ATTENTION
      </div>
      <div className={styles.feed}>
        <div className={styles.event}>
          <ProvenanceGlyph kind="sensed" size={8} style={{ marginTop: 4 }} />
          <div>
            <div className={styles.eventTitle}>Repeated cross-location re-encounter observed</div>
            <div className={styles.eventSub}>Tagged “Grey tag” · Home, Café, Office</div>
          </div>
        </div>
        <div className={styles.event}>
          <ProvenanceGlyph kind="sensed" size={8} style={{ marginTop: 4 }} />
          <div>
            <div className={styles.eventTitle}>Camera-family signature observed</div>
            <div className={styles.eventSub}>New in this place · confidence medium</div>
          </div>
        </div>
        <div className={styles.event}>
          <ProvenanceGlyph kind="predicted" size={10} style={{ marginTop: 3 }} />
          <div>
            <div className={styles.eventTitle}>Selected satellite predicted overhead</div>
            <div className={styles.eventSub}>22:07 · max elev 61° · orbit data 3 h old</div>
          </div>
        </div>
      </div>
      <div className={styles.tabs}>
        <span style={{ color: 'var(--bone)' }}>Live</span>
        <span>Memory</span>
        <span>Places</span>
        <span>Journey</span>
        <span>Sky</span>
      </div>
    </div>
  );
}
