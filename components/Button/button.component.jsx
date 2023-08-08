import React from "react";

const Button = ({ btnText }) => {
  return (
    <div className={`text-center relative`}>
      <button className="inline-block max-w-[90%] min-w-[150px] bg-[#f9eae3] text-black text-[16px] leading-[1em] text-center py-2">
        {btnText}
      </button>
    </div>
  );
};

export default Button;
