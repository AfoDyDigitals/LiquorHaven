// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import minusIcon from "../assets/ic_baseline-minus.png";
import plusIcon from "../assets/ic_baseline-plus.png";
import deleteIcon from "../assets/delete icon.png";

const CartItem = ({
  id, name, price, image, quantity, onDelete, onUpdateQuantity,}) => {
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

  const productNameStyle = {
    fontSize: "40.78px",
    fontWeight: "500",
    color: "black",
    lineHeight: "51.33px",
  };

  return (
    <div>
      <div className=" w-[894px] h-[452px] pl-[47.05px] font-rubik mx-[303px] pr-[87.69px] pt-[74.86px] pb-[26.05px] text-center items-center justify-center inline-flex ">
        <div className="flex mt-[118px] gap-[51px]">
          <img
            className="w-[254px] h[299.90px]"
            src={`src/assets/${image}`}
            alt={name}
          />
          <div className="w-[383px] h-[191.83px] flex-col justify-start items-start gap-[19.25px] inline-flex -mt-3 ">
            <div style={productNameStyle}>{name}</div>
            <div>
              <p className="text-neutral-500 text-[42.78px] font-normal leading-[51.33px]">
                ${displayedPrice}
              </p>
            </div>
            <div className="flex w-[51.33px] h-[51.33px] relative ">
              <img src={"src/assets/star svg.svg "} alt="Star" />
              <img src={"src/assets/star svg.svg "} alt="Star" />
              <img src={"src/assets/star svg.svg "} alt="Star" />
              <img src={"src/assets/star svg.svg "} alt="Star" />
              <img src={"src/assets/star svg2.svg"} alt="Star" />
            </div>
            <div className="ml-auto flex items-center gap-[4.64px] text-[34.22px]">
              <button
                onClick={handleDecrement}
                className="w-[94.11px] h-[94.11px] p-[25.67px] bg-red-400 rounded-[17.11px] border-2 border-red-400 justify-center items-center gap-[21.39px] inline-flex"
              >
                <img
                  src={minusIcon}
                  alt="Minus Icon"
                  className="w-[29.94px] h-[29.94px] relative"
                />
              </button>
              <span className="w-[94.11px] h-[94.11px] p-[25.67px] bg-rose-200 rounded-[17.11px] border-2 border-rose-200 justify-center items-center gap-[21.39px] inline-flex">
                {localQuantity}
              </span>
              <button
                onClick={handleIncrement}
                className="w-[94.11px] h-[94.11px] p-[25.67px] bg-red-400 rounded-[17.11px] border-2 border-red-400 justify-center items-center gap-[21.39px] inline-flex"
              >
                <img
                  src={plusIcon}
                  alt="Plus Icon"
                  className="w-[29.94px] h-[29.94px] relative"
                />
              </button>
              <button
                onClick={handleDelete}
                className="w-[94.11px] h-[94.11px] p-[25.67px] rounded-[17.11px] justify-center items-center gap-[21.39px] inline-flex"
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
      <div className="w-[1058px] h-[0px] border border-gray-400 mx-[221px] justify-center items-center mt-[75px] "></div>
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
