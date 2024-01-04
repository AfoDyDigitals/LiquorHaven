import React from "react";

function CurrencyConverter({ isVisible, toggleCurrencyConverter }) {
  return (
    <>
      <div className="font-rubik bg-white text-black absolute z-30 top-[30px] right-0 flex flex-col justify-start items-center w-[150px]  pl-[10px] pr-[23px] py-[10px] gap-[5px]  md:top-[30px] right-[-80px] w-[200px]  gap-[15px] lg:hidden">
        <div className="flex justify-center items-center gap-[20px]">
          <img
            className="w-[32px] m-[10px]"
            src="../src/assets/canada-flag-circular-17758 1.png"
          />
          <div className="text-[16px] font-normal">CAD</div>
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <img
            className="w-[32px] m-[10px]"
            src="../src/assets/united-kingdom-flag-icon 1.png"
          />
          <div className="text-[16px] font-normal">GBP</div>
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <img
            className="w-[32px] m-[10px]"
            src="../src/assets/japan-flag-icon 1.png"
          />
          <div className="text-[16px] font-normal">JPY</div>
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <img
            className="w-[32px] m-[10px]"
            src="../src/assets/united-states-flag-icon 1.png"
          />
          <div className="text-[16px] font-normal">USD</div>
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <img
            className="w-[32px] m-[10px]"
            src="../src/assets/australia-flag-icon 1.png"
          />
          <div className="text-[16px] font-normal">AUD</div>
        </div>
      </div>

      <div className="hidden  md:hidden lg:block font-rubik bg-white text-black  absolute z-30 right-[0px] w-[200px]  gap-[25px] pl-[16px] mr-[87px]">
        <div className="flex justify-center items-center gap-[20px]">
          <img
            className="w-[32px] m-[10px]"
            src="../src/assets/canada-flag-circular-17758 1.png"
          />
          <div className="text-[16px] font-normal">CAD</div>
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <img
            className="w-[32px] m-[10px]"
            src="../src/assets/united-kingdom-flag-icon 1.png"
          />
          <div className="text-[16px] font-normal">GBP</div>
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <img
            className="w-[32px] m-[10px]"
            src="../src/assets/japan-flag-icon 1.png"
          />
          <div className="text-[16px] font-normal">JPY</div>
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <img
            className="w-[32px] m-[10px]"
            src="../src/assets/united-states-flag-icon 1.png"
          />
          <div className="text-[16px] font-normal">USD</div>
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <img
            className="w-[32px] m-[10px]"
            src="../src/assets/australia-flag-icon 1.png"
          />
          <div className="text-[16px] font-normal">AUD</div>
        </div>
      </div>
    </>
  );
}

export default CurrencyConverter;
