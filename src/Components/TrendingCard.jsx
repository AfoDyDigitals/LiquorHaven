import React from "react";
import { not_starred, starred } from "../assets";
import { Button } from "./Button";

const TrendingCard = ({ imgURL }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={imgURL} alt="Valentino Finest" />
      <h3>Valentino Finest</h3>
      <div className="flex flex-row items-center gap-2">
        <img src={starred} alt="Starred" />
        <img src={starred} alt="Starred" />
        <img src={starred} alt="Starred" />
        <img src={starred} alt="Starred" />
        <img src={not_starred} alt="not starred" />
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-[#7A9B57] text-[20px]"></div>
        <p className="ml-1 text-[#7A9B57]">In Stock</p>
      </div>
      <Button label={"Add to Cart"} />
    </div>
  );
};

export default TrendingCard;
