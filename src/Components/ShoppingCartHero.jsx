// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar from "./NavBar";

function ShoppingCartHero() {
  return (
    <>
      <div>
        <NavBar />
        <div className="flex relative font-rubik mt-[9px] text-black">
          <div className="">
            <img src="src/assets/Cartn.png" alt="Shopping Cart" />
          </div>
          <div
            className=" absolute  
              mt-[304px] ml-[1225px] mr-[232px] w-[271px] h-[47px] text-center text-[39px] font-medium  leading-[46.80px] "
          >
            Shopping Cart
          </div>
        </div>
      </div>
      <div className="w-full md:w-[164px] md:py-[29px] md:h-[20px] md:ml-[22px] md:mr-[558px] lg:w-[368px] lg:h-[95px] mt-[49px] lg:ml-[112px] lg:mr-[1239px] bg-red-500 rounded-lg flex text-center justify-center items-center">
        <div className="text-red-50 text-[18px] md:w-[150px] md:text-base md:py-[12px] md:leading-tight lg:text-[31px] lg:leading-[37.20px] lg:font-medium lg:w-[288px] h-[37px] font-rubik">
          Continue Shopping
        </div>
      </div>
    </>
  );
}

export default ShoppingCartHero;
