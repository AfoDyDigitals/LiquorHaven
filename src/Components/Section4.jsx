import React from "react";

function Section4() {
  return (
    <>
      {/* banner lg */}
      <div className="flex flex-col justify-center items-center font-rubik align-justify sm:gap-[15px] mt-[20px] sm:mx-[17px]  md:mx-[32px] lg:flex lg:gap-[60px] lg:flex-row  mx-[77px]">
        <div className="relative w-[343px] md:w-[680px] lg:w-[780px] ">
          <img className="" src="./src/assets/Banner 1.png" />
          <div className="absolute text-white flex flex-col justify-start items-left z-30 top-0 ml-[18px]">
            <div className="mt-[35px] text-[16px] font-medium leading-none md:mt-[72px] md:text-[20px] lg:mt-[90px]">
              Mix and sip
            </div>
            <div className="mt-[10px]  text-[25px] font-bold md:text-[39px]">
              Best Cocktails Limited <br></br> Edition
            </div>
            <div className="mt-[10px] text-[16px]font-medium md:text-[25px]">
              Toast to New Beginnings
            </div>
            <div className="w-[113px] h-[46px] mt-[20px] p-3 bg-red-400 rounded-lg border border-red-400 justify-center items-center gap-2.5 inline-flex">
              <div className=" text-base font-medium font-'Rubik' leading-tight">
                See More
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-[343px]  text-white md:w-[680px] md: lg:w-[780px] ">
          <img className="" src="./src/assets/Banner 2.png" />
          <div className="absolute flex flex-col justify-start items-left z-30 top-0 ml-[18px]">
            <div className="mt-[35px] text-[16px] font-medium leading-none md:mt-[72px] md:text-[20px] lg:mt-[90px]">
              Classic Taste
            </div>
            <div className="mt-[10px]  text-[25px] font-bold md:text-[39px]">
              No. 1 Quality Vodka
            </div>
            <div className="mt-[10px] text-[16px] md:text-[25px] font-medium">From <span className="text-[#F44336]">$30.00</span> </div>
            <div className="w-[113px] h-[46px] mt-[20px] p-3 bg-red-400 rounded-lg border border-red-400 justify-center items-center gap-2.5 inline-flex">
              <div className="text-base font-medium font-'Rubik' leading-tight">
                See More
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section4;
