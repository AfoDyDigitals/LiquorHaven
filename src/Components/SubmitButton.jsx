import React from "react";
import { Link } from "react-router-dom";

function SubmitButton() {
  return (
    <button className="font-rubik text-white text-[16px] font-semibold p-[12px] rounded-[8px] bg-[#E66B66] cursor-pointer ">
      <Link to="/forgotpassword/code">Submit</Link>
    </button>
  );
}

export default SubmitButton;
