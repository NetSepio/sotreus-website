import styles from './WalletDevice.module.css';

export default function WalletDevice() {
  return (
    <div
      role="img"
      aria-label="Sotreus Wallet, showing a request to verify before signing. Keys stay in the secure element. Approve with OK."
      className={styles.wrap}
    >
      <div className={styles.unit}>
        <div className={styles.body}>
          {/* Compact color display. Not the Edge OLED. */}
          <div className={styles.display}>
            <div className={styles.screen}>
              <div className={styles.header}>
                <span>VERIFY</span>
                <span className="scan">READY</span>
              </div>
              <div className={styles.line}>BEFORE SIGNING</div>
              <div className={styles.line}>KEY IN SE050</div>
              <div className={styles.line}>USB · FIDO2</div>
              <div aria-hidden="true" className={styles.scanlines} />
            </div>
          </div>
          <div className={styles.controls}>
            <span className={styles.brand}>SOTREUS WALLET</span>
            <span className={styles.keys}>
              <span className={styles.key}>
                <span className={styles.cap} />
                <span className={styles.keyLabel}>BACK</span>
              </span>
              <span className={styles.key}>
                <span className={`${styles.cap} ${styles.ok}`} />
                <span className={styles.keyLabel}>OK</span>
              </span>
            </span>
          </div>
          <div className={styles.usb} />
        </div>
      </div>
      <div className={styles.caption}>
        <span>ESP32-S3 · NXP SE050E2 · USB-C</span>
        <span>REVIEW ON DEVICE → CONFIRM WITH OK</span>
      </div>
    </div>
  );
}
