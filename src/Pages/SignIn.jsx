import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import { default_img } from "../assets";
import { Link } from "react-router-dom";

export const SignIn = () => {
  // State variables to store user input
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle sign-in
  const handleSignIn = (e) => {
    e.preventDefault();

    // Remove dashes and spaces from the input
    const cleanedPhoneNumber = emailOrPhone.replace(/[-\s]/g, "");

    // Check if the cleaned input is a valid 11-digit phone number with the first digit being 0
    const isPhone = /^0\d{10}$/.test(cleanedPhoneNumber);

    // Check if the input is a valid email address
    const isEmail = /\S+@\S+\.\S+/.test(emailOrPhone);

    if (isPhone || isEmail) {
      // Implement your logic to check the credentials and perform sign-in
      // For now, just logging to the console
      console.log(`Attempting sign-in with:, ${emailOrPhone} , ${password}`);
    } else {
      console.log("Invalid email or phone number");
    }
  };

  return (
    <section className="w-full h-full">
      <NavBar />
      <div className="bg-[#F9F2F3] w-full pt-8 md:pt-16">
        <div className="pt-[71.48px] mx-auto w-[80%] md:w-[70%] lg:w-[60%] bg-white shadow-md shadow-gray-300">
          <form onSubmit={handleSignIn}>
            <div className="bg-inherit mx-auto w-full md:w-[86%] flex flex-col items-center justify-center">
              <img src={default_img} alt="default" className="" />
              <h1 className="mt-[10px] md:mt-[32px] lg:mt-[59px] font-rubik text-[24px] md:text-[32px] lg:text-[39px] font-bold leading-[120%]">
                Sign In
              </h1>
              {/* Email or Phone input */}
              <input
                type=""
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                name=""
                id="emailOrPhone"
                required
                autoComplete="username"
                className="mt-[56px] md:mt-[45px] lg:mt-[59px] w-[80%] md:w-full bg-[#F7F6F6] py-[20px] px-6 outline-none  font-rubik font-[300] leading-none text-[13px] md:text-[16px] lg:text-[20px] text-[#E66B66] rounded-sm placeholder:font-[300] placeholder-[#000] focus:placeholder-[#E66B66] focus:border-l-2 focus:border-t-2 focus:border-[#E66B66]"
                placeholder="Email or Phone number"
              />
              {/* Password input */}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name=""
                autoComplete="current-password" // tells browser to suggest password
                id="password"
                required
                className="w-[80%] md:w-full mt-[41px] md:mt-[51px] lg:mt-[59px]  bg-[#F7F6F6] py-[20px] px-6 outline-none font-rubik font-[300] leading-none text-[13px] md:text-[16px] lg:text-[20px] text-[#E66B66] rounded-sm placeholder:font-[300] placeholder-[#000] focus:placeholder-[rgb(230,107,102)] focus:border-l-2 focus:border-t-2 focus:border-[#E66B66]"
                placeholder="Password"
              />
              <div className="flex flex-row gap-[20px] mt-[43px] md:mt-[29.43px] lg:mt-[46px] justify-center items-center">
                <p className="leading-none text-[12px] md:text-[16px] lg:text-[20px] font-[400]">
                  Forgot your password?
                </p>
                <p className="leading-none text-[12px] md:text-[16px] lg:text-[20px] font-[400] text-[#E66B66] hover:underline hover:cursor-pointer">
                  <Link to="/forgotpassword">click here</Link>
                </p>
              </div>
              {/* Sign In button */}
              <button
                type="submit"
                className="mt-[40px] md:mt-[69px] lg:mt-[54px] mb-[41px] md:mb-[29.43px] lg:mb-[100px] p-[12px] bg-[#E66B66] hover:bg-[#b83c38] text-[#fff] rounded-md"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="w-[80%] md:w-[50%] flex justify-between items-center mt-[560px] md:mt-[607px] lg:mt-[87px] pb-[13px] md:pb-[23px] mx-auto">
          <p className="font-[400] text-[10px] md:text-[13px] lg:text-[14px] leading-none font-rubik">
            All rights reserved © 2024 LiquorHaven
          </p>
          <p className="font-[400] text-[10px] md:text-[13px] lg:text-[14px] leading-none font-rubik">
            Privacy | Terms
          </p>
        </div>
      </div>
    </section>
  );
};
