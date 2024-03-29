// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function OrderSummary({ totalPrice }) {
  const [showAddressTextarea, setShowAddressTextarea] = useState(false);
  const handleAddressTextClick = () => {
    setShowAddressTextarea(!showAddressTextarea);
  };

  useEffect(() => {
    // Additional check to handle cases where totalPrice is not available
    if (totalPrice === null || totalPrice === undefined) {
      // Handle the case where totalPrice is not available
      console.error("totalPrice is not available");
    }
  }, [totalPrice]);

  // Assuming you have separate values for "Delivery fees" and "Free delivery"
  const deliveryFees = 1880; // Replace with your actual delivery fees
  const freeDelivery = -470; // Replace with your actual free delivery value

  // Log types and values for debugging
  console.log(
    "Types:",
    typeof totalPrice,
    typeof deliveryFees,
    typeof freeDelivery
  );
  console.log("Values:", totalPrice, deliveryFees, freeDelivery);

  // Convert totalPrice to a number, defaulting to 0 if it's not a valid number
  const totalPriceValue = Number(totalPrice) || 0;

  return (
    <div className="mt-[9px] lg:mt-[83px] font-rubik">
      <div
        id="orderSummaryGroup"
        className="w-[349px] h-[1050px] px-2 md:px-4 lg:px-[100px] lg:py-[42px] md:py-[32px] py-[30px] md:w-[712px] md:h-[1200px] lg:w-[1200px] lg:h-[1754px] shadow-[2px_3px_30px_0_rgba(253,225,223,1)] bg-[#FEFEFE] gap-[30px] md:gap-[32px] border mx-auto border-solid"
      >
        <div className="flex gap-[76px] md:gap-[217px] lg:gap-[258px] lg:ml-[70px]">
          <img
            className="w-[20px] h-[20px] lg:w-[40px] lg:h-[30px] md:w-[28px] md:h-[20px]"
            src="../clarity_arrow-line.png"
            alt=""
          />
          <div className="text-[#3B3B3B] text-base md:text-[25px] lg:text-[31px] lg:font-bold leading-[19.2px] md:leading-6 lg:leading-9 text-center">
            Order Summary
          </div>
        </div>
        <div className="w-[332px] mt-[16px] text-[13px] md:w-[683px] lg:w-[1000px] lg:text-center lg:mt-[11px]  md:text-base lg:text-xl lg:leading-normal lg:font-normal md:mb-[8px] md:mt-4 md:leading-tight">
          Upon clicking ‘Place order’, I confirm I have read and acknowledged
          all <span className="text-[#BE7A84]">terms and policies.</span>
        </div>

        <div className="gap-[157px] mt-[28px] md:gap-[0px] md:mt-[37px] md:justify-between lg:gap-[499px] lg:mt-[45px] flex w-[322px] md:w-[680px] lg:w-[1000px] h-[94px] md:h-[124px] lg:h-[180.69px] text-xs md:text-base lg:text-xl text-black">
          <div className="flex-col w-[87px] text-[13px] font-normal gap-[10px] md:gap-4 lg:gap-6 lg:text-xl md:w-[120px] lg:w-[142px] flex ">
            <div className="ItemTotal font-normal">Item’s total </div>
            <div className="font-normal ">Delivery fees</div>
            <div className="FreeDelivery font-normal ">Free delivery</div>
            <div className="Total font-bold ">Total</div>
          </div>
          <div className="flex-col w-[87px] text-[13px] font-normal gap-[10px] md:gap-4 lg:gap-6 lg:text-xl md:w-[120px] lg:w-[142px] flex">
            <div className="text-right font-normal ">
              {`$ ${totalPriceValue.toFixed(2)}`}
            </div>
            <div className="text-right font-normal">
              {`$ ${deliveryFees.toFixed(2)}`}
            </div>
            <div className="text-right text-[#3EB02B] font-normal ">
              {`-$ ${freeDelivery.toFixed(2)}`}
            </div>
            <div className="text-right font-bold ">
              {`$ ${(totalPriceValue + deliveryFees + freeDelivery).toFixed(
                2
              )}`}
            </div>
          </div>
        </div>

        <div className="text-sm mt-[39px] max-w-[333px] h-[318px]  flex flex-col justify-start items-start gap-[30px] md-gap-[32px]  px-2 md:w-[660px] md:h-[897px] lg:w-[1000px] lg:h-[994px] md:text-lg md:leading-6">
          <div className="flex justify-between items-center w-[240px] md:w-[660px] lg:w-[1000px]  h-[50px] mt-2 ">
            <div className="w-[280px] md:w-[400px] relative flex items-center ">
              <img
                className="absolute left-0 top-0 h-8 md:h-10 p-2"
                src="src/assets/fluent payment.png"
                alt=""
              />
              <input
                type="text"
                placeholder="Enter promo code here"
                className="text-[10px] lg:text-xl pl-10 w-full h-10 md:h-12 rounded border border-[#C4C4C4]"
              />
            </div>
            <div className="">
              <button className=" font-medium ml-2 md:ml-0  text-[13px] md:text-base lg:text-xl text-[#8D8386]  md:leading-6 leading-[15.6px]">
                APPLY
              </button>
            </div>
          </div>
          <div className="flex bg-[#F9F7F7] w-full text-[13px] md:text-base lg:text-xl md:w-[660px] lg:w-[1000px] leading-[15.6px] md:leading-6 h-8 md:h-[50px] rounded px-[13px] md:px-[16px] justify-between items-center lg:mt-[73px]">
            <p className=" text-[#868889] font-normal  ">Payment Method</p>
            <p className="text-[#FF4B55]">CHANGE</p>
          </div>
          <div className="flex bg-[#F9F7F7] w-full text-[13px] md:text-base lg:text-xl md:w-[660px] lg:w-[1000px] leading-[15.6px] md:leading-6 h-8 md:h-[50px] rounded px-[13px] md:px-[16px] justify-between items-center ">
            <p className=" font-normal text-[#868889] ">Delivery Address</p>
            <p className="text-[#FF4B55]">CHANGE</p>
          </div>
          <div className="flex bg-[#F9F7F7] w-full text-[13px] md:text-base lg:text-xl md:w-[660px] lg:w-[1000px] leading-[15.6px] md:leading-6 h-8 md:h-[50px] rounded px-[13px] md:px-[16px] justify-between items-center  ">
            <p className="font-normal  text-[#868889]">Delivery Method</p>
            <p className="text-[#FF4B55]">CHANGE</p>
          </div>
        </div>
        <div
          className="text-[#D92D20]  md:font-semibold text-sm -mt-[40px] ml-[21px] md:-mt-[550px] md:ml-[14px] lg:text-xl lg:ml-[23px] lg:w-[266px] lg:mt-5 cursor-pointer"
          onClick={handleAddressTextClick}
        >
          Ship to a different address?
        </div>
        {showAddressTextarea && (
          <textarea
            className="mt-1 md:mt-2 w-full  lg:h-20 p-2 h-12 border border-gray-300 rounded lg:ml-[14px] text-xs lg:w-[310px] ml-3 md:w-[660px] lg:w-[1000px] lg:text-base"
            placeholder="Enter your new address..."
          ></textarea>
        )}

        <div className="text-[#3B3B3B] mt-10 text-base md:text-[18px] md:mt-10 lg:text-[28px] lg:font-bold leading-[19.2px] lg:mt-[101px] md:leading-6 lg:leading-9 text-center">
          Orders note (optional)
        </div>
        <div className="h-36 w-80 ml-1 mt-2 lg:w-[1000px] lg:h-[196.34px] md:w-[680px]  md:h-38  lg:pl-[22px] lg:mt-5 bg-neutral-100 rounded justify-start items-center text-neutral-400 inline-flex">
          <div className="w-[250px] -mt-28 md:-mt-30 md:w-[520px] lg:w-[559px]  text-[10px] lg:text-base md:text-[10px] md:ml-5 font-normal font-rubik leading-[28.80px]">
            Notes about your orders, special note for delivery.
          </div>
        </div>

        <div className="flex flex-col items-center mt-[40px] md:mt-[42px] lg:mt-[100px]">
          <button
            onClick={() => {
              window.alert("Payment has been successfully made!");
              // Assuming you are using React Router for navigation
              window.location.href = "/"; // Redirect to the home page
            }}
            className="bg-black text-white justify-center p-1 text-xs md:p-2 md:text-base lg:p-3 lg:w-[200px] lg:font-normal leading-normal lg:text-xl"
          >
            MAKE PAYMENT
          </button>
          <Link to="/cart">
            <button className="mt-[10px] text-[12px] w-[140px] lg:w-[163px] lg:leading-[30px] font-normal lg:text-[23px] md:text-[16px] md:mt-[25px] h-[20px] md:h-[30px] lg:mt-[20px] md:leading-[-px]">
              Return to cart
            </button>
          </Link>
        </div>
        <div className=" flex gap-5 text-xs mt-[80px] ml-[7px] md:text-base md:mt-14 md:ml-[16px] lg:text-xl lg:font-normal leading-normal lg:mt-[160px] lg:ml-[80px]">
          <div>Return policy</div>
          <div>Term of Service</div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
