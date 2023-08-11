import React from "react";

const BtnOutline = ({ btnText, btnClass }) => {
  return (
    <div className={`text-center relative`}>
      <button
        className={`inline-block max-w-[90%] min-w-[150px] border border-black bg-transparent hover:bg-black text-[#010000] hover:text-white leading-[1em] text-center py-2 uppercase transition-all font-bold ${btnClass}`}
      >
        {btnText}
      </button>
    </div>
  );
};

export default BtnOutline;
