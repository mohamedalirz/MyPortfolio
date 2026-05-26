import { aboutCards } from '../data/portfolioData';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about">
      <div className="section-wrap">
        <div className={styles.grid}>
          {/* Left: Text */}
          <div>
            <div className="section-label reveal">// who I am</div>
            <h2 className="section-title reveal">
              Engineering the <span className="accent">Future</span>,<br />
              One System at a Time
            </h2>
            <div className="section-divider reveal" />
            <div className={styles.text}>
              <p className="reveal delay-1">
                I'm a <strong>passionate fullstack engineer</strong> who architects and ships
                high-performance digital systems that scale. From intelligent AI platforms to
                hardened cybersecurity tools — I engineer with purpose and precision.
              </p>
              <p className="reveal delay-2">
                My expertise spans <strong>scalable backend architectures</strong>, modern SaaS
                products, real-time event-driven systems, cloud-native deployments, and intelligent
                automation. My code doesn't just work — it <strong>performs under pressure</strong>{' '}
                and stays resilient under attack.
              </p>
              <div className={`${styles.highlight} reveal delay-3`}>
                "Performance is not a feature. It's the foundation on which elite systems are built."
              </div>
              <p className="reveal delay-4">
                With deep focus on <strong>system design, security, and developer craft</strong>, I
                deliver solutions that are built to last, engineered to impress, and designed to
                grow.
              </p>
            </div>
          </div>

          {/* Right: Cards */}
          <div className={styles.cards}>
            {aboutCards.map(({ icon, title, desc }, i) => (
              <div key={title} className={`about-card ${styles.card} reveal delay-${i + 1}`}>
                <div className={styles.cardIcon}>{icon}</div>
                <div className={styles.cardTitle}>{title}</div>
                <div className={styles.cardDesc}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
