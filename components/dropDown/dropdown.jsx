import { useState } from "react";

const Dropdown = ({ openDropdown, dropdownContent }) => {
  return (
    <>
      {openDropdown ? (
        <div className="absolute w-[85vw] h-[75vh] flex bg-[#f9eae3] left-1/2 transform -translate-x-1/2 z-30">
          <div className="w-3/4 flex justify-between px-10 py-5 gap-5">
            {dropdownContent.children.map((submenu, idx) => {
              return (
                <div
                  key={idx}
                  className="w-full flex flex-col justify-start font-mono"
                >
                  <h1 className="font-bold ">{submenu.name}</h1>

                  <ul className="pt-3">
                    {submenu.children.map((option, idx) => {
                      return <li key={idx}>{option}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="w-[35%] p-2">
            <img
              src="/images/unnamed_540x.webp"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Dropdown;
