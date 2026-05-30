import styles from './AboutPage.module.css';

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>📖</div>
        <h1 className={styles.title}>Hafalan App</h1>
        <p className={styles.version}>Versi 1.0</p>

        <p className={styles.description}>
          Aplikasi penghitung hafalan Al-Quran yang membantu kamu melacak
          progress hafalan dengan mudah dan menyenangkan.
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Fitur</h2>
          <ul className={styles.featureList}>
            <li>Tambah hafalan baru tanpa reload</li>
            <li>Tandai hafalan selesai dengan mudah</li>
            <li>Hapus hafalan yang tidak diperlukan</li>
            <li>Lihat progress secara real-time</li>
            <li>Statistik lengkap surah dan ayat</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Tech Stack</h2>
          <div className={styles.techGrid}>
            <span className={styles.techBadge}>React</span>
            <span className={styles.techBadge}>Vite</span>
            <span className={styles.techBadge}>React Router</span>
            <span className={styles.techBadge}>CSS Modules</span>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Dibuat dengan ❤️</h2>
          <p className={styles.footer}>Untuk para pecinta Al-Quran</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;