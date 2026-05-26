import { useRef, useState } from 'react';
import { projects } from '../data/portfolioData';
import styles from './Projects.module.css';

function ProjectCard({ project, delay }) {
  const cardRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  const onMouseMove = (e) => {
    const card = cardRef.current;
    const r = card.getBoundingClientRect();

    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;

    card.style.transform = `
      perspective(800px)
      translateY(-8px)
      rotateX(${-y * 7}deg)
      rotateY(${x * 7}deg)
    `;
  };

  const onMouseLeave = () => {
    cardRef.current.style.transform =
      'perspective(800px) translateY(0) rotateX(0) rotateY(0)';
  };

  return (
    <div
      ref={cardRef}
      className={`project-card reveal delay-${delay} ${styles.card}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Banner with Video Thumbnail */}
      <div className={styles.banner}>
        {showVideo ? (
  <div className={styles.videoContainer}>
    <iframe
      width="100%"
      height="100%"
      src={project.videoSrc + "?autoplay=1"}
      title={project.name}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
) : (
          <>
            <img
              src={project.image}
              alt={project.name}
              className={styles.bannerImg}
            />
            <button 
              className={styles.playButton}
              onClick={() => setShowVideo(true)}
            >
              ▶
            </button>
          </>
        )}
      </div>

      <div className={styles.inner}>
        <div className={styles.number}>{project.number}</div>

        <div className={styles.badge}>
          {project.badge}
        </div>

        <div className={styles.name}>
          {project.name}
        </div>

        <div className={styles.desc}>
          {project.desc}
        </div>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={styles.tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.pbtn} ${styles.pbtnGhost}`}
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-wrap">
        <div className="section-label reveal">// selected work</div>
        <h2 className="section-title reveal">
          Projects That <span className="accent">Dominate</span>
        </h2>
        <div className="section-divider reveal" />

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}