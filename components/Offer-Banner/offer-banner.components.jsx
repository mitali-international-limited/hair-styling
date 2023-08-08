import React from "react";

const OfferBanner = () => {
  return (
    <section className="bg-white py-5">
      <h2 className="font-MyFont tracking-[2px] uppercase text-center my-10 font-bold text-[24px]">
        #1 HAIR EXTENSION BRAND WORLDWIDE
      </h2>
      <div className="grid grid-cols-4 gap-5 mx-[5rem] place-content-center">
        <div className="flex flex-col items-center">
          <div className="w-[30%]">
            <img
              src="/images/shipping/free-shipping.svg"
              alt="Free shipping"
              className="w-full h-full"
            />
          </div>
          <div className="pt-5">
            <h3 className="text-[13px] font-bold font-MyFont text-center">
              FAST, FREE, WORLDWIDE SHIPPING
            </h3>
            <p className="text-[9pt] text-center font-mono pt-3">
              ALL orders Tk‌20,300+ ship free! We love instant gratification, so
              orders placed before 12:00 PM PST (MON-FRI) ship the same day.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[28%]">
            <img
              src="/images/shipping/great-pricing.svg"
              alt="Free shipping"
              className="w-full h-full"
            />
          </div>
          <div className="pt-5">
            <h3 className="text-[13px] font-bold font-MyFont text-center">
              SUPERIOR QUALITY
            </h3>
            <p className="text-[9pt] text-center font-mono pt-3">
              Our 100% Remy human hair extensions can be washed, blow dried,
              flat ironed, or curled using hot tools — just like your own hair!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[30%] ">
            <img
              src="/images/shipping/preimum-quality.svg"
              alt="Free shipping"
              className="w-full h-full"
            />
          </div>
          <div className="pt-5">
            <h3 className="text-[13px] font-bold font-MyFont text-center">
              UNBEATABLE CUSTOMER SERVICE
            </h3>
            <p className="text-[9pt] text-center font-mono pt-3">
              We only uses the world’s most trustworthy and respected payment
              processors so you can shop with peace of mind.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[20%]">
            <img
              src="/images/shipping/secure-shipping.svg"
              alt="Free shipping"
              className="w-full h-full"
            />
          </div>
          <div className="pt-5">
            <h3 className="text-[13px] font-bold font-MyFont text-center">
              SECURE SHOPPING
            </h3>
            <p className="text-[9pt] text-center font-mono pt-3">
              Our color match team can help you choose from 40+ colors to make
              sure your extensions blend perfectly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
