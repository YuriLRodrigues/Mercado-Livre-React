import { useContext } from "react"
import CartItem from "./CartItem/CartItem"
import { AppContext } from "../../context/AppContext"
import formatCurrency from "../../utils/formatCurrency"

const Cart = () => {
  
  const {cartItems, showCart} = useContext(AppContext)
  const totalPriceCart = cartItems.reduce((accum, item)=> {
    return item.price + accum
  }, 0)
  return (
    <section className={`cart ${showCart && "active-cart"}`}>
      <p className="cart__introduction">Carrrinho</p>
      <div className="cart__items">
        {cartItems.length > 0 ? cartItems.map((item)=> (
          <CartItem data={item} key={item.id}/>
        )) : <div>Vazio :(</div>}
      </div>
      <div className="cart__value">
        <p>{formatCurrency(totalPriceCart)}</p>
      </div>
    </section>
  )
}

export default Cart