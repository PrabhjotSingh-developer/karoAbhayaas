import React from 'react'
import { NavLink } from 'react-router-dom'

const Address = () => {
  return (
    <div>
          <div className="name_address flex border-2 mt-8 gap-3 sm:flex-row w-[80%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto p-6  flex-col">
                <div className="name_detail flex gap-2 flex-col w-[90%] sm:w-[40%] sm:border-r-2 ">
                      <h2 className='text-3xl font-bold'>Amit Jha</h2>
                      <p >+91774690033</p>
                      <p >amit.jha6700@gmail.com</p>
                      <div className="flex gap-3 mt-3">
                           <button className='bg-black text-white px-6 py-2 '>Edit</button>
                           <button className='bg-black text-white px-6 py-2 '>Logout</button>

                      </div>
                </div>
               
                <div className="address_detail w-[90%] sm:w-[45%] md:w-[45%] lg:w-[40%] sm:px-3 sm:mt-0 mt-3">
                <h2 className='text-3xl font-bold'>ADDRESS</h2>
                    <address className='mt-2'>
                          R107, AJMERA INFINITY, KARUNA NAGAR, ELECTRONIC CITY, BANGLORE, INDIA PIN:846009
                    </address>
                </div>
          </div>
          <div className="order w-[80%] sm:w-[90%] md:w-[80%] lg:w-[70%] border-2 mx-auto border-collapse p-6">
                <div className="navLinks flex border-b-2">
                <NavLink to={""} className={({isActive})=>`${isActive?"bg-black text-white":"text-black opacity-75 bg-[#e5e7eb]"} px-4 py-1`} >Orders</NavLink>
                <NavLink to={"test"} className={({isActive})=>`${isActive?"bg-black text-white":"text-black opacity-75 bg-[#e5e7eb]"} px-4 py-1`} >Tests</NavLink>
                <NavLink to={"ques"} className={({isActive})=>`${isActive?"bg-black text-white":"text-black opacity-75 bg-[#e5e7eb]"} px-4 py-1`} >Q/A</NavLink>


                </div>
          </div>
    </div>
  )
}

export default Address
