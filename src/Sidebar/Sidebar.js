import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar">
        <div className="logoContainer">🛒</div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
}

export default Sidebar;
