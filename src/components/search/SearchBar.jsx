import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
const SearchBar = () => {
  return (
    <div className='flex w-[100%] items-center bg-slate-50 py-4 justify-between px-4 my-4' >
        <div className="search_text flex items-center gap-2 w-[100%]">
               <FaSearch/>
         <input type="text" name="" id="" className='bg-transparent px-2 py-1 w-[80%] outline-none'/>
        </div>
      
        <IoFilter/>
    </div>
  )
}

export default SearchBar
