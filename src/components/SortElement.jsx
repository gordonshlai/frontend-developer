import styles from "./SortElement.module.scss";

const SortElement = ({ option, selected, onClick }) => {
  const active = selected === option;

  return (
    <div className={`${styles.container} ${active ? styles.active : styles.inactive}`} onClick={onClick}>
      <div>
        <p className={styles.text}>sort</p>
        <p className={styles.text}>{option?.text !== "alphabetically" && " by"}</p>
        <p className={`${styles.text} ${styles.bold}`}>{` ${option?.text}`}</p>
      </div>

      <div className={`${styles?.icon} ${!active && styles.inactiveIcon}`}>{option?.icon}</div>
    </div>
  );
};

export default SortElement;
