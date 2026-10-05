'use client';

import { useState, type ReactNode } from 'react';
import EdgeDevice, { type EdgeMode } from './EdgeDevice';
import styles from './EdgeModeSwitch.module.css';

const MODES: { id: EdgeMode; label: string }[] = [
  { id: 'edge', label: 'Edge Mode' },
  { id: 'mesh', label: 'Mesh Mode' },
];

export default function EdgeModeSwitch({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<EdgeMode>('edge');

  return (
    <div className={styles.row}>
      <div className={`reveal ${styles.copy}`}>
        {children}
        <div className={styles.personality}>
          <div className={styles.label}>ONE DEVICE · TWO PERSONALITIES</div>
          <div role="group" aria-label="Edge personality" className={styles.group}>
            {MODES.map((m) => (
              <button
                key={m.id}
                type="button"
                aria-pressed={mode === m.id}
                className={styles.option}
                onClick={() => setMode(m.id)}
              >
                {m.label}
              </button>
            ))}
          </div>
          <div className={styles.descriptions}>
            <p className={styles.desc} data-active={mode === 'edge'} aria-hidden={mode !== 'edge'}>
              <strong>Edge Mode — the everyday default.</strong> Continuous or duty-cycled BLE and
              2.4 GHz Wi-Fi observation, a local append-only log, optional GNSS, and no LoRa
              transmission.
            </p>
            <p className={styles.desc} data-active={mode === 'mesh'} aria-hidden={mode !== 'mesh'}>
              <strong>Mesh Mode — when communications matter more.</strong> The app switches Edge to
              Meshtastic so it can join your LoRa mesh. Environmental observation is clearly paused
              until you switch back.
            </p>
          </div>
        </div>
      </div>
      <div className={`reveal ${styles.device}`}>
        <EdgeDevice mode={mode} />
      </div>
    </div>
  );
}
