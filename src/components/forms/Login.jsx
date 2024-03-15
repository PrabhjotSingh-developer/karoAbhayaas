import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-[100%] h-[90vh] md:h-[100vh] flex items-center justify-center'>
           <div className='flex gap-8 border-2 p-4 flex-col w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] px-8 sm:px-10 md:px-14 py-24'>
                  <div className='border-2'>
                      <input type="text" name="" id="" placeholder='USERNAME'  className='py-2 px-2 w-[100%]'/>
                  </div >
                  <div className='border-2'>
                       <input type="password" name="" id="" placeholder='PASSWORD' className='py-2 px-2 w-[100%]'/>
                  </div>
                   <button className='bg-black py-2 px-7 text-white w-[fit-content] mx-auto'>Login</button>
                  <div>
                      <p className='text-center'>Don't have an account? <NavLink className={'text-blue-700'} to={"/signup"}>Sign Up</NavLink></p>
                  </div>

           </div>
    </div>
  )
}

export default Login
