import Heading from "../../Heading";
import styles from "./AccordionContent.module.scss";

const AccordionContent = ({ overview }) => {
  return (
    <article className={styles.container}>
      <Heading className={styles.heading}>Overview</Heading>
      <p className={styles.overview}>{overview}</p>
    </article>
  );
};

export default AccordionContent;
