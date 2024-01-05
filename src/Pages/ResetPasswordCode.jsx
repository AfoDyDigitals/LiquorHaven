import React from "react";
import SubmitButton from "../Components/SubmitButton";
import NavBar from "../Components/NavBar";

function ResetPasswordCode() {
  return (
    <>
      <NavBar />
      <div className="w-[100vw] h-full bg-[#FDF0F0] flex flex-col justify-center items-center  md:">
        <div className="flex flex-col justify-center items-center font-rubik bg-white shadow-lg w-[324px] mt-[80px] md:w-[500px] mt-[83px] lg:w-[1000px] h-[800px]">
          <img
            className="mt-[150px] h-[48px] md:h-[60px] lg:h-[64px]"
            src="./src/assets/ProfileIcon.svg"
          />
          <div className="text-[20px] my-[13px] font-bold md:text-[25px] my-[15px] lg:text-[39px]">
            Reset your password
          </div>
          <div className="text-[13px] font-normal lg:text-[20px]">
            We will send you an email to reset your password
          </div>

          <div className="flex flex-col gap-[40px] mt-[40px] mb-[50px]">
            <input
              className="bg-[#F7F6F6] w-[252px] rounded-[4px]  text-sm font-normal py-[21px] pl-[13px]  md:w-[398px] text-base pl-[21px]  lg:w-[797px] text-[20px]  pl-[42px] "
              type=" "
              placeholder="Enter Code"
            />
            <input
              className="bg-[#F7F6F6] w-[252px] rounded-[4px]  text-sm font-normal py-[21px] pl-[13px]  md:w-[398px] text-base pl-[21px]  lg:w-[797px] text-[20px]  pl-[42px] "
              type=" "
              placeholder="Enter New Password"
            />
            <input
              className="bg-[#F7F6F6] w-[252px] rounded-[4px] text-sm font-normal py-[21px] pl-[13px]  md:w-[398px] text-base pl-[21px]  lg:w-[797px] text-[20px] pl-[42px] "
              type=" "
              placeholder="Confirm New Password"
            />
          </div>
          <SubmitButton />
          <div className="text-[13px] mt-[30px] font-normal underline underline-offset-6 mb-30px md:text-[16px] lg:text-[20px] mb-[240px]">
            Cancel
          </div>
        </div>

        <div className="flex text-[12px] font-normal gap-[30px] justify-center items-center  mb-[40px] mt-[269px] md:mt-[423px] gap-[60px]  lg:gap-[316px] ">
          <div>All rights reserved © 2024 LiquorHaven</div>
          <div>Privacy | Terms</div>
        </div>
      </div>
    </>
  );
}

export default ResetPasswordCode;
