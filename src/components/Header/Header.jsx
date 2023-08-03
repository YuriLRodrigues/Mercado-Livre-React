import { useContext, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AppContext } from "../../context/AppContext";

const Header = () => {
  const {cartItems, setShowCart, showCart} = useContext(AppContext)
  
  return (
    <header>
      <nav className="navbar">
        <SearchBar />
        <button className="cart__button" onClick={()=> setShowCart(!showCart)}>
          <AiOutlineShoppingCart />
          {cartItems.length > 0 && <span className="cart__status">{cartItems.length}</span>}
        </button>
      </nav>
    </header>
  );
};

export default Header;
