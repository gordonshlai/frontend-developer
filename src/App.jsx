import { Fragment, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { MdSortByAlpha } from "react-icons/md";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import styles from "./App.module.scss";
import Deal from "./components/Deal/Deal";
import SortElement from "./components/SortElement";
import deals from "./data/deals";

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

function App() {
  const [selected, setSelected] = useState(options[0]);
  const sortedDeals = [...deals].sort(selected.sortingFunction);

  return (
    <div className={styles.container}>
      <section>
        {options?.map((option, index) => (
          <Fragment key={option?.text + index}>
            {index !== 0 && <div className={styles.divider} />}
            <SortElement option={option} selected={selected} onClick={() => setSelected(option)} />
          </Fragment>
        ))}
      </section>
      <main>
        {sortedDeals?.map((deal, index) => (
          <Deal deal={deal} key={deal?.title + index} />
        ))}
      </main>
    </div>
  );
}

export default App;
