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
    <>
      <div className="relative  flex justify-between mt-6  mx-8 items-center   md:flex  md:items-center md:justify-between md:mx-12 md:mt-[48px] md:mb-[40px] lg:flex gap-[60px]  lg:justify-evenly lg:items-center lg:mt-[61px]">
        <img
          className="w-[70px] h-[24px] md:w-[168px] md:h-[24px] mr-[10px] lg:w-[226px] lg:h-[50px]"
          src="../src/assets/LiquorHAVEN LOGO_.svg"
          alt="LiquorHaven Logo"
        />

        {/* searchbar */}
        <div className="hidden md:flex md:justify-center md:items-center w-[381px] h-[46px] rounded-[4px] border border-[#9E9496] lg:w-[600px] lg:h-[62px] lg:flex lg:justify-center items-center justify-between lg:rounded-[4px]">
          <input
            className="font-normal focus:outline-none  w-[343px]  md:w-[381px] lg:w-[600px] h-[16px] text-[13px] p-[15px] "
            type="text"
            placeholder="Search over 3,000 quality drinks..."
          />
          <button className="flex justify-center items-center bg-[#A22634]  rounded-l md:w-[74px] h-[46px] lg:w-[125px] lg:h-[62px] ">
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
        <div className="sm:hidden md:hidden lg:flex gap-[20px] w-[260px] h-[32px]">
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
            <div className="flex justify-center items-center text-[10px] font-normal  bg-[#E66B66]  h-[12.5px] w-[5px] p-2 rounded-full">
              1
            </div>
          </div>
        </div>
      </div>
      {isSidebarVisible && <SideBar toggleSidebar={toggleSidebar} />}
      {isCurrencyConverterVisible && (
        <CurrencyConverter toggleCurrencyConverter={toggleCurrencyConverter} />
      )}{" "}
    </>
  );
}

export default Header;
