import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  const imageUrl = "/testimonial-red-bg.jpg";
  const containerStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true, // Enable swipe behavior
    touchMove: true, // Enable touch events
    arrows: false, // Disable default arrows
    prevArrow: <div />, // Hide default previous arrow
    nextArrow: <div />, // Hide default next arrow
  };

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleDotClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
      setCurrentSlide(index);
    }
  };

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  return (
    <>
      {/* // lg testimonial flex */}
      <div
        className="hidden md:hidden lg:block w-full h-[762px] mt-[77px] font-rubik"
        style={containerStyle}
      >
        <div className="text-[39px] text-white font-bold text-center pt-[85px] md:pt-[72px] lg:pt-[127px] ">
          What our customers are saying
        </div>
        <div className="text-[20px] text-white font-normal text-center">
          The best selection of Whisky, Vodka, and beer
        </div>
        <div className="flex gap-[15px] mx-[39px]">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>

      {/* // md testimonial carousel */}
      <div
        className="relative hidden md:block w-full mt-[77px] font-rubik h-[509px] lg:hidden"
        style={containerStyle}
      >
        <div className="text-[20px] text-white font-bold text-center pt-[85px] md:pt-[72px]">
          What our customers are saying
        </div>
        <div className="text-[13px] text-white font-normal text-center md:text-[16px]">
          The best selection of Whisky, Vodka, and beer
        </div>

        <Slider
          {...settings}
          className=" overflow-x-auto flex justify-center items-center mx-[103px] z-30 gap-[10px]"
          ref={sliderRef}
          beforeChange={handleBeforeChange}
        >
          <div style={{ width: "492px" }} className="mx-[30px]">
            <TestimonialCard />
          </div>
          <div style={{ width: "500px" }} className="mx-[30px]">
            <TestimonialCard />
          </div>
          <div style={{ width: "500px" }} className="mx-[30px]">
            <TestimonialCard />
          </div>
        </Slider>

        {/* Custom dots with different colors */}
        <div className="flex justify-center mt-4">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full cursor-pointer mx-2 ${
                currentSlide === index
                  ? "bg-[#E66B66] slick-active"
                  : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* // sm testimonial carousel */}
      <div
        className="relative w-full h-[520px] mt-[77px] font-rubik md:hidden lg:hidden"
        style={containerStyle}
      >
        <div className="text-[20px] text-white font-bold text-center pt-[85px] md:pt-[72px]">
          What our customers are saying
        </div>
        <div className="text-[13px] text-white font-normal text-center md:text-[16px]">
          The best selection of Whisky, Vodka, and beer
        </div>

        {/* Navigation arrows */}
        <div className="absolute flex gap-[10px] right-5 top-10 transform -translate-y-1/2">
          <button className="" onClick={handlePrevClick}>
            <img src="./src/assets/Group 49620.png" alt="Previous" />
          </button>
          <button className="" onClick={handleNextClick}>
            <img src="./src/assets/Group 111.png" alt="Next" />
          </button>
        </div>

        <Slider
          {...settings}
          className="flex justify-center items-center mx-[13px]"
          ref={sliderRef}
          beforeChange={handleBeforeChange}
        >
          <div style={{ width: "350px" }}>
            <TestimonialCard />
          </div>
          <div style={{ width: "350px" }}>
            <TestimonialCard />
          </div>
          <div style={{ width: "350px" }}>
            <TestimonialCard />
          </div>
        </Slider>

        {/* Custom dots with different colors */}
        <div className="flex justify-center mt-4">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full cursor-pointer mx-2 ${
                currentSlide === index
                  ? "bg-[#E66B66] slick-active"
                  : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonial;
