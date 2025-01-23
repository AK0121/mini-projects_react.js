import { useState } from "react";
import styles from "./Styles/counter.module.css"

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.number}>{count}</h1>
      </div>

      <section className={styles.btnsContainer}>
        <button onClick={increment} className={styles.increment}>
          +
        </button>
        <button onClick={decrement} className={styles.increment}>
          -
        </button>
      </section>
    </>
  );
}

export default Counter;



