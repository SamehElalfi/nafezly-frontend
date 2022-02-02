import React from "react";

function Pagination() {
  return (
    <div className=" flex flex-row  justify-center bg-red-400 ">
      <div className=" rounded rounded-l-none border bg-white  p-2 text-black hover:bg-gray-400">
        <a href="http://">
          <span>« السابق</span>
        </a>
      </div>

      <div className="rounded rounded-r-none border border-r-0 bg-white  p-2 text-black hover:bg-gray-400">
        <a href="http://">
          <span className="self-end">التالي »</span>
        </a>
      </div>
    </div>
  );
}
export default Pagination;
