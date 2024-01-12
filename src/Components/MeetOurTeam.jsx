// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import TeamCard from "./TeamCard";

const MeetOurTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef(null);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Scroll to the active card when activeIndex changes
  useEffect(() => {
    if (cardsRef.current) {
      const cardWidth = cardsRef.current.offsetWidth * 0.6;
      const scrollLeft = cardWidth * activeIndex;
      cardsRef.current.scrollLeft = scrollLeft;
    }
  }, [activeIndex]);

  const teamMembers = [
    {
      image: "../src/assets/Frame 49516.png",
      name: "John Wole",
      title: "CEO / Co-founder",
      icon1: "../src/assets/linkedin-box-fill.svg",
      icon2: "../src/assets/twitter-fill.svg",
      bio: "John is the spirited mastermind behind Liquor Haven.",
    },
    {
      image: "../src/assets/Frame 49516 (1).png",
      name: "Jane Yusuf",
      title: "CFO / Co-founder",
      icon1: "../src/assets/linkedin-box-fill.svg",
      icon2: "../src/assets/twitter-fill.svg",
      bio: "Jane is the financial alchemist who ensures every drop of success at Liquor Haven.",
    },
    {
      image: "../src/assets/Frame 49516 (2).png",
      name: "Jim Urji",
      title: "CTO / Co-founder",
      icon1: "../src/assets/linkedin-box-fill.svg",
      icon2: "../src/assets/twitter-fill.svg",
      bio: "Jim is the tech wizard who weaves the magic behind Liquor Haven's seamless online experience.",
    },
  ];

  return (
    <>
      <div className=" text-center mt-[64px] font-bold text-[20px] md:text-[25px] lg:text-[39px]">
        Meet Our Team
      </div>

      {/* teams sm */}
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

      
      {/* md carousel */}
      <div className="relative">
          <div
            className="hidden md:flex overflow-x-auto mt-4 px-5 mb-5 lg:hidden w-[90%] mx-auto "
            ref={cardsRef}
          >
            <div className="flex flex-row items-center gap-[13px]">
              {teamMembers.map((member, index) => (
                <TeamCard key={index} {...member} />
              ))}
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {teamMembers.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    activeIndex === index ? "bg-[#A22634]" : "bg-[#E66B66]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>


      {/* lg  */}

      <div className="hidden md:hidden lg:flex justify-center items-center justify-between px-[50px] gap-2">
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
};
export default MeetOurTeam;
