import styles from './HafalanCard.module.css';

function HafalanCard({ hafalan, onToggle, onHapus, onUpdateProgres, searchTerm }) {
  const handleProgresChange = (delta) => {
    onUpdateProgres(hafalan.id, hafalan.progres + delta);
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    onUpdateProgres(hafalan.id, value);
  };

  const escapeHtml = (value) =>
    value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

  const highlightSurah = (text, query) => {
    const safeText = escapeHtml(text);
    const safeQuery = query.trim();

    if (!safeQuery) return safeText;

    const escapedQuery = safeQuery.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');

    return safeText.replace(regex, '<mark>$1</mark>');
  };

  const surahTitle = searchTerm
    ? highlightSurah(hafalan.surah, searchTerm)
    : escapeHtml(hafalan.surah);

  return (
    <div className={`${styles.card} ${hafalan.selesai ? styles.completed : ''}`}>
      <div className={styles.info}>
        <h3
          className={styles.surah}
          dangerouslySetInnerHTML={{ __html: surahTitle }}
        />
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