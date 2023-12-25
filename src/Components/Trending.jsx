import React from "react";
import TrendingCard from "./TrendingCard";
import { products } from "./constants/index";

export const Trending = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 ">
      {products.map((product, index) => (
        <TrendingCard key={index} imgURL={product.imgURL} />
      ))}
    </div>
  );
};
