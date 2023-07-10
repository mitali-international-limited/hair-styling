import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Home.module.css';
import { FaMobile, FaRocketchat } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
import { MdAccountCircle, MdOutlineShoppingBag } from 'react-icons/md';

import { logo } from '../../assets/logo.png';

const Header = () => {
  return (
    <div className="md:w-full md:h-[160px]">
      {/* 1st heading */}
      <div className="bg-slate-600 text-white/75 md:px-[4rem] px-[4px] md:h-[37%] md:w-full">
        <div className="md:flex md:justify-between md:items-center md:pt-[10px]">
          <div className="md:font-semibold font-sm">
            <p>FREE SHIPPING ON ORDERS $99+</p>
          </div>

          {/* search bar  */}
          <div className="basis-1/5 md:basis-2/5">
            <div class="relative">
              <input
                type="text"
                class="md:w-full w-[50%] px-3 py-2 border border-white/30 rounded-lg bg-black/50 focus:outline-none focus:outline-white/50"
                placeholder="Search"
              />
              <button class="absolute right-0 top-0 mt-3 mr-2">
                <svg
                  class="w-4 h-4 fill-current text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <p className="flex space-x-1 justify-center items-center cursor-pointer">
              <FaMobile className="text-white/75" />
              <span>Call 880 1234 567 89</span>
            </p>
            <p className="flex space-x-2 justify-center items-center cursor-pointer">
              <FaRocketchat className="text-white/75" />
              <span>Chat</span>
            </p>
            <p className="flex space-x-1 justify-center items-center cursor-pointer">
              <FiMessageSquare className="text-white/75" />
              <span> Contacts</span>
            </p>
          </div>
        </div>
      </div>

      {/* 2nd heading  */}
      <div className="px-[4rem] bg-black h-[63%] w-full">
        <div className="flex justify-between items-center pt-3">
          <div className="header-logo">
            <button className="logo-box">
              <img
                className="h-[70px] w-[80px]"
                src="https://www.bellamiprofessional.com/cdn/shop/t/54/assets/logo.png?v=36085246456418662171671034665"
                alt="logo"
              />
            </button>
          </div>
          <nav className="header-nav flex justify-center content-center items-center">
            <ul className="flex justify-center items-center font-semibold text-lg text-white/50">
              <Link
                href="#"
                className="px-4 py-2 hover:underline hover:text-white"
              >
                THE HAIR
              </Link>
              <Link
                href="#"
                className="px-4 py-2 hover:underline hover:text-white"
              >
                THE COLORS
              </Link>
              <Link
                href="#"
                className="px-4 py-2 hover:underline hover:text-white"
              >
                THE ACCESSORIES
              </Link>
              <Link
                href="#"
                className="px-4 py-2 hover:underline hover:text-white"
              >
                THE BELLAMIS AWARDS
              </Link>
              <Link
                href="#"
                className="px-4 py-2 hover:underline hover:text-white"
              >
                EDUCATION
              </Link>
              <Link
                href="#"
                className="px-4 py-2 hover:underline hover:text-white"
              >
                CONTACT
              </Link>
            </ul>
          </nav>

          <div className="header-account text-white/50 gap-4 flex justify-around">
            <button className="text-4xl hover:text-white">
              <MdAccountCircle />
            </button>
            <button className="text-4xl hover:text-white">
              <MdOutlineShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
