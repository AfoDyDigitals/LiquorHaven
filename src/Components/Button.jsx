import React from "react";

export const Button = ({ label }) => {
  return (
    <button className="px-6 py-2 bg-[#E66B66] text-[16px] font-[400] rounded-md">
      {label}
    </button>
  );
};
