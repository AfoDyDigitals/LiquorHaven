import React from "react";
import { not_starred, starred, deleteIcon } from "../../assets";

const CartItem = ({
  product,
  handleDeleteItem,
  handleIncrement,
  handleDecrement,
}) => (
  <div className="w-[894px] h-[452px] pl-[47.05px] font-rubik mx-[303px] pr-[87.69px] pb-[26.05px] text-center items-start justify-center inline-flex">
    <div className="flex mt-[118px] gap-[51px]">
      <img
        className="w-[212px] h-[270.90px]"
        src={`../src/assets/${product.imageFileName}`}
        alt={product.name}
      />
      <div className="w-[383px] h-[191.83px] flex-col justify-start items-start gap-[19.25px] inline-flex -mt-3">
        <div
          style={{
            fontSize: "40.78px",
            fontWeight: "500",
            color: "black",
            lineHeight: "51.33px",
          }}
        >
          {product.name}
        </div>
        <div>
          <p className="text-neutral-500 text-[42.78px] font-normal leading-[51.33px]">
            $
            {(
              (product.price && typeof product.price === "string"
                ? parseFloat(product.price.replace("$", ""))
                : parseFloat(product.price || 0)) * product.quantity
            ).toFixed(2)}
          </p>
        </div>
        <div className="flex w-[51.33px] h-[51.33px] relative ">
          <img src={starred} alt="Star" />
          <img src={starred} alt="Star" />
          <img src={starred} alt="Star" />
          <img src={starred} alt="Star" />
          <img src={not_starred} alt="Star" />
        </div>
        <div className="ml-auto flex items-center gap-[4.64px] md:gap-5 text-[34.22px]">
          <button
            onClick={() => handleDecrement(product.id)}
            className="w-[94.11px] h-[94.11px] p-[25.67px] bg-red-400 rounded-[17.11px] border-2 border-red-400 justify-center text-[#fff] items-center gap-[21.39px] inline-flex"
          >
            -
          </button>
          <span
            className={`w-[94.11px] h-[94.11px] p-[25.67px] rounded-[17.11px] border-2 justify-center items-center gap-[21.39px] inline-flex ${
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
            className="w-[94.11px] h-[94.11px] p-[25.67px] bg-red-400 rounded-[17.11px] border-2 border-red-400 text-[#fff] justify-center items-center gap-[21.39px] inline-flex"
          >
            +
          </button>
          <button
            onClick={() => handleDeleteItem(product.id)}
            className="w-[94.11px] h-[94.11px] p-[25.67px] rounded-[17.11px] justify-center items-center gap-[21.39px] inline-flex hover:p-4 hover:rounded-lg hover:bg-gray-200 transition-all duration-300"
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
