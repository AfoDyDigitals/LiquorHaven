import React from "react";

const Caller = () => {
  const phoneNumber = "+23480197867";

  const handleLinkClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <a
      className="text-[13px] md:text-[16px] lg:text-[20px] font-normal cursor-pointer"
      href={`tel:${phoneNumber}`}
      onClick={handleLinkClick}
    >
      {phoneNumber}
    </a>
  );
};

export default Caller;
