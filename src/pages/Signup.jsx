import React from "react";
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { GoLock } from "react-icons/go";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <form className="flex flex-col gap-2 bg-white p-8 w-[550px] rounded-2xl font-sans mx-auto">
      <h2 className="text-center text-3xl font-bold">Saynex</h2>
      <div className="flex flex-col">
        <label className="text-[#151717] font-semibold">Name</label>
      </div>
      <div className="flex items-center h-[50px] border border-[#ecedec] rounded-[10px] px-2 focus-within:border-[#2d79f3] transition">
        <FaRegUser className="h-6 w-6" />
        <input
          type="text"
          placeholder="Enter your Name"
          className="ml-2 w-full h-full border-none outline-none rounded-[10px]"
        />
      </div>

      <div className="flex flex-col mt-2">
        <label className="text-[#151717] font-semibold">Email</label>
      </div>
      <div className="flex items-center h-[50px] border border-[#ecedec] rounded-[10px] px-2 focus-within:border-[#2d79f3] transition">
        <CiMail className="h-7 w-7" />
        <input
          type="email"
          placeholder="Enter your Email"
          className="ml-2 w-full h-full border-none outline-none rounded-[10px]"
        />
      </div>

      <div className="flex flex-col mt-2">
        <label className="text-[#151717] font-semibold">Password</label>
      </div>
      <div className="flex items-center h-[50px] border border-[#ecedec] rounded-[10px] px-2 focus-within:border-[#2d79f3] transition">
        <GoLock className="h-6 w-6" />
        <input
          type="password"
          placeholder="Enter your Password"
          className="ml-2 w-full h-full border-none outline-none rounded-[10px]"
        />
      </div>

      <button
        type="submit"
        className="mt-5 bg-[#151717] text-white text-[15px] font-medium rounded-[10px] h-[50px] w-full hover:bg-[#252727] transition"
      >
        Sign Up
      </button>

      <p className="text-center text-black text-sm my-2">
        Already have an account?
        
      <Link to="/login" className="text-[#2d79f3] font-medium cursor-pointer">login</Link>
      </p>
    </form>
    </div>
  );
};

export default Signup;
