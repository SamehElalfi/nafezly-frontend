import React from "react";
import IconButton from "../../shared/iconButton/IconButton";
import logo from "assets/images/logo2-01.svg"

// Navbar icons
import {FaBoxes} from 'react-icons/fa';
import {FaRegImages} from 'react-icons/fa';
import {FaSuitcase} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import {FaBars} from 'react-icons/fa';


function Navbar() {
  return (
    <div className="container mx-auto flex flex-row justify-around items-center gap-1">
      <a href="https://" title="Home Page"><img src={logo} alt="Home Page" className="w-28" /></a>

      <div className="big-menu flex flex-row flex-nowrap justify-end lg:justify-evenly items-center w-1/2">
        <div className="hidden lg:flex">
          <IconButton icon={FaBoxes} iconWidth="w-6" name="الخدمات" />
          <IconButton icon={FaRegImages} iconWidth="w-6" name="الاعمال" />
          <IconButton icon={FaSuitcase} iconWidth="w-6" name="المشاريع" />
          <IconButton icon={FaUsers} iconWidth="w-6" name="المنفذين" />
        </div>
        <a
          href="https://"
          className="whitespace-nowrap border border-blue-500 rounded py-2 px-3"
        >
          دخول
        </a>
        <a
          href="https://"
          className="whitespace-nowrap bg-blue-500 text-white rounded p-2 mx-2 hidden lg:flex"
        >
          تسجيل الدخول
        </a>
        <IconButton icon={FaBars} iconWidth="w-6" className="mx-2" />
      </div>
    </div>
  );
}

export default Navbar;
