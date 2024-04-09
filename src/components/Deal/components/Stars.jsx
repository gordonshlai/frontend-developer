import { FaStar } from "react-icons/fa6";
import styles from "./Stars.module.scss";

const Stars = ({ stars }) => {
  return (
    <div className={styles.container}>
      {Array(stars)
        .fill(true)
        .map((_, i) => (
          <FaStar className={styles.star} key={i} data-testid={`star-${i}`} />
        ))}
    </div>
  );
};

export default Stars;
