import { useState } from "react";
import styles from "./App.module.scss";
import SortingList from "./components/SortingList/SortingList";
import deals from "./data/deals";
import DealList from "./components/DealList";

const sortByPrice = (a, b) => parseFloat(a.price.replace(",", "")) - parseFloat(b.price.replace(",", ""));

function App() {
  const [sortedDeals, setSortedDeals] = useState(deals?.sort(sortByPrice) ?? []);

  return (
    <div className={styles.container}>
      <SortingList sortedDeals={sortedDeals} setSortedDeals={setSortedDeals} />
      <DealList sortedDeals={sortedDeals} />
    </div>
  );
}

export default App;
