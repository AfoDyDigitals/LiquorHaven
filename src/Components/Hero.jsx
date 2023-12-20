import React, { useState, useRef, useEffect } from "react";
import { carousel_image1, carousel_image2, carousel_image3 } from "../assets";
import { Button } from "./Button";

export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const images = [
    `${carousel_image1}`,
    `${carousel_image2}`,
    `${carousel_image3}`,
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        container.classList.add("paused");
      } else {
        container.classList.remove("paused");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const changeSubTitle = [
    "Toast to New Beginnings",
    "Refreshing choices for your summer Essentials",
    "Warm Up Your Celebrations with Spiced Spirits",
  ];

  const changeParaagraph = [
    "Frosty Elegance Extravaganza",
    "Summer Soirée Series",
    "Spiced Spirits Spectacle",
  ];

  return (
    <section id="home">
      <div className="relative overflow-hidden bg-[#B0A4A7] opacity-90">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={image}
                alt={`slide-${index}`}
                className="w-full h-[85vh] medium:w-full medium:h-[70vh] wide:w-full wide:h-full object-cover"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-start justify-start ">
                <div className="font-rubik text-white  md:mt-28 mt-20 md:ml-20 ml-5">
                  <p className="text-[20px] font-[400] opacity-70">
                    {changeParaagraph[activeIndex]}
                  </p>
                  <h1 className="text-[36px] md:text-[61px]  font-[700]">
                    New Year's Eve Celebration
                  </h1>
                  <h2 className="text-[32px]md:text-[39px] md:text-[39px] font-[400] opacity-90  medium:opacity-100">
                    {changeSubTitle[activeIndex]}
                  </h2>
                  <div className="flex gap-8 mt-4 md:mt-8 ml-0 md:ml-1">
                    <Button label={"Sign Up"} />
                    <Button label={"Sign In"} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                activeIndex === index ? "bg-[#A22634]" : "bg-[#E66B66]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
