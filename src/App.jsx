import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { MdSortByAlpha } from "react-icons/md";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import styles from "./App.module.scss";
import hotel1 from "./assets/hotel-image-1.png";
import hotel2 from "./assets/hotel-image-2.png";
import hotel3 from "./assets/hotel-image-3.png";
import Deal from "./components/Deal/Deal";
import SortElement from "./components/SortElement";

const options = [
  { text: "alphabetically", icon: (color) => <MdSortByAlpha size={"1.3rem"} color={color} /> },
  { text: "price", icon: (color) => <RiMoneyPoundCircleFill size={"1.3rem"} color={color} /> },
  { text: "star rating", icon: (color) => <FaStar size={"1.3rem"} color={color} /> },
];

const deals = [
  {
    img: hotel1,
    title: "Iberostar Grand Salome",
    address: "Costa Adeje, Tenerife",
    stars: 5,
    adults: 2,
    child: 2,
    infants: 1,
    date: "3rd July 2019",
    duration: "7 days",
    departingFrom: "East Midlands",
    price: "1,136.50",
    overview:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti repellat id aut, modi velit amet sint ea voluptate dolorum, molestiae vel accusamus commodi esse laborum. Eligendi nisi pariatur ut voluptate nam ducimus similique eaque, ratione vel. Corrupti beatae est sit fugit at labore esse blanditiis tempora mollitia. Nobis, unde quibusdam.",
  },
  {
    img: hotel2,
    title: "Aguamarina Golf Hotel",
    address: "Costa Adeje, Tenerife",
    stars: 4,
    adults: 2,
    child: 1,
    infants: 0,
    date: "27th May 2019",
    duration: "7 days",
    departingFrom: "Liverpool",
    price: "696.80",
    overview:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti repellat id aut, modi velit amet sint ea voluptate dolorum, molestiae vel accusamus commodi esse laborum. Eligendi nisi pariatur ut voluptate nam ducimus similique eaque, ratione vel. Corrupti beatae est sit fugit at labore esse blanditiis tempora mollitia. Nobis, unde quibusdam.",
  },
  {
    img: hotel3,
    title: "Las Piramides Resort",
    address: "Costa Adeje, Tenerife",
    stars: 3,
    adults: 2,
    child: 2,
    infants: 0,
    date: "3rd July 2019",
    duration: "7 days",
    departingFrom: "Manchester",
    price: "499.99",
    overview:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti repellat id aut, modi velit amet sint ea voluptate dolorum, molestiae vel accusamus commodi esse laborum. Eligendi nisi pariatur ut voluptate nam ducimus similique eaque, ratione vel. Corrupti beatae est sit fugit at labore esse blanditiis tempora mollitia. Nobis, unde quibusdam.",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className={styles.container}>
      <nav>
        {options?.map((option, index) => (
          <>
            {index !== 0 && <div className={styles.divider} />}
            <SortElement
              option={option}
              key={option?.text + index}
              selected={selected}
              onClick={() => setSelected(option)}
            />
          </>
        ))}
      </nav>
      <main>
        {deals?.map((deal, index) => (
          <Deal deal={deal} key={index} />
        ))}
      </main>
    </div>
  );
}

export default App;
