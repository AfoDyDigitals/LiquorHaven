import React from "react";

export const Button = ({ label }) => {
  return (
    <button
      className={
        label === "Register"
          ? "px-6 py-2 bg-[#B0A4A7] text-[16px] font-[400] rounded-md hover:opacity-90"
          : "px-6 py-2 bg-[#E66B66] text-[16px] font-[400] rounded-md hover:opacity-90"
      }
    >
      {label}
    </button>
  );
};
