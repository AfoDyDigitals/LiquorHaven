import React from "react";
import NavBar from "./NavBar";
import { cart_heroImg } from "../assets";
import { Link } from "react-router-dom";

function ShoppingCartHero() {
  return (
    <>
      <div className="overflow-hidden">
        <NavBar />
        <div className="flex relative mt-[4px] font-rubik  text-black w-full">
          <div className="w-full h-full md:h-[56vh]">
            <img
              src={cart_heroImg}
              alt="Shopping Cart"
              className="w-full md:h-[100%]"
            />
          </div>
        </div>
      </div>
      <button className="mt-[49px] mx-[10%] sm:mx-[25%] md:mx-0 md:ml-6 lg:ml-[112px] mb-4 md:mb-8 bg-[#B85652] rounded-lg text-center text-[16px] lg:text-[31px] leading-[120%]  font-[500] py-5 px-4 md:px-8 text-[#FDF0F0] hover:bg-[#A22634] hover:ease-in-out ">
        <Link to="/">Continue Shopping</Link>
      </button>
    </>
  );
}

export default ShoppingCartHero;
