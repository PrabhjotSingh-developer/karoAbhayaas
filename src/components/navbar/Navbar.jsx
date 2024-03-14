import React, { useState } from 'react'
import { NavLink ,Link} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { MdPerson } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
    const [showMenuBar ,setshowMenu]= useState(false);
    const customStyle = {
       transition:"all .15s linear"
      };
  return (
    <nav className={`flex md:py-2 py-4 items-start w-[100%] md:h-[auto]  border-b-4 `}>
        <div className="main_Links flex justify-between w-[100%] relative  md:px-5 md:py-4 px-3  ">
              <div className="logo">
            <Link to={""}>  <h3>Karo Abhayaas</h3></Link>
          </div>
          
          <ul style={customStyle}  className={`md:flex gap-5 md:flex-row flex-col md:static py-10 mt-5 md:h-[auto] md:mt-0 md:bg-white md:py-0 ${showMenuBar?"fixed flex right-[0%] h-[100%] bg-gray-300 z-10 transition-duration w-[100%] justify-start items-center  top-10 ":"h-[100%] flex fixed right-[-30%] top-10  bg-gray-300 justify-start items-center"} md:justify-end`} >
            <li>
                 <NavLink to={""} className={({isActive})=>`${isActive?"text-black":"text-black opacity-75"}`} >Join Us</NavLink>
            </li>
            <li>
                 <NavLink to={"classes" } className={({isActive})=>`${isActive?"text-black":"text-black opacity-75"}`}>Classes</NavLink>
            </li>
            <li>
                 <NavLink to={"/products"} className={({isActive})=>`${isActive?"text-black":"text-black opacity-75"}`}>Products</NavLink>
            </li>
            <li>
                 <NavLink to={"aboutus"}  className={({isActive})=>`${isActive?"text-black":"text-black opacity-75"}`}>About Us</NavLink>
            </li>
            <li className='flex gap-3 justify-center items-center'>
                <Link to={""}><MdPerson /></Link>
                 <Link to={""}><FaShoppingCart/></Link>
            </li>
            
          </ul>
        </div>
       
       {

          (showMenuBar)?<RxCross1 className='md:hidden block absolute right-4 top-5' onClick={()=>setshowMenu(!showMenuBar) }/>:<GiHamburgerMenu className='md:hidden block absolute right-4 top-5 ' onClick={()=>setshowMenu(!showMenuBar)}/>
       }
        
    </nav>
  )
}

export default Navbar
