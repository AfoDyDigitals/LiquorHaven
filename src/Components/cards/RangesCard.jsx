// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export const RangesCard = ({ imgURL, name, quantity }) => {
  return (
    <div className="mt-[10px] md:mt-[22px] lg:mt[47px] hover:opacity-90 hover:rounded-[1rem]  py-0 hover:border hover:border-gray-300 cursor-pointer transition-transform duration-300 shrink-0  medium:shrink">
      <div className="">
        <img src={imgURL} alt={name} className="hover:rounded-t-[1rem]" />
      </div>
      <div className="flex justify-center align-center mt-[12px]">
        <p className="text-[20px] font-[400] relative text-center inline">
          {name}
          <span className="absolute -top-[0.4rem] -right-[0.7rem] text-center text-[13px]">
            {quantity}
          </span>
        </p>
      </div>
    </div>
  );
};
