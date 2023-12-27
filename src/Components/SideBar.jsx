import React from "react";

function SideBar({ isVisible, toggleSidebar }) {
  return (
    <>
      {/* sm Sidebar */}
      <div className="fixed flex flex-col w-[250px] h-[768px] bg-white  ml-[120px] z-20 md:hidden lg:hidden">
        <img
          onClick={toggleSidebar}
          className="w-[24px] absolute right-0 m-[20px]"
          src="../src/assets/CloseIcon.svg"
        />

        <div className="flex flex-col  justify-center items-center ml-[0px] mr-[0px] gap-[31px] mt-[108px] text-center md:hidden lg:hidden">
          <div className="text-[16px] font-normal md:text-[20px]">Home</div>
          <div className="text-[16px] font-normal md:text-[20px]">Shop</div>
          <div className="text-[16px] font-normal md:text-[20px]">About Us</div>
          <div className="text-[16px] font-normal md:text-[20px]">
            Contact Us
          </div>
          <button className="bg-[#E66B66] flex justify-center items-center w-[132px] p-[12px] rounded-[8px]">
            Sign in
          </button>
        </div>
      </div>

      {/* md sidebar */}
      <div className="hidden md:block fixed bg-white md:w-[450px] h-[768px] ml-[180px] z-20 lg:hidden">
        <img
          onClick={toggleSidebar}
          className="w-[24px] absolute right-0 m-[20px]"
          src="../src/assets/CloseIcon.svg"
        />
        <div className="hidden md:grid justify-end gap-[50px] absolute top-[108px] ml-[300px] mr-[48px] text-right lg:hidden">
          <div className="text-[16px] font-normal md:text-[20px]">Home</div>
          <div className="text-[16px] font-normal md:text-[20px]">Shop</div>
          <div className="text-[16px] font-normal md:text-[20px]">About Us</div>
          <div className="text-[16px] font-normal md:text-[20px]">
            Contact Us
          </div>
          <button className="bg-[#E66B66] flex justify-center items-center w-[132px] p-[12px] rounded-[8px]">
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default SideBar;
