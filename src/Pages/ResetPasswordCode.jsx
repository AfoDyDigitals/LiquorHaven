import React, { useState } from "react";
import SubmitButton from "../Components/SubmitButton";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
import { default_img } from "../assets";

function ResetPasswordCode() {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your validation logic here
    if (
      code.trim() === "" ||
      newPassword.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      // Display an error message or handle it as you see fit
      alert("Please fill in all required fields.");
      return;
    }

    // Continue with your form submission logic
    // ...

    // For demonstration purposes, let's navigate to the home page
    window.location.href = "/";
  };
  return (
    <>
      <NavBar />
      <div className="w-[100vw] bg-[#FDF0F0] flex flex-col justify-center items-center  md:">
        <div className="flex flex-col justify-center items-center font-rubik bg-white shadow-lg w-[324px] mt-[80px] md:w-[500px] md:mt-[83px] lg:w-[1000px] h-[800px]">
          <img
            className="mt-[240px] h-[48px] md:h-[60px] lg:h-[64px]"
            src={default_img}
          />
          <div className="text-[20px] my-[13px] font-bold md:text-[25px] md:my-[15px] lg:text-[39px]">
            Reset your password
          </div>
          <div className="text-[13px] font-normal lg:text-[20px] mx-3 text-center">
            An email has been sent to you reset your password
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[40px] mt-[40px]">
              <input
                className="bg-[#F7F6F6] w-[252px] rounded-[4px]  text-sm font-normal py-[21px] pl-[13px]  md:w-[398px] md:text-base md:pl-[21px]  lg:w-[797px] text-[20px]  lg:pl-[42px] "
                type=""
                placeholder="Enter Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
              <input
                className="bg-[#F7F6F6] w-[252px] rounded-[4px]  text-sm font-normal py-[21px] pl-[13px]  md:w-[398px] md:text-base md:pl-[21px]  lg:w-[797px] text-[20px]  lg:pl-[42px] "
                type="password"
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <input
                className="bg-[#F7F6F6] w-[252px] rounded-[4px] text-sm font-normal py-[21px] pl-[13px]  md:w-[398px] md:text-base md:pl-[21px]  lg:w-[797px] text-[20px] lg:pl-[42px] "
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <div className="flex items-center justify-center">
                <SubmitButton />
              </div>
            </div>
          </form>
          <div className="text-[13px] mt-[30px] font-normal hover:underline cursor-pointer hover:underline-offset-6 mb-30px md:text-[16px] lg:text-[20px] mb-[240px]">
            <Link to="/signin">Cancel</Link>
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

export default ResetPasswordCode;
