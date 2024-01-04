import React from "react";
import SubmitButton from "../Components/SubmitButton";
import NavBar from "../Components/NavBar";

function ResetPasswordMail() {
  return (
    <>
      <NavBar />
      <div className="w-[100vw] h-full bg-[#FDF0F0]">
        <div className="flex flex-col justify-center items-center font-rubik bg-white shadow-lg w-[324px] md:w-[500px] lg:w-[1000px]">
          <img
            className="mt-[32px] md:mt-[58px]"
            src="./src/assets/ProfileIcon.svg"
          />
          <div className="text-[20px] my-[13px] font-bold md:text-[25px] my-[15px] lg:text-[39px]">Reset your password</div>
          <div>We will send you an email to reset your password</div>
          <input
            className="bg-[#F7F6F6] w-[252px] rounded-[4px] mt-[48px] mb-[51px] text-[13px] font-normal py-[21px] pl-[13px]  md:text-[16px] pl-[21px] w-[398px] lg:text-[20px] mt-[90px] pl-[42px] w-[797px]"
            type=" "
            placeholder="Email address"
          />
          <SubmitButton />
          <div className="text-[20px] mt-[30px] font-normal underline underline-offset-8  ">
            Cancel
          </div>
        </div>

        <div className="flex justify-center items-center gap-[40px] md:gap-[60px] lg:gap-[316px]">
          <div>All rights reserved © 2024 LiquorHaven</div>
          <div>Privacy | Terms</div>
        </div>
      </div>
    </>
  );
}

export default ResetPasswordMail;
