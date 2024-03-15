import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import {Layout,MyProvider,Address,Orders,Test,Question,Classes,Products,About,Cart,Login,Signup} from './index'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<Layout/>}>
         <Route path="/" element={<><Address/></>}>
                  <Route index element={<Orders/>}/>
                  <Route path="/test" element={<Test/>}/>
                  <Route path="ques" element={<Question/>}/>

           </Route>    
         <Route path="Classes" element={<Classes/>}/>    
         <Route path="products" element={<Products/>}/>    
         <Route path="Aboutus" element={<About/>}/>    
         <Route path="Profile" element = {<Login/>}/>    
         <Route path="Cart" element={<Cart/>}/>   
         <Route path="signup" element = {<Signup/>}/>    

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
      <RouterProvider router={router}/>

    </MyProvider>
  </React.StrictMode>,
)
