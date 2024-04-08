import styles from "./Heading.module.scss";

const Heading = ({ children, className }) => {
  return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
};

export default Heading;
