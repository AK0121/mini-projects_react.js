import Input from "../../Components/Input";
import "./Price.css";
function Price({handleChange}) {
  return (
    <div className="ml">
      <h2 className="sidebarTitle PriceTitle">Price</h2>
      <div>
        <label className="sidebarLabelContainer">
          <input onChange={handleChange} value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input 
        handleChange={handleChange}
        value={50}
        title="$50  - $100"
        name="test2"
        />
        <Input 
        handleChange={handleChange}
        value={100}
        title="$100  - $150"
        name="test2"
        />
        <Input 
        handleChange={handleChange}
        value={150}
        title="$150  - $200"
        name="test2"
        />
        <Input 
        handleChange={handleChange}
        value={200}
        title="over $200"
        name="test2"
        />
      </div>
    </div>
  );
}

export default Price;
