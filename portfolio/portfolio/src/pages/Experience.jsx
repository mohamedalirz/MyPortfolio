import { experiences } from '../data/portfolioData';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-wrap">
        <div className="section-label reveal">// experience</div>
        <h2 className="section-title reveal">
          Professional <span className="accent">Journey</span>
        </h2>
        <div className="section-divider reveal" />

        <div className={styles.container}>
          <div className={styles.timeline}>
            {experiences.map(({ period, title, org, bullets }, i) => (
              <div key={period} className={`${styles.item} reveal delay-${i + 1}`}>
                <div className={styles.dot} />
                <div className={styles.period}>{period}</div>
                <div className={styles.title}>{title}</div>
                <div className={styles.org}>{org}</div>
                <ul className={styles.bullets}>
                  {bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
