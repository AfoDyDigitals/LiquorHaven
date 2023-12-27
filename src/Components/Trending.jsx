import React from "react";
import { products } from "./constants/index";
import TrendingCard from "./TrendingCard";
export const Trending = () => {
  return (
    <section className="mt-[30px] medium:mt-14">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[20px] md:text-[39px] font-[700] opacity-90  medium:opacity-100 mb-[7px] medium:mt-[10px]">
          Trending Today
        </h2>

        <p className="font-[400] text-[13px] ml-3 medium:ml-0 text-center">
          The best selection of Whisky, Vodka and beer
        </p>
        {/* desktop Screen View */}
        <div className="hidden medium:flex flex-wrap justify-center items-center gap-6 wide:gap-14 ">
          {products.map((product, index) => (
            <TrendingCard key={index} imgURL={product.imgURL} />
          ))}
        </div>
        {/* Mobile Screen View */}
        <div className="px-5">
          <div className="flex overflow-x-auto mt-4 px-5 mb-5 md:hidden lg-hidden">
            <div className="flex flex-row items-center gap-[13px]">
              {products.map((product, index) => (
                <TrendingCard key={index} imgURL={product.imgURL} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
