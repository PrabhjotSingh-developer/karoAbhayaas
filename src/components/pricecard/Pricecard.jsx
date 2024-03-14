import React from "react";
import { useContext } from "react";

import MyContext from "../../context/MyContext";
import CheckoutBox from "../CheckoutBox/CheckoutBox";
const Pricecard = () => {
    const context = useContext(MyContext)
    const {showCheckout,setShowCheckout } =context;
  return (
    <div className={` w-[95%] sm:w-[90%] mx-auto my-10 border-2 pb-[20rem] relative transition-all `}>
      <div className={`checkout px-2 py-4 sm:px-10 sm:py-10 flex justify-between items-center border-b-2 ${showCheckout?"opacity-5":"opacity-100"}`}>
        <h2 className="font-bold text-xl sm:text-2xl">TOTAL: ₹2000</h2>
        <button className="px-4 py-2 bg-black text-white" onClick={()=>setShowCheckout(true)}>CHECKOUT</button>
      </div>
      <div className="flex justify-between border-2 p-8 sm:flex-row flex-col md:p-14 my-10 w-[90%] sm:w-[95%] md:w-[80%] mx-auto">
        <div className="card_content flex gap-4 flex-col">
          <h2 className="text-2xl font-bold">QUESTION TITLE</h2>
          <div className="flex gap-4">
            <div className="">
              <h2 className="uppercase font-bold">Module: </h2>
              <h2 className="uppercase font-bold">Date:</h2>
            </div>
            <div>
              <h2 className="uppercase">name of modules</h2>
              <h2>10/04/2021</h2>
            </div>
          </div>
        </div>
        <div className="deletebutton flex gap-4 flex-col mt-7 sm:mt-0">
          <select name="" id="" className="bg-black px-10 py-2 text-white  w-[fit-content]">
            <option value="">1</option>
            <option value="">2</option>
          </select>
          <button className="bg-black text-white px-10 py-2 w-[fit-content]">Delete</button>
        </div>
      </div>
      <div>
           { showCheckout &&
                <CheckoutBox/>

           }
      </div>
    </div>
    
  );
};

export default Pricecard;
