import React from "react";
import { useContext } from "react";
import MyContext from "../../context/MyContext.jsx";
const Orders = () => {
  const context = useContext(MyContext);
  const { orders } = context;
  return (
    <div className="flex flex-col gap-5 mt-5">
      {orders.map((item, index) => {
        return (
          <div className="flex md:justify-between border-2 p-9 flex-col md:flex-row gap-4" key={index + "orderno"}> 
            <div className="order_content flex :gap-2  flex-col w-[100%] md:w-[50%]">
              <h2 className="text-2xl md:text-3xl font-bold">ORDER #{item.orderNo}</h2>
              <h3 className="md:text-xl">
                <span className="font-semibold">Products: </span>
                {item.Product}
              </h3>
              <h3 className="md:text-xl">
                <span className="font-semibold">Date: </span>
                {item.Date}
              </h3>
              <h3 className="md:text-xl">
                <span className="font-semibold">Address: </span>
                {item.address}
              </h3>
            </div>
            <div className="button flex flex-col gap-4 w-[fit-content]">
              <button className="bg-black text-white px-4 py-2">View Details</button>
              <button className="bg-black text-white px-4 py-2">Track Order</button>
              <button className="bg-black text-white px-4 py-2">Download Invoice</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
