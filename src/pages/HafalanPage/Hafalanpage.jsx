import HafalanForm from '../../components/HafalanForm/HafalanForm';
import HafalanList from '../../components/HafalanList/HafalanList';
import styles from './HafalanPage.module.css';

function HafalanPage({ hafalanList, onTambah, onHapus, onToggle, onUpdateProgres }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Daftar Hafalan</h1>
      <HafalanForm onTambah={onTambah} />
      <HafalanList
        hafalanList={hafalanList}
        onToggle={onToggle}
        onHapus={onHapus}
        onUpdateProgres={onUpdateProgres}
      />
    </div>
  );
}

export default HafalanPage;