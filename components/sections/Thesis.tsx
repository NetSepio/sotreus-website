import Eyebrow from '@/components/Eyebrow';
import styles from './Thesis.module.css';

export default function Thesis() {
  return (
    <section className="section">
      <div className={`container reveal ${styles.inner}`}>
        <div className={styles.head}>
          <Eyebrow num="01">The visibility gap</Eyebrow>
          <h2 className="h2">
            The world is increasingly instrumented.{' '}
            <em>The individual still lacks a dashboard for it.</em>
          </h2>
        </div>
        <div className={styles.text}>
          <p className={styles.p}>
            Surveillance no longer has a single shape. Cameras, doorbells, trackers, access control,
            beacons, drones, vehicle electronics, building sensors and aircraft all add to an
            environment that is electronically dense — and hard to read.
          </p>
          <p className={styles.p}>
            The problem is <strong>asymmetry</strong>. Infrastructure can sense, log and correlate.
            The person moving through it usually has no comparable view.
          </p>
          <p className={styles.p} style={{ color: 'var(--bone)' }}>
            Sotreus closes part of that gap — honestly, and only with what your devices can
            legitimately observe.
          </p>
        </div>
      </div>
    </section>
  );
}
