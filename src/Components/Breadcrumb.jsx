import React, { useState } from "react";
import ShopDropdown from "./ShopDropdown";
import CurrencyConverter from "./CurrencyConverter";

function Breadcrumb() {
  const [isShopDropdownVisible, setIsShopDropdownVisible] = useState(false);
  function toggleShopDropdown() {
    setIsShopDropdownVisible(!isShopDropdownVisible);
  }

  const [isCurrencyConverterVisible, setIsCurrencyConverterVisible] =
    useState(false);
  function toggleCurrencyConverter() {
    setIsCurrencyConverterVisible(!isCurrencyConverterVisible);
  }

  return (
    <>
      {/* searchbar */}
      <div className="relative flex items-center justify-center justify-between border-solid border border-[#9E9496] w-[343px] h-[35px] rounded-[4px] mx-[16px] mt-[16px] md:hidden lg:hidden">
        <input
          className="font-normal focus:outline-none focus:ring-1 focus:ring-[#E66B66] w-[343px] h-[16px] text-[13px] p-[15px] "
          type="text"
          placeholder="Search over 3,000 quality drinks..."
        />
        <button className="flex justify-center items-center bg-[#A22634] w-[60px] h-[35px] rounded-l">
          <img
            className=" "
            src="../src/assets/search_FILL0_wght400_GRAD0_opsz24 (1) 1.svg"
          />
        </button>
      </div>

      {/* breadcrumb */}
      <div className=" flex justify-evenly items-center bg-[#A22634] text-white  h-[60px] mt-[22px] md:h-[60px] mt-[40px] justify-between lg:h-[108px] mt-[60px] justify-between">
        <div className="flex gap-[10px] justify-center items-center md:ml-[32px]">
          <img
            className="w-[16px] md:w-[24px] lg:w-[32px]"
            src="../src/assets/call_FILL1_wght400_GRAD0_opsz24 1.svg"
          />
          <div className="text-[13px] font-semibold md:text-[16px] lg:text-[20px]">
            Hotline:
          </div>
          <div className="text-[13px] md:text-[16px] lg:text-[20px] font-normal">
            +234 80197867
          </div>
        </div>

        <div className="sm:hidden md:hidden lg:flex gap-[50px]">
          <div>Home</div>
          <div className="flex gap-[5px] justify-center items-center">
            <div>Shop</div>
            {isShopDropdownVisible && (
              <img
                onClick={toggleShopDropdown}
                src="../src/assets/Dropdown white.svg"
              />
            )}
            {!isShopDropdownVisible && (
              <img
                onClick={toggleShopDropdown}
                src="../src/assets/Dropdown white.svg"
              />
            )}
          </div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>

        {/* currency & icons */}
        <div className="flex justify-center items-center gap-[10px] h-[32px] md:gap-[15px] lg:hidden">
          <div className="flex justify-center items-center gap-[5px] ml-[50px] md:ml-[120px]">
            <div className="text-[10px] font-normal md:text-[13px]">USD</div>
            {isCurrencyConverterVisible && (
              <img
                onClick={toggleCurrencyConverter}
                className="w-[6px] h-[10px]"
                src="../src/assets/Dropdown white.svg"
              />
            )}
            {!isCurrencyConverterVisible && (
              <img
                onClick={toggleCurrencyConverter}
                className="w-[6px] h-[10px]"
                src="../src/assets/Dropdown white.svg"
              />
            )}
          </div>

          <div className="flex">
            <img
              className="w-[16px] h-[16px] md:w-[18px] h-[18px]"
              src="../src/assets/favorite_FILL0_white.svg"
            />
            <div className="flex text-black justify-center items-center text-[8px] font-normal bg-[#E66B66]  h-[10px] w-[4px] p-1 rounded-full lg:text-[10px] h-[12.5px] w-[4px]">
              1
            </div>
          </div>

          <div className="flex">
            <img
              className="w-[16px] h-[16px] md:w-[18px] h-[18px]"
              src="../src/assets/shopping_cart_white.svg"
            />
            <div className="flex text-black justify-center items-center text-[8px] font-normal bg-[#E66B66]  h-[10px] w-[4px] p-1 rounded-full lg:text-[10px] h-[12.5px] w-[4px]">
              1
            </div>
          </div>
        </div>

        <button className="hidden md:flex justify-center items-center p-0 w-[66px] h-[32px] border border-[#E7E3E4] rounded-[5px] bg-transparent ml-[40px] mr-[32px] lg:rounded-[8px] w-[95px] h-[46px] ">
          <div className="md:text-[13px] p-[10px] lg:text-[16px] p-[20px]">
            Sign in
          </div>
        </button>
      </div>
      {isShopDropdownVisible && (<ShopDropdown toggleShopDropdown={toggleShopDropdown} />)}
      {isCurrencyConverterVisible && (<CurrencyConverter toggleCurrencyConverter={toggleCurrencyConverter} />)}
    </>
  );
}

export default Breadcrumb;
