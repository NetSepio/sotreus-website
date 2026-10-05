import Eyebrow from '@/components/Eyebrow';
import styles from './Language.module.css';

const ROWS = [
  ['Threat detected', 'Needs attention'],
  ['Spy camera detected', 'Camera-family signature observed'],
  ['You are being tracked', 'Repeated cross-location re-encounter observed'],
  ['Surveillance aircraft detected', 'Aircraft reported within selected radius'],
  ['Spy satellite overhead', 'Selected satellite predicted overhead'],
  ['Drone operator found', 'Remote ID broadcast observed'],
  ['Area is clean', 'Nothing observable on supported bands'],
  ['Live coverage', 'Last observation · data freshness'],
];

export default function Language() {
  return (
    <section className="section section-alt">
      <div className={`container ${styles.inner}`}>
        <div className={`reveal ${styles.copy}`}>
          <Eyebrow num="05">Calm by design</Eyebrow>
          <h2 className="h2">Awareness without alarmism.</h2>
          <p className="body">
            Sotreus does not promise to find every camera or tell you who is watching. It gives you
            evidence — radio signatures, recurrence, proximity patterns, known device families and
            changes in a place — and shows the source of each.
          </p>
          <p className={styles.decide}>You decide what that evidence means.</p>
        </div>
        <div className={`reveal ${styles.tableWrap}`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">OTHER APPS SAY</th>
                <th scope="col">SOTREUS SAYS</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([other, ours]) => (
                <tr key={other} className="row-hover">
                  <td>
                    <del className={styles.struck}>{other}</del>
                  </td>
                  <td>{ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
