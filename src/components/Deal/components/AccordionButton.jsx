import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Text from "../../Text";
import styles from "./AccordionButton.module.scss";

const AccordionButton = ({ isOverviewVisible, setIsOverviewVisible }) => {
  return (
    <div
      className={styles.container}
      onClick={() => setIsOverviewVisible(!isOverviewVisible)}
      data-testid={"accordion-button"}
    >
      <Text bold>{`Read ${isOverviewVisible ? "less" : "more"}`}</Text>
      <Text className={styles.text}>&nbsp;about this hotel</Text>
      {isOverviewVisible ? (
        <FaChevronDown className={styles.icon} data-testid={"chevron-down-icon"} />
      ) : (
        <FaChevronRight className={styles.icon} data-testid={"chevron-right-icon"} />
      )}
    </div>
  );
};

export default AccordionButton;
