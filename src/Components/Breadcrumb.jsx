import React, { useState } from "react";
import ShopDropdown from "./ShopDropdown";
import CurrencyConverter from "./CurrencyConverter";
import { Link } from "react-router-dom";
import Caller from "./cards/Caller";

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
    <div className="font-rubik w-[100vw] overflow-none">
      {/* searchbar sm*/}
      <div className="flex justify-center items-center">
        <div className=" flex justify-center items-center  border-solid border border-[#9E9496] w-[343px] h-[35px] rounded-[4px] mt-[16px] md:hidden lg:hidden">
          <input
            className="font-normal focus:outline-none focus:none  w-[343px] h-[16px] text-[13px] p-[15px] border-none"
            type=""
            placeholder="Search over 3,000 quality drinks..."
          />
          <button className="flex justify-center items-center bg-[#A22634] w-[60px] h-[35px] rounded-l">
            <img
              className=" "
              src="../src/assets/search_FILL0_wght400_GRAD0_opsz24 (1) 1.svg"
            />
          </button>
        </div>
      </div>

      {/* breadcrumb */}
      <div className=" flex justify-evenly items-center bg-[#A22634] text-white  h-[60px] mt-[20px] md:h-[60px] mt-[40px] justify-between lg:h-[108px] mt-[60px] justify-between">
        <div className="flex gap-[10px] justify-center items-center md:ml-[32px]">
          <img
            className="w-[16px] md:w-[24px] lg:w-[32px]"
            src="../src/assets/call_FILL1_wght400_GRAD0_opsz24 1.svg"
          />
          <div className="text-[13px] font-semibold md:text-[16px] lg:text-[20px]">
            Hotline:
          </div>
          <Caller />
        </div>

        <div className="sm:hidden md:hidden lg:flex gap-[50px]">
          <Link to="/">Home</Link>
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
          <Link to="/about">About Us</Link>
          <p className="cursor-pointer">Contact Us</p>
        </div>

        {/* currency & icons sm md */}
        <div className="flex justify-center items-center gap-[10px] h-[32px] md:gap-[15px] lg:hidden">
          <div className="flex relative justify-center items-center gap-[5px] ml-[40px] mr-[10px]  md: mr-[10px]">
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
            {isCurrencyConverterVisible && (
              <CurrencyConverter
                toggleCurrencyConverter={toggleCurrencyConverter}
              />
            )}
          </div>

          <div className="flex w-[26px] md:w-[30px]">
            <img
              className="w-[16px] h-[16px] md:w-[18px] h-[18px]"
              src="../src/assets/favorite_FILL0_white.svg"
            />
            <div className="flex text-black justify-center items-center text-[8px] font-normal bg-[#E66B66]  h-[10px] w-[4px] p-1.5 rounded-full lg:text-[10px] h-[12.5px] w-[4px]">
              1
            </div>
          </div>

          <div className="flex w-[26px] md:w-[30px]">
            <Link to="/cart">
              <img
                className="w-[16px] h-[16px] md:w-[18px] h-[18px]"
                src="../src/assets/shopping_cart_white.svg"
              />
            </Link>
            <div className="flex text-black justify-center items-center text-[8px] font-normal bg-[#E66B66]  h-[10px] w-[4px] p-1.5 rounded-full lg:text-[10px] h-[12.5px] w-[4px]">
              1
            </div>
          </div>
        </div>

        <div className="flex  md:gap-[25px] lg:gap-[35px]">
          <button className="hidden md:flex justify-center items-center  w-[66px] h-[32px] border border-[#E7E3E4] rounded-[5px] bg-transparent  lg:rounded-[8px] w-[95px] h-[46px] ">
            <div className="font-rubik md:text-[13px] p-[10px] lg:text-[16px] p-[20px]">
              <Link to="/signin">Sign in</Link>
            </div>
          </button>
          <button className="hidden md:flex justify-center items-center bg-zinc-400  w-[66px] h-[32px]  rounded-[5px]  lg:rounded-[8px] w-[95px] h-[46px] ">
            <div className="font-rubik md:text-[13px] p-[10px] lg:text-[16px] p-[20px]">
              <Link to="/signup">Register</Link>
            </div>
          </button>
        </div>
      </div>
      {isShopDropdownVisible && (
        <ShopDropdown toggleShopDropdown={toggleShopDropdown} />
      )}
    </div>
  );
}

export default Breadcrumb;
