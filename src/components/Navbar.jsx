import React, { useState } from "react";
import { logo, close, menu } from "../assets/index";
import { navLinks } from "../contants/index";

function Navbar() {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="w-full py-6 flex justify-between items-center md:fixed md:px-0 px-6 z-10">
      <div className="w-[120px] h-[32px] ">
        <img src={logo} alt="" className="md:ml-20"/>
      </div>
      <ul className="justify-end md:flex hidden items-center navbar">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`text-white font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-20" : "mr-10"
                } hover:text-blue-300`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

      {/* ///////////Menu Bar Lodo/////// */}

      <div className="md:hidden flex flex-1 justify-end items-center mr-6">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="object-contain w-[28px] h-[28px]"
          onClick={() => settoggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"}
        bg-black-gradient
        absolute
         top-20 p-6 
         right-0 mx-4 my-2 min-w-[140px]
         rounded-xl sidebar
        `}
        >
          <ul className="justify-end flex items-center flex-col navbar ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`text-white font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
