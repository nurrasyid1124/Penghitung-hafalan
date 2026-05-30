import { Link } from 'react-router-dom';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import styles from './HomePage.module.css';

function HomePage({ selesai, total, persentase }) {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Hafalan App</h1>
        <p className={styles.subtitle}>
          Lacak progress hafalan Al-Quran kamu dengan mudah dan menyenangkan
        </p>
      </div>

      <div className={styles.summary}>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{total}</span>
            <span className={styles.statLabel}>Total Surah</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{selesai}</span>
            <span className={styles.statLabel}>Selesai</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{total - selesai}</span>
            <span className={styles.statLabel}>Belum</span>
          </div>
        </div>

        <div className={styles.progressSection}>
          <h3 className={styles.progressTitle}>Progress Hafalan</h3>
          <ProgressBar persentase={persentase} />
        </div>
      </div>

      <Link to="/hafalan" className={styles.cta}>
        Mulai Hafalan
      </Link>
    </div>
  );
}

export default HomePage;