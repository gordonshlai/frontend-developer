import { useState } from "react";
import styles from "./Deal.module.scss";
import Text from "../Text";
import Heading from "../Heading";
import Stars from "./components/Stars";
import Content from "./components/Content";
import Button from "./components/Button";
import AccordionButton from "./components/AccordionButton";
import AccordionContent from "./components/AccordionContent";

const Deal = ({
  deal: { img, title, address, stars, adult, child, infant, date, duration, departingFrom, price, overview },
}) => {
  const [isOverviewVisible, setIsOverviewVisible] = useState(false);

  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <img className={styles.img} src={img} />
        <div className={styles.description}>
          <Heading className={styles.title}>{title}</Heading>
          <Text className={styles.address}>{address}</Text>
          <Stars stars={stars} />
          <Content data={{ adult, child, infant, date, duration, departingFrom }} />
          <Button price={price} />
        </div>

        <AccordionButton isOverviewVisible={isOverviewVisible} setIsOverviewVisible={setIsOverviewVisible} />
      </section>

      {isOverviewVisible && <AccordionContent overview={overview} />}
    </div>
  );
};

export default Deal;
