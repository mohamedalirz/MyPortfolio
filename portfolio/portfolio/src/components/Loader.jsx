import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.loader} ${hidden ? styles.hidden : ''}`}>
      <div className={styles.logo}>DEV.MATRIX</div>
      <div className={styles.sub}>Initializing Systems</div>
      <div className={styles.progress}>
        <div className={styles.bar} />
      </div>
    </div>
  );
}
