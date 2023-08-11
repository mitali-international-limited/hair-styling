import React from "react";
import BtnClassic from "../../../components/Button/BtnClassic";

const Card = ({ item, className }) => {
  return (
    <div className=" min-w-full relative  hoverOverlay cursor-pointer group">
      <div className="relative w-full h-[350px]">
        <img src={item.image[0]} alt={item.name} className="w-full h-full" />
      </div>
      <p className="text-[14px] text-[#111111] font-Proxima font-[500] pt-5 text-center uppercase">
        {item.name.toLowerCase()}
      </p>
      <p className="py-2 font-Proxima text-[17px] font-bold text-center">
        TK{item.price}
      </p>
      <div className={`${className}`}>
        <BtnClassic
          btnText={"Add to Cart"}
          btnWidth={
            "!w-full !bg-white !text-black !border !border-black !rounded-sm group-hover:!bg-black group-hover:!text-white"
          }
        />
      </div>
    </div>
  );
};

export default Card;
