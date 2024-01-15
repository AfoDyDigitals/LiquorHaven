// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export const Button = ({ label }) => {
  return (
    <button
      className={
        label === "Register"
          ? "px-6 py-2 bg-[#B0A4A7] text-[16px] font-[400] rounded-md hover:opacity-90"
          : "px-6 py-2 bg-[#E66B66] hover:bg-[#b83c38] hover:text-black text-[16px] text-black font-[400] rounded-md hover:opacity-90 add-to-cart"
      }
      data-action=""
    >
      {label}
    </button>
  );
};
