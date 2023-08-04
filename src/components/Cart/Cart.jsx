import { useContext } from "react"
import CartItem from "./CartItem/CartItem"
import { AppContext } from "../../context/AppContext"
import formatCurrency from "../../utils/formatCurrency"
import { useCart } from "react-use-cart"

const Cart = () => {
  const {isEmpty, items, cartTotal} = useCart()
  const {showCart} = useContext(AppContext)
  
  return (
    <section className={`cart ${showCart && "active-cart"}`}>
      <p className="cart__introduction">Carrrinho</p>
      <div className="cart__items">
        {isEmpty ? (<div>Vazio :(</div>) : 
          (items.map((item)=> 
          <CartItem data={item} key={item.id}/>
        ))
        }
      </div>
      <div className="cart__value">
        <p>{formatCurrency(cartTotal)}</p>
      </div>
    </section>
  )
}

export default Cart