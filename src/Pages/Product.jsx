// Product.js

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import {
  delivery_truck,
  heart_icon,
  maltell1,
  maltell2,
  navigation_left,
} from "../assets";
import { WhyUs } from "../Components/WhyUs";
import TrendingCard from "../Components/cards/TrendingCard";
import { products } from "../Components/constants";
import StateDropdown from "../Components/cards/StateDropdown";
import Footer from "../Components/Footer";

const Product = () => {
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
  return (
    <section className="">
      <NavBar />
      <div className="bg-[#E66B66] w-full h-16 flex justify-center items-center  font-rubik">
        <Link
          to="/"
          className="hover:font-semibold text-white hover:text-[#333]"
        >
          Home
        </Link>
        <div className="mx-2">
          <img src={navigation_left} alt="nav left" />
        </div>
        <p>Martell</p>
      </div>
      <div className="flex flex-row justify-evenly items-center">
        {" "}
        {/**/}
        <div className="flex justify-center items-start gap-6 mt-14">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-1 justify-center items-center  hover:rounded-md hover:bg-gray-100">
              <img
                src={maltell1}
                width={578}
                height={473}
                alt="maltell image"
              />
            </div>
            <div className="flex items-center flex-row gap-2">
              <div className="py-2 flex items-center justify-center  hover:rounded-md hover:bg-gray-100 w-[114px]">
                <img src={maltell2} width={100} height={150} alt="" />
              </div>
              <div className="p-2  hover:rounded-md hover:bg-gray-100">
                <img src={maltell1} width={114} height={150} alt="" />
              </div>
              <div className="p-2  hover:rounded-md hover:bg-gray-100">
                <img src={maltell1} width={114} height={150} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mt-6 flex justify-between items-center gap-[156px]">
            <p className="text-[16px] font-rubik text-[#E66B66] font-[200]">
              Liquor <span className=" font-[400]">HAVEN</span>
            </p>
            <img src={heart_icon} alt="" />
          </div>
          <p className="mt-[16px] font-bold text-[31px] font-rubik leading-[120%]">
            Martell
          </p>
          <p className="text-[25px] text-[#E66B66] font-[500] mt-[16px] leading-[120%]">
            $99.00
          </p>
          <p className="text-[20px] font-[500] mt-[16px] leading-[120%] text-black">
            Quanity
          </p>
          <div className="flex justify-start flex-row ml-2 mt-4">
            <button className="py-1.5 px-3 border-y-2 border-l-2 border-black text-[25px] font-[500]  leading-[120%] text-black">
              -
            </button>
            <button className="py-1.5 px-3 border-y-2 border-l-2  border-black text-[25px] font-[500] cursor-auto leading-[120%] text-black">
              1
            </button>
            <button className="py-1.5 px-3 border-y-2 border-2  border-black text-[25px] font-[500]  leading-[120%] text-black">
              +
            </button>
          </div>
          <div className="flex flex-col">
            <button className="text-[31px] font-[500] mt-4 py-[20px] px-20 leading-[120%] text-black bg-[#F7D1D0] rounded-md">
              Add to Cart
            </button>
            <button className="text-[31px] font-[500] mt-4 py-[20px] px-20 leading-[120%] text-black bg-[#B85652] rounded-md">
              Buy Now
            </button>
          </div>
          <p className="text-[20px] font-[600] leading-[120%] mt-[20px] font-rubik">
            Delivery and Returns
          </p>
          <p className="text-[16px] font-[400] leading-[120%] font-rubik mt-[12px]">
            Free delivery available for alot of products and bulk purchases
          </p>
          <StateDropdown />
          <div className="flex items-center">
            <img src={delivery_truck} alt="delivery" className="block" />
            <p className="text-[13px] font-[600] leading-[120%] font-rubik mx-2">
              Delivery fee #500
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-[20px] md:text-[39px] font-[700] opacity-90  md:opacity-100 mb-[7px] md:mt-[10px] leading-[120%] lg:leading-none font-inter ml-[2rem] md:ml-[4rem] lg:ml-[10rem] ">
        You may also Like
      </h2>
      {/* Desktop Screen View */}
      <div className="flex justify-center items-center">
        <div
          className="hidden md:flex flex-wrap justify-center  items-center md:gap-12 lg:gap-[4rem] "
          ref={cardsRef}
        >
          {products.map((product, index) => (
            <TrendingCard key={index} imgURL={product.imgURL} />
          ))}
        </div>
      </div>

      {/* Mobile Screen View */}
      <div className="relative">
        <div
          className="flex overflow-x-auto mt-4 px-5 mb-5 md:hidden lg:hidden w-[70%] mx-auto"
          ref={cardsRef}
        >
          <div className="flex flex-row items-center gap-[13px]">
            {products.map((product, index) => (
              <TrendingCard
                key={index}
                imgURL={product.imgURL}
                // Adjust the opacity based on the activeIndex
                style={{ opacity: activeIndex === index ? 1 : 0.5 }}
              />
            ))}
          </div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {products.map((_, index) => (
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
      <WhyUs />
      <Footer />
    </section>
  );
};

export default Product;
