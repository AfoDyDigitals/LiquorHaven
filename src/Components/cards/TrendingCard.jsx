import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { not_starred, starred } from "../../assets";
import { Button } from "../Button";
import "../../App.css";
import Notification from "./Notification";

const TrendingCard = ({ imgURL, name, price, onAddToCart }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const navigate = useNavigate();

  const openProductDetails = () => {
    navigate("/product", { state: { imgURL, name, price } });
  };

  const handleAddToCartClick = () => {
    setShowNotification(true);
    setNotificationMessage(`${name} added to the cart!`);

    // Simulate an asynchronous action (e.g., API call to add the product to the cart)
    setTimeout(() => {
      onAddToCart({ id: Date.now(), imgURL, name, price, quantity: 1 }); // Assuming you need an id for each item
    }, 1000);

    // Hide the notification after a certain duration
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <>
      <div
        className="mt-[10px] md:mt-[22px] lg:mt[47px] hover:opacity-90 hover:rounded-[1rem]  py-0 hover:border hover:border-gray-300 
      cursor-pointer flex shrink-0 medium:shrink flex-col justify-center items-center    medium:mt-[47px]"
        onClick={openProductDetails}
      >
        <img
          src={imgURL}
          alt="Valentino Finest"
          className="hover:rounded-t-[1rem]"
        />
        <h3 className="text-[16px] wide:text-[20px] mt-[15px]">{name} </h3>
        <div className="flex flex-row items-center gap-0 mt-[15px]">
          <img src={starred} alt="Starred" />
          <img src={starred} alt="Starred" />
          <img src={starred} alt="Starred" />
          <img src={starred} alt="Starred" />
          <img src={not_starred} alt="not starred" />
        </div>
        <p className="font-bold   text-[16px] wide:text-[20px] mt-[15px] text-[#821E2A]">
          {price}.00
        </p>
        <div className="flex flex-row items-center justify-center mt-[15px] mb-[6px]">
          <div className="w-3 h-3 rounded-full bg-[#7A9B57] text-[20px]"></div>
          <p className="ml-1 text-[#7A9B57]  text-[16px] lg:text-[20px]">
            In Stock
          </p>
        </div>
        <div className="mb-2">
          <Button label={"Add To Cart"} onClick={handleAddToCartClick} />
        </div>
      </div>

      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
        />
      )}
    </>
  );
};

export default TrendingCard;
