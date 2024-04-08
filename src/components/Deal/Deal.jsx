import { useState } from "react";
import styles from "./Deal.module.scss";
import Text from "../Text";
import Heading from "../Heading";
import Stars from "./components/Stars";
import Content from "./components/Content";
import Button from "./components/Button";
import AccordionButton from "./components/AccordionButton";
import AccordionContent from "./components/AccordionContent";

const Deal = ({ deal }) => {
  const { img, title, address, stars, adults, child, infants, date, duration, departingFrom, price, overview } = deal;

  const [isOverviewVisible, setIsOverviewVisible] = useState(false);

  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <img className={styles.img} src={img} />
        <div className={styles.description}>
          <Heading className={styles.title}>{title}</Heading>
          <Text className={styles.address}>{address}</Text>
          <Stars stars={stars} />
          <Content
            adults={adults}
            child={child}
            infants={infants}
            date={date}
            duration={duration}
            departingFrom={departingFrom}
          />
          <Button price={price} />
        </div>

        <AccordionButton isOverviewVisible={isOverviewVisible} setIsOverviewVisible={setIsOverviewVisible} />
      </section>

      {isOverviewVisible && <AccordionContent overview={overview} />}
    </div>
  );
};

export default Deal;
