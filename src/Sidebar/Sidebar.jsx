import Category from "./Category/Category";
import Color from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";
const Sidebar = ({handleChange}) => {

  console.log(handleChange);
  return (
    <>
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Category handleChange={handleChange}/>
      <Price handleChange={handleChange}/>
      <Color handleChange={handleChange}/>
    </section>
    </>
  );
};

export default Sidebar;
