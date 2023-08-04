import { BsFillTrash3Fill } from "react-icons/bs";
import formatCurrency from "../../../utils/formatCurrency";
import { useCart } from "react-use-cart";

const CartItem = ({ data }) => {
  const { title, id, thumbnail, price, quantity } = data;
  const {updateItemQuantity, removeItem} = useCart()
  

  return (
    <section className="cart-item">
      <img src={thumbnail} alt="" className="cart-item-image" />
      <div className="cart-item-info">
        <h3 className="cart-item-title">{title}</h3>
        <div className="item-price-quantity">
          <p className="cart-item-price">{formatCurrency(price)}</p>
          <div className="item-quantity">
            <button className="update-quant-btn" onClick={()=> updateItemQuantity(id, quantity -1 )}>-</button>
            <p className="total-items">{quantity}</p>
            <button className="update-quant-btn" onClick={()=> updateItemQuantity(id, quantity +1 )}>+</button>
          </div>
        </div>
        <button
          type="button"
          className="button-remove-item"
          onClick={() => removeItem(id)}
        >
          <BsFillTrash3Fill />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
