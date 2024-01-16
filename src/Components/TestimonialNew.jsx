import React, { useState, useRef, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

export const TestimonialNew = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef(null);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < testimonialCards.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  // Scroll to the active card when activeIndex changes
  useEffect(() => {
    if (cardsRef.current) {
      const cardWidth = window.innerWidth < 744 ? 300 : 492;
      const scrollLeft = cardWidth * activeIndex;
      cardsRef.current.scrollLeft = scrollLeft;
    }
  }, [activeIndex]);

  // Updated mapping logic for testimonial cards
  const testimonialCards = Array.from({ length: 3 }).map((_, index) => {
    const cardWidth = window.innerWidth < 744 ? 300 : 492;
    return (
      <div
        key={index}
        style={{ width: `${cardWidth}px` }}
        className="flex-shrink-0"
      >
        <TestimonialCard />
      </div>
    );
  });

  const imageUrl = "/testimonial-red-bg.jpg";
  const containerStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      {/* sm */}
      <div className="relative w-full mt-[77px] font-rubik h-[509px] md:hidden lg:hidden" style={containerStyle}>
        <div className="hidden md:block text-[20px] text-white font-bold text-center pt-[85px] md:pt-[72px]">
          What our customers are saying
        </div>
        <div className="hidden md:block text-white font-normal text-center md:text-[16px]">
          The best selection of Whisky, Vodka, and beer
        </div>
        <div className="relative">
          <div className="flex justify-center items-center overflow-x-auto mx-[14px] gap-[50px] pt-[79px]" ref={cardsRef}>
            {testimonialCards}
          </div>
        </div>
        <div className="absolute flex gap-[10px] right-5 top-10 transform -translate-y-1/2 z-30">
          <button className="" onClick={handlePrevious}>
            <img src="../Group 49620.png" alt="Previous" />
          </button>
          <button className="" onClick={handleNext}>
            <img src="../Group 111.png" alt="Next" />
          </button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {testimonialCards.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? "active bg-[#E66B66]" : "bg-white"} w-3 h-3 rounded-full focus:outline-none focus:bg-[#E66B66]`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      {/* md */}
      <div className="hidden md:block w-full mt-[77px] font-rubik h-[509px] lg:hidden" style={containerStyle}>
        <div className="hidden md:block text-[20px] text-white font-bold text-center pt-[85px] md:pt-[72px]">
          What our customers are saying
        </div>
        <div className="hidden md:block text-white font-normal text-center md:text-[16px]">
          The best selection of Whisky, Vodka, and beer
        </div>
        <div className="relative">
          <div className="flex justify-center items-center overflow-x-auto mx-[14px] md:mx-[120px] gap-[50px]  " ref={cardsRef}>
            {testimonialCards}
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-2 mb-[30px]">
          {testimonialCards.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? "active bg-[#E66B66]" : "bg-white"} w-3 h-3 rounded-full focus:outline-none focus:bg-[#E66B66]`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      {/* lg testimonial flex */}
      <div className="hidden md:hidden lg:block w-full h-[762px] mt-[77px] font-rubik" style={containerStyle}>
        <div className="text-[39px] text-white font-bold text-center pt-[85px] md:pt-[72px] lg:pt-[127px] ">
          What our customers are saying
        </div>
        <div className="text-[20px] text-white font-normal text-center">
          The best selection of Whisky, Vodka, and beer
        </div>
        <div className="flex gap-[15px] mx-[39px]">
          {testimonialCards.map((_, index) => (
            <TestimonialCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialNew;
