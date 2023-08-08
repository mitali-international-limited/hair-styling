import React from "react";

const BtnClassic = ({ btnText, btnWidth }) => {
  return (
    <div className={`text-center relative`}>
      <button
        className={`inline-block min-w-[110px] bg-[#f9eae3] text-black text-[16px] leading-[1em] text-center py-2 ${btnWidth}`}
      >
        {btnText}
      </button>
    </div>
  );
};

export default BtnClassic;
