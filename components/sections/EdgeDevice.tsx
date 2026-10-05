import styles from './EdgeDevice.module.css';

export type EdgeMode = 'edge' | 'mesh';

const STATE = {
  edge: {
    label: 'Sotreus Edge device in Edge Mode, observing',
    header: ['SOTREUS EDGE', 'OBS'],
    lines: [
      ['BLE 128', 'WIFI 23'],
      ['NEW 4', 'STOR 12%'],
      ['BAT 81%', 'GNSS FIX'],
    ],
    led: 'var(--sensed)',
    ledLabel: 'EDGE',
    caption: 'OBSERVING · LAST SYNC 2 MIN AGO',
  },
  mesh: {
    label: 'Sotreus Edge device in Mesh Mode, observation paused',
    header: ['MESH MODE', 'LORA'],
    // [N] is an open item: real node count comes from the owner.
    lines: [['MESHTASTIC'], ['NODES [N]'], ['SENSING PAUSED']],
    led: 'var(--network)',
    ledLabel: 'MESH',
    caption: 'SAVING SESSION → PREPARING MESH MODE → RESTARTED',
  },
} as const;

function Layer({ mode, active }: { mode: EdgeMode; active: boolean }) {
  const s = STATE[mode];
  return (
    <div className={styles.layer} data-active={active}>
      <div className={styles.oledHeader}>
        <span>{s.header[0]}</span>
        <span className="scan">{s.header[1]}</span>
      </div>
      {s.lines.map((line, i) => (
        <div key={line[0]} className={styles.oledLine} style={i === 0 ? { paddingTop: '.25cqw' } : undefined}>
          {line.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function EdgeDevice({ mode }: { mode: EdgeMode }) {
  const s = STATE[mode];
  return (
    <div role="img" aria-label={s.label} className={styles.wrap}>
      <div className={styles.unit}>
        <div className={styles.antenna} />
        <div className={styles.body}>
          {/* 0.96in 128×64 OLED, 34% of body width */}
          <div className={styles.oled}>
            <div className={styles.screen}>
              <Layer mode="edge" active={mode === 'edge'} />
              <Layer mode="mesh" active={mode === 'mesh'} />
              <div aria-hidden="true" className={styles.scanlines} />
            </div>
          </div>
          {/* right controls */}
          <div className={styles.controls}>
            <span className={styles.brand}>SOTREUS EDGE</span>
            <span className={styles.controlRow}>
              <span className={styles.ledWrap}>
                <span className={styles.led} style={{ background: s.led, boxShadow: `0 0 1.6cqw ${s.led}` }} />
                <span className={styles.ledLabel}>{s.ledLabel}</span>
              </span>
              <span className={styles.dial} />
            </span>
          </div>
          {/* usb-c on edge */}
          <div className={styles.usb} />
        </div>
      </div>
      <div className={styles.caption}>
        <span>0.96″ · 128 × 64 OLED</span>
        <span key={mode} className={styles.captionState}>
          {s.caption}
        </span>
      </div>
    </div>
  );
}
