import React from "react";
import { Link } from "react-router-dom";

function SideBar({ isVisible, toggleSidebar }) {
  return (
    <>
      {/* sm Sidebar */}
      <div className=" font-rubik fixed z-20 top-[10px] right-[0px] flex flex-col w-[250px] h-[768px] bg-white  md:hidden lg:hidden">
        <img
          onClick={toggleSidebar}
          className="w-[24px] absolute right-0 m-[20px]"
          src="../src/assets/CloseIcon.svg"
        />

        <div className="flex flex-col font-rubik justify-center items-center ml-[0px] mr-[0px] gap-[31px] mt-[108px] text-center md:hidden lg:hidden">
          <div className="text-[16px] font-normal md:text-[20px]">
            <Link to="/">Home</Link>
          </div>
          <div className="text-[16px] font-normal md:text-[20px]">
            <Link to="/shop">Shop</Link>
          </div>
          <div className="text-[16px] font-normal md:text-[20px]">
            <Link to="/about">About Us</Link>
          </div>
          <div className="text-[16px] font-normal md:text-[20px]">
            <Link to="/product">Contact Us</Link>
          </div>
          <button className="bg-[#E66B66] font-rubik flex justify-center items-center w-[132px] p-[12px] rounded-[8px]">
            <Link to="/signin">Sign in</Link>
          </button>
        </div>
      </div>

      {/* md sidebar */}
      <div className="font-rubik hidden md:block fixed top-[10px] right-[0px] bg-white md:w-[450px] h-[768px]  z-20 lg:hidden">
        <img
          onClick={toggleSidebar}
          className="w-[24px] absolute right-0 m-[20px]"
          src="../src/assets/CloseIcon.svg"
        />
        <div className="hidden md:grid font-rubik justify-end gap-[50px] absolute top-[108px] ml-[300px] mr-[48px] text-right lg:hidden">
          <div className="text-[16px] font-normal md:text-[20px]">Home</div>
          <div className="text-[16px] font-normal md:text-[20px]">Shop</div>
          <div className="text-[16px] font-normal md:text-[20px]">About Us</div>
          <div className="text-[16px] font-normal md:text-[20px]">
            Contact Us
          </div>
          <button className="bg-[#E66B66] font-rubik flex justify-center items-center w-[132px] p-[12px] rounded-[8px]">
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default SideBar;
