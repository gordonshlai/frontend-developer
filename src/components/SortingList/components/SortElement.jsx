import styles from "./SortElement.module.scss";
import Text from "../../Text";

const SortElement = ({ option, selected, onClick }) => {
  const { text, Icon } = option;
  const active = selected === option;

  const containerStyle = `${styles.container} ${active ? styles.active : styles.inactive}`;
  const iconStyle = `${styles.icon} ${active ? styles.iconActive : styles.iconInactive}`;

  return (
    <div className={containerStyle} onClick={onClick}>
      <div>
        <Text>sort</Text>
        <Text>{text !== "alphabetically" && " by"}</Text>
        <Text bold>{` ${text}`}</Text>
      </div>

      <Icon className={iconStyle} />
    </div>
  );
};

export default SortElement;
