import { techStack } from '../data/portfolioData';
import styles from './TechStack.module.css';

export default function TechStack() {
  return (
    <div className={styles.section}>
      <div className={`section-label reveal ${styles.center}`}>// tech arsenal</div>
      <h2 className={`section-title reveal ${styles.center}`} style={{ marginBottom: '0.5rem' }}>
        Technologies I Master
      </h2>
      <div className={`section-divider reveal ${styles.divider}`} />

      <div className={`reveal ${styles.cloud}`}>
        {techStack.map((tech) => (
          <span key={tech} className={`tech-chip ${styles.chip}`}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
