import React, { useState } from "react";

import { Beer } from "./RangeComponents/Beer";
import { Wine } from "./RangeComponents/Wine";
import { Cocktails } from "./RangeComponents/Cocktails";
import { Spirit } from "./RangeComponents/Spirit";
import { Tequila } from "./RangeComponents/Tequila";

export const Ranges = () => {
  return (
    <section className="mt-[30px] md:mt-14">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[20px] md:text-[39px] font-[700] opacity-90  md:opacity-100 mb-[7px] md:mt-[10px]">
          Our Ranges
        </h2>

        <p className="font-[400] text-[13px] ml-3 md:ml-0 text-center">
          Enjoy our unbeatable range of over 3,000 quality drinks
        </p>

        <div className="justify-center gap-0 items-center  md:flex md:flex-col   hidden">
          <div className="flex flex-row md:flex-wrap justify-center items-center gap-[13px] md:gap-[19px] wide:gap-[60px] mt-[22px] md:mt-[47px]">
            <Wine />
            <Beer />
            <Spirit />
            <Cocktails />
            <Tequila />
          </div>
        </div>

        <div className="flex overflow-x-auto mt-4 px-5 mb-5 md:hidden lg:hidden">
          <div className="flex flex-row  items-center gap-[13px]">
            <Wine style={{ width: "100%", paddingRight: "20px" }} />
            <Beer style={{ width: "100%", paddingRight: "20px" }} />
            <Spirit style={{ width: "100%", paddingRight: "20px" }} />
            <Cocktails style={{ width: "100%", paddingRight: "20px" }} />
            <Tequila style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </section>
  );
};
