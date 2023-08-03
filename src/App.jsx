import Header from './components/Header/Header'
import Products from './components/Products/Products'
import Headroom from 'react-headroom'
import './styles/app.sass'
import { AppProvider } from './context/AppContext'
import Cart from './components/Cart/Cart'


const App = () => {
  
  
  return (
    <> 
      <AppProvider>
        <Headroom>
          <Header />
        </Headroom>
        <Products />
        <Cart />
      </AppProvider>
    </>
    
  )
}

export default App