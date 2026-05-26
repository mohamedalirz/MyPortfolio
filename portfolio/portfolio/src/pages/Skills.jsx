import { useEffect } from 'react';
import { skillCategories } from '../data/portfolioData';
import styles from './Skills.module.css';

export default function Skills() {
  useEffect(() => {
    const bars = document.querySelectorAll(`.${styles.barFill}`);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.transform = `scaleX(${e.target.dataset.w})`;
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    bars.forEach((b) => obs.observe(b));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="section-wrap">
        <div className="section-label reveal">// capabilities</div>
        <h2 className="section-title reveal">
          Technical <span className="accent">Mastery</span>
        </h2>
        <div className="section-divider reveal" />

        <div className={styles.grid}>
          {skillCategories.map(({ icon, title, skills }, catIdx) => (
            <div key={title} className={`${styles.cat} reveal delay-${(catIdx % 3) + 1}`}>
              <div className={styles.catHeader}>
                <span className={styles.catIcon}>{icon}</span>
                <span className={styles.catTitle}>{title}</span>
              </div>
              {skills.map(({ name, pct, w }) => (
                <div key={name} className={styles.skillRow}>
                  <div className={styles.skillMeta}>
                    <span className={styles.skillName}>{name}</span>
                    <span className={styles.skillPct}>{pct}%</span>
                  </div>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} data-w={w} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
