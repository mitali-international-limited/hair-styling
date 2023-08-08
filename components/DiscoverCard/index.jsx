import React from "react";
import Button from "../Button/button.component";
import BtnClassic from "../Button/BtnClassic";

const DiscoverCard = ({ item }) => {
  console.log("Item: ", item);
  return (
    <div className="w-1/4 ">
      <div className="px-5">
        <img src={item.image[1]} alt="" className="w-full" />
      </div>
      <h2 className="text-[15px] font-mono tracking-tighter leading-5 font-semibold pt-5 text-center">
        {item.name}
      </h2>
      <p className="py-3 text-xl font-extrabold text-center">${item.price}</p>
      <div>
        <BtnClassic btnText={"Shop Now"} />
      </div>
    </div>
  );
};

export default DiscoverCard;
