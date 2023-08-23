import React from "react";
import Backdrop from "../Backdrop"; // Import the Backdrop component

const PopUp = ({ isOpen, onClose, popupContent }) => {
  return (
    <>
      {isOpen && <Backdrop onClose={onClose} />}
      {isOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-[280px] h-[100px] bg-white p-4 rounded-lg shadow-lg flex justify-center items-center border-4 border-blue-500 ">
            <p className="text-center"> {popupContent}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
