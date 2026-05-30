import styles from './HafalanCard.module.css';

function HafalanCard({ hafalan, onToggle, onHapus, onUpdateProgres }) {
  const handleProgresChange = (delta) => {
    onUpdateProgres(hafalan.id, hafalan.progres + delta);
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    onUpdateProgres(hafalan.id, value);
  };

  return (
    <div className={`${styles.card} ${hafalan.selesai ? styles.completed : ''}`}>
      <div className={styles.info}>
        <h3 className={styles.surah}>{hafalan.surah}</h3>
        <p className={styles.ayat}>{hafalan.ayat} ayat</p>
      </div>

      <div className={styles.progressSection}>
        <div className={styles.progressHeader}>
          <span className={styles.progressLabel}>Progress</span>
          <span className={styles.progressValue}>{hafalan.progres}%</span>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${hafalan.progres}%` }}
          />
        </div>
        <div className={styles.progressControls}>
          <button
            type="button"
            onClick={() => handleProgresChange(-10)}
            className={styles.progressBtn}
            disabled={hafalan.progres === 0}
          >
            -10%
          </button>
          <input
            type="number"
            min="0"
            max="100"
            value={hafalan.progres}
            onChange={handleInputChange}
            className={styles.progressInput}
          />
          <button
            type="button"
            onClick={() => handleProgresChange(10)}
            className={styles.progressBtn}
            disabled={hafalan.progres === 100}
          >
            +10%
          </button>
        </div>
      </div>

      <div className={styles.badge}>
        {hafalan.selesai ? '✅ Selesai' : '⏳ Belum'}
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          onClick={() => onToggle(hafalan.id)}
          className={`${styles.btn} ${styles.btnToggle}`}
          title={hafalan.selesai ? 'Batal selesai' : 'Tandai selesai'}
        >
          ✔
        </button>
        <button
          type="button"
          onClick={() => onHapus(hafalan.id)}
          className={`${styles.btn} ${styles.btnDelete}`}
          title="Hapus"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default HafalanCard;