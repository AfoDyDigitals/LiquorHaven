// eslint-disable-next-line no-unused-vars
import React from 'react'

function WhyLiquorHaven() {
  return (
    <div className="font-rubik w-[100vw] items-center justify-center bg-rose-100 px-[30px] md:py-[80px] lg:px-[100px]">
        <div className="text-center ">
          <div className="text-xl font-bold mb-[7px]    md:text-[25px] pt-6 leading-6 lg:px-[680] text-[39px] ">
            Why Liquor Haven?
          </div>
          <div className="text-[13px] items-center justify-center text-center font-normal leading-none text-base">
            The best selection of Whisky, Vodka and beer
          </div>
        </div>

        <div className="font-rubik grid grid-cols-1 mt-[25px] pb-[40px] gap-[32px] md:grid-cols-2 lg:flex flex-row lg:mt-[63px] gap-[68px] items-center justify-center ">
          <div className="flex gap-[12px] justify-center items-center">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="src/assets/local_shipping.png"
            />
            <div>
              <div className="tex-[16px] font-semibold  leading-tight text-base mb-2 md:mb-2 font-bold text-xl  leading-none">
                Worldwide Delivery
              </div>
              <div className="w-[180px] -mb-7 text-[13px] leading-none font-normal w-[180px]  justify-center md:w-[203px] text-base">
                Fast shipping and free in-store pick up
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="src/assets/lock_FILL.png"
            />

            <div>
              <div className="sm:font-semibold w-[174px]  leading-tight text-base mb-2 md:font-bold text-xl leading-none ">
                Safe Packaging
              </div>
              <div className="sm:w-[180px] -mb-7 text-[13px] font-normal w-[180px] leading-none justify-center md:w-[203px] text-base">
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
              <div className="sm:font-semibold   leading-tight text-base mb-2 md:font-bold text-xl   leading-none ">
                Trusted Marketplace
              </div>
              <div className="text-[13px] -mb-7 font-normal w-[180px] leading-none text-black  justify-center md:w-[203px] text-base">
                Purchased guaranteed and anti-fraud protection.
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] justify-center items-center">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="src/assets/payments_FILL.png"
            />
            <div>
              <div className="sm:font-semibold w:[203px]  leading-tight text-base mb-2 font-bold text-xl leading-none">
                Competitive Prices
              </div>
              <div className="text-[13px] font-normal  leading-none text-black  justify-center md:w-[203px] text-base">
                Unbeatable convenience, <br></br> service and value at best <br></br> price.
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default WhyLiquorHaven