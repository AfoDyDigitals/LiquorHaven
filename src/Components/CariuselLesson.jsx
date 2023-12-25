// CarouselComponent.jsx
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold mb-4">Image Carousel</h1>
      <Carousel responsive={responsive}>
        <div className="bg-gray-300 p-4 rounded-md">Item 1</div>
        <div className="bg-gray-300 p-4 rounded-md">Item 2</div>
        <div className="bg-gray-300 p-4 rounded-md">Item 3</div>
        <div className="bg-gray-300 p-4 rounded-md">Item 4</div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
