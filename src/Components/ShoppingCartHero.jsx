// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar from "./NavBar";

function ShoppingCartHero() {
  return (
    <>
        <div className="mt-20">
          <NavBar />
          <div className="flex relative font-rubik mt-[9px] text-black">
            <img className="" src="src/assets/Cartn.png" alt="Shopping Cart" />
            <div
              className="absolute 
              mt-[304px] ml-[1225px] mr-[232px] w-[270px] h-[47px]text-center text-black text-[39px] font-medium  leading-[46.80px]"
            >
              Shopping Cart
            </div>
          </div>
        </div>
        <div className="w-[368px] h-[95px] py-[29px] mt-[49px] ml-[121px] bg-red-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
          <div className="text-red-50 text-[31px] font-medium font-rubik leading-[37.20px]">
            Continue Shopping
          </div>
        </div>
    </>
  );
}

export default ShoppingCartHero;
