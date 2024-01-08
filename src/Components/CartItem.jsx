import React, { useState } from "react";
import PropTypes from "prop-types";

import { not_starred, starred, deleteIcon } from "../assets";

const CartItem = ({
  id,
  name,
  price,
  image,
  quantity,
  onDelete,
  onUpdateQuantity,
}) => {
  const [localQuantity, setLocalQuantity] = useState(quantity);

  const displayedPrice = (price * localQuantity).toFixed(2);

  const handleIncrement = () => {
    const newQuantity = localQuantity + 1;
    setLocalQuantity(newQuantity);
    onUpdateQuantity(id, newQuantity);
  };

  const handleDecrement = () => {
    if (localQuantity > 1) {
      const newQuantity = localQuantity - 1;
      setLocalQuantity(newQuantity);
      onUpdateQuantity(id, newQuantity);
    }
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="overflow-hidden max-w-[96%]">
      <div className="font-rubik pt-10 pb-6 text-center items-center justify-center  flex max-w-full md:max-w-2xl lg:max-w-4xl mx-auto">
        <div className="w-full h-full md:w-[195px] md:h-[60%] lg:h-full ml-2 md:ml-0 ">
          <img className="w-full  h-[60%]" src={image} alt={name} />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col justify-start items-start gap-1.5 md:gap-4 mx-1 sm:mx-4 md:mx-8 mt-3">
          <p className="text-[16px] leading-[120%]  lg:text-[42.8px] md:text-xl font-[500] text-black">
            {name}
          </p>
          <p className="text-neutral-500 text-[16px] leading-[120%] md:text-lg lg:text-[42.8px] font-[400] mt-[9px] lg:mt-[20px]">
            ${displayedPrice}
          </p>
          <div className="flex lg:mt-[10px]">
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src={starred}
                alt="Star"
                className="lg:w-[50px]"
              />
            ))}
            <img src={not_starred} alt="Star" className="lg:w-[50px]" />
          </div>
          <div className="flex items-center justify-start gap-1 md:gap-2 text-lg">
            <button
              onClick={handleDecrement}
              className="w-10 h-10 sm:w-[44px] sm:h-[44px] md:w-16 md:h-16 p-4 bg-[#E66B66]  rounded-xl md:rounded-2xl border-2 border-red-400 justify-center items-center inline-flex lg:text-[28px] text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300"
            >
              -
            </button>

            <span className="w-10 h-10 sm:w-[44px] sm:h-[44px] md:w-16 md:h-16 p-4 bg-[#E66B66]  rounded-xl md:rounded-2xl lg:text-[28px] text-white border-2 border-red-400 justify-center items-center inline-flex transition-all duration-300">
              {localQuantity}
            </span>

            <button
              onClick={handleIncrement}
              className="w-10 h-10 sm:w-[44px] sm:h-[44px] md:w-16 md:h-16 p-4 bg-[#E66B66] rounded-xl md:rounded-2xl lg:text-[28px] text-white border-2 border-red-400 justify-center items-center inline-flex hover:bg-red-500 hover:border-red-500 transition-all duration-300"
            >
              +
            </button>

            <button
              onClick={handleDelete}
              className="w-12 h-10 p-2 sm:w-16 sm:h-16 sm:p-3 md:w-20 md:p-6 rounded-2xl  justify-center items-center inline-flex hover:bg-gray-200 hover:text-gray-800 transition-all duration-300"
            >
              <img
                src={deleteIcon}
                alt="Delete Icon"
                className="w-8 h-8 relative"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border border-gray-400 mx-4 mt-8"></div>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
};

export default CartItem;
