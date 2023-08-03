import { createContext, useState } from "react"

export const AppContext = createContext()

export const AppProvider = ({children}) => {
  
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)

  return (
    <AppContext.Provider value={{products, setProducts, cartItems, setCartItems, showCart, setShowCart}}>
      {children}
    </AppContext.Provider>
  )
}

