import React from "react";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import BtnClassic from "../../../components/Button/BtnClassic";
import { useState } from "react";

import Star from "../../../components/Star";

const Reviews = () => {
  const [selectedStars, setSelectedStars] = useState(0);
  const [reviewOpen, setReviewOpen] = useState(false);

  const handleStarClick = (starCount) => {
    setSelectedStars(starCount);
  };
  return (
    <div>
      <h2 className="font-Proxima tracking-[2px] uppercase text-center my-10 font-bold text-[24px]">
        Reviews
      </h2>
      <div>
        <div className="flex justify-between items-center pb-3">
          <div>
            <p className="flex gap-2 justify-center items-center">
              <p className="font-bold text-[20px]">4.5</p>
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarHalfFill />
            </p>
            <p>Based on 1020 reviews</p>
          </div>
          <div
            className={`${reviewOpen ? "hidden" : ""}`}
            onClick={() => setReviewOpen(true)}
          >
            <BtnClassic
              btnText={"Write Reviews"}
              btnWidth={"!bg-black !text-white !px-3 !py-4"}
            />
          </div>
        </div>
        <hr />
      </div>
      <form className={`${reviewOpen ? "" : "hidden"}`}>
        <div className="leading-4 pt-5">
          <p className="text-sm font-semibold font-MyFont">Rate Our Product:</p>
          <div>
            {[1, 2, 3, 4, 5].map((starCount) => (
              <Star
                key={starCount}
                isSelected={selectedStars >= starCount}
                onClick={() => handleStarClick(starCount)}
              />
            ))}
          </div>
        </div>
        <div className="pt-5">
          <p className="text-sm font-semibold font-MyFont pb-2">
            Tell us your feedback about the product
          </p>
          <textarea
            name="textarea"
            rows="5"
            className="bg-gray-50 border border-rose-500 focus:outline-none focus:border-blue-300 text-gray-900 text-sm  block w-full p-2.5 "
            placeholder="Write something here"
          ></textarea>
        </div>
        <div className="flex gap-5 w-full pt-3">
          <div className="w-1/2">
            <label
              htmlFor="name"
              className="text-sm font-semibold font-MyFont pb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              class="bg-gray-50 border border-rose-500 focus:outline-none focus:border-blue-300 text-gray-900 text-sm  block w-full p-2.5 "
              placeholder=""
              required
            ></input>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="name"
              className="text-sm font-semibold font-MyFont pb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-rose-500 focus:outline-none focus:border-blue-300 text-gray-900 text-sm  block w-full p-2.5 "
              placeholder=""
              required
            ></input>
          </div>
        </div>
        <div className="w-full flex gap-5 justify-end pt-5">
          <div onClick={() => setReviewOpen(false)}>
            <BtnClassic
              btnText={"Cancel"}
              btnWidth={"!bg-white !text-black border border-black !px-3 !py-4"}
            />
          </div>
          <div>
            <BtnClassic
              btnText={"Submit"}
              btnWidth={"!bg-black !text-white !px-3 !py-4"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reviews;
