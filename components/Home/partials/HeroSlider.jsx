import React, { useState, useEffect, useRef } from "react";
// import { GrNext, GrPrevious } from "react-icons/gr";
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";

const featuredProducts = [
  "./images/banner/1.webp",
  "./images/banner/2.webp",
  "./images/banner/3.webp",
  "./images/banner/4.webp",
  "./images/banner/5.webp",
  "./images/banner/6.webp",
  "./images/banner/7.jpg",
  "./images/banner/8.webp",
];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="bg-white select-none relative">
      <div className="">
        <img
          className="relative w-full h-auto px-16 py-4 flex justify-center items-center"
          src={featuredProducts[currentIndex]}
          alt=""
        />
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-white text-black p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-white text-black p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  );
}
