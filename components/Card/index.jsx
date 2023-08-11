import React from "react";
import BtnClassic from "../Button/BtnClassic";

const CartCard = ({ item, className }) => {
  return (
    <div className="w-auto relative  hoverOverlay cursor-pointer">
      <div className="relative w-[75%] mx-auto">
        <img src={item.image[1]} alt={item.name} className="w-full" />
      </div>
      <p className="text-[14px] text-[#111111] font-Proxima font-[500] capitalize pt-5">
        {item.name.toLowerCase()}
      </p>
      <p className="py-2 font-Proxima text-[17px] font-bold">TK{item.price}</p>
      <div className={`${className}`}>
        <BtnClassic
          btnText={"Add to Cart"}
          btnWidth={"!w-full !bg-black !text-white !rounded-sm"}
        />
      </div>
    </div>
  );
};

export default CartCard;
