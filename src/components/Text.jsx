import styles from "./Text.module.scss";

const Text = ({ bold = false, children }) => {
  return <p className={`${styles.text} ${bold && styles.bold}`}>{children}</p>;
};

export default Text;
