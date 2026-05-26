import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>DEV.MATRIX</div>
      <div className={styles.text}>© 2025 — Engineered with precision. All rights reserved.</div>
      <div className={styles.status}>
        System status: <span className={styles.live}>● online</span>
      </div>
    </footer>
  );
}
