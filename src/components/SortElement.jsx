import { MdSortByAlpha } from "react-icons/md";
import styles from "./SortElement.module.scss";

const SortElement = () => {
  return (
    <div className={styles.container}>
      <p>sort alphabetically</p>
      <MdSortByAlpha size={"1.3rem"} />
    </div>
  );
};

export default SortElement;
