import React, { useEffect, useRef } from "react";
import IconButton from "../../shared/iconButton/IconButton";
import logo from "assets/images/logo2-01.svg";

// Navbar icons
import { FaBoxes } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const navBarRef = useRef(null);

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
        className="flex flex-row justify-around items-center gap-1 fixed top-0 left-0 right-0 bg-white z-10 shadow"
        ref={navBarRef}
      >
        <a href="https://" title="Home Page">
          <img src={logo} alt="Home Page" className="w-28" />
        </a>
        <div className="big-menu flex flex-row flex-nowrap justify-end lg:justify-evenly items-center">
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
    </nav>
  );
}

export default Navbar;
