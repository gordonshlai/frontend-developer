import { useState } from "react";
import styles from "./App.module.scss";
import SortElement from "./components/SortElement";
import { MdSortByAlpha } from "react-icons/md";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";

const options = [
  { text: "alphabetically", icon: <MdSortByAlpha /> },
  { text: "price", icon: <RiMoneyPoundCircleFill /> },
  { text: "star rating", icon: <FaStar /> },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className={styles.container}>
      <nav className={styles.navBar}>
        {options?.map((option, index) => (
          <SortElement
            option={option}
            key={option?.text + index}
            selected={selected}
            onClick={() => setSelected(option)}
          />
        ))}
      </nav>
      <main className={styles.main}>main</main>
    </div>
  );
}

export default App;
