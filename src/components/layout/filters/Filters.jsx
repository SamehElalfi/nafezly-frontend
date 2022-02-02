import React from "react";
import {FaUserTie} from "react-icons/fa"
import {BiCodeAlt} from "react-icons/bi"
import {FaPaintBrush} from "react-icons/fa"
import {BsBullseye} from "react-icons/bs"
import {FaPenAlt} from "react-icons/fa"
import {BsHeadset} from "react-icons/bs"
import {IoIosArrowForward} from "react-icons/io"
import {AiOutlineEllipsis} from "react-icons/ai"
import MultiRangeSlider from "components/shared/muiltRangeSlider/MultiRangeSlider";

function Filters({ className }) {
  return (
    <div
      className={` flex w-1/4 flex-col gap-3 h-[700px] bg-red-400 p-5   ${
        className || ""
      } `}
    >
        <div className="sm:hidden">
            <div className="flex flex-row justify-between ">
                <div className='flex flex-row items-center '>
                    <IoIosArrowForward/>
                    <span className="text-lg">عودة</span>
                </div>
                <span className="text-lg">نتائج البحث</span>
        </div>
        </div>
      <span className=" text-lg mt-3">بحث</span>
      <div className="">
        <input type="text" className="outline-none h-8 w-full" />
      </div>
      <span className="text-lg">التصنيفات</span>
      <div className="flex flex-col gap-2 ">
        <div className="flex flex-row gap-2 items-center">
          <input className="h-[30px] w-[20px]" type="checkbox" name="management" id="management" />
          <FaUserTie className=""w-4/>
          <label htmlFor="management">أعمال وخدمات استشارية وإدارية</label>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <input className="h-[30px] w-[20px]" type="checkbox" name="programming" id="programming" />
          <BiCodeAlt className=""w-4/>
          <label htmlFor="programming"> برمجة، تطوير المواقع والتطبيقات</label>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <input className="h-[30px] w-[20px]" type="checkbox" name="design" id="design" />
          <FaPaintBrush className=""w-4/>
          <label htmlFor="design"> تصميم وأعمال فنية وإبداعية</label>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <input className="h-[30px] w-[20px]" type="checkbox" name="marketing" id="marketing" />
          <BsBullseye className=""w-4/>
          <label htmlFor="marketing">تسويق الكتروني ومبيعات</label>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <input className="h-[30px] w-[20px]" type="checkbox" name="writing" id="writing" />
          <FaPenAlt className=""w-4/>
          <label htmlFor="writing">كتابة، صناعة محتوى، ترجمة ولغات</label>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <input className="h-[30px] w-[20px]" type="checkbox" name="training" id="training" />
          <BsHeadset className=""w-4/>
          <label htmlFor="training"> تدريب، تعليم ومساعدة عن بعد</label>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <input className="h-[30px] w-[20px]" type="checkbox" name="others" id="others" />
          <AiOutlineEllipsis className=""w-4/>
          <label htmlFor="others"> أمور أخرى</label>
        </div>
      
        <span className=" text-lg mb-2 mt-3">المهارات</span>
        <div className="">
            <input type="text" className="outline-none h-8 w-full" />
        </div>
      
        <span className=" text-lg mt-3">الميزانية</span>
        <div className="py-3">
            <MultiRangeSlider
                min={10}
                max={10000}
                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            />
        </div>
      </div>
    </div>
  );
}

export default Filters;
