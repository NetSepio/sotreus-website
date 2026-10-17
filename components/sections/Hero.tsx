import ListeningField from './ListeningField';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div aria-hidden="true" className={styles.grid} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>Situational awareness, privately yours</span>
          </div>
          <h1 className={styles.h1}>
            Protect the self.
            <br />
            <em>Perceive the world.</em>
          </h1>
          <p className={styles.lead}>
            Sotreus is a private instrument for the space around you. An Android app — with a pocket
            Edge companion — that shows what nearby electronics are broadcasting, remembers what you
            have encountered before, and adds airspace and orbital context.
          </p>
          <div className={styles.ctas}>
            <a className={`btn-primary ${styles.ctaPrimary}`} href="#download">
              Download for Android
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className={`btn-ghost ${styles.ctaGhost}`} href="#discover">
              How Sotreus works
            </a>
          </div>
          <div className={styles.trust}>
            <span>Local-first</span>
            <span aria-hidden="true">/</span>
            <span>Evidence-first</span>
            <span aria-hidden="true">/</span>
            <span>Continuous observation</span>
          </div>
        </div>
        <div className={styles.fieldWrap}>
          <ListeningField />
        </div>
      </div>
    </section>
  );
}
