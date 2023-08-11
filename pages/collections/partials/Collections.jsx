import React from "react";
import Card from "./Card";

const Collection = ({ data }) => {
  console.log("Collection data: ", data);
  return (
    <div>
      <h2 className="font-MyFont tracking-[2px] uppercase text-center my-10 font-bold text-[24px]">
        {data.name}
      </h2>
      <div className="grid grid-cols-4 gap-5 pb-5">
        {data.items.map((item, idx) => {
          return <Card key={idx} item={item} cl />;
        })}
      </div>
    </div>
  );
};

export default Collection;
