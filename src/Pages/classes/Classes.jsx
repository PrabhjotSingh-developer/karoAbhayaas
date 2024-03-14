import React from 'react'
import { useContext } from 'react'
import MyContext from '../../context/MyContext.jsx'
import Samplecom from '../../components/sampleComp/Samplecom.jsx'
import { Link } from 'react-router-dom'
const Classes = () => {
    const context = useContext(MyContext);
    const {sampleVideoTitles} = context; 
     
  return (
    <div className='flex flex-col gap-7 my-16 items-center'>
          {
             sampleVideoTitles.map((item,index)=>{
                  return <Samplecom item = {item} key={index+"samplecom"}/>
             })
          }
          <div className="pages flex gap-2  ">
               <Link className='font-bold'>1</Link>
               <Link className='font-bold'>2</Link>
               <Link className='font-bold'>3</Link>
               <Link className='font-bold'>4</Link>
               <Link className='font-bold'>5</Link>

          </div>
    </div>
  )
}

export default Classes
