import Eyebrow from '@/components/Eyebrow';
import EdgeModeSwitch from './EdgeModeSwitch';
import styles from './Edge.module.css';

const SPECS = [
  ['COMPUTE', 'ESP32-S3', 'Runs Edge firmware, scan scheduling and secure app sync.'],
  ['BLUETOOTH', 'Bluetooth 5 LE', 'Observes advertisements and pairs with the app.'],
  ['WI-FI', '2.4 GHz 802.11 b/g/n', 'Visible 2.4 GHz access points. Not 5 or 6 GHz.'],
  ['LORA', 'SX1262', 'Meshtastic in Mesh Mode. Silent in Edge Mode.'],
  ['LOCATION', 'Optional GNSS', 'Anchors observations when your phone isn’t there.'],
  ['STORAGE', '8 MB flash', 'Append-only observation log with bounded retention.'],
  ['DISPLAY', '0.96″ OLED', 'Mode, sensor health, battery and scan counts at a glance.'],
  ['POWER', 'Own battery', 'Field power profiles, so your phone pays nothing.'],
];

const COMPARISON = [
  [
    'Observation depends on Android scan cadence and power policy.',
    'Edge keeps its own schedule while the phone sleeps.',
  ],
  [
    'A journey can lose coverage when the app is constrained.',
    'Edge keeps logging and syncs the full session later.',
  ],
  [
    'Phone location is the only location source.',
    'External GNSS anchors Edge observations independently.',
  ],
  ['Battery cost is paid by the phone.', 'A dedicated battery isolates the sensing workload.'],
  ['No LoRa hardware.', 'The same node switches to Meshtastic for off-grid comms.'],
];

export default function Edge() {
  return (
    <section id="edge" className="section">
      <div className={`container ${styles.inner}`}>
        <EdgeModeSwitch>
          <Eyebrow num="06">Sotreus Edge · V2</Eyebrow>
          <h2 className="h2">
            A pocket companion that keeps observing <em>when your phone can’t.</em>
          </h2>
          <p className="body">
            Sotreus Edge scans, timestamps and stores on its own battery, then syncs to the app over
            Bluetooth. The app stays the brain. Edge becomes the always-on sensing layer.
          </p>
        </EdgeModeSwitch>

        <dl className={`reveal ${styles.specs}`}>
          {SPECS.map(([k, v, d]) => (
            <div key={k} className={styles.spec}>
              <dt className={styles.specKey}>{k}</dt>
              <dd className={styles.specValue}>{v}</dd>
              <dd className={styles.specText}>{d}</dd>
            </div>
          ))}
        </dl>

        <div className={`reveal ${styles.compare}`}>
          <div className={styles.compareCopy}>
            <h3 className="h3">The app gets more capable when Edge is present.</h3>
            <p className={styles.boundary}>
              Honest boundary: Edge is not an ADS-B or satellite receiver. Aircraft context stays
              network-reported and orbital context stays predicted.
            </p>
            <p className={styles.baseline}>PROTOTYPE BASELINE · HELTEC WIFI LORA 32 V3</p>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">PHONE ONLY</th>
                  <th scope="col" style={{ color: 'var(--sensed)' }}>
                    PHONE + EDGE
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(([phone, edge]) => (
                  <tr key={phone} className="row-hover">
                    <td style={{ color: 'var(--muted)' }}>{phone}</td>
                    <td>{edge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
