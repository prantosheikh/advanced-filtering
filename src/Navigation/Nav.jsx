import "./Nav.css";

import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
const Nav = ({ handleInputChange, query }) => {
  return (
    <div>
      <nav>
        <div className="nav-container">
          <input
            onChange={handleInputChange}
            value={query}
            type="text"
            className="search-input"
            placeholder="Enter your search shoes."
          />
        </div>
        <div className="profile-container">
          <a href="#">
            <FiHeart className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineShoppingCart className="nav-icons" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
