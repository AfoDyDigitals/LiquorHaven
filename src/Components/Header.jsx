import React, { useState } from "react";
import CurrencyConverter from "./CurrencyConverter";
import SideBar from "./SideBar";

function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }
  return (
    <>
      <div className="relative z-20 flex justify-center items-center  justify-between mx-[16px] md:flex justify-center items-center  justify-between mx-[32px] lg:mx-[45px]">
        <img
          className="w-[70px] h-[24px] md:w-[146px] lg:w-[226px]"
          src="../src/assets/LiquorHAVEN LOGO_.svg"
          alt="LiquorHaven Logo"
        />

        {/* searchbar */}
        <div className="hidden md:flex justify-center items-center w-[381px] h-[46px] rounded-[4px] border border-[#9E9496] lg:w-[877px] h-[62px] flex justify-center items-center justify-between rounded-[4px]">
          <input
            className="font-normal focus:outline-none focus:ring-1 focus:ring-[#E66B66] w-[343px]  md:w-[381px] lg:w-[600px] h-[16px] text-[13px] p-[15px] "
            type="text"
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
        <div className="sm:hidden md:hidden lg:flex gap-[45px] w-[260px] h-[32px]">
          <div className="flex justify-center items-center gap-[5px] ml-[64.59px]">
            <div className="text-[16px] font-normal">USD</div>
            <img
              className="w-[8px] h-[14px]"
              src="../src/assets/Dropdown.svg"
            />
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
      <CurrencyConverter />
    </>
  );
}

export default Header;
