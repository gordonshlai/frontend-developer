import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Text from "../../Text";
import styles from "./AccordionButton.module.scss";

const AccordionButton = ({ isOverviewVisible, setIsOverviewVisible }) => {
  return (
    <div className={styles.container} onClick={() => setIsOverviewVisible(!isOverviewVisible)}>
      <Text bold>{`Read ${isOverviewVisible ? "less" : "more"}`}</Text>
      <Text className={styles.text}>&nbsp;about this hotel</Text>
      {isOverviewVisible ? <FaChevronDown size={"1.3rem"} /> : <FaChevronRight size={"1.3rem"} />}
    </div>
  );
};

export default AccordionButton;
