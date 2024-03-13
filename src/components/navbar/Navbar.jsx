import React, { useState } from 'react'
import { NavLink ,Link} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
    const [showMenuBar ,setshowMenu]= useState(false);
    const customStyle = {
       transition:"all .15s linear"
      };
  return (
    <nav className='flex  py-2 items-center w-[100%] relative'>
        <div className="main_Links flex justify-between w-[100%] h-[100vh] relative overflow-hidden md:px-5 md:py-4 px-3">
              <div className="logo">
            <Link to={""}>  <h3>Karo Abhayaas</h3></Link>
          </div>
          
          <ul style={customStyle}  className={`md:flex gap-5 md:flex-row flex-col md:static ${showMenuBar?"absolute flex right-[-10%]  transition-duration w-[100%] justify-center items-center  top-10 ":"flex absolute  right-[-30%] top-10"}  `} >
            <li>
                 <NavLink to={""} className={({isActive})=>`${isActive?"text-red-500":"text-black"}`} >Join Us</NavLink>
            </li>
            <li>
                 <NavLink to={"/classes" } className={({isActive})=>`${isActive?"text-red-500":"text-black"}`}>Classes</NavLink>
            </li>
            <li>
                 <NavLink to={"/products"}>Products</NavLink>
            </li>
            <li>
                 <NavLink to={"aboutus"}>About Us</NavLink>
            </li>
            <li className='flex gap-3'>
                <Link to={""}>Profile</Link>
                 <Link to={""}>cart</Link>
            </li>
            
          </ul>
        </div>
       
       {

          (showMenuBar)?<RxCross1 className='md:hidden block absolute right-4 top-3 ' onClick={()=>setshowMenu(!showMenuBar) }/>:<GiHamburgerMenu className='md:hidden block absolute right-4 top-3 ' onClick={()=>setshowMenu(!showMenuBar)}/>
       }
        
    </nav>
  )
}

export default Navbar
