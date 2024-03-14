import React from 'react'

const Samplecom = ({item}) => {
    
  return (
    <div className='flex md:w-[95%] lg:w-[90%] mx-auto gap-9 border-b-2 p-4 flex-col md:flex-row'>
        <div className="image bg-slate-400 md:w-[45%] lg:w-[40%] md:h-[auto] h-[400px]" >
               
        </div>
        <div className='flex gap-8 flex-col w-[90%] md:w-[50%] lg:w-[40%]'>
             <h2 className='font-bold text-2xl'>{item.title}</h2>
             <p >{item.desc}</p>
             <button className='bg-black text-white w-[fit-content] px-7 py-2'>{item.btnName}</button>
        </div>
    </div>
  )
}

export default Samplecom
