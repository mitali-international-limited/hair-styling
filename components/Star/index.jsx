import React from "react";

const Star = ({ isSelected, isBlack, onClick }) => {
  const starClass = isSelected ? "star-black" : "star-outline";

  return (
    <span className={`star ${starClass} hover:text-black`} onClick={onClick}>
      ★
    </span>
  );
};

export default Star;
