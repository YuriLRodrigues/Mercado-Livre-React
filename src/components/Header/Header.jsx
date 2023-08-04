import { useContext } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AppContext } from "../../context/AppContext";
import { useCart } from "react-use-cart";

const Header = () => {
  const {setShowCart, showCart} = useContext(AppContext)
  const {totalItems} = useCart()
  
  return (
    <header>
      <nav className="navbar">
        <SearchBar />
        <button className="cart__button" onClick={()=> setShowCart(!showCart)}>
          <AiOutlineShoppingCart />
          {totalItems > 0 && <span className="cart__status">{totalItems}</span>}
        </button>
      </nav>
    </header>
  );
};

export default Header;
