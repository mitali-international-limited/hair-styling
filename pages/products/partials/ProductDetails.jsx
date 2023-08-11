import React from "react";

const ProductDetails = () => {
  return (
    <div>
      <h2 className="font-MyFont tracking-[2px]  text-center my-10 font-bold text-[24px]">
        Details
      </h2>
      <div className="max-w-[65%] mx-auto ">
        <div className="flex justify-center items-center font-bold text-[14px] py-2">
          <p className="flex">
            <p className=" px-3">HAIR</p>
            <p>|</p>
          </p>
          <p className="flex">
            <p className=" px-3">SPECS</p>
            <p>|</p>
          </p>
          <p className="flex">
            <p className=" px-3">HOW TO USE</p>
            <p>|</p>
          </p>
          <p className="flex">
            <p className=" px-3">Q&A</p>
          </p>
        </div>
        <hr />
        <div className="w-full flex items-center py-5 gap-8">
          <div className="w-[200px] h-[200px] bg-black ">Image</div>
          <div className="flex-1 flex flex-col items-center">
            <h3 className="font-bold uppercase pb-5 font-Proxima">
              100% REMY HUMAN HAIR
            </h3>
            <p className="text-[10pt] text-sm">
              La Famaine Clip-in extensions are made with the highest quality,
              100% Remy human hair. Available in the widest range of colors,
              length and weight, they blend naturally with your own hair and can
              be easily styled with thermal tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
