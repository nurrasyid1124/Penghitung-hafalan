import ProgressBar from '../../component/ProgressBar/Progressbar';
import styles from './ProgressPage.module.css';

function ProgressPage({ hafalanList, totalAyat, selesaiAyat, persentase }) {
  const totalSurah = hafalanList.length;
  const selesaiSurah = hafalanList.filter(h => h.selesai).length;
  const belumSurah = totalSurah - selesaiSurah;
  const belumAyat = totalAyat - selesaiAyat;

  const getMotivasi = () => {
    if (persentase === 0) return 'Semangat mulai hafalan! 💪';
    if (persentase <= 30) return 'Semangat mulai hafalan! 💪';
    if (persentase <= 70) return 'Sudah separuh jalan, terus! 🔥';
    if (persentase < 100) return 'Hampir selesai, pertahankan! ⭐';
    return 'MasyaAllah, hafalan selesai semua! 🎉';
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Progress Hafalan</h1>

      <div className={styles.mainProgress}>
        <ProgressBar persentase={persentase} />
        <p className={styles.motivasi}>{getMotivasi()}</p>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>📖</div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{totalSurah}</span>
            <span className={styles.statLabel}>Total Surah</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>✅</div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{selesaiSurah}</span>
            <span className={styles.statLabel}>Selesai</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>⏳</div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{belumSurah}</span>
            <span className={styles.statLabel}>Belum</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>📝</div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{totalAyat}</span>
            <span className={styles.statLabel}>Total Ayat</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>🎯</div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{selesaiAyat}</span>
            <span className={styles.statLabel}>Ayat Selesai</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>📌</div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{belumAyat}</span>
            <span className={styles.statLabel}>Ayat Belum</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressPage;