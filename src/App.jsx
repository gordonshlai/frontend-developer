import { useState } from "react";
import styles from "./App.module.scss";
import SortElement from "./components/SortElement";
import { MdSortByAlpha } from "react-icons/md";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";

const options = [
  { text: "alphabetically", icon: (color) => <MdSortByAlpha size={"1.3rem"} color={color} /> },
  { text: "price", icon: (color) => <RiMoneyPoundCircleFill size={"1.3rem"} color={color} /> },
  { text: "star rating", icon: (color) => <FaStar size={"1.3rem"} color={color} /> },
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
