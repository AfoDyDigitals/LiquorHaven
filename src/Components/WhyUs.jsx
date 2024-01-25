import React from "react";

export const WhyUs = () => {
  return (
    <>
      <div className=" bg-rose-100 px-[30px]  md:py-[80px] md:px-[80px] font-[Rubik] ">
        <div className="text-center ">
          <div className="sm:text-center mb-[7px] text-xl font-bold font-rubik md:text-[25px] pt-6 leading-normal lg:px-[680] text-[39px] ">
            Why Liquor Haven?
          </div>
          <div className="text-[13px] items-center justify-center text-center font-normal font-rubik leading-none text-base">
            The best selection of Whisky, Vodka and beer
          </div>
        </div>
        {/* sm & md */}
        <div className="flex flex-col text-left mt-[40px] pb-[40px] gap-[32px] md:hidden lg:hidden">
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="../local_shipping.png"
            />
            <div>
              <div className="sm:font-bold w-[203px]  leading-tight text-base mb-2 md:mb-2 font-bold md:text-xl font-rubik md:leading-none">
                Worldwide Delivery
              </div>
              <div className="sm:w-[180px] mb-2 text-[13px] leading-none font-rubik font-normal w-[180px] font-'Rubik' justify-center md:w-[203px] text-base">
                Fast shipping and free in-store pick up
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="../lock_FILL.png"
            />

            <div>
              <div className="sm:font-bold w-[203px] font-rubik leading-tight text-base mb-2 md:font-bold md:text-xl  md:leading-none ">
                Safe Packaging
              </div>
              <div className="sm:w-[180px] mb-2 text-[13px] font-normal w-[180px] leading-none font-rubik justify-center md:w-[203px] text-base">
                100% Guarantee
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="../storefront_FILL.png"
            />
            <div>
              <div className="sm:font-bold w-[203px] font-rubik leading-tight text-base mb-2 md:font-bold md:text-xl  md:leading-none ">
                Trusted Marketplace
              </div>
              <div className="text-[13px] mb-2 font-normal w-[180px] leading-none text-black font-rubik justify-center md:w-[203px] text-base">
                Purchased guaranteed and anti-fraud protection.
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="../payments_FILL.png"
            />
            <div>
              <div className="sm:font-bold w-[203px] font-rubik leading-tight text-base mb-2 md:text-xl  md:leading-none">
                Competitive Prices
              </div>
              <div className="text-[13px] font-normal w-[180px] leading-none text-black font-rubik justify-center md:w-[203px] text-base">
                Unbeatable convenience, service and value at best price.
              </div>
            </div>
          </div>
        </div>

        {/* md */}
        <div className="hidden md:block h-[200px] text-left mt-[40px] gap-[41px] lg:hidden">
          <div className="flex justify-center items-center gap-[60px]">
            <div className="flex gap-[12px] justify-center items-center ">
              <img
                className="w-[24px] md:w-[32px]  lg:w-[60px]"
                src="../local_shipping.png"
              />
              <div>
                <div className="sm:font-bold w-[203px]  leading-tight text-base mb-2 md:mb-2 font-bold md:text-xl font-rubik md:leading-none">
                  Worldwide Delivery
                </div>
                <div className="sm:w-[180px] mb-7 text-[13px] leading-none font-rubik font-normal w-[180px] font-'Rubik' justify-center md:w-[203px] text-base">
                  Fast shipping and free in store pick up
                </div>
              </div>
            </div>
            <div className="flex gap-[12px] justify-center items-center ">
              <img
                className="w-[24px] md:w-[32px]  lg:w-[60px]"
                src="../lock_FILL.png"
              />

              <div>
                <div className="sm:font-bold w-[203px] font-rubik leading-tight text-base mb-2 md:font-bold md:text-xl  md:leading-none ">
                  Safe Packaging
                </div>
                <div className="sm:w-[180px] mb-7 text-[13px] font-normal w-[180px] leading-none font-rubik justify-center md:w-[203px] text-base">
                  100% Guarantee
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-[60px]">
            <div className="flex gap-[12px] justify-center items-center ">
              <img
                className="w-[24px] md:w-[32px]  lg:w-[60px]"
                src="../storefront_FILL.png"
              />
              <div>
                <div className="sm:font-bold w-[203px] font-rubik leading-tight text-base mb-2 md:font-bold md:text-xl  md:leading-none ">
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
                src="../payments_FILL.png"
              />
              <div>
                <div className="sm:font-bold w-[203px] font-rubik leading-tight text-base mb-2 md:text-xl  md:leading-none">
                  Competitive Prices
                </div>
                <div className="text-[13px] font-normal w-[180px] leading-none text-black font-rubik justify-center md:w-[203px] text-base">
                  Unbeatable convenience, service and value at best price.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* lg */}
        <div className="hidden md:hidden lg:flex items-center justify-center mt-[63px] gap-[60px]">
          <div className="flex justify-center items-center gap-[24px]  ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="../local_shipping.png"
            />
            <div>
              <div className="sm:font-bold w-[203px]  leading-tight text-base mb-2 md:mb-2 font-bold md:text-xl font-rubik md:leading-none">
                Worldwide Delivery
              </div>
              <div className="sm:w-[180px] -mb-7 text-[13px] leading-none font-rubik font-normal w-[180px] font-'Rubik' justify-center md:w-[203px] text-base">
                Fast shipping and free in store pick up
              </div>
            </div>
          </div>

          <div className="flex gap-[24px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="../lock_FILL.png"
            />
            <div>
              <div className="font-bold w-[150px] font-rubik mb-2 md:font-bold md:text-xl ">
                Safe Packaging
              </div>
              <div className="sm:w-[180px] -mb-7 text-[13px] font-normal w-[180px] leading-none font-rubik justify-center md:w-[203px] text-base">
                100% Guarantee
              </div>
            </div>
          </div>
          <div className="flex gap-[24px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="../storefront_FILL.png"
            />
            <div>
              <div className="sm:font-bold w-[203px] font-rubik leading-tight text-base mb-2 md:font-bold md:text-xl  md:leading-none ">
                Trusted Marketplace
              </div>
              <div className="text-[13px] -mb-7 font-normal w-[180px] leading-none text-black font-rubik justify-center md:w-[203px] text-base">
                Purchased guaranteed and anti-fraud protection.
              </div>
            </div>
          </div>
          <div className="flex gap-[24px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="../payments_FILL.png"
            />
            <div>
              <div className="sm:font-bold w-[203px] font-rubik leading-tight text-base mb-2 md:text-xl  md:leading-none">
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
