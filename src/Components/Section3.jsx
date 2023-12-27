import BestSelling from "./BestSelling";

function Section3() {
  return (
    <div>
      <div className=" items-center justify-center text-black bg-rose-100 px-[30px]  md:py-[80px] px-[88px] font-[Rubik] ">
        <div className="text-center">
          <div className="sm:text-center mb-[7px] text-xl font-bold md:text-[25px] pt-6 leading-normal lg:px-[680] text-[39px] ">
            Why Liquor Haven?
          </div>
          <div className="text-[13px] items-center justify-center text-center font-normal font-[Rubik] leading-none text-base">
            The best selection of Whisky, Vodka and beer
          </div>
        </div>

        <div className="grid grid-cols-1 mt-[25px] pb-[40px] gap-[32px] md:grid-cols-2 lg:flex flex-row lg:mt-[63px] gap-[68px] items-center justify-center ">
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="src/assets/local_shipping.png"
            />
            <div>
              <div className="sm:font-semibold w-[174px] font-[Rubik] leading-tight text-base mb-2 md:mb-2 font-bold text-xl font-'Rubik' leading-none">
                Worldwide Delivery
              </div>
              <div className="sm:w-[180px] -mb-7 text-[13px] leading-none font-[Rubik] font-normal w-[180px] leading-none font-'Rubik' justify-center md:w-[203px] text-base">
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
              <div className="sm:font-semibold w-[174px] font-[Rubik] leading-tight text-base mb-2 md:font-bold text-xl font-[Rubik] leading-none ">
                Safe Packaging
              </div>
              <div className="sm:w-[180px] -mb-7 text-[13px] font-normal w-[180px] leading-none font-[Rubik] justify-center md:w-[203px] text-base">
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
              <div className="sm:font-semibold w-[190px] font-[Rubik] leading-tight text-base mb-2 md:font-bold text-xl  font-[Rubik] leading-none ">
                Trusted Marketplace
              </div>
              <div className="text-[13px] -mb-7 font-normal w-[180px] leading-none font-[Rubik] justify-center md:w-[203px] text-base">
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
              <div className="sm:font-semibold w:[203px] font-[Rubik] leading-tight text-base mb-2 font-bold text-xl font-'Rubik' leading-none">
                Competitive Prices
              </div>
              <div className="text-[13px] font-normal w-[180px] leading-none text-black font-[Rubik] justify-center md:w-[203px] text-base">
                Unbeatable convenience, service and value at best price.
              </div>
            </div>
          </div>
        </div>
      </div>

      <BestSelling/>
      </div>

  );
}
export default Section3;
