import React from "react";

function WhoWeAre() {
  return (
    <div className="w-[100vw] overflow-none text-center text-rubik my-[64px]">
      <div className="text-[20px] md:text-[25px] lg:text-[39px] font-bold">Who We Are</div>
      <div className="flex flex-col justify-center items-center text-[20px] font-normal text-justify mt-[48px] mx-8">
        <p>Liquor Haven is more than just an online liquor store. It is a gateway
        to carefully curated experiences, a hub for refined palates, and a
        vibrant community of spirit enthusiasts. We meticulously select the
        finest beverages from across the world, offering you a treasure trove of
        international flavors and local gems. Whether you are a seasoned
        mixologist or a curious explorer, we are here to guide you on your
        personal liquor journey.
        </p>
        
        <p className="mt-[20px]">With Liquor Haven, you can unwind after a long day with a carefully
        crafted cocktail, celebrate special occasions with friends and family,
        or simply enhance your everyday moments with a touch of refined
        indulgence. We believe that every sip should be an adventure, and we are
        dedicated to making your discovery a delight.
        </p>
      </div>
    </div>
  );
}

export default WhoWeAre;
