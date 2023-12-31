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

    // Auto-advance the carousel every 5 seconds
    let intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Pause the carousel when the tab is not visible
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        container.classList.add("paused");
        clearInterval(intervalId);
      } else {
        container.classList.remove("paused");
        // Resume the carousel when the tab becomes visible again
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        intervalId = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(intervalId);
    };
  }, [images]);

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
            animation: `carouselAnimation 500ms ease-in-out 5s forwards`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={image}
                alt={`slide-${index}`}
                className="w-full h-[78vh] md:w-full md:h-[55vh] lg:w-full lg:h-full object-cover"
              />

              <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50" />
              <div className="absolute top-0 left-0 right-0 bottom-0 md:flex md:items-center md:ml-0  ml-[21px] mt-28 md:mt-0">
                <div className="font-rubik text-white  md:mt-0 mt-20 md:ml-20 lg:ml-36 z-10">
                  <p className="text-[13px] md:text-[20] font-[400] opacity-70">
                    {changeParaagraph[activeIndex]}
                  </p>
                  <h1 className="text-[25px] md:text-[39px] lg:text-[61px]  font-[700]">
                    New Year's Eve Celebration
                  </h1>
                  <h2 className="text-[16px] md:text-[20px] lg:text-[39px] font-[400] opacity-90   md:opacity-100">
                    {changeSubTitle[activeIndex]}
                  </h2>
                  <div className="flex gap-4 md:gap-8 mt-4 md:mt-8 ml-0 md:ml-1">
                    <Button label={"Sign Up"} />
                    <Button label={"Register"} />
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
              className={`w-3 h-3 rounded-full cursor-pointer ${
                activeIndex === index ? "bg-[#A22634]" : "bg-[#E66B66]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
