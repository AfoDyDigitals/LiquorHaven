// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import OrderSummary from "../Components/OrderSummary";

import { Link, useLocation } from "react-router-dom";

const Checkout = () => {
  // Retrieve cart information from local storage
  const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
  const { cartItems, totalPrice } = storedCart;
  console.log("Total Price from local storage:", totalPrice);

  const savedAddress = localStorage.getItem("savedAddress") || "";

  const productPageTotalPrice = localStorage.getItem("totalPrice") || "0";

  console.log("Total Price from local storage:", totalPrice);

  return (
    <div className="overflow-hidden">
      <NavBar />
      <div className="font-rubik w-[100vw]  mx-auto">
        <div className="w-[100vw] h-[75px] bg-zinc-800 flex items-center text-center mx-auto justify-center gap-[52.9px]">
          <Link to="/">
            <p className="sm:w-[36px] md:text-[13px] md:w-[36px]   text-white lg:text-xl font-normal leading-normal">
              Home
            </p>
          </Link>
          <div className="w-3 h-3.5 sm:-mx-[30px] relative origin-top-left lg:-mx-5 rotate-[-3.87deg]">
            <img
              src="../navigate_next_copy.svg"
              alt=""
            />
          </div>
          <div className="sm:w-[63px] md:w-[63px] md:text-[13px] md:leading-none text-red-400 lg:text-xl font-bold lg:leading-normal lg:-ml-3">
            Checkout
          </div>
        </div>

        <div className="w-[100vw] sm:mt-[53px] sm:ml-[24.18px] sm:text-xs lg:text-xl lg:mt-[77px] lg:-mb-[120px] lg:ml-[137px] font-normal font-rubik relative">
          <div className=" z-10 text-[13px] md:text-[16px] lg:text-xl ">
            Add N7,000 more and get free shipping!
          </div>
          <div className="absolute sm:-bottom-2 left-0 sm:w-[245px] md:w-[305px] lg:w-[380px] h-[1px] bg-red-500"></div>
        </div>

        <div className="sm:mt-[23px] md:w-[100vw] pb-[50px] bg-rose-100 border border-white lg:mt-[152px] font-rubik">
          <div
            className="
                        sm:w-[348px] sm:mt-[27px] md:w-[712px] lg:w-[1200px] lg:h-[700px] bg-white shadow border border-stone-300 lg:mt-[97px]
                        px-2 md:px-4 mx-auto "
          >
            <div className="flex sm:mt-[30px]  sm:gap-[187px] md:gap-[490px] lg:gap-[782px] lg:mx-[100px] mb-[43px] lg:mt-[97px] relative">
              <div className=" sm:ml-[8px] sm:text-base md:ml-[16px] text-[25px] font-bold md:w-[165px] lg:w-[173px] ml-0 leading-[30px] relative z-10">
                Billing Details
              </div>
              <div className="lg:w-9 h-9 relative">
                <img
                  className="sm:w-4 sm:h-4 lg:w-9 lg:h-9"
                  src="../fluent_payment-28-regular.svg"
                  alt="fluent_payment logo"
                />
              </div>
              <div className="absolute sm:bottom-2 sm:w-[314px] sm:mx-[8px] md:w-[680px] md:mx-[16px]  lg:-bottom-2 lg:ml-0 lg:w-full h-[1px] bg-neutral-500"></div>
            </div>

            <form className="lg:space-y-4 font-rubik ">
              <div className="sm:flex-row sm:mx-[8px] md:grid md:grid-cols-2 md:gap-[12px] lg:grid grid-cols-2 lg:gap-[204px] lg:mx-[95px]">
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
                <div className="relative">
                  <label className="sm:text-xs sm:font-normal sm:leading-tight md:text-base lg:text-xl text-stone-500 font-normal leading-normal w-[384px] h-[24px] ">
                    Phone Number*
                  </label>
                  <select
                    className="p-1 mb-2 sm:text-xs mt-1 md:p-2 lg:p-3 lg:text-base w-full border rounded-md bg-neutral-100"
                    name="country_code"
                    required
                  >
                    <option value="+234">🇳🇬 (+234)</option>
                    <option value="+1">🇺🇸 (+1)</option>
                    <option value="+44">🇬🇧 (+44)</option>
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
                    rows="1"
                    value={savedAddress} // Set the value from local storage
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
                <label className=" text-xs sm:font-normal sm:w-[332px] sm:leading-tight  md:text-base lg:text-xl text-stone-500 font-normal leading-normal w-[384px] h-[24px] ">
                  Additional Information (Optional)*
                </label>
                <textarea
                  className="w-[318px] sm:items-center md:w-[680px] lg:mt-1 p-2  lg:w-full border rounded-md bg-neutral-100"
                  name="additional_info"
                  rows="1"
                ></textarea>
              </div>
            </form>
          </div>
          <OrderSummary
            totalPrice={
              totalPrice !== undefined && productPageTotalPrice === 0
                ? totalPrice
                : productPageTotalPrice
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
