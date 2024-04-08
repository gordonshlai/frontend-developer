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
      <section className={styles.description}>
        <img className={styles.img} src={img} />
        <div>
          <header>{title}</header>

          <Text>{address}</Text>

          <div>
            {Array(stars)
              .fill(true)
              .map((_, i) => (
                <FaStar color={"#fedc07"} key={i} />
              ))}
          </div>

          <div>
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

          <div>
            <Text bold>{date}</Text>
            <Text>{" for "}</Text>
            <Text bold>{duration}</Text>
          </div>

          <div>
            <Text>{"departing from "}</Text>
            <Text bold>{departingFrom}</Text>
          </div>

          <div className={styles.button}>
            <p>Book now</p>
            <p>{`£ ${price}`}</p>
          </div>
        </div>

        <div className={styles.accordion} onClick={() => setIsOverviewVisible(!isOverviewVisible)}>
          <Text bold>{`Read ${isOverviewVisible ? "less" : "more"}`}</Text>
          <Text>&nbsp;about this hotel</Text>
          {isOverviewVisible ? <FaChevronDown size={"1.3rem"} /> : <FaChevronRight size={"1.3rem"} />}
        </div>
      </section>

      {isOverviewVisible && (
        <article>
          <header>Overview</header>
          <Text>{overview}</Text>
        </article>
      )}
    </div>
  );
};

export default Deal;
