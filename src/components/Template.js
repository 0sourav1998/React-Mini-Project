import React from "react";
import frame from '../assets/frame.png'
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn ,isLoggedIn }) => {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] mx-auto py-6 gap-x-12 gap-y-0 h-full">
      <div className="w-10/12 max-w-[450px]">
        <h1 className="text-richblack-5 font-semobold text-[1.875rem] leading-[2.275rem]">{title}</h1>
        <p className="text-[1.125rem] leading-[1.525rem] mt-4">
          <span className="text-richblack-100">{desc1}</span>
          <br/>
          <span className="text-blue-100">{desc2}</span>
        </p>
        {formtype === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
        <div className="flex w-full items-center my-2 gap-x-2">
          <div className="w-full bg-richblack-700 h-[1px]"></div>
          <p className="text-richblack-700 font-medium leading-[1.45rem]">OR</p>
          <div className="w-full bg-richblack-700 h-[1px]"></div>
        </div>
        <button className="w-full flex justify-center items-center text-richblack-100 font-medium rounder-[8px] border border-richblack-700 px-[12px] py-[8px] mt-6 gap-x-2">
        <FcGoogle />
        <p> Sign Up with Google</p>
        </button>
        
      </div>
      <div className="relative">
        <img src={frame} alt="background" height={504} width={490} loading="lazy" />
        <img src={image} alt="fontImage" height={504} width={490} loading="lazy" className="absolute -top-4 right-3"/>
      </div>
    </div>
  );
};

export default Template;
