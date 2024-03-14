import React from 'react'

const SingleAbout = ({item}) => {
  
  return (
    <div className='aboutpage flex gap-8 justify-center flex-col md:flex-row md:w-[95%] lg:w-[80%] w-[95%] mx-auto p-7 border-b-2 '>
         <div className="img h-[250px] sm:h-[500px] md:w-[40%] md:h-[auto] bg-slate-400"></div>
         <div className="content w-[100%] md:w-[50%] lg:w-[35%]">
            <p className=' text-[14px] sm:text-[17px] md:text-xl'>
               {item.desc}
            </p>
         </div>
    </div>
  )
}

export default SingleAbout
