import React from "react";
import Card from "../../../components/Card";

const MoreToAdhore = ({ title, items }) => {
  return (
    <div className="pb-5">
      <h2 className="font-MyFont tracking-[2px]  text-center my-10 font-bold text-[24px]">
        {title}
      </h2>
      <div className="flex gap-3 flex-nowrap overflow-x-scroll custom-scrollbar">
        {items.map((item, idx) => {
          return <Card item={item} key={idx} className={"hidden"} />;
        })}
      </div>
    </div>
  );
};

export default MoreToAdhore;
