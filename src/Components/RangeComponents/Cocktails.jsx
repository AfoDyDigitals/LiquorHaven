import React from "react";
import { cocktail } from "../../assets";

export const Cocktails = () => {
  return (
    <div className="mt-2.5 hover:opacity-90 hover:rounded-[1rem]  py-0 hover:border hover:border-gray-300 cursor-pointer transition-transform duration-300 shrink-0 medium:shrink">
      <div className="">
        <img
          src={cocktail}
          alt="cocktails"
          className="hover:rounded-t-[1rem]"
        />
      </div>
      <div className="flex justify-center align-center mt-[12px]">
        <p className="text-[20px] font-[400] relative text-center inline">
          Cocktails
          <span className="absolute -top-[0.4rem] -right-[0.7rem] text-center text-[13px]">
            6
          </span>
        </p>
      </div>
    </div>
  );
};
