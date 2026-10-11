import Eyebrow from '@/components/Eyebrow';
import WalletDevice from './WalletDevice';
import styles from './Edge.module.css';
import row from './EdgeModeSwitch.module.css';

const SPECS = [
  [
    'COMPUTE',
    'ESP32-S3',
    'Transaction review, the screen, the buttons, USB sign-in, and one-time codes.',
  ],
  [
    'ELEMENT',
    'NXP SE050E2',
    'Wallet and authenticator keys are created and kept in the secure element.',
  ],
  [
    'DISPLAY',
    'Color screen',
    'The transaction or sign-in is shown on the device before you approve it.',
  ],
  ['CONTROLS', 'Back and OK', 'Two buttons. A supported signature waits for a physical press.'],
  [
    'LINK',
    'USB-C',
    'FIDO2 to a phone, laptop, or browser. Bluetooth only where that path is supported.',
  ],
  [
    'MEMORY',
    '16 MB · 8 MB',
    'Target flash and PSRAM. Final parts depend on the exact secure element.',
  ],
  [
    'IDENTITY',
    'Passkeys · OTP',
    'Passwordless sign-in, USB security-key 2FA, and on-device TOTP or HOTP.',
  ],
  [
    'CHAINS',
    'Ethereum · Solana',
    'Supported transfers are checked. An opaque request is not signed.',
  ],
];

const VERSIONS = [
  [
    'Explanations come from an internet-connected phone or laptop.',
    'A compact model on the ESP32-S3 classifies supported transactions offline.',
  ],
  [
    'The secure element verifies the request and signs after you confirm.',
    'Same signing path. Signed updates deliver models, policies, and decoders.',
  ],
  [
    'USB FIDO2, passkeys where supported, and on-device one-time codes.',
    'Same hardware. A separate password vault is optional, and later.',
  ],
];

export default function WalletPanel() {
  return (
    <div className={styles.inner}>
      <div className={row.row}>
        <div className={row.copy}>
          <Eyebrow num="06">Sotreus Wallet</Eyebrow>
          <h2 className="h2">
            A pocket key that shows the request <em>before anything is signed.</em>
          </h2>
          <p className="body">
            Sotreus Wallet keeps signing keys in a secure element, shows the transaction or sign-in
            on its own screen, and waits for a physical press. Passkeys and one-time codes sit
            beside the wallet keys, under separate rules.
          </p>
          <div className={row.personality}>
            <div className={row.label}>ONE DEVICE · SEPARATE KEYS</div>
            <p className={row.desc} data-active="true">
              <strong>Wallet, passkey, and one-time code.</strong> Each has its own policy. An
              explanation can describe the request. Only the secure element, and the press you make,
              can approve a supported signature.
            </p>
          </div>
        </div>
        <div className={row.device}>
          <WalletDevice />
        </div>
      </div>

      <dl className={styles.specs}>
        {SPECS.map(([k, v, d]) => (
          <div key={k} className={styles.spec}>
            <dt className={styles.specKey}>{k}</dt>
            <dd className={styles.specValue}>{v}</dd>
            <dd className={styles.specText}>{d}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.compare}>
        <div className={styles.compareCopy}>
          <h3 className="h3">
            V1 explains from the cloud. V2 can explain on the device. Neither one signs.
          </h3>
          <p className={styles.boundary}>
            Honest boundary: proposed device. The exact secure element still has to be checked for
            the needed algorithms, key slots, and credential capacity. The chip alone is not a FIDO
            certification.
          </p>
          <p className={styles.baseline}>PROPOSED · ESP32-S3 + NXP SE050E2</p>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">V1 · CONNECTED</th>
                <th scope="col" style={{ color: 'var(--predicted)' }}>
                  V2 · SOVEREIGN
                </th>
              </tr>
            </thead>
            <tbody>
              {VERSIONS.map(([v1, v2]) => (
                <tr key={v1} className="row-hover">
                  <td style={{ color: 'var(--muted)' }}>{v1}</td>
                  <td>{v2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
