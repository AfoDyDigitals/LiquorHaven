// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function OrderSummary() {

  const [showAddressTextarea, setShowAddressTextarea] = useState(false);
  const handleAddressTextClick = () => {
    setShowAddressTextarea(!showAddressTextarea);
  };

  return (
    <div className="sm:mt-[9px] lg:mt-[83px] font-rubik">
      <div
        id="orderSummaryGroup"
        className="w-[349px] h-[713px] px-2 md:px-4 lg:px-[100px] lg:py-[42px] md:py-[32px] py-[30px] md:w-[712px] md:h-[897px] lg:w-[1200px] lg:h-[994px] shadow-[2px_3px_30px_0_rgba(253,225,223,1)] bg-[#FEFEFE] gap-[30px] md:gap-[32px] border mx-auto border-solid"
      >
        <div className="flex sm:gap-[76px] md:gap-[217px] lg:gap-[258px] lg:ml-[70px]">
          <img
            className="sm:w-[20px] h-[20px]"
            src="src/assets/clarity_arrow-line.png"
            alt=""
          />
          <div className="text-[#3B3B3B] text-base md:text-[25px] lg:text[31px] lg: font-bold leading-[19.2px] md:leading-6 lg:leading-9 text-center">
            Order Summary
          </div>
        </div>
        <div className="w-[332px] sm:mt-[16px] sm:text-[13px] md:w-[683px] lg:w-[1000px] lg:text-center lg:mt-[11px]  md:text-base lg:text-xl lg:leading-normal lg:font-normal md:mb-[8px] md:mt-4 md:leading-tight">
          Upon clicking ‘Place order’, I confirm I have read and acknowledged
          all <span className="text-[#BE7A84]">terms and policies.</span>
        </div>

        <div className="gap-[157px] sm:mt-[28px] md:gap-[0px] md:mt-[37px] md:justify-between lg:gap-[499px] lg:mt-[45px] flex w-[322px] md:w-[680px] lg:w-[1000px] h-[94px] md:h-[124px] lg:h-[180.69px] text-xs md:text-base lg:text-xl text-black">
          <div className="flex-col sm:w-[87px] sm:text-[13px] sm:font-normal sm:gap-[10px] md:gap-4 lg:gap-6 lg:text-xl md:w-[120px] lg:w-[142px] flex ">
            <div className="ItemTotal font-normal">Item’s total </div>
            <div className="font-normal ">Delivery fees</div>
            <div className="FreeDelivery font-normal ">Free delivery</div>
            <div className="Total font-bold ">Total</div>
          </div>
          <div className="flex-col sm:w-[87px] sm:text-[13px] sm:font-normal sm:gap-[10px] md:gap-4 lg:gap-6 lg:text-xl md:w-[120px] lg:w-[142px] flex">
            <div className=" text-right font-normal  "> N 123,340</div>
            <div className=" text-right  font-normal">N 1,880</div>
            <div className=" text-right text-[#3EB02B]  font-normal ">
              {" "}
              -N 470
            </div>
            <div className=" text-right font-bold ">N 124,750</div>
          </div>
        </div>

        <div className="sm:text-sm mt-[39px] max-w-[333px] h-[318px]  flex flex-col justify-start items-start gap-[30px] md-gap-[32px]  px-2 md:w-[660px] md:h-[897px] lg:w-[1000px] lg:h-[994px] md:text-lg md:leading-6">
          <div className="flex justify-between items-center sm:w-[240px] md:w-[660px] lg:w-[1000px]  h-[50px] sm:mt-2 ">
            <div className="sm:w-[280px] md:w-[400px] relative flex items-center ">
              <img
                className="absolute left-0 top-0 h-8 md:h-10 p-2"
                src="src/assets/fluent payment.png"
                alt=""
              />
              <input
                type="text"
                placeholder="Enter promo code here"
                className="sm:text-[10px] lg:text-xl pl-10 w-full h-10 md:h-12 rounded border border-[#C4C4C4]"
              />
            </div>
           <div className="">
            <button className=" font-medium  text-[13px] md:text-base lg:text-xl text-[#8D8386]  md:leading-6 leading-[15.6px]">
              APPLY
            </button>
            </div>
          </div>
          <div className="flex bg-[#F9F7F7] w-full  md:w-[660px] lg:w-[1000px] leading-[15.6px] md:leading-6 sm:h-8 md:h-[50px] rounded px-[13px] md:px-[16px] justify-between items-center  ">
            <p className="text-[13px] md:text-lg lg:text-xl text-[#868889] font-normal  ">
              Payment Method
            </p>
            <p className="text-[#FF4B55] ">CHANGE</p>
          </div>
          <div className="flex bg-[#F9F7F7] w-full md:w-[660px] lg:w-[1000px] h-11 md:h-[50px] px-[13px] md:px-[16px] rounded justify-between items-center ">
            <p className="text-xs font-normal md:text-lg lg:text-xl  text-[#868889] ">
              Delivery Address
            </p>
            <p className="text-[#FF4B55]">CHANGE</p>
          </div>
          <div className="flex bg-[#F9F7F7] w-full md:w-[660px] lg:w-[1000px]  h-11 md:h-[50px] px-[13px] md:px-[16px] rounded justify-between items-center ">
            <p className="text-xs md:text-lg lg:text-xl font-normal  text-[#868889]">
              Delivery Method
            </p>
            <p className="text-[#FF4B55]">CHANGE</p>
          </div>
        </div>
        <div className="text-[#D92D20]  md:font-semibold sm:text-sm sm:-mt-[24px] sm:ml-[21px] md:-mt-[550px] md:ml-[14px] lg:text-xl lg:ml-[23px] lg:w-[266px] lg:-mt-[650px] cursor-pointer" onClick={handleAddressTextClick} >
          Ship to a different address?
        </div>
        {showAddressTextarea && (
        <textarea
          className="sm:mt-1 md:mt-2 w-full  h-14 p-2 sm:h-12 border border-gray-300 rounded lg:ml-[14px] sm:w-[310px] sm:ml-3 md:w-[660px] lg:w-[1000px]"
          placeholder="Enter your new address..."
        ></textarea>
      )}

        <div className="flex flex-col items-center sm:mt-[15px] md:mt-[42px] lg:mt-18">
          <button className=" bg-black text-white justify-center sm:p-1 sm:text-xs md:p-3 md:text-lg lg:p-4 lg:w-[300px]  lg:font-normal leading-normal lg:text-xl">
            MAKE PAYMENT
          </button>
          <button className="sm:mt-[10px] sm:text-[12px] w-[140px] lg:w-[163px] lg:leading-[30px] font-normal lg:text-[23px] md:text-[18px] md:mt-[25px] h-[20px] md:h-[30px] lg:mt-[15px] md:leading-[-px]">
            Return to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
