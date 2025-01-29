import { FaBagShopping } from "react-icons/fa6";

function Card({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
}) {
  return (
    <>
      <section className="card">
        <img
          className="cardImg"
          src={img}
          alt={title}
        />
        <div className="cardDetails">
          <h3 className="cardTitle">{title}</h3>
          <section className="cardReviews">
            {star} {star} {star} {star}
            <span className="totalReviews">{reviews}</span>
          </section>
        </div>
        <section className="cardPrice">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            <FaBagShopping className="bagIcon" />
          </div>
        </section>
      </section>
    </>
  );
}

export default Card;
