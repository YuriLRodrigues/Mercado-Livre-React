import { BsFillTrash3Fill } from "react-icons/bs";
import formatCurrency from "../../../utils/formatCurrency";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

const CartItem = ({ data }) => {
  const { title, id, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedCartItems);
  };

  return (
    <section className="cart-item">
      <img src={thumbnail} alt="" className="cart-item-image" />
      <div className="cart-item-info">
        <h3 className="cart-item-title">{title}</h3>
        <p className="cart-item-price">{formatCurrency(price)}</p>
        <button
          type="button"
          className="button-remove-item"
          onClick={() => handleRemoveItem(id)}
        >
          <BsFillTrash3Fill />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
