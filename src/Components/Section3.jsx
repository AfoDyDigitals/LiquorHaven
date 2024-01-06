<<<<<<< HEAD
import BestSelling from "./BestSelling";

function Section3() {
=======
import React, { useState, useRef, useEffect } from "react";
import TrendingCard from "./cards/TrendingCard";

import { products2 } from "./constants";

export const Section3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardsRef = useRef(null);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Scroll to the active card when activeIndex changes
  useEffect(() => {
    if (cardsRef.current) {
      const cardWidth = cardsRef.current.offsetWidth * 0.6;
      const scrollLeft = cardWidth * activeIndex;
      cardsRef.current.scrollLeft = scrollLeft;
    }
  }, [activeIndex]);
>>>>>>> 225a8ae69334eb74e2d322f19e4309bbd3a81399
  return (
    <section className="my-[30px] md:mt-14">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[20px] md:text-[39px] font-[700] opacity-90  md:opacity-100 mb-[7px] md:mt-[10px] ">
          Best Selling Drinks
        </h2>

        <p className="font-[400] text-[13px] ml-3 md:ml-0 text-center">
          The best selection of Whisky, Vodka and beer
        </p>

        {/* Desktop Screen View */}
        <div
          className="hidden md:flex flex-wrap justify-center  items-center md:gap-12 lg:gap-[100px] mx-auto"
          ref={cardsRef}
        >
          {products2.map((product, index) => (
            <TrendingCard key={index} imgURL={product.imgURL} />
          ))}
        </div>

        {/* Mobile Screen View */}
        <div className="relative">
          <div
            className="flex overflow-x-auto mt-4 px-5 mb-5 md:hidden lg:hidden w-[70%] mx-auto"
            ref={cardsRef}
          >
            <div className="flex flex-row items-center gap-[13px]">
              {products2.map((product, index) => (
                <TrendingCard
                  key={index}
                  imgURL={product.imgURL}
                  // Adjust the opacity based on the activeIndex
                  style={{ opacity: activeIndex === index ? 1 : 0.5 }}
                />
              ))}
            </div>
<<<<<<< HEAD
          </div>
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="src/assets/lock_FILL.png"
            />

            <div>
              <div className="sm:font-semibold w-[174px] font-rubik leading-tight text-base mb-2 md:font-bold md:text-xl  md:leading-none ">
                Safe Packaging
              </div>
              <div className="sm:w-[180px] -mb-7 text-[13px] font-normal w-[180px] leading-none font-[Rubik] justify-center md:w-[203px] text-base">
                100% Guarantee
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="src/assets/storefront_FILL.png"
            />
            <div>
              <div className="sm:font-semibold w-[190px] font-rubik leading-tight text-base mb-2 md:font-bold md:text-xl  md:leading-none ">
                Trusted Marketplace
              </div>
              <div className="text-[13px] -mb-7 font-normal w-[180px] leading-none font-[Rubik] justify-center md:w-[203px] text-base">
                Purchased guaranteed and anti-fraud protection.
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="src/assets/payments_FILL.png"
            />
            <div>
              <div className="sm:font-semibold w:[203px] font-rubik leading-tight text-base mb-2 font-bold md:text-xl  md:leading-none">
                Competitive Prices
              </div>
              <div className="text-[13px] font-normal w-[180px] leading-none text-black font-[Rubik] justify-center md:w-[203px] text-base">
                Unbeatable convenience, service and value at best price.
              </div>
=======
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {products2.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    activeIndex === index ? "bg-[#A22634]" : "bg-[#E66B66]"
                  }`}
                />
              ))}
>>>>>>> 225a8ae69334eb74e2d322f19e4309bbd3a81399
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      <BestSelling/>
      </>
    

=======
    </section>
>>>>>>> 225a8ae69334eb74e2d322f19e4309bbd3a81399
  );
};
