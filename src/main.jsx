import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<Navbar/>}>
         <Route path=""/>    
         <Route path="Classes" />    
         <Route path="Products"/>    
         <Route path="Aboutus"/>    
         <Route path="Profile"/>    
         <Route path="Cart"/>    
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
