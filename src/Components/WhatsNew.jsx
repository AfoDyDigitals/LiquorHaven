import React, { useState, useRef, useEffect } from "react";
import TrendingCard from "./cards/TrendingCard";
import GetProduct from "./draft/GetProduct";
import { products3 } from "./constants";

export const WhatsNew = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardsRef = useRef(null);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const [products3, setProduct] = useState([]);
  useEffect(() => {
    GetProduct(setProduct);
  }, []);
  /* const handleCardClick = (index) => {
    // Navigate to the product page with the selected product's details
    history.push(`/product-details/${index}`);
  }; */

  // Scroll to the active card when activeIndex changes
  useEffect(() => {
    if (cardsRef.current) {
      const cardWidth = cardsRef.current.offsetWidth * 0.6;
      const scrollLeft = cardWidth * activeIndex;
      cardsRef.current.scrollLeft = scrollLeft;
    }
  }, [activeIndex]);
  return (
    <section className="my-[30px] md:mt-14">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[20px] md:text-[39px] font-[700] opacity-90  md:opacity-100 mb-[7px] md:mt-[10px] ">
          What’s New?
        </h2>

        <p className="font-[400] text-[13px] ml-3 md:ml-0 text-center">
          The best selection of Whisky, Vodka, and beer
        </p>

        {/* Desktop Screen View */}
        <div
          className="hidden md:flex flex-wrap justify-center  items-center md:gap-12 lg:gap-[100px] mx-auto"
          ref={cardsRef}
        >
          {products3.map((product, index) => (
            <TrendingCard
              key={index}
              imgURL={product.imageURL}
              name={product.name}
              price={`$${product.price}`}
            />
          ))}
        </div>

        {/* Mobile Screen View */}
        <div className="relative">
          <div
            className="flex overflow-x-auto mt-4 px-5 mb-5 md:hidden lg:hidden w-[70%] mx-auto"
            ref={cardsRef}
          >
            <div className="flex flex-row items-center gap-[13px]">
              {products3.map((product, index) => (
                <TrendingCard
                  key={index}
                  imgURL={product.imageURL}
                  name={product.name}
                  price={`$${product.price}`}
                />
              ))}
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {products3.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    activeIndex === index ? "bg-[#A22634]" : "bg-[#E66B66]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
