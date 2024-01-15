import React from "react";
import { not_starred, starred, deleteIcon } from "../../assets";

const CartItem = ({
  product,
  handleDeleteItem,
  handleIncrement,
  handleDecrement,
}) => (
  <div className="w-[90%] max-w-[894px] max-h-[452px]  font-rubik md:mr-[40px] md:pb-[26.05px] text-center items-center md:items-start justify-center inline-flex">
    <div className="flex mt-12 ml-36 md:ml-0 md:mt-[118px] gap-[31.4px] md:gap-[51px]">
      <img
        className="w-[114.442px] h-[141.991px] md:w-[212px] md:h-[270.90px]"
        src={product.imgURL}
        alt={product.name}
      />
      <div className="w-[383px] h-[191.83px] flex-col justify-start items-start gap-[9px] md:gap-[19.25px] inline-flex md:-mt-3 mt-0">
        <div className="text-[16px] font-rubik md:text-[40.78px] font-[500] text-black leading-[120%]">
          {product.name}
        </div>
        <div>
          <p className="text-[#847B7D] text-[16px] font-rubik md:text-[42.78px] font-normal leading-[120%]">
            $
            {(
              (product.price && typeof product.price === "string"
                ? parseFloat(product.price.replace("$", ""))
                : parseFloat(product.price || 0)) * product.quantity
            ).toFixed(2)}
          </p>
        </div>
        <div className="flex w-[24px] md:h-[24px]  ">
          <img src={starred} alt="Star" />
          <img src={starred} alt="Star" />
          <img src={starred} alt="Star" />
          <img src={starred} alt="Star" />
          <img src={not_starred} alt="Star" />
        </div>
        <div className="ml-0 md:ml-auto flex items-center gap-[8.64px] md:gap-5 text-[14px] md:text-[34.22px]">
          <button
            onClick={() => handleDecrement(product.id)}
            className="py-2 px-4 md:px-6 md:py-4  bg-red-400 rounded-md md:rounded-[17.11px] border-2 border-red-400  text-[#fff]   "
          >
            -
          </button>
          <span
            className={`py-2 px-4 md:py-4 md:px-6 rounded-md  md:rounded-[17.11px] border-2 justify-center items-center inline-flex ${
              product.quantity > 1
                ? "bg-rose-200 border-rose-200 text-black transition-all duration-300"
                : product.quantity === 1
                ? "bg-rose-200 border-rose-200 text-black transition-all duration-300"
                : "bg-red-400 border-red-400 text-white transition-all duration-300"
            }`}
          >
            {product.quantity}
          </span>
          <button
            onClick={() => handleIncrement(product.id)}
            className="py-2 px-4 md:px-6 md:py-4  bg-red-400 rounded-md md:rounded-[17.11px] border-2 border-red-400  text-[#fff]   "
          >
            +
          </button>
          <button
            onClick={() => handleDeleteItem(product.id)}
            className="md:w-[94.11px] md:h-[94.11px] p-3 md:p-[25.67px] rounded-[17.11px] justify-center items-center gap-2 md:gap-[21.39px] inline-flex hover:p-4 hover:rounded-lg hover:bg-gray-200 transition-all duration-300"
          >
            <img
              src={deleteIcon}
              alt="Delete Icon"
              className="w-[29.94px] h-[29.94px] relative"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CartItem;
