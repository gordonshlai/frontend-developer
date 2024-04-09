import { useState } from "react";
import styles from "./App.module.scss";
import Deal from "./components/Deal/Deal";
import SortingList from "./components/SortingList/SortingList";
import deals from "./data/deals";

const sortByPrice = (a, b) => parseFloat(a.price.replace(",", "")) - parseFloat(b.price.replace(",", ""));

function App() {
  const [sortedDeals, setSortedDeals] = useState(deals.sort(sortByPrice));

  return (
    <div className={styles.container}>
      <SortingList sortedDeals={sortedDeals} setSortedDeals={setSortedDeals} />

      <main>
        {sortedDeals?.map((deal, index) => (
          <Deal deal={deal} key={deal?.title + index} />
        ))}
      </main>
    </div>
  );
}

export default App;
