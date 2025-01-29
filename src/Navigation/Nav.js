import { FiHeart } from "react-icons/fi";
import "./Nav.css";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

function Nav({handleInputChange, query}) {
  return (
    <nav>
      <div>
        <input
          className="searchInput"
          placeholder="Enter your shoes search..."
          value={query}
          onChange={handleInputChange}
        />
      </div>

      <div className="profileContainer">
        <a href="#">
          <FiHeart className="navIcons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="navIcons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="navIcons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
