import React from "react";

function CurrencyConverter({ isVisible, toggleCurrencyConverter }) {
  return (
    <div className="bg-amber-500 fixed ml-[170px] flex flex-col justify-start items-center w-[150px]  pl-[10px] pr-[23px] py-[10px] gap-[5px]  md:ml-[300px] md:w-[200px]  md:gap-[15px]  md:mr-[50px] lg:ml-[900px] lg:w-[200px]  lg:gap-[25px] lg:pl-[16px] mr-[87px] z-20">
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
  );
}

export default CurrencyConverter;
