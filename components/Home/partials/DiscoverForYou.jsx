import React from "react";
import DiscoverCard from "@/components/DiscoverCard";

const DiscoverForYou = ({ data }) => {
  console.log("Data: ", data);
  return (
    <div className="bg-white mt-5">
      <h2 className="font-MyFont tracking-[2px] uppercase text-center my-10 font-bold text-[24px]">
        Discover For You
      </h2>
      <div className="mx-2 md:mx-[5rem] pb-[30px] ">
        <div className="w-full flex gap-8">
          {data[0].items.map((item, idx) => {
            return <DiscoverCard key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DiscoverForYou;
