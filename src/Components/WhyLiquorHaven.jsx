import React from 'react'

function WhyLiquorHaven() {
  return (
    <div className="font-rubik w-[100vw] items-center justify-center bg-rose-100 px-[30px] md:py-[80px] lg:px-[100px]">
      <div className="text-center flex flex-col gap-3 mt-2">
        <div className="text-xl mt-[2rem] font-bold mb-[7px]  md:text-[25px] md:leading-3 pt-1 leading-6 lg:text-[39px] lg:px-[680] text-[39px] ">
          Why Liquor Haven?
        </div>
        <div className="text-[13px] md:text-[16px] items-center justify-center text-center font-normal leading-[15.6px]">
          The best selection of Whisky, Vodka and beer
        </div>
      </div>

      <div className="font-rubik grid grid-cols-1 mt-[25px] pb-[40px] gap-[32px] md:grid-cols-2 lg:flex flex-row lg:mt-[63px] md:gap-[68px]  lg:gap-[68px] items-center justify-center ">
        <div className="flex gap-[9px] justify-center items-center ">
          <img
            className="w-[24px] md:w-[32px]  lg:w-[60px]"
            src="src/assets/local_shipping.png"
          />
          <div>
            <div className=" font-semibold  leading-tight text-base mb-2 md:mb-2 md:font-bold md:text-xl lg:text-xl ">
              Worldwide Delivery
            </div>
            <div className="w-[180px] -mb-7 text-[13px] leading-none font-normal justify-center md:w-[203px] md:text-base">
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
            <div className="font-semibold lg:text-xl w-[174px]  leading-tight text-base mb-2 md:font-bold md:text-xl  ">
              Safe Packaging
            </div>
            <div className="w-[180px] -mb-7 text-[13px] font-normal leading-none justify-center md:w-[203px] md:text-base">
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
            <div className="font-semibold lg:text-xl leading-tight text-base mb-2 md:font-bold md:text-xl ">
              Trusted Marketplace
            </div>
            <div className="text-[13px] -mb-7 font-normal w-[180px] leading-none text-black  justify-center md:w-[203px] md:text-base">
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
            <div className="font-semibold w:[203px]  leading-tight text-base mb-2 md:font-bold md:text-xl lg:text-xl ">
              Competitive Prices
            </div>
            <div className="text-[13px] -mb-7 font-normal w-[180px] leading-none text-black  justify-center md:w-[203px] md:text-base">
              Unbeatable convenience, <br></br> service and value at best <br></br> price.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyLiquorHaven