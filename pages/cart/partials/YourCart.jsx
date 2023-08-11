import React from "react";
import Button from "../../../components/Button/BtnClassic";

const YourCart = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center">
      <h2 className="font-MyFont tracking-[2px]  text-center my-5 font-bold text-[24px]">
        Your Cart
      </h2>
      <p className="text-[12px]">Your Cart is Currently Empty</p>
      <div className="pt-5">
        <Button
          btnText={"Continue Shopping 	\u2192"}
          btnWidth={"!px-5 !font-bold !py-3"}
        />
      </div>
    </div>
  );
};

export default YourCart;
