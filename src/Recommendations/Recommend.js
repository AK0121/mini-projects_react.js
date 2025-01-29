import Buttons from "../Components/Buttons";
import "./Recommendation.css";

function Recommendation({handleClick}) {
  return (
    <div>
      <h2 className="recommendedTitle">Recommended</h2>
      <div className="recommendedFlex">
        <Buttons className="btns" title="All Products" value="" onClickHandler={handleClick} />
        <Buttons className="btns" title="Nike" value="Nike" onClickHandler={handleClick} />
        <Buttons className="btns" title="Vans" value="Vans" onClickHandler={handleClick} />
        <Buttons className="btns" title="Puma" value="Puma" onClickHandler={handleClick} />
        <Buttons className="btns" title="Adidas" value="Adidas" onClickHandler={handleClick} />
      </div>
    </div>
  );
}

export default Recommendation;
