import React from "react";
import Extension from "@/components/Extesion";

const BestStyles = ({ data }) => {
  return (
    <div className="">
      <h2 className="font-MyFont tracking-[2px] uppercase text-center my-10 font-bold text-[24px]">
        BESTSELLERS
      </h2>
      <h3 className="underline text-center font-bold">
        THE DIFFERENCE BETWEEN SILK SEAM™ VS CLASSIC EXTENSIONS
      </h3>
      <div className="relative w-auto bg-white ">
        <Extension data={data[0]} title={"SILK SEAM™ HAIR EXTENSIONS"} />
        <Extension data={data[1]} title={"CLASSIC HAIR EXTENSIONS"} />
      </div>
    </div>
  );
};

export default BestStyles;
