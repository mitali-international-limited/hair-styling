import React from "react";
import BtnWhite from "@/components/BtnWhite";
import CollectionCard from "@/components/CollectionCard";

const Collection = ({ data }) => {
  console.log("Data of Collection: ", data);
  return (
    <div className="">
      <h2 className="font-MyFont tracking-[2px] uppercase text-center my-10 font-bold text-[24px]">
        Shop By Collections
      </h2>
      <div className=" grid md:grid-cols-3 gap-4 mx-2 md:mx-[5rem]">
        {data.map((item, idx) => {
          return <CollectionCard key={idx} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Collection;
