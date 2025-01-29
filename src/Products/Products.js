import "./Products.css";

function Products({result}) {
  return (
    <>
      <section className="cardContainer">
        {result}
      </section>
    </>
  );
}

export default Products;
