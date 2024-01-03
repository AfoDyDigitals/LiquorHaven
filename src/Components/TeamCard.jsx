import React from "react";

function TeamCard(props) {
  return (
    <div className="flex flex-col text-center justify-center items-center gap-[16px] w-[350px]">
      <img className="w-[200px] md:w-[250px] lg:w-[280px]" src={props.image} />
      <div className="text-[16px] md:text-[20px] lg:text-[25px] font-semibold">{props.name}</div>
      <div className="text-[13px] md:text-[16px] lg:text-[20px] font-normal text-[#B0A4A7]">{props.title}</div>
      <div className="flex justify-center items-center gap-[16px] w-[16px] md:w-[18px] lg:w-[20px]">
        <img src={props.icon1} />
       <img src={props.icon2} />
      </div>
      <div className="flex justify-center items-center text-center font-normal text-[13px] md:text-[16px] lg:text-[20px]">{props.bio}</div>
    </div>
  );
}

export default TeamCard;
