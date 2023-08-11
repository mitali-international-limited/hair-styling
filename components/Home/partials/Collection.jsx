import React from "react";
import BtnWhite from "@/components/BtnWhite";
import CollectionCard from "@/components/CollectionCard";
import Link from "next/link";

const Collection = ({ data }) => {
  console.log("Data of Collection: ", data);
  return (
    <div className="">
      <h2 className="font-MyFont tracking-[2px] uppercase text-center my-10 font-bold text-[24px]">
        Shop By Collections
      </h2>
      <div className=" grid md:grid-cols-3 gap-4 mx-2 md:mx-[5rem]">
        {data.map((item, idx) => {
          return (
            <Link
              key={idx}
              href={`/collections/${encodeURIComponent(item.name)}`}
            >
              <CollectionCard item={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
