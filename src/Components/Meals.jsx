import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./Styles/meals.module.css";

function Meals() {
  const [items, setitems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        // console.log(res.data);
        setitems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section key={idMeal} className={styles.card}>
        <img src={strMealThumb} />
        <section className={styles.content}>
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className={styles.itemsContainer}>{itemslist}</div>;
}

export default Meals;