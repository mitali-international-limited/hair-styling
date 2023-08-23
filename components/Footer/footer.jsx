import React from "react";
import BtnClassic from "../Button/BtnClassic";
import {
  FaCcAmex,
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="w-full bg-black">
      <div className="grid grid-cols-3 mx-[5rem] py-8 gap-8 text-white">
        <div className="text-white">
          <h3 className="font-bold uppercase">Stay In Touch</h3>
          <div className="pt-8">
            <p className="text-[8pt] font-mono">
              Sign up to be the first to know about La Famaine product releases
              and exclusive promotions.
            </p>
            <form action="#" className="pt-5">
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-rose-500 focus:outline-none focus:border-blue-300 text-gray-900 text-sm  block w-full p-2.5 "
                placeholder="Email Address"
                required
              ></input>
              <div className="pt-5">
                <BtnClassic
                  btnText={"Sign Me Up"}
                  btnWidth={"!w-full !text-[22px] !uppercase !font-bold"}
                />
              </div>
            </form>
            <p className="text-[8pt] font-mono pt-5">
              By signing up, you agree to receive Beauty Industry Group and its
              Affiliated Entities offers, promotions and other commercial
              messages. You are also agreeing to Beauty Industry Group and its
              Affiliated Entities conditions of use, Privacy Policy and Terms of
              Conditions. You may unsubscribe at any time.
            </p>
            <ul className="flex gap-5 justify-center pt-5">
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaPinterest />
              </li>
              <li>
                <FaYoutube />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
            </ul>
          </div>
        </div>
        <div className="pl-10">
          <h3 className="text-white font-bold uppercase">Company</h3>
          <ul className="pt-8 leading-6 text-[13px]">
            <li className="hover:text-white hover:underline">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-white hover:underline">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-white hover:underline">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="hover:text-white hover:underline">
              <Link href="/terms&conditions">Terms of Service</Link>
            </li>
            <li className="hover:text-white hover:underline">
              <a href="#">Return & Exchange Policy</a>
            </li>
            <li className="hover:text-white hover:underline">
              <a href="#">Shipping Policy</a>
            </li>
            <li className="hover:text-white hover:underline">
              <a href="#">Customer Feedback</a>
            </li>
            <li className="hover:text-white hover:underline">
              <a href="#">Shipping & Delivery</a>
            </li>
            <li className="hover:text-white hover:underline">
              <a href="#">Payments & Pricing</a>
            </li>
            <li className="hover:text-white hover:underline">
              <a href="#">Refund policy</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-white font-bold uppercase">Help</h3>
          <ul className="pt-8 leading-6 text-[13px]">
            <li className="hover:text-white hover:underline">
              <a href="#">Fitting your clip-ins</a>
            </li>
            <li className="hover:text-white hover:underline">
              <a href="#">Wholesale Inquiry</a>
            </li>
            <li className="hover:text-white hover:underline">
              <a href="#">Affiliates</a>
            </li>
            <li className="hover:text-white hover:underline">
              <a href="#">U.S. Returns Portal</a>
            </li>
            <li className="hover:text-white hover:underline">
              <a href="#">International Returns Portal</a>
            </li>
            <li className="hover:text-white hover:underline">
              <a href="#">International Customer Help Center</a>
            </li>
            <li className="hover:text-white hover:underline">
              <a href="#">International Order Tracking</a>
            </li>
            <li className="hover:text-white hover:underline">
              <a href="#">Promotional Details</a>
            </li>
            <li className="hover:text-white hover:underline">
              <a href="#">Giveaway Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className=" mx-[5rem]">
        <div class="flex justify-between text-white w-full py-4">
          <p className="text-[15px]">
            © Copyright 2023, La Famaine| All Rights Reserved
          </p>
          <p className="text-white flex gap-5 text-[25px]">
            <FaCcAmex />
            <FaCcDiscover />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCcVisa />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
