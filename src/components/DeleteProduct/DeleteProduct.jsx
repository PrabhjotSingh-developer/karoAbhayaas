import React from 'react'
import { useContext } from 'react'
import MyContext from '../../context/MyContext'
const DeleteProduct = () => {
    const context = useContext(MyContext)
    const {setShowDelete} = useContext(MyContext)
  return (
    <div className='bg-white gap-8 flex flex-col w-[95%] md:w-[80%] lg:w-[50%]  p-6 py-10 absolute top-[10%] mx-auto md:translate-x-1/4  '>
        <h2 className='uppercase text-xl md:text-2xl lg:text-3xl font-bold'>delete book from cart ?</h2>
        <div className="buttons sm:ml-5 flex justify-between gap-4 w-[100%] sm:w-[60%]  ">
             <button className='bg-black px-7 sm:px-8 py-2 text-white ' onClick={()=>setShowDelete(false)}>Cancel</button>
             <button className='bg-black px-7 sm:px-8 py-2 text-white ' onClick={()=>setShowDelete(false)}>Delete</button>
        </div>
    </div>
  )
}

export default DeleteProduct
