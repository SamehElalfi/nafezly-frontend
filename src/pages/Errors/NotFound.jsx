import React from "react";

import { Link } from "react-router-dom";

import { GoAlert } from "react-icons/go";
import { FaBoxes } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

function NotFound() {
  document.getElementsByTagName('title').innerHTML = "hi"
  return (
    <div className="flex w-full flex-col items-center justify-center my-48">
      <div className="box flex w-max flex-col items-center justify-center gap-12 bg-white py-16 px-24 rounded">
        <span className="text-6xl font-bold text-blue-600">نفذلي</span>
        <div>
          <span className="text-xl">
            <GoAlert className="inline text-amber-400 w-8 h-8" /> 404 | الصفحة المطلوبة غير موجودة
          </span>
        </div>
        <div className="flex gap-2">
          <Link to="/">
            <div className="flex flex-col items-center justify-center border border-gray-200 px-3 py-4 hover:bg-gray-700 hover:text-white rounded transition-colors duration-300">
              <FaHome className="h-4 w-4" />
              الرئيسية
            </div>
          </Link>

          <Link to="/">
            <div className="flex flex-col items-center justify-center border border-gray-200 px-3 py-4 hover:bg-gray-700 hover:text-white rounded transition-colors duration-300">
              <FaSuitcase className="h-4 w-4" />
              المشاريع
            </div>
          </Link>

          <Link to="/">
            <div className="flex flex-col items-center justify-center border border-gray-200 px-3 py-4 hover:bg-gray-700 hover:text-white rounded transition-colors duration-300">
              <FaBoxes className="h-4 w-4" />
              الخدمات
            </div>
          </Link>

          <Link to="/">
            <div className="flex flex-col items-center justify-center border border-gray-200 px-3 py-4 hover:bg-gray-700 hover:text-white rounded transition-colors duration-300">
              <FaRegImages className="h-4 w-4" />
              الأعمال
            </div>
          </Link>

          <Link to="/">
            <div className="flex flex-col items-center justify-center border border-gray-200 px-3 py-4 hover:bg-gray-700 hover:text-white rounded transition-colors duration-300">
              <FaUsers className="h-4 w-4" />
              المنفذين
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
