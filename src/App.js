import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommendation from "./Recommendations/Recommend";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css"

// Database
import products from "./db/data";
import Card from "./Components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ***************** input filter *****************
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  // ***************** radio filter *****************

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // ***************** buttons filter *****************
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, query, selected) {
    let filteredProducts = products;

    // input filter
    if (query) {
      filteredProducts = filteredItems;
    }

    // selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ title, newPrice, company, color, category }) => {
          return (
            title === selected ||
            newPrice === selected ||
            company === selected ||
            color === selected ||
            category === selected
          );
        }
      );
    }

    return filteredProducts.map(
      ({
        img,
        title,
        star,
        reviews,
        prevPrice,
        newPrice,
        company,
        color,
        category,
      }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          company={company}
          color={color}
          category={category}
        />
      )
    );
  }

  const result = filteredData(products, query, selectedCategory);

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommendation handleClick={handleClick}  />
      <Products result={result} />
    </div>
  );
}

export default App;
