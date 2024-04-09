import styles from "./Text.module.scss";

const Text = ({ bold = false, className = "", children }) => {
  return <p className={`${styles.text} ${bold && styles.bold} ${className}`}>{children}</p>;
};

export default Text;
