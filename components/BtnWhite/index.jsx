import React from "react";

const Button = ({ btnText }) => {
  return (
    <div className={`text-center relative`}>
      <button className="inline-block max-w-[90%] min-w-[150px] border border-[#d7d7d7] bg-white group-hover:bg-black text-[#010000] group-hover:text-white text-[12px] leading-[1em] text-center py-2 uppercase transition-all font-bold">
        {btnText}
      </button>
    </div>
  );
};

export default Button;
