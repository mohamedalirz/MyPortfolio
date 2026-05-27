import { heroStats } from '../data/portfolioData';
import { useCounters } from '../hooks/useCounters';
import styles from './Hero.module.css';

export default function Hero() {
  useCounters(heroStats);

  return (
    <section id="hero" className={styles.hero}>
      <div className={`orb orb-blue ${styles.orbBlue}`} />
      <div className={`orb orb-purple ${styles.orbPurple}`} />
      <div className={`orb orb-cyan ${styles.orbCyan}`} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for elite projects
          </div>

          <h1 className={styles.title}>
            <span className={styles.line1}>I Build Powerful</span>
            <span className={styles.line2}>Digital Systems.</span>
          </h1>

          <p className={styles.subtitle}>
            Fullstack Engineer<span className={styles.sep}>•</span>
            AI Developer<span className={styles.sep}>•</span>
            Cybersecurity Enthusiast
          </p>

          <div className={styles.stats}>
            {heroStats.map(({ id, value, label }) => (
              <div key={label} className={styles.statBlock}>
                <span className={styles.statNum} id={id}>
                  {value ?? '0'}
                </span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>

          <div className={styles.ctas}>
            <a href="#projects" className={styles.btnPrimary}>
              <span>View Projects →</span>
            </a>
            <a href="#contact" className={styles.btnOutline}>
              Contact Me
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          {/* Blue Circle Background */}
          <div className={styles.blueCircle} />
          
          {/* Profile Image */}
          <div className={styles.imageContainer}>
            <img 
              src="https://res.cloudinary.com/dyuurossx/image/upload/v1779875960/26E0A9CC-BA80-4DCB-95EF-1188D7FEFC59-removebg-preview_mqqgmv.png" 
              alt="Profile"
              className={styles.profileImage}
            />
          </div>

          {/* Floating Cards */}
          {/*<div className={styles.experienceCard}>
            <div className={styles.expIcon}>⚡</div>
            <div>
              <div className={styles.expYears}>5+ Years</div>
              <div className={styles.expText}>Experience</div>
            </div>
          </div>*/}
          
          <div className={styles.statusCard}>
            <div className={styles.statusDot} />
            <div>
              <div className={styles.statusText}>Available for</div>
              <div className={styles.statusWork}>Work & Collaboration</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollLabel}>Scroll</span>
        <div className={styles.scrollTrack} />
      </div>
    </section>
  );
}
