import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Pizzes", path: "pizza" },
    { link: "Faq", path: "faq" },
    { link: "Contact", path: "contact" },
  ];
  return (
    <nav className="bg-black w-full flex justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50">
      <h1 className="text-white font-bold lg:text-5xl text-3xl">
        Food<span className="italic text-orange-500">Court</span>
      </h1>
      <ul className="lg:flex justify-center items-center gap-10 hidden">
        {navItems.map((val, index) => {
          return (
            <li key={index}>
              <a
                className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-white"
                href={val.path}
              >
                {val.link}
              </a>
            </li>
          );
        })}
      </ul>
      <div
        id="header-icons"
        className="lg:flex hidden justify-center items-center gap-8 text-white"
      >
        <IoPerson className="w-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer" />
        <FaHeart className="w-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer" />
        <IoMdSearch className="w-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer" />
        <div className="relative">
        <FaCartShopping className="w-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer" />
        <div className="bg-orange-500 bg-black text-white px-2 py-1 rounded-full absolute -top-[15px] -right-[12px] text-[8px] font-bold">2</div>
        </div>
      </div>
      
      {/* mobile-menu-icons */}
      <div className="flex justify-center items-center lg:hidden mt-5"
      onClick={toggleMenu}>
        <div>
          {
            isMenuOpen ? <FaXmark className="text-white text-3xl cursor-pointer"/> : <FaBars className="text-white text-3xl cursor-pointer"/>
          }
        </div>
      </div>
      {/* mobile-menu-list */}
<div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-900 p-4 absolute top-[80px] left-0`}
onClick={closeMenu}>
  <ul className="flex flex-col justify-center items-center gap-2 w-full">
  {navItems.map((val, index) => {
          return (
            <li key={index} className="my-5">
              <a
                className="text-white uppercase font-semibold w-full text-center cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-white w-full"
                href={val.path}
              >
                {val.link}
              </a>
            </li>
          );
        })}
  </ul>
</div>

    </nav>
  );
};

export default Header;
