import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { MdSortByAlpha } from "react-icons/md";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import styles from "./SortingList.module.scss";
import SortElement from "./components/SortElement";

const options = [
  {
    text: "alphabetically",
    Icon: MdSortByAlpha,
    sortingFunction: (a, b) => a.title.localeCompare(b.title),
  },
  {
    text: "price",
    Icon: RiMoneyPoundCircleFill,
    sortingFunction: (a, b) => parseFloat(a.price.replace(",", "")) - parseFloat(b.price.replace(",", "")),
  },
  {
    text: "star rating",
    Icon: FaStar,
    sortingFunction: (a, b) => b.stars - a.stars,
  },
];

const SortingList = ({ sortedDeals, setSortedDeals }) => {
  const [selected, setSelected] = useState(options[1]);

  return (
    <section data-testid="sorting-list">
      <ul className={styles.ul}>
        {options?.map((option, index) => (
          <li key={option?.text + index}>
            {index !== 0 && <div className={styles.divider} />}

            <SortElement
              option={option}
              selected={selected}
              onClick={() => {
                setSelected(option);
                setSortedDeals([...sortedDeals].sort(option.sortingFunction));
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SortingList;
