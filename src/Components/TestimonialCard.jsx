// eslint-disable-next-line no-unused-vars
import React from "react";

function TestimonialCard() {
  return (
    <div className="font-rubik rounded-[5px] bg-white flex-col grid justify-items-start items-center py-[30px] px-[24px] h-[auto] mt-[30px] md:mt-[45px] ">
      <img src="./src/assets/Group 49617.png" />
      <div className="font-normal mt-[15px] mb-[30px] text-[15px] lg:text-[20px]">
        I've been using this website for my liquor needs when hosting social
        events, and its been a great experience overall. The visually appealing
        layout caught my attention, making it easy to explore and find what I
        need quickly.{" "}
      </div>

      <div className="flex justify-center items-center gap-[20px]">
        <img
          className="w-[32px] lg:w-[52px]"
          src="./src/assets/Ellipse 11.png"
        />
        <div className="text-[16px] font-semibold">Name Surname</div>
      </div>
    </div>
  );
}

export default TestimonialCard;
