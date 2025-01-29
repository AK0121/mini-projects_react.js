import Input from "../../Components/Input";
import "./Colors.css";

function Colors({ handleChange }) {
  return (
    <div>
      <h2 className="sidebarTitle colorTitle">Colors</h2>
      <div>
        <label className="sidebarLabelContainer">
          <input
            onChange={handleChange}
            className="all"
            value=""
            name="test3"
          />
          <span className="checkmark all"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test3"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test3"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test3"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test3"
          color="green"
        />

        <label className="sidebarLabelContainer">
          <input
            onChange={handleChange}
            value="white"
            name="test3"
          />
          <span className="checkmark" style={{backgroundColor: "white", border: "2px solid black"}}></span>White
        </label>
      </div>
    </div>
  );
}

export default Colors;
