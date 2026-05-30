import styles from './ProgressBar.module.css';

function ProgressBar({ persentase, label }) {
  return (
    <div className={styles.container}>
      <div className={styles.barWrapper}>
        <div
          className={styles.bar}
          style={{ width: `${Math.min(100, Math.max(0, persentase))}%` }}
        />
      </div>
      <div className={styles.info}>
        <span className={styles.percentage}>{persentase}%</span>
        {label && <span className={styles.label}>{label}</span>}
      </div>
    </div>
  );
}

export default ProgressBar;