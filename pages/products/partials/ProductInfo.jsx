import React from "react";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import BtnOutline from "../../../components/BtnOutline";
import Link from "next/link";

const ProductInfo = ({ addToCart, count, setCount }) => {
  return (
    <div>
      <h2 className="font-MyFont tracking-[1px]  text-center pb-3 font-bold text-[20px]">
        BELLISSIMA 220G 22&apos;&apos; JET BLACK (#1) HAIR EXTENSIONS
      </h2>
      <p className="flex gap-2 justify-center items-center">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
        <RiStarHalfFill />
        <p>(1009 reviews)</p>
      </p>
      <p className="text-sm font-semibold py-2">
        <a className="underline">Shipping</a> calculated at checkout
      </p>
      <div className="flex flex-col justify-center items-center w-full">
        <hr className="border w-full border-black" />
        <p className="font-bold pt-3 ">
          Pick Your Shade: <span className="font-normal">Jet Beans</span>
        </p>
        <div className="flex gap-3 flex-wrap justify-center items-center py-5">
          <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
            <img
              src="/images/extension/classic/Jet_Black (1).webp"
              alt=""
              className="w-full h-full "
            />
          </div>
          <div className="h-[45px] w-[45px] rounded-full bg-black overflow-hidden">
            <img
              src="/images/extension/classic/Jet_Black (2).webp"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[45px] w-[45px] rounded-full overflow-hidden overflow-hidden">
            {" "}
            <img
              src="/images/extension/classic/Jet_Black (3).webp"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[45px] w-[45px] rounded-full overflow-hidden overflow-hidden">
            {" "}
            <img
              src="/images/extension/classic/Jet_Black (4).webp"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
            {" "}
            <img
              src="/images/extension/classic/Jet_Black (5).webp"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
            {" "}
            <img
              src="/images/extension/classic/Jet_Black (6).webp"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
            {" "}
            <img
              src="/images/extension/classic/Jet_Black (7).webp"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
            {" "}
            <img
              src="/images/extension/classic/Jet_Black (8).webp"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
            {" "}
            <img
              src="/images/extension/classic/Jet_Black (9).webp"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
            {" "}
            <img
              src="/images/extension/classic/Jet_Black (10).webp"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
            {" "}
            <img
              src="/images/extension/classic/Jet_Black (11).webp"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
            {" "}
            <img
              src="/images/extension/classic/Je_Black (12).avif"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
            {" "}
            <img
              src="/images/extension/classic/Je_Black (13).avif"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
            {" "}
            <img
              src="/images/extension/classic/Je_Black (14).avif"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
            {" "}
            <img
              src="/images/extension/classic/Je_Black (15).avif"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
            {" "}
            <img
              src="/images/extension/classic/Je_Black (16).avif"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
        <hr className="border w-full border-black" />
        <div className="pt-3 flex flex-col justify-center items-center">
          <p className="font-bold">Pick Your Length and Weight:</p>
          <div className="flex justify-center items-center gap-2 pt-3">
            <div className=" cursor-pointer px-3 uppercase border leading-4 font-Proxima rounded-md">
              <p className="text-center py-2 text-[10px]">
                18 Inches <br /> 120 Gram
              </p>
            </div>
            <div className="cursor-pointer px-3 uppercase border leading-4 font-Proxima rounded-md">
              <p className="text-center py-2 text-[10px]">
                18 Inches <br /> 120 Gram
              </p>
            </div>
            <div className="cursor-pointer px-3 uppercase border leading-4 font-Proxima rounded-md">
              <p className="text-center py-2 text-[10px]">
                18 Inches <br /> 120 Gram
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center pt-5">
          <div>
            <div className="flex pt-5 items-center gap-2">
              <p>Quantity: </p>
              <div className="flex border rounded-md justify-center items-center">
                <button
                  className="px-2 py-2"
                  onClick={(e) => setCount(count > 1 ? count - 1 : count)}
                >
                  <IoIosArrowDown />
                </button>

                <p className="px-10 py-2">{count}</p>
                <button
                  className="px-2 py-2"
                  onClick={(e) => setCount(count + 1)}
                >
                  <IoIosArrowUp />
                </button>
              </div>
            </div>
            <p className="py-3 font-black text-[20px]">TK 21000</p>
          </div>
          <div className="w-full py-3" onClick={addToCart}>
            <Link href={"/cart"}>
              <BtnOutline
                btnText={"Add Item to cart"}
                btnClass={"w-[90%] !border-2"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
