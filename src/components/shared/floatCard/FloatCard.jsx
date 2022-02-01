import React from "react";
import XIcon from "@heroicons/react/solid/XIcon";
function FloatCard() {
  return (
    <div className="container fixed bottom-4 left-4 flex w-1/4 flex-col justify-center rounded bg-blue-400 shadow-lg">
      <div className="flex w-full flex-row justify-between">
        <div className="p-4 text-lg font-bold">تذكير</div>
        <div className="cursor-pointer p-4">
          <XIcon className="w-5" />
        </div>
      </div>
      <p className="w-full break-words px-8 py-4">
        أنضم الآن إلى قناتنا على Teleegram لتصلك الإشعارات الهامة.
      </p>

      <div className="w-full p-3">
        <button className="w-full rounded border-2 border-blue-500 py-2 px-3 text-black">
          أنضم الآن
        </button>
      </div>
    </div>
  );
}

export default FloatCard;
