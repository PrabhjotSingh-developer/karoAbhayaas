import React from 'react'
import { useContext } from 'react'
import MyContext from '../../context/MyContext.jsx'
import SingleAbout from '../../components/aboutSingleCard/SingleAbout.jsx'
import "./about.css"
const About = () => {
    const context = useContext(MyContext);
    const {abouts} = context; 
  return (
    <div className='flex gap-5 flex-col my-5 main_about'>
          {
            abouts.map((item,index)=>{
               return <SingleAbout item={item} key={"about"+index} />
            })
          }
    </div>
  )
}

export default About
