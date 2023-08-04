import Header from './components/Header/Header'
import Products from './components/Products/Products'
import Headroom from 'react-headroom'
import './styles/app.sass'
import { AppProvider } from './context/AppContext'
import Cart from './components/Cart/Cart'
import { CartProvider } from 'react-use-cart'

const App = () => {
  
  
  return (
    <> 
      <AppProvider>
        <CartProvider>
          <Headroom>
            <Header />
          </Headroom>
          <Products />
          <Cart />
        </CartProvider>
      </AppProvider>
    </>
    
  )
}

export default App