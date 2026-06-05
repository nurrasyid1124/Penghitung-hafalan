import { useMemo, useState } from 'react';
import HafalanForm from '../../component/HafalanForm/HafalanForm';
import HafalanList from '../../component/HafalanList/HafalanList';
import styles from './HafalanPage.module.css';

function HafalanPage({ hafalanList, onTambah, onHapus, onToggle, onUpdateProgres }) {
  const [search, setSearch] = useState('');

  const filteredHafalanList = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return hafalanList;
    return hafalanList.filter((item) => item.surah.toLowerCase().includes(query));
  }, [hafalanList, search]);

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.title}>Daftar Hafalan</h1>
          <p className={styles.subtitle}>
            Tambahkan surah dan gunakan kotak pencarian untuk menemukan nama surah dengan cepat.
          </p>
        </div>
        <div className={styles.searchWrapper}>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama surah..."
            className={styles.searchInput}
            aria-label="Cari nama surah"
          />
        </div>
      </div>
      <HafalanForm onTambah={onTambah} />
      <HafalanList
        hafalanList={filteredHafalanList}
        onToggle={onToggle}
        onHapus={onHapus}
        onUpdateProgres={onUpdateProgres}
        searchTerm={search}
      />
    </div>
  );
}

export default HafalanPage;