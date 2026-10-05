import Eyebrow from '@/components/Eyebrow';
import PhoneMock from './PhoneMock';
import styles from './HowItWorks.module.css';

const QUESTIONS = [
  ['What is here?', 'How many radios and device families are visible right now.'],
  [
    'What is familiar?',
    'What matches this place, or devices you have already tagged as yours or expected.',
  ],
  ['What changed?', 'What is new, unusually persistent, or different from your previous visits.'],
  ['What have I seen before?', 'Which tagged or fingerprinted entities have appeared somewhere else.'],
  [
    'What is around or above me?',
    'Nearby aircraft, drone Remote ID broadcasts and satellite passes — when you turn context on.',
  ],
];

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className={`container ${styles.inner}`}>
        <div className={`reveal ${styles.copy}`}>
          <div className={styles.head}>
            <Eyebrow num="02">How it works</Eyebrow>
            <h2 className="h2">Walk into any space. Get five answers.</h2>
            <p className="body" style={{ maxWidth: '34em' }}>
              Your Android phone is the first sensor. Sotreus observes nearby Bluetooth LE and
              visible Wi-Fi, learns what is normal for a place, and keeps the evidence on your
              device.
            </p>
          </div>
          <ol className={styles.list}>
            {QUESTIONS.map(([q, a], i) => (
              <li key={q} className={`row-hover ${styles.item}`}>
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                <div className={styles.qa}>
                  <h3 className={styles.q}>{q}</h3>
                  <p className={styles.a}>{a}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className={`reveal ${styles.phone}`}>
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}
