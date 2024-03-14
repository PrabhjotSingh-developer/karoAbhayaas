import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import MyProvider from './context/MyProvider.jsx'
import Address from './components/AddressName/Address.jsx';
import Orders from './components/orders/Orders.jsx';
import Test from './components/test/Test.jsx';
import Question from './components/qandans/Question.jsx'
import Classes from './Pages/classes/Classes.jsx';
import Products from './Pages/products/Products.jsx';
import About from './Pages/about/About.jsx';

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
         <Route path="Profile"/>    
         <Route path="Cart"/>    
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
