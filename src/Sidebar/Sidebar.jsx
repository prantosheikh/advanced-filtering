import Category from "./Category/Category";
import Color from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>

      <Category />
      <Price />
      <Color />
    </section>
    </>
  );
};

export default Sidebar;
