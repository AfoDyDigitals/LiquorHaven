import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-center justify-between">
      <img className="w-[226px] h-[50px]" src="../src/assets/LiquorHAVEN-LOGO.png" alt="LiquorHaven Logo" />

      <div className="flex w-[877px] h-[61px] rounded-[5px] justify-between items-center border-solid border border-[#9E9496]">
        <input
          className="flex w-[800px] h-[16px]text-[13px] p-[15px] font-normal focus:outline-none focus:ring-1 focus:ring-[#E66B66]"
          type="text"
          placeholder="Search over 3,000 quality drinks..."
        />
        <button className="flex justify-center items-center bg-[#A22634] w-[125px] h-[62px]">
          <img
            className=""
            src="../src/assets/search_FILL0_wght400_GRAD0_opsz24 (1) 1.svg"
          />
        </button>
      </div>

      <div className="flex gap-[45px] w-[260px] h-[32px]">
        <div className="flex justify-center items-center gap-[5px] ml-[64.59px]">
          <div className="text-[16px] font-normal">USD</div>
          <img className="w-[8px] h-[14px]" src="../src/assets/Dropdown.svg" />
        </div>

        <div className="flex">
          <img className="w-[32px] h-[32px]" src="../src/assets/favorite_FILL0_wght400_GRAD0_opsz24 1.svg" />
          <div className="text-[10px] font-normal bg-[#E66B66] rounded-[100%] h-[12.5px] w-[5px] p-1">1</div>
        </div>

        <div className="flex">
          <img className="w-[32px] h-[32px]" src="../src/assets/shopping_cart_FILL0_wght400_GRAD0_opsz24 1.svg" />
          <div className="text-[10px] font-normal flex bg-[#E66B66] rounded-[100%] h-[12.5px] w-[5px] p-1">1</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
