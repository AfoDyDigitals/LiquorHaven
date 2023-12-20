import React from "react";
import { Beer } from "./RangeComponents/Beer";
import { Wine } from "./RangeComponents/Wine";
import { Cocktails } from "./RangeComponents/Cocktails";
import { Spirit } from "./RangeComponents/Spirit";
import { Tequila } from "./RangeComponents/Tequila";

export const Ranges = () => {
  return (
    <section className="w-[90%] mt-14">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[32px]md:text-[39px] md:text-[39px] font-[700] opacity-90  medium:opacity-100 mb-[10px]">
          Our Ranges
        </h2>
        <p className="font-[400] text-[20px]">
          Enjoy our unbeatable range of over 3,000 quality drinks
        </p>
        <div className="flex flex-row flex-wrap justify-center items-center gap-6 mt-[20px]">
          <Wine />
          <Beer />
          <Cocktails />
          <Spirit />
          <Tequila />
        </div>
      </div>
    </section>
  );
};
