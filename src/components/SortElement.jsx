import styles from "./SortElement.module.scss";
import Text from "./Text";

const SortElement = ({ option, selected, onClick }) => {
  const active = selected === option;

  return (
    <div className={`${styles.container} ${active ? styles.active : styles.inactive}`} onClick={onClick}>
      <div>
        <Text>sort</Text>
        <Text>{option?.text !== "alphabetically" && " by"}</Text>
        <Text bold>{` ${option?.text}`}</Text>
      </div>

      <div className={`${styles?.icon} ${!active && styles.inactiveIcon}`}>{option?.icon}</div>
    </div>
  );
};

export default SortElement;
