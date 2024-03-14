import React from 'react'

const Product = ({item}) => {
    
  return (
    <div className='flex gap-8 py-10 w-[90%] md:w-[95%] lg:w-[85%] mx-auto p-4 border-b-2 md:flex-row flex-col'>
         <div className="productImg md:h-[auto] h-[300px] sm:h-[400px] md:w-[45%] lg:w-[40%]  bg-slate-400 ">
             {/* we dont have image so we give width and height to set image box */}
         </div>
         <div className="product_content flex gap-16 md:w-[45%] lg:w-[50%] flex-col">
            <div className='flex gap-2 flex-col'>
                <h2 className='font-bold text-2xl'>{item.name}</h2>
                <p className='md:text-xl' >{item.desc}</p>
            </div>
              
              <div className='flex gap-5 md:gap-2 flex-col'>
                 <h3 className='font-bold text-xl'>₹{item.price}</h3>
               <button className='bg-black px-4 py-2 text-white w-[10rem]'>Add to Cart</button>
              </div>
              
         </div>
    </div>
  )
}

export default Product
