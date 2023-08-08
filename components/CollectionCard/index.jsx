import React from "react";
import BtnWhite from "../BtnWhite";

const CollectionCard = ({ item }) => {
  return (
    <div className="bg-black h-[360px] relative group cursor-pointer hoverOverlay">
      <img src={item.icons} className="h-full w-full" />

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <BtnWhite btnText={item.name} />
      </div>
    </div>
  );
};

export default CollectionCard;
