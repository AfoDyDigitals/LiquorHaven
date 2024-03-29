// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar from "./NavBar";
import OrderSummary from "./OrderSummary";
import OrderOptional from "./orderOptional";

const BillingDetails = () => {
  return (
    <>
      <NavBar />
      <div className="font-rubik mt-[28px]">
        <div className="sm:w-[375px]  md:w-[744px] lg:w-[1728px] h-[75px] bg-rose-200 flex items-center text-center justify-center gap-[52.9px]">
          <div className="sm:w-[36px] md:text-[13px] md:w-[36px] text-stone-500 lg:text-xl font-normal leading-normal">
            Home
          </div>
          <div className="w-3 h-3.5 relative origin-top-left rotate-[-3.87deg]">
            {" "}
            <img
              src="src/assets/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24 (1) 1.png"
              alt=""
            />{" "}
          </div>
          <div className="sm:w-[63px] md:w-[63px] md:text-[13px] md:leading-none text-pink-900 lg:text-xl font-bold leading-normal">
            Checkout
          </div>
        </div>
        <div className="sm:mt-[53px] sm:ml-[24.18px] sm:text-xs lg:text-xl lg:mt-[77px] lg:-mb-[120px] lg:ml-[137px] font-normal font-rubik relative">
          <div className=" z-10 ">Add N7,000 to cart and get shipping!</div>
          <div className="absolute sm:-bottom-2  left-0 sm:w-[212px] lg:w-[350px] h-[1px] bg-red-500"></div>
        </div>

        <div className="sm:w-[376px] sm:h-[1400px] sm:mt-[23px] md:w-[744px] md:h-[1460px] lg:w-[1728px] lg:h-[1895px] bg-rose-100 border border-white lg:mt-[152px] font-rubik">
          <div className="sm:w-[348px] sm:mt-[27px] sm:mx-[15px] md:w-[712px] lg:w-[1200px] lg:h-[700px] bg-white shadow border border-stone-300 lg:mx-[264px] lg:mt-[97px]">
            <div className="flex sm:mt-[30px]  sm:gap-[187px] md:gap-[490px]  lg:gap-[782px] lg:mx-[100px] mb-[43px] lg:mt-[97px] relative">
              <div className=" sm:ml-[8px] sm:w-[103px] sm:text-xs sm:font-normal md:ml-[16px] md:text-[21px] md:w-[165px] lg:w-[173px] lg:text-[25px] lg:ml-0 font-bold leading-[30px] relative z-10">
                Billing Details
              </div>
              <div className="lg:w-9 h-9 relative">
                <img
                  className="sm:w-4 sm:h-4 lg:w-9 lg:h-9"
                  src="src/assets/fluent payment.png"
                  alt=""
                />
              </div>
              <div className="absolute sm:bottom-2 sm:w-[314px] sm:mx-[8px] md:w-[680px] md:mx-[16px]  lg:-bottom-2 lg:ml-0 lg:w-full h-[1px] bg-neutral-500"></div>
            </div>

            <form className="lg:space-y-4 font-rubik">
              <div className="sm:flex-row sm:mx-[8px]  md:grid md:grid-cols-2 md:gap-[12px] lg:grid grid-cols-2 lg:gap-[204px] lg:mx-[95px]">
                <div>
                  <label className=" sm:text-xs sm:font-normal sm:leading-tight md:text-base lg:text-xl  text-stone-500 font-normal leading-normal w-[384px] h-[24px] ">
                    First Name*
                  </label>
                  <input
                    type="text"
                    className="sm:p-1 mt-1 p-2 w-full border rounded-md bg-neutral-100"
                    name="first_name"
                    required
                  />
                </div>
                <div>
                  <label className=" sm:text-xs sm:font-normal sm:leading-tight md:text-base lg:text-xl text-stone-500 font-normal leading-normal w-[384px] h-[24px] ">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    className="sm:p-1 mt-1 p-2 w-full border rounded-md bg-neutral-100"
                    name="last_name"
                    required
                  />
                </div>
              </div>

              <div className="sm:flex-row sm:mx-[8px] md:grid md:grid-cols-2 md:gap-[12px] md:mt-5 lg:grid grid-cols-2 lg:gap-[204px] lg:mx-[95px]">
                <div>
                  <label className="sm:text-xs sm:font-normal sm:leading-tight md:text-base lg:text-xl text-stone-500 font-normal leading-normal w-[384px] h-[24px] ">
                    Phone Number*
                  </label>
                  <select
                    className="sm:p-1 sm:mb-2 sm:text-xs mt-1 md:p-2 lg:p-3 lg:text-base w-full border rounded-md bg-neutral-100"
                    name="country_code"
                    required
                  >
                    <option value="+234">🇳🇬 NGN (+234)</option>
                    <option value="+1">🇺🇸 US (+1)</option>
                    <option value="+44">🇬🇧 UK (+44)</option>
                  </select>
                </div>
                <div>
                  <label className="sm:text-xs sm:font-normal sm:leading-tight md:text-base lg:text-xl text-stone-500 font-normal leading-normal w-[384px] h-[24px]">
                    Email Address*
                  </label>
                  <input
                    type="tel"
                    className="sm:p-1 mt-1 lg:p-2 w-full border rounded-md bg-neutral-100 "
                    name="phone_number"
                    required
                  />
                </div>
              </div>

              <div className="sm:flex-row sm:mx-[8px] md:grid md:grid-cols-2 md:mt-5 md:gap-[12px] lg:grid grid-cols-2 lg:gap-[204px] lg:mx-[95px]">
                <div>
                  <label className="sm:text-xs sm:font-normal sm:leading-tight md:text-base  lg:text-xl text-stone-500 font-normal leading-normal w-[384px] h-[24px] ">
                    Shipping Address*
                  </label>
                  <textarea
                    className="sm:p-1 mt-1 md:p-2 lg:p-3 w-full border rounded-md bg-neutral-100"
                    name="shipping_address"
                    required
                    rows="1.2"
                  ></textarea>
                </div>

                <div className="">
                  <label className="sm:text-xs sm:font-normal sm:w-[332px] sm:leading-tight md:text-base lg:text-xl text-stone-500 font-normal leading-normal w-[384px] h-[24px] ">
                    Postal Address*
                  </label>
                  <textarea
                    className=" sm:p-1 mt-1 md:p-2 lg:p-3 w-full border rounded-md bg-neutral-100"
                    name="postal_address"
                    required
                    rows="1"
                  ></textarea>
                </div>
              </div>

              <div className="sm:mx-[8px]  md:mt-5 lg:mx-[95px] lg:mt-[66px] ">
                <label className="sm:text-xs sm:font-normal sm:w-[332px] sm:leading-tight  md:text-base lg:text-xl text-stone-500 font-normal leading-normal w-[384px] h-[24px] ">
                  Additional Information (Optional)*
                </label>
                <textarea
                  className=" sm:w-[332px] sm:items-center md:w-[680px] lg:mt-1 p-2  lg:w-full border rounded-md bg-neutral-100"
                  name="additional_info"
                  rows="2"
                ></textarea>
              </div>
            </form>
          </div>
          <OrderSummary /> 
        </div>
        <OrderOptional />
      </div>
    </>
  );
};

export default BillingDetails;
