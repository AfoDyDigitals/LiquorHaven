// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar from "./NavBar";

function ShoppingCart() {
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
      
    </div>
  );
}

export default ShoppingCart;
