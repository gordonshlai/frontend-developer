import styles from "./App.module.scss";
import SortElement from "./components/SortElement";

function App() {
  return (
    <div className={styles.container}>
      <nav className={styles.navBar}>
        <SortElement />
        <SortElement />
        <SortElement />
      </nav>
      <main className={styles.main}>main</main>
    </div>
  );
}

export default App;
