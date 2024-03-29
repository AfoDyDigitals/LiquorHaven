// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line no-unused-vars, react/prop-types
function ShopDropdown({isVisible, toggleShopDropdown}) {
  
  return (
    <>
    <div className="font-rubik hidden md:hidden lg:block lg:bg-white absolute top-10 right-[-580%] z-20 flex justify-center items-center rounded-[5px]">
      <div className="hidden text-black md:hidden lg:flex px-[40px] py-[30px] gap-[80px] rounded-[5px] w-[677px]">
        <div className="flex flex-col text-left ">
          <div className="text-[16px] font-semibold">SHOP BY CATEGORY</div>
          <div className="flex flex-col mt-[40px] gap-[25px] text-[16px] font-normal ">
            <div>Wines</div>
            <div>Spirit</div>
            <div>Cocktails</div>
            <div>Fruit Juice</div>
            <div>Tequila</div>
            <div>Beer</div>
          </div>
        </div>

        <div className="flex flex-col text-left">
          <div className="text-[16px] font-semibold">SALES</div>
          <div className="flex flex-col mt-[40px] gap-[25px] text-[16px] font-normal ">
            <div>Limited Offers</div>
            <div>Special Discount</div>
            <div>Promotions</div>
          </div>
        </div>

        <div className="flex flex-col text-left">
          <div className="text-[16px] font-semibold">ALL PAGES</div>
          <div className="flex flex-col mt-[40px] gap-[25px] text-[16px] font-normal ">
            <div>About Us</div>
            <div>FAQ</div>
            <div>Cocktails</div>
            <div>Careers</div>
            <div>Become a Reseller</div>
            <div>Policies</div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default ShopDropdown;
