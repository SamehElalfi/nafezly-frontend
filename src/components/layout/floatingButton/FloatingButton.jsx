import React, { useState } from "react";
import IconButton from "components/shared/iconButton/IconButton";
import SupportIcon from "@heroicons/react/solid/SupportIcon";
import PhoneIcon from "@heroicons/react/outline/PhoneIcon";
import FlagIcon from "@heroicons/react/outline/FlagIcon";
import HandIcon from "@heroicons/react/outline/HandIcon";
function FloatingButton() {
  var [clicked, setClicked] = useState(false);
  const printx = () => {
    setClicked(!clicked);
  };
  return (
    <div className="fixed bottom-1 right-1 flex select-none flex-col-reverse">
      <div
        onClick={printx}
        className={` m-2 flex w-max cursor-pointer flex-row items-center gap-2 rounded bg-blue-500 p-2 text-white shadow-lg`}
      >
        <div>
          <SupportIcon className="w-5" />
        </div>
        <span> مركز المساعدة </span>
      </div>

      <div className={` ${clicked ? "show" : "hidden"}  `}>
        <IconButton
          name="الروبوت الذكي "
          icon={FlagIcon}
          classNameIcon="w-5"
          divStyle="bg-white text-black shadow-lg m-1 p-2 rounded w-max"
        />

        <IconButton
          name="الدليل الشامل "
          icon={HandIcon}
          classNameIcon="w-5"
          divStyle="bg-white text-black shadow-lg m-1 p-2 rounded w-max"
        />
        <div className="flex flex-row items-center justify-center ">
          <IconButton
            name="الدعم الفني"
            icon={PhoneIcon}
            classNameIcon=" w-5"
            divStyle="bg-white text-black shadow-lg m-1 p-2 pl-5 rounded w-max "
          />

          <IconButton
            name="انشاء حساب"
            icon={PhoneIcon}
            classNameIcon="w-5"
            divStyle="bg-green-500 text-white shadow-lg m-1 p-1 rounded w-max"
          />
        </div>
      </div>
    </div>
  );
}

export default FloatingButton;
