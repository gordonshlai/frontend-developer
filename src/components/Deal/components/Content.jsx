import Text from "../../Text";
import styles from "./Content.module.scss";

const Content = ({ adults, child, infants, date, duration, departingFrom }) => {
  return (
    <>
      <div className={styles.content}>
        {!!adults && (
          <>
            <Text bold>{adults}</Text>
            <Text>{` adult${adults > 1 ? "s" : ""}`}</Text>
          </>
        )}
        {!!child && (
          <>
            <Text>{", "}</Text>
            <Text bold>{child}</Text>
            <Text>{` child${child > 1 ? "ren" : ""}`}</Text>
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

      {date && duration && (
        <div className={styles.content}>
          <Text bold>{date}</Text>
          <Text>{" for "}</Text>
          <Text bold>{duration}</Text>
        </div>
      )}

      {departingFrom && (
        <div className={styles.content}>
          <Text>{"departing from "}</Text>
          <Text bold>{departingFrom}</Text>
        </div>
      )}
    </>
  );
};

export default Content;
