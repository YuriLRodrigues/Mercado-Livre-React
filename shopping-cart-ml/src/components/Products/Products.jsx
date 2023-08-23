import { useEffect, useContext } from 'react'
import './Products.sass'
import fetchProduct from '../../api/fetchProduct'
import ProductCard from './ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import { AppContext } from '../../context/AppContext'


const Products = () => {
  const {products, setProducts} = useContext(AppContext)
  
  useEffect(()=> {
    fetchProduct('iphone').then((res)=> {
      setProducts(res)
    })
  }, [])
  console.log('renderizou')

  return (
    <section className="products__container">
      
      {products.length > 0 ? products.map((prod) => (
        <ProductCard key={prod.id} prod={prod}/>
      )) : <Loading />  }
    </section>
  )
}

export default Products