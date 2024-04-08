import Text from "../../Text";
import styles from "./Button.module.scss";

const Button = ({ price }) => {
  return (
    <button className={styles.button}>
      <Text className={styles.bookNow}>Book now</Text>
      <Text className={styles.price}>{`£ ${price}`}</Text>
    </button>
  );
};

export default Button;
