// eslint-disable-next-line no-unused-vars
import React from "react";

function OrderSummary() {
    return (
        <div className="sm:mt-[9px] lg:mt-[83px] font-rubik">
            <div id="orderSummaryGroup" className="flex flex-col  w-[349px] h-[713px] px-2 md:px-4 lg:px-[100px] lg:py-[42px] md:py-[32px] py-[30px] md:w-[712px] md:h-[897px] lg:w-[1200px] lg:h-[994px] shadow-[2px_3px_30px_0_rgba(253,225,223,1)] bg-[#FEFEFE] gap-[30px] md:gap-[32px] lg:gap-[36px]  border mx-auto border-solid">
                {/* Order Summary */}
                <div className="section1 flex flex-col gap-[15px] md:gap-[24px] lg:gap-[30px] w-[332px] h-[176px] md:w-[684px] md:h-[234px] lg:w-[1000px] lg:h-[354px] mx-auto">
                    {/* lg:w-[527px] */}
                    <div className="group1 lg:items-center w-[221px] md:w-[425px]  lg:w-[468px] lg:gap-[215px] lg:ml-[68px] h-[20px] md:h-[px] lg:h-[38px] flex items-start justify-between gap-[76px]">

                        <img src="src/assets/clarity_arrow-line.svg" alt="backArrow" className="text-left w-[20px] h-[20px] md:w-[28px] md:h-[28px] lg:w-[36px] lg:h-[36px]" />
                        <h2 className="text-[#3B3B3B] text-base md:text-[25px] lg:text[31px] font-bold leading-[19.2px] md:leading-6 lg:leading-9 font-['Rubik'] text-center">Order Summary</h2>
                    </div>
                    <p className="group2 w-[332px] md:w-[683px] lg:w-[1000px] lg:text-center text-black text-xs md:text-[15px] lg:text-xl font-normal font-['Rubik'] leading-[
15.6px] md:mb-[8px] md:leading-[19.2px]">Upon clicking ‘Place order’, I confirm I have read and acknowledged all <span className="text-[#BE7A84]">terms and policies.</span></p>

                    <div className="group3 gap-[157px] md:gap-[0px] md:justify-between lg:gap-[499px] flex font-['Rubik'] w-[322px] md:w-[680px] lg:w-[1000px] h-[94px] md:h-[124px] lg:h-[180.69px] text-xs md:text-base lg:text-xl text-black">
                        <div className="leftGroup3 flex-col justify-start items-start w-[87px] gap-2.5 md:gap-4 lg:gap-6  md:w-[120px] lg:w-[142px] flex leading-[15.6px] lg:leading-[24px]">
                            <div className="ItemTotal w-[87px] md:w-[120px] lg:w-[142px] font-normal h-4">Item’s total (4)</div>
                            <div className="font-normal h-4">Delivery fees</div>
                            <div className="FreeDelivery font-normal h-4">Free delivery</div>
                            <div className="Total font-bold  h-4">Total</div>
                        </div>
                        <div className="rightGroup3 flex-col justify-start items-end w-[87px] gap-2.5 md:gap-4 lg:gap-6 md:w-[100px] lg:w-[140px] flex leading-[15.6px]">
                            <div className=" text-right font-normal h-4 "> N 123,340</div>
                            <div className=" text-right  font-normal h-4">N 1,880</div>
                            <div className=" text-right text-[#3EB02B]  font-normal h-4">-N 470</div>
                            <div className=" text-right font-bold h-4">N 124,750</div>
                        </div>
                    </div>
                </div>
                {/* Enter Payment Delivery Method */}
                <div className="section2 w-[333px] h-[318px]  flex flex-col justify-start items-start gap-[30px] md-gap-[32px] lg-gap-[36px] px-2 md:w-[660px] md:h-[897px] lg:w-[1000px] lg:h-[994px] md:leading-6">
                    <div className="flex justify-between items-center w-[315px] md:w-[660px] lg:w-[1000px] h-[50px] md:px-[13px] lg:px-[13px]">
                        <div className="w-60 md:w-[374px] h-full relative flex items-center justify-center">
                            <input type="text" placeholder="Enter promo code here" className="placeholder:text-[10px] placeholder:pl-8 md:placeholder:text-base placeholder:font-normal w-full md:w-full h-full rounded border border-[#C4C4C4] mt-0" />

                            <img src="src/assets/solar_card-2-broken.svg" alt="" className="absolute top-[1.15rem] left-3 w-4 h-4" />
                        </div>
                        <button className="#8D8386 font-medium text-[13px] md:text-xl text-[#8D8386]  md:leading-6 leading-[
15.6px]">APPLY</button>
                    </div>
                    <div className="flex bg-[#F9F7F7] w-full md:w-[660px] lg:w-[1000px] leading-[15.6px] md:leading-6 h-11 md:h-[50px] lg:h-[60px] rounded px-[13px] md:px-[16px] justify-between items-center md:text-xl ">
                        <p className="text-[13px] md:text-xl lg:text-xl text-[#868889] font-normal  ">Payment Method</p>
                        <p className="text-[#FF4B55] ">CHANGE</p>
                    </div>
                    <div className="flex bg-[#F9F7F7] w-full md:w-[660px] lg:w-[1000px] lg:h-[60px] h-11 md:h-[50px] px-[13px] md:px-[16px] rounded justify-between items-center md:text-xl">
                        <p className="text-xs font-normal md:text-xl text-[#868889] ">Delivery Address</p>
                        <p className="text-[#FF4B55]">CHANGE</p>
                    </div>
                    <div className="flex bg-[#F9F7F7] w-full md:w-[660px] lg:w-[1000px] lg:h-[60px] h-11 md:h-[50px] px-[13px] md:px-[16px] rounded justify-between items-center md:text-xl">
                        <p className="text-xs md:text-xl font-normal  text-[#868889]">Delivery Method</p>
                        <p className="text-[#FF4B55]">CHANGE</p>
                    </div>
                    <h2 className="text-[#D92D20] md:text-xl text-left md:w-[660px] lg:w-[1000px]  font-medium md:font-semibold">Ship to a different address?</h2>
                </div>

                {/* Enter Payment Delivery Method */}
                <div className="section3 w-[349px] h-[103px] px-2 md:w-[712px] md:h-[897px] lg:w-[1000px] lg:h-[994px] flex flex-col items-center gap-[30px] md:gap-[32px] lg:gap-[36px] leading-[19.2px] md:leading-6">
                    <button className="w-[170px] md:w-[233px] bg-black text-white font-medium text-base py-2 md:text-xl px-4 md:px-10 md:py[15px] md:h-[54px] lg:h-[60px] h-[50px]">MAKE PAYMENT</button>
                    <button className=" sm:text-sm w-[140px] lg:w-[163px] lg:leading-[30px] font-normal lg:text-[23px] md:text[25px]  h-[20px] md:h-[30px] md:leading-[24px]">
                        Return to cart
                    </button>      </div>
            </div>
        </div>
    );
}

export default OrderSummary;