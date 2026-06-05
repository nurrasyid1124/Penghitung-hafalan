import HafalanCard from '../HafalanCard/HafalanCard';
import styles from './HafalanList.module.css';

function HafalanList({ hafalanList, onToggle, onHapus, onUpdateProgres, searchTerm }) {
  if (hafalanList.length === 0) {
    return (
      <div className={styles.empty}>
        <p>
          {searchTerm
            ? `Tidak ditemukan surah dengan nama \"${searchTerm}\".`
            : 'Belum ada hafalan. Yuk tambah sekarang!'}
        </p>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {hafalanList.map((hafalan) => (
        <HafalanCard
          key={hafalan.id}
          hafalan={hafalan}
          onToggle={onToggle}
          onHapus={onHapus}
          onUpdateProgres={onUpdateProgres}
          searchTerm={searchTerm}
        />
      ))}
    </div>
  );
}

export default HafalanList;