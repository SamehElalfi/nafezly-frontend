import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import IconButton from "../../shared/iconButton/IconButton";
import Sidebar from "components/layout/sidebar/Sidebar";

import logo from "assets/images/logo2-01.svg";

// Navbar icons
import { FaBoxes } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const navBarRef = useRef(null);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  // hide navbar when scroll down and show it again when scroll up
  useEffect(() => {
    // save the current position in attr in window object
    window.lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      // get the current position
      var st = window.pageYOffset || document.documentElement.scrollTop;

      // if the current position is bigger than the
      // original position (last position) that saved in `window.lastScrollTop`
      if (st > window.lastScrollTop) {
        navBarRef.current.classList.remove("fixed");
      } else {
        navBarRef.current.classList.add("fixed");
      }

      // save the current in `window.lastScrollTop`
      window.lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="container mx-auto">
      <div
        className="fixed top-0 left-0 right-0 z-10 flex flex-row items-center justify-around gap-1 bg-white shadow"
        ref={navBarRef}
      >
        <Link to="/">
          <img src={logo} alt="Home Page" className="w-28" />
        </Link>
        <div className="big-menu flex flex-row flex-nowrap items-center justify-end lg:justify-evenly">
          <div className="hidden lg:flex">
            <Link to="/"><IconButton icon={FaBoxes} iconWidth="w-6" name="الخدمات" /></Link>
            <Link to="/"><IconButton icon={FaRegImages} iconWidth="w-6" name="الاعمال" /></Link>
            <Link to="/projects"><IconButton icon={FaSuitcase} iconWidth="w-6" name="المشاريع" /></Link>
            <Link to="/"><IconButton icon={FaUsers} iconWidth="w-6" name="المنفذين" /></Link>
          </div>
          <Link
            to="/login"
            className="whitespace-nowrap rounded border border-blue-500 py-2 px-3"
          >
            دخول
          </Link>
          <Link
            to="/registration"
            className="mx-2 hidden whitespace-nowrap rounded bg-blue-500 p-2 text-white lg:flex"
          >
            حساب جديد
          </Link>
          <IconButton
            onClick={() => setIsSidebarOpened(true)}
            icon={FaBars}
            iconWidth="w-6"
            className="mx-2"
            divStyle="gap-0 rounded"
          />
        </div>
      </div>
      <Sidebar
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      ></Sidebar>
    </nav>
  );
}

export default Navbar;
