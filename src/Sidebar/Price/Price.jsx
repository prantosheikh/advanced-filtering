import Input from "../../components/Input";
import "./Price.css";
const Price = ({handleChange}) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>
      <Input
            handleChange={handleChange}
            value="sneakers"
            title="$0-50"
            name="test2"
          />
      <Input
            handleChange={handleChange}
            value="sneakers"
            title="$50-100"
            name="test2"
          />
      <Input
            handleChange={handleChange}
            value="sneakers"
            title="$100-150"
            name="test2"
          />
      <Input
            handleChange={handleChange}
            value="sneakers"
            title="Over 150"
            name="test2"
          />
    </div>
  );
};

export default Price;
