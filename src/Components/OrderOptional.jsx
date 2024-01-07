// eslint-disable-next-line no-unused-vars
import React from "react";

function OrderOptional() {
    return (
        <>
            <div className=" w-[100vw] sm:w-[348px] sm:mx-[22px] sm:mt-[23px] sm:items-center sm:h-[325px] md:w-[712px] md:h-[422px] md:mx-[16px] lg:w-[1200px] lg:h-[829px] shadow border border-stone-300 bg:white lg:mt-[80px] font-rubik px-2 md:px-4 mx-auto ">
                <div className="sm:w-[165px] sm: text-sm sm:mt-[30px] sm:font-normal md:w-[255px] md:text-[13px] md:mt-[24px] md:h-[30px] md:text-lg lg:w-[355px] text-neutral-700 lg:text-[32px] lg:font-bold font-rubik lg:leading-[38.40px] text-center lg:mx-[423px] lg:mt-[54px]">
                    Orders note (optional)
                </div>
                <div className="sm:w-[346.95px] sm:h-[325px] sm:mt-[15px] sm:mx-[8px]  lg:w-[1000px] h-[300px] lg:pt-[117.07px] justify-center items-center ">
                    <textarea
                        className="sm:w-[330.90px] sm:h-[256px] sm:text-[10px] sm:pt-4 sm:pl-5 sm:leading-3 md:w-[680px] md:text-[13px] md:pt-4 lg:w-[1000px] lg:h-[300px] lg:pl-[22px] lg:pr-[419px] lg:pt-5 lg:pb-[207.10px] bg-neutral-100 items-center lg:mx-[101px] lg:p-5 text-neutral-700 lg:text-xl lg:font-normal  lg:leading-[28.80px]"
                        placeholder="Notes about your orders, special note for delivery."
                    ></textarea>
                </div>
                <div className=" sm:text-sm sm:-mt-10 sm:ml-[7px] md:text-base md:-mt-10 md:ml-[16px] lg:text-xl lg:font-normal leading-normal lg:mt-[214px] lg:ml-[100px]">
                    <div className="flex gap-5">
                        <div>Return policy</div>
                        <div>Term of Service</div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderOptional;