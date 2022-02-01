import React from "react";
import IconButton from "components/shared/iconButton/IconButton";

import { FaBoxes } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Button from "components/shared/button/Button";

function Sidebar({ isSidebarOpened, setIsSidebarOpened }) {
  return (
    <div className={`${isSidebarOpened ? "show" : "hidden"}`}>
      <div
        onClick={() => setIsSidebarOpened(false)}
        className="layout fixed top-0 right-0 z-30 h-screen w-screen bg-gray-700 bg-opacity-50"
      ></div>
      <aside className="fixed top-0 left-0 z-30 flex h-full w-full flex-col overflow-scroll bg-white py-4 px-2 sm:w-1/2 md:w-1/3 lg:w-1/4 lg:max-w-[300px]">
        {/* Close Sidebar Icon */}
        <div className="my-4 mx-auto flex flex-row items-center sm:hidden ">
          <AiOutlineClose
            onClick={() => setIsSidebarOpened(false)}
            className="h-8 w-8 text-gray-500 "
          />
        </div>

        <Button className="w-full">
          <FaBars className="ml-6 -mr-6" /> <span>نشر مشروع جديد</span>
        </Button>
        <IconButton icon={FaBoxes} iconWidth="w-6" name="الخدمات" />
        <IconButton icon={FaRegImages} iconWidth="w-6" name="الاعمال" />
        <IconButton icon={FaSuitcase} iconWidth="w-6" name="المشاريع" />
        <IconButton icon={FaUsers} iconWidth="w-6" name="المنفذين" />
      </aside>
    </div>
  );
}

export default Sidebar;
