'use client';

import { useEffect, type ReactNode } from 'react';
import styles from './DeviceSwitch.module.css';

/** One device at a time. Native radios, so the switch works without JavaScript. */
export default function DeviceSwitch({
  physical,
  digital,
}: {
  physical: ReactNode;
  digital: ReactNode;
}) {
  useEffect(() => {
    const showPhysical = () => {
      if (window.location.hash !== '#edge') return;
      const input = document.getElementById('device-physical') as HTMLInputElement | null;
      if (input) input.checked = true;
    };
    showPhysical();
    window.addEventListener('hashchange', showPhysical);
    return () => window.removeEventListener('hashchange', showPhysical);
  }, []);

  return (
    <div className={styles.stack}>
      <fieldset className={styles.bar}>
        <legend className="visually-hidden">Devices</legend>
        <div className={styles.group}>
          <label className={styles.option}>
            <input
              id="device-physical"
              className={styles.input}
              type="radio"
              name="sotreus-device"
              defaultChecked
            />
            Physical Security
          </label>
          <label className={styles.option}>
            <input
              id="device-digital"
              className={styles.input}
              type="radio"
              name="sotreus-device"
            />
            Digital Security
          </label>
        </div>
      </fieldset>
      <div className={styles.physical}>{physical}</div>
      <div className={styles.digital}>{digital}</div>
    </div>
  );
}
