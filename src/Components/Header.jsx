import React, { useState } from "react";
import CurrencyConverter from "./CurrencyConverter";
import SideBar from "./SideBar";

function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  const [isCurrencyConverterVisible, setIsCurrencyConverterVisible] =
    useState(false);
  function toggleCurrencyConverter() {
    setIsCurrencyConverterVisible(!isCurrencyConverterVisible);
  }

  return (
    <div className="w-[100vw] overflow-none">
      <div className="font-rubik relative z-20 flex justify-center items-center mt-[25px]  mx-[16px] md:flex justify-center items-center justify-between mx-[32px] lg:flex gap-[0px] mx-[20px] mt-[25px]  justify-between">
        <img
          className="w-[70px] h-[24px] md:w-[146px] h-[24px] mr-[10px] lg:w-[260px] h-[50px]"
          src="../src/assets/LiquorHAVEN LOGO_.svg"
          alt="LiquorHaven Logo"
        />

        {/* searchbar */}
        <div className="hidden md:flex justify-center items-center w-[381px] h-[46px] rounded-[4px] border border-[#9E9496] lg:w-[600px] h-[62px] flex justify-center items-center justify-between rounded-[4px]">
          <input
            className="font-normal  w-full md:focus:outline-none focus:none w-[343px] lg:w-[600px] h-[46px] text-[13px] p-[15px] rounded-[4px] border-none"
            type=" "
            placeholder="Search over 3,000 quality drinks..."
          />

          <button className="flex justify-center items-center bg-[#A22634]  rounded-l md:w-[74px] h-[46px] lg:w-[125px] h-[62px] ">
            <img
              className=" "
              src="../src/assets/search_FILL0_wght400_GRAD0_opsz24 (1) 1.svg"
            />
          </button>
        </div>
        {isSidebarVisible && (
          <img
            onClick={toggleSidebar}
            className=" lg:hidden"
            src="../src/assets/menuBar.svg"
          />
        )}

        {!isSidebarVisible && (
          <img
            onClick={toggleSidebar}
            className=" lg:hidden"
            src="../src/assets/menuBar.svg"
          />
        )}

        {/* currency and icons */}
        <div className="sm:hidden md:hidden lg:flex gap-[20px]  h-[32px] justify-end">
          <div className="flex justify-center items-center gap-[2px] ">
            <div className="text-[16px] font-normal">USD</div>
            {isCurrencyConverterVisible && (
              <img
                onClick={toggleCurrencyConverter}
                className="w-[8px] h-[14px]"
                src="../src/assets/Dropdown.svg"
              />
            )}
            {!isCurrencyConverterVisible && (
              <img
                onClick={toggleCurrencyConverter}
                className="w-[8px] h-[14px]"
                src="../src/assets/Dropdown.svg"
              />
            )}
          </div>

          <div className="flex">
            <img
              className="w-[32px] h-[32px]"
              src="../src/assets/favorite_FILL0_wght400_GRAD0_opsz24 1.svg"
            />
            <div className="flex justify-center items-center text-[10px] font-normal bg-[#E66B66]  h-[12.5px] w-[5px] p-2 rounded-full">
              1
            </div>
          </div>

          <div className="flex">
            <img
              className="w-[32px] h-[32px]"
              src="../src/assets/shopping_cart_FILL0_wght400_GRAD0_opsz24 1.svg"
            />
            <div className="flex justify-center items-center text-[10px] font-normal flex bg-[#E66B66]  h-[12.5px] w-[5px] p-2 rounded-full">
              1
            </div>
          </div>
        </div>
      </div>
      {isSidebarVisible && <SideBar toggleSidebar={toggleSidebar} />}
      {isCurrencyConverterVisible && (
        <CurrencyConverter toggleCurrencyConverter={toggleCurrencyConverter} />
      )}
    </div>
  );
}

export default Header;
