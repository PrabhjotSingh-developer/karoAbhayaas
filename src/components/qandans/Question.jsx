import React from 'react'
import SearchBar from '../search/SearchBar'

const Quetion = () => {
  return (
    <div>
      <div className="flex items-center justify-between sm:flex-row flex-col gap-3">
        <div className="searchbar w-[95%] sm:w-[55%] md:w-[60%]">
          <SearchBar/>
        </div>
          <p className='font-bold'>or</p>
          <button className='uppercase bg-black text-white py-2 px-4'>Ask a new questions</button>
       </div>
       <div className="quesTitle border-2 p-6 mt-7">
              <h2 className='font-bold text-2xl my-3'>Question Title</h2>
           <div className="quesContent flex justify-between md:flex-row flex-col gap-7">
              <div className="flex gap-2">
                  <div className="heading flex gap-2 flex-col">
                      <h2 className='uppercase font-bold'>Module:</h2>
                      <h2 className='uppercase font-bold'>date:</h2>

                
                  </div>
                    <div className="content flex gap-2 flex-col">
                      <h2 className='uppercase'>name of module</h2>
                      <h2>10/02/2021</h2>
                    </div>
              </div>
              <div className="buttons">
                  <button className='uppercase bg-black text-white w-[10rem] py-2 px-4'>View reply</button>
              </div>
           </div>
       </div>
    </div>
  )
}

export default Quetion
