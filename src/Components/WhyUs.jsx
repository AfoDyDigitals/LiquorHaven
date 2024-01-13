import React from "react";

export const WhyUs = () => {
  return (
    <>
      <div className=" items-center justify-center bg-rose-100 px-[30px]  md:py-[80px] md:px-[88px] font-[Rubik] ">
        <div className="text-center ">
          <div className="sm:text-center mb-[7px] text-xl font-bold font-rubik md:text-[25px] pt-6 leading-normal lg:px-[680] text-[39px] ">
            Why Liquor Haven?
          </div>
          <div className="text-[13px] items-center justify-center text-center font-normal font-rubik leading-none text-base">
            The best selection of Whisky, Vodka and beer
          </div>
        </div>

        <div className="grid grid-cols-1 mt-[25px] pb-[40px] gap-[32px] md:grid-cols-2 lg:flex flex-row lg:mt-[63px] lg:marker:gap-[68px] items-center justify-center ">
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="src/assets/local_shipping.png"
            />
            <div>
              <div className="sm:font-semibold w-[174px]  leading-tight text-base mb-2 md:mb-2 font-bold md:text-xl font-rubik md:leading-none">
                Worldwide Delivery
              </div>
              <div className="sm:w-[180px] -mb-7 text-[13px] leading-none font-rubik font-normal w-[180px] font-'Rubik' justify-center md:w-[203px] text-base">
                Fast shipping and free in store pick up
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="src/assets/lock_FILL.png"
            />

            <div>
              <div className="sm:font-semibold w-[174px] font-rubik leading-tight text-base mb-2 md:font-bold md:text-xl  md:leading-none ">
                Safe Packaging
              </div>
              <div className="sm:w-[180px] -mb-7 text-[13px] font-normal w-[180px] leading-none font-rubik justify-center md:w-[203px] text-base">
                100% Guarantee
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="src/assets/storefront_FILL.png"
            />
            <div>
              <div className="sm:font-semibold w-[190px] font-rubik leading-tight text-base mb-2 md:font-bold md:text-xl  md:leading-none ">
                Trusted Marketplace
              </div>
              <div className="text-[13px] -mb-7 font-normal w-[180px] leading-none text-black font-rubik justify-center md:w-[203px] text-base">
                Purchased guaranteed and anti-fraud protection.
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="src/assets/payments_FILL.png"
            />
            <div>
              <div className="sm:font-semibold w:[203px] font-rubik leading-tight text-base mb-2 font-bold md:text-xl  md:leading-none">
                Competitive Prices
              </div>
              <div className="text-[13px] font-normal w-[180px] leading-none text-black font-rubik justify-center md:w-[203px] text-base">
                Unbeatable convenience, service and value at best price.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
