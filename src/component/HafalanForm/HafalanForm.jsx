import { useState } from 'react';
import styles from './HafalanForm.module.css';

function HafalanForm({ onTambah }) {
  const [surah, setSurah] = useState('');
  const [ayat, setAyat] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!surah.trim()) return;
    if (!ayat || Number(ayat) <= 0) return;

    onTambah(surah.trim(), Number(ayat));
    setSurah('');
    setAyat('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Nama Surah"
          value={surah}
          onChange={(e) => setSurah(e.target.value)}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="Jumlah Ayat"
          value={ayat}
          onChange={(e) => setAyat(e.target.value)}
          className={styles.input}
          min="1"
        />
      </div>
      <button type="submit" className={styles.button}>
        + Tambah
      </button>
    </form>
  );
}

export default HafalanForm;