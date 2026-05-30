import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon}>🔍</div>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>Halaman tidak ditemukan</p>
        <p className={styles.description}>
          Maaf, halaman yang kamu cari tidak tersedia.
        </p>
        <Link to="/" className={styles.button}>
          Kembali ke Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;