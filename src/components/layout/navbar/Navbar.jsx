import React from "react";
import IconButton from "../../shared/iconButton/IconButton";
import UserGroupIcon from "@heroicons/react/solid/UserGroupIcon";
import MenuIcon from "@heroicons/react/solid/MenuIcon";
import HomeIcon from "@heroicons/react/solid/HomeIcon";
import ShoppingBagIcon from "@heroicons/react/solid/ShoppingBagIcon";
import ArchiveIcon from "@heroicons/react/solid/ArchiveIcon";
import GlobeAltIcon from "@heroicons/react/solid/GlobeAltIcon";

function Navbar() {
  return (
    <div className="flex flex-row justify-around items-center ">
      <div className="bigmenu flex flex-row justify-evenly w-1/2 items-center gap-2 flex-nowrap">
        <IconButton icon={MenuIcon} width="w-6" />
        <a
          href="https://"
          className="whitespace-nowrap bg-blue-500 text-white p-4 rounded-md mt-2  "
        >
          تسجيل الدخول
        </a>
        <a
          href="https://"
          className="whitespace-nowrap border-2 border-blue-500 rounded-md p-3 mt-2"
        >
          دخول
        </a>
        <IconButton icon={ShoppingBagIcon} width="w-6" name="المنفذين" />
        <IconButton icon={HomeIcon} width="w-6" name="المشاريع" />
        <IconButton icon={ArchiveIcon} width="w-6" name="الاعمال" />
        <IconButton icon={GlobeAltIcon} width="w-6" name="الخدمات" />
      </div>

      <div className="text-blue-900 text-4xl font-bold">نفذلي</div>
    </div>
  );
}

export default Navbar;
