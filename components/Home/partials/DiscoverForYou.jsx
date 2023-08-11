import React from "react";
import DiscoverCard from "@/components/DiscoverCard";

import Link from "next/link";

const DiscoverForYou = ({ data, title }) => {
  return (
    <div className="bg-white mt-5">
      <h2 className="font-MyFont tracking-[2px] uppercase text-center my-10 font-bold text-[24px]">
        {title}
      </h2>
      <div className="mx-2 md:mx-[5rem] pb-[30px] ">
        <div className="w-full flex gap-8">
          {data.items.slice(0, 6).map((item, idx) => {
            return (
              <Link
                key={idx}
                href={`/products/${encodeURIComponent(item.name)}`}
              >
                <DiscoverCard item={item} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DiscoverForYou;
