import { useState, useEffect } from 'react';
import { navLinks } from '../data/portfolioData';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>
        Mohamed Ali<span className={styles.dot}>.</span>Rzeygui
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={activeSection === href.slice(1) ? styles.active : ''}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className={styles.hire}>
        <span>Hire Me</span>
      </a>

      <button
        className={`${styles.hamburger} ${menuOpen ? styles.hamOpen : ''}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
