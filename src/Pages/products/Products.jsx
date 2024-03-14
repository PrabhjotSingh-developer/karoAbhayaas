import React from 'react'
import { useContext } from 'react'
import MyContext from '../../context/MyContext'
import Product from '../../components/ProductCard/Product'
const Products = () => {
    const context = useContext(MyContext)
    const {products} = context
    
  return (
    <div className='flex flex-col gap-10 my-10'>
         {
            products.map((item,index)=>{
              return  <Product item={item} key={"product"+index}/>
            })
         }
    </div>
  )
}

export default Products
