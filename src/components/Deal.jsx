import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import styles from "./Deal.module.scss";
import Text from "./Text";

const Deal = ({ deal }) => {
  const { img, title, address, stars, adults, children, infants, date, duration, departingFrom, price, overview } =
    deal;

  const [isOverviewVisible, setIsOverviewVisible] = useState(false);

  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <img className={styles.img} src={img} />
        <div className={styles.description}>
          <h1 className={styles.title}>{title}</h1>

          <Text className={styles.address}>{address}</Text>

          <div className={styles.starsContainer}>
            {Array(stars)
              .fill(true)
              .map((_, i) => (
                <FaStar className={styles.star} key={i} />
              ))}
          </div>

          <div className={styles.content}>
            {!!adults && (
              <>
                <Text bold>{adults}</Text>
                <Text>{` adult${adults > 1 ? "s" : ""}`}</Text>
              </>
            )}
            {!!children && (
              <>
                <Text>{", "}</Text>
                <Text bold>{children}</Text>
                <Text>{` child${children > 1 ? "ren" : ""}`}</Text>
              </>
            )}
            {!!infants && (
              <>
                <Text>{` & `}</Text>
                <Text bold>{infants}</Text>
                <Text>{` infant${infants > 1 ? "s" : ""}`}</Text>
              </>
            )}
          </div>

          <div className={styles.content}>
            <Text bold>{date}</Text>
            <Text>{" for "}</Text>
            <Text bold>{duration}</Text>
          </div>

          <div className={styles.content}>
            <Text>{"departing from "}</Text>
            <Text bold>{departingFrom}</Text>
          </div>

          <div className={styles.button}>
            <p className={styles.bookNow}>Book now</p>
            <p className={styles.price}>{`£ ${price}`}</p>
          </div>
        </div>

        <div className={styles.accordion} onClick={() => setIsOverviewVisible(!isOverviewVisible)}>
          <Text bold>{`Read ${isOverviewVisible ? "less" : "more"}`}</Text>
          <Text className={styles.accordionText}>&nbsp;about this hotel</Text>
          {isOverviewVisible ? <FaChevronDown size={"1.3rem"} /> : <FaChevronRight size={"1.3rem"} />}
        </div>
      </section>

      {isOverviewVisible && (
        <article className={styles.accordionContent}>
          <h1 className={styles.title}>Overview</h1>
          <p className={styles.accordionParagraph}>{overview}</p>
        </article>
      )}
    </div>
  );
};

export default Deal;
