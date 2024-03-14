import React from 'react'
import { useContext } from 'react';
import MyContext from '../../context/MyContext';
const CheckoutBox = () => {
    const context = useContext(MyContext)
    const {showCheckout,setShowCheckout } =context;
  return (
    <div className={`w-[85%] sm:w-[70%] md:w-[60%] lg:w-[40%] flex  flex-col gap-5 bg-white mx-auto px-5 py-7 absolute top-[10%]  md:translate-x-1/2 `}>
         <h3 className='uppercase font-bold text-2xl'> Please Provide your address </h3>
         <textarea name="" id="" cols="30" rows="10" className='border-black border-2 w-[90%] h-[200px] outline-none'></textarea>
         <div className="buttons flex justify-between gap-5 w-[90%] md:w-[60%] mt-5">
               <button className='bg-black text-white px-8 py-2' onClick={()=>{setShowCheckout(false)}}>Cancel</button>
               <button className='bg-black text-white px-8 py-2' onClick={()=>{setShowCheckout(false)}}>Save</button>
         </div>
    </div>
  )
}

export default CheckoutBox
