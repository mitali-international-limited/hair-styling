import Image from "next/image";
import React from "react";
import Button from "../Button/button.component";

const ExCard = ({ item }) => {
  return (
    <div className="min-w-[275px] w-auto relative  hoverOverlay cursor-pointer">
      <img src={item.image[0]} alt={item.size} />
      <div className="-mt-[15.5px]">
        <Button btnText={item.size} />
      </div>
    </div>
  );
};

export default ExCard;
