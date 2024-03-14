import React from "react";
import SearchBar from "../search/SearchBar";
const Test = () => {
  return (
    <div>
      <SearchBar />
      <div className="test border-2  p-4">
        <h2 className="text-3xl font-bold">TEST NAME</h2>

        <div className="test_content flex gap-3 mt-5 justify-between md:flex-row flex-col">
          <div className="flex gap-4">
            <div className="heading">
              <h3 className="font-bold uppercase">module:</h3>
              <h3 className="font-bold uppercase">date:</h3>
              <h3 className="font-bold uppercase">marks:</h3>
              <h3 className="font-bold uppercase">duration:</h3>
            </div>
            <div className="desc">
              <h3 className="uppercase ">Name of Module</h3>
              <h3 className="uppercase ">10/04/2021</h3>
              <h3 className="uppercase ">100</h3>
              <h3 className="uppercase ">30 Mins</h3>
            </div>
          </div>
          <div className="buttons">
               <button className="bg-black text-white w-[10rem] uppercase py-2">Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
