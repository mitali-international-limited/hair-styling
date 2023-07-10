import React from 'react';
import {
  FaGlobeAsia,
  FaHeart,
  FaStar,
  FaShieldAlt,
  FaPlane,
  FaRetweet,
  FaTint,
  FaLaptop,
} from 'react-icons/fa';

import Button from '../Button/button.component';

const TradingProducts = () => {
  return (
    <section className="w-full paddingLeftRight mb-10 ">
      <div className="w-full flex justify-center text-center py-8">
        <img className="heading-text" src="./images/logo-dark-clear.webp" />
      </div>
      <div className="grid  grid-cols-3 gap-10 justify-center items-center text-center bg-white/30">
        <div className="cursor-pointer transition-all shadow-2xl h-full p-5 bg-black  text-white/80">
          <div className="w-full h-1/3 p-4">
            <a href="#" className="shadow  hover:shadow-2xl">
              <i className="text-2xl flex justify-center">
                <FaGlobeAsia />
              </i>
            </a>
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <strong>
                THE MOST RECOGNIZED HAIR EXTENSION BRAND IN THE WORLD!
              </strong>
            </div>
            <div className="space-y-3 ">
              <p className="pt-5">
                <p>
                  For two years in a row BELLAMI has had the largest Earned
                  Media Value (EMV) of any hair care brand in the world!
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="cursor-pointer transition-all shadow-2xl h-full p-5 bg-black  text-white/80">
          <div className="w-full h-1/3 flex justify-center items-center p-4">
            <a className="">
              <i className="text-2xl flex justify-center">
                <FaHeart />
              </i>
            </a>
          </div>

          <div className="">
            <div className="flex justify-between items-center">
              <strong>HIGHEST QUALITY CUTICLE REMY HUMAN HAIR</strong>
            </div>
            <div className="space-y-3 ">
              <p className="pt-5">
                <p>
                  We have the highest standards in quality control which ensures
                  the consistency and quality of every pack of cuticle remy
                  human hair.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="cursor-pointer transition-all shadow-2xl h-full p-5 bg-black  text-white/80">
          <div className="w-full h-1/3 p-4">
            <a href="#" className="shadow  hover:shadow-2xl">
              <i className="text-2xl flex justify-center">
                <FaStar />
              </i>
            </a>
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <strong>6 DIFFERENT METHODS OF EXTENSIONS</strong>
            </div>
            <div className="space-y-3 ">
              <p className="pt-5">
                <p>
                  Tape-In, Keratin Tip, I-Tips, Volume Weft, Hand-Tied Weft,
                  Clip-In
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="cursor-pointer transition-all shadow-2xl h-full p-5 bg-black  text-white/80">
          <div className="w-full h-1/3 p-4">
            <a href="#" className="shadow  hover:shadow-2xl">
              <i className="text-2xl flex justify-center">
                <FaShieldAlt />
              </i>
            </a>
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <strong>3 MONTH RISK FREE WARRANTY*</strong>
            </div>
            <div className="space-y-3 ">
              <p className="pt-5">
                <p>
                  At BELLAMI we stand behind our product, we are confident in
                  our product and offer a 3 month warranty on all Professional
                  hair extensions
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="cursor-pointer transition-all shadow-2xl h-full p-5 bg-black  text-white/80">
          <div className="w-full h-1/3 flex justify-center items-center p-4">
            <a className="">
              <i className="text-2xl flex justify-center">
                <FaPlane />
              </i>
            </a>
          </div>

          <div className="">
            <div className="flex justify-center items-center">
              <strong>FREE USA 2DAY SHIPPING*</strong>
            </div>
            <div className="space-y-3 ">
              <p className="pt-5">
                <p>
                  Need hair for a client in your chair? BELLAMI will be there
                  for FREE in 2 days!
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="cursor-pointer transition-all shadow-2xl h-full p-5 bg-black  text-white/80">
          <div className="w-full h-1/3 p-4">
            <a href="#" className="shadow  hover:shadow-2xl">
              <i className="text-2xl flex justify-center">
                <FaRetweet />
              </i>
            </a>
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <strong>RISK FREE RETURNS OR EXCHANGES*</strong>
            </div>
            <div className="space-y-3 ">
              <p className="pt-5">
                <p>
                  If the color or length is not a prefect match, we will
                  exchange the set for free!
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="cursor-pointer transition-all shadow-2xl h-full p-5 bg-black  text-white/80">
          <div className="w-full h-1/3 flex justify-center items-center p-4">
            <a className="">
              <i className="text-2xl flex justify-center">
                <FaTint />
              </i>
            </a>
          </div>

          <div className="">
            <div className="flex justify-center items-center">
              <strong>LARGEST COLOR SHADE RANGE</strong>
            </div>
            <div className="space-y-3 ">
              <p className="pt-5">
                <p>
                  With over 50 of the most desirable shades in Natural,
                  Balayage, Ombre, Sombre and Rooted
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="cursor-pointer transition-all shadow-2xl h-full p-5 bg-black  text-white/80">
          <div className="w-full h-1/3 flex justify-center items-center p-4">
            <a className="">
              <i className="text-2xl flex justify-center">
                <FaLaptop />
              </i>
            </a>
          </div>

          <div className="">
            <div className="flex justify-center items-center">
              <strong>PROFESSIONAL EDUCATION</strong>
            </div>
            <div className="space-y-3 ">
              <p className="pt-5">
                <p>
                  Professional accreditation courses taught by the most
                  experienced industry professionals
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10"></div>
    </section>
  );
};

export default TradingProducts;
