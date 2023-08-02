import SearchBar from "../SearchBar/SearchBar";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <SearchBar />
        <button className="cart__button">
          <AiOutlineShoppingCart />
          <span className="cart__status">0</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
