import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = ({ Sidebar, setSidebar }) => {
  return (
    <nav className="flex justify-between font-sans my-[50px] max-w-[90vw] mx-auto items-center">
      <div className="img cursor-pointer">
        <Link to="/"> <img src="./images/Vector.png" alt="" /> </Link>
      </div>
      <div className="list hidden md:block">
        <ul className="flex list-none gap-8 text-[16px]">
          <li className="cursor-pointer hover:underline">Demos</li>
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Services</li>
          <li className="cursor-pointer hover:underline">Attorney</li>
          <li className="cursor-pointer hover:underline">Blog</li>
          <li className="cursor-pointer hover:underline">All Pages</li>
        </ul>
      </div>
      <div className="btn hidden md:block">
        <Link to="/form" className="py-[13px] px-[23px] bg-blue-100 text-blue-900 rounded-full hover:underline">
          Let's Talk!
        </Link>
      </div>
      <div className="text-2xl md:hidden" onClick={() => setSidebar(!Sidebar)}>
        <AiOutlineMenu />
      </div>
    </nav>
  );
};

export default Navbar;
