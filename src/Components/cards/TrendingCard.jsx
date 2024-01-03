import React from "react";
import { not_starred, starred } from "../../assets";
import { Button } from "../Button";

const TrendingCard = ({ imgURL }) => {
  return (
    <>
      <div
        className=" mt-[10px] md:mt-[22px] lg:mt[47px]hover:opacity-90 hover:rounded-[1rem]  py-0 hover:border hover:border-gray-300 
    cursor-pointer flex shrink-0 medium:shrink flex-col justify-center items-center    medium:mt-[47px]"
      >
        <img
          src={imgURL}
          alt="Valentino Finest"
          className="hover:rounded-t-[1rem]"
        />
        <h3 className="text-[16px] wide:text-[20px] mt-[15px]">
          Valentino Finest
        </h3>
        <div className="flex flex-row items-center gap-0 mt-[15px]">
          <img src={starred} alt="Starred" />
          <img src={starred} alt="Starred" />
          <img src={starred} alt="Starred" />
          <img src={starred} alt="Starred" />
          <img src={not_starred} alt="not starred" />
        </div>
        <p className="font-bold   text-[16px] wide:text-[20px] mt-[15px] text-[#821E2A]">
          $ 150.00
        </p>
        <div className="flex flex-row items-center justify-center mt-[15px] mb-[6px]">
          <div className="w-3 h-3 rounded-full bg-[#7A9B57] text-[20px]"></div>
          <p className="ml-1 text-[#7A9B57]">In Stock</p>
        </div>
        <div className="mb-2">
          <Button label={"Add To Cart"} />
        </div>
      </div>
    </>
  );
};

export default TrendingCard;
