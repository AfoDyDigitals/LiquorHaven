// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar from "./NavBar";

function ShoppingCartHero() {
  return (
    <div>
      <div>
        <NavBar />
        <div className="flex relative font-[Rubik] mt-[9px]">
          <img src="src/assets/Cartn.png" alt="Shopping Cart" />
          <div className="absolute mt-[304px] mr-[324px] w-[270px] h-[47px] text-[39px] font-medium leading-[46.80px] text-black">
            Shopping Cart
          </div>
        </div>
      </div>
      
      <div className="w-[368px] py-[29px] left-[121px] top-[1566px] absolute bg-red-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
        <div className="text-red-50 text-[31px] font-medium font-['Rubik'] leading-[37.20px]">Continue Shopping</div>
      </div>
    </div>
  );
}

export default ShoppingCartHero;
