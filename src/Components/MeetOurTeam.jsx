import React from "react";
import TeamCard from "./TeamCard";

function MeetOurTeam() {
  return (
    <>
      <div className=" text-center mt-[64px] font-bold text-[20px] md:text-[25px] lg:text-[39px]">
        Meet Our Team
        </div>
      <div className="w-[100vw] flex flex-col font-rubik my-[64px] px-[32px] justify-center items-center gap-[64px] md:hidden lg:hidden">
        <TeamCard
          image="../src/assets/Frame 49516.png"
          name="John Wole"
          title="CEO / Co-founder"
          icon1="../src/assets/linkedin-box-fill.svg"
          icon2="../src/assets/twitter-fill.svg"
          bio="John is the spirited mastermind behind Liquor Haven."
        />

        <TeamCard
          image="../src/assets/Frame 49516 (1).png"
          name="Jane Yusuf"
          title="CFO / Co-founder"
          icon1="../src/assets/linkedin-box-fill.svg"
          icon2="../src/assets/twitter-fill.svg"
          bio="Jane is the financial alchemist who ensures every drop of success at Liquor Haven."
        />

        <TeamCard
          image="../src/assets/Frame 49516 (2).png"
          name="Jim Urji"
          title="CTO / Co-founder"
          icon1="../src/assets/linkedin-box-fill.svg"
          icon2="../src/assets/twitter-fill.svg"
          bio="Jim is the tech wizard who weaves the magic behind Liquor Haven's seamless online experience."
        />
      </div>

      {/* <div className="hidden md:flex overflow-x-auto w-[100vw] justify-center items-center gap-[80px] mx-[80px] lg:flex w-[100%] justify-center items-center my-[77px] overflow-none mx-[80px]">
        <TeamCard
          image="../src/assets/Frame 49516.png"
          name="John Wole"
          title="CEO / Co-founder"
          icon1="../src/assets/linkedin-box-fill.svg"
          icon2="../src/assets/twitter-fill.svg"
          bio="John is the spirited mastermind behind Liquor Haven."
        />

        <TeamCard
          image="../src/assets/Frame 49516 (1).png"
          name="Jane Yusuf"
          title="CFO / Co-founder"
          icon1="../src/assets/linkedin-box-fill.svg"
          icon2="../src/assets/twitter-fill.svg"
          bio="Jane is the financial alchemist who ensures every drop of success at Liquor Haven."
        />

        <TeamCard
          image="../src/assets/Frame 49516 (2).png"
          name="Jim Urji"
          title="CTO / Co-founder"
          icon1="../src/assets/linkedin-box-fill.svg"
          icon2="../src/assets/twitter-fill.svg"
          bio="Jim is the tech wizard who weaves the magic behind Liquor Haven's seamless online experience."
        />
      </div> */}

<div className="hidden md:flex overflow-x-auto w-full justify-center items-center gap-4 md:gap-8 lg:gap-16 my-4">
  <TeamCard
    image="../src/assets/Frame 49516.png"
    name="John Wole"
    title="CEO / Co-founder"
    icon1="../src/assets/linkedin-box-fill.svg"
    icon2="../src/assets/twitter-fill.svg"
    bio="John is the spirited mastermind behind Liquor Haven."
  />

  <TeamCard
    image="../src/assets/Frame 49516 (1).png"
    name="Jane Yusuf"
    title="CFO / Co-founder"
    icon1="../src/assets/linkedin-box-fill.svg"
    icon2="../src/assets/twitter-fill.svg"
    bio="Jane is the financial alchemist who ensures every drop of success at Liquor Haven."
  />

  <TeamCard
    image="../src/assets/Frame 49516 (2).png"
    name="Jim Urji"
    title="CTO / Co-founder"
    icon1="../src/assets/linkedin-box-fill.svg"
    icon2="../src/assets/twitter-fill.svg"
    bio="Jim is the tech wizard who weaves the magic behind Liquor Haven's seamless online experience."
  />
</div>

    </>
  );
}

export default MeetOurTeam;
