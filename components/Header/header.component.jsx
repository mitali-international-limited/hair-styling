import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import {
  MdAccountCircle,
  MdFavoriteBorder,
  MdOutlineShoppingBag,
} from "react-icons/md";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { dropdown } from "@/utils/Menu";
import Dropdown from "../dropDown/dropdown";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [dropdownContent, setDropdownContent] = useState(null);

  const handleDropdown = (submenu) => {
    if (submenu.children) {
      setDropdownContent(submenu);
      setOpenDropdown(!openDropdown);
    }
  };
  return (
    <div className="w-full">
      {/* 1st heading */}
      <div className="bg-black text-white md:px-[4rem] px-[4px]w-full uppercase py-2 text-sm flex">
        <p className="text-center !max-w-full flex-1 text-sm">
          DEMO PARA LA SECCIÓN DE OFERTA
        </p>
        <p className="w-[30px]">
          <img src="/images/download (3).jpg" alt="" />
        </p>
      </div>
      {/* 2nd heading  */}
      <div className="md:px-[4rem] px-[4px] bg-[#f9eae3] w-full flex items-center py-2">
        <div className="flex items-center w-full">
          <div className="w-[30%]">
            <div class="search-box">
              <button class="btn-search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <input
                type="text"
                class="input-search"
                placeholder="Type to Search..."
              />
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <h2 className="text-4xl font-bold italic">
              <span>L</span>
              <span>A</span>
              <span> </span>
              <span>F</span>
              <span>A</span>
              <span>M</span>
              <span>A</span>
              <span>I</span>
              <span>N</span>
              <span>E</span>
            </h2>
          </div>
          <div className=" text-black gap-4 flex-end flex justify-end w-[30%]">
            <button className="text-xl hover:text-red-400">
              <MdAccountCircle />
            </button>
            <button className="text-xl hover:text-red-400">
              <MdOutlineShoppingBag />
            </button>
            <button className="text-xl hover:text-red-400 ">
              <MdFavoriteBorder />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black text-white md:px-[4rem] px-[4px] py-3 md:w-full">
        <div className="flex items-center justify-around h-full text-[12px] uppercase">
          {dropdown.map((menu, idx) => {
            console.log("menu:", menu.name);
            return (
              <div
                key={idx}
                className="md:font-[500]  h-full flex items-center px-3 text-[#f9eae3]"
              >
                <p onClick={() => handleDropdown(menu)}>{menu.name}</p>
                {menu.children ? <FiChevronDown /> : null}
              </div>
            );
          })}

          {/* search bar  */}
        </div>
      </div>
      <Dropdown openDropdown={openDropdown} dropdownContent={dropdownContent} />
    </div>
  );
};

export default Header;
