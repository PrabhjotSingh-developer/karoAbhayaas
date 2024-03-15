import React from "react";
import { NavLink } from "react-router-dom";
const Signup = () => {
  return (
    <div className="w-[100%] my-32 flex items-center justify-center">
      <div className="flex gap-8 border-2 p-4 flex-col w-[95%] sm:w-[70%] md:w-[60%] lg:w-[40%] px-5 sm:px-10 md:px-14 py-24">
        <div className="border-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="USERNAME"
            className="py-2 px-2 w-[100%]"
          />
        </div>
        <div className="border-2">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="py-2 px-2 w-[100%]"
          />
        </div>
        <div className="border-2 flex justify-between">
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone Number"
            className="py-2 px-2 w-[25%]"
          />
          <button className="bg-black text-white py-2 px-2 ">
            SEND OTP
          </button>
        </div>
        <p>
          Didn't Recieve It? <span className={"text-blue-700"}>RESEND</span>
        </p>
        <div className="border-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="OTP"
            className="py-2 px-2 w-[100%]"
          />
        </div>
        <button className="bg-black py-2 px-7 text-white w-[fit-content] mx-auto">
          Sign up
        </button>
        <div>
          <p className="text-center">
            Already have an account?{" "}
            <NavLink className={"text-blue-700"} to={"/profile"}>
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
