import React, { useState } from "react";
import SubmitButton from "../Components/SubmitButton";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
import { default_img } from "../assets";

function ResetPasswordMail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const checkEmail = (e) => {
    setEmail(e.target.value);

    if (emailRegex.test(e.target.value) === false) {
      setError("Please enter a valid email address!");
    } else {
      setError(""); // Clear the error when the email is valid
    }
  };

  const submit = () => {
    // Validate the email before submitting
    if (emailRegex.test(email) === false) {
      setError("Please enter a valid email address!");
      return;
    }

    // Perform other necessary validations or actions

    // Navigate to the "/forgotpassword/code" route
    window.location.href = "forgotpassword/code";
  };
  return (
    <>
      <NavBar />
      <div className="w-[100vw] h-full bg-[#FDF0F0] flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center font-rubik bg-white shadow-lg w-[324px] h-[500px] md:h-[600px] mt-[30px] md:w-[500px] md:mt-[60px] lg:w-[1000px] lg:h-[800px] ">
          <img
            className="mt-[32px] md:mt-[58px]"
            src={default_img}
          />
          <div className="text-[20px] my-[13px] font-bold md:text-[25px] md:my-[15px] lg:text-[39px]">
            Reset your password
          </div>
          <div className="text-[13px] font-normal lg:text-[20px]">
            We will send you an email to reset your password
          </div>
          <input
            className="bg-[#F7F6F6] w-[252px] rounded-[4px] mt-[48px] mb-[6px] text-sm font-normal py-[21px] pl-[13px]  md:w-[398px] md:text-base md:pl-[21px]  lg:w-[797px] text-[20px] md:mt-[90px] lg:pl-[42px] "
            type="email"
            placeholder="Email address"
            onChange={checkEmail}
            required
          />
          
            <p className="text-red-400 text-sm mb-[51px]">{error}</p>
            <Link to="/code" onClick={submit} className="-mt-[0.6rem]">
              <SubmitButton />
            </Link>
            <div className="text-[13px] mt-[23px] font-normal hover:underline hover:underline-offset-6 mb-30px md:text-[16px] lg:text-[20px] lg:mb-[240px] cursor-pointer ">
              <Link to="/">Cancel</Link>
            
          </div>
     
        </div>

        <div className="flex text-[12px] font-normal gap-[30px] justify-center items-center  mb-[40px] mt-[269px] md:mt-[423px] md:gap-[60px]  lg:gap-[316px] ">
          <div>All rights reserved © 2024 LiquorHaven</div>
          <div>Privacy | Terms</div>
        </div>
      </div>
    </>
  );
}

export default ResetPasswordMail;
