import React, { useState } from "react";

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import Input from "components/shared/input/Input";

// icons
import { AiOutlineEllipsis } from "react-icons/ai";
import { FaUserTie, FaPenAlt, FaPaintBrush } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BiCodeAlt } from "react-icons/bi";
import { BsBullseye, BsHeadset } from "react-icons/bs";

function Filters({ className }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const onSlide = (render, handle, value, un, percent) => { 
    setMinPrice(parseInt(value[0]))
    setMaxPrice(parseInt(value[1]))
  }

  return (
    <div
      className={`flex w-full flex-col gap-3 rounded-sm px-5 py-2 pb-16 ${
        className || ""
      } `}
    >
      <div className="sm:hidden">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row items-center ">
            <IoIosArrowForward />
            <span className="text-lg">عودة</span>
          </div>
          <span className="text-lg">نتائج البحث</span>
        </div>
      </div>
      <Title title="بحث" />
      <div className="">
        <Input name="query" label=" " />
      </div>
      <Title title="التصنيفات" />
      <div className="flex flex-col gap-2 ">
        <CheckboxFilter
          title="أعمال وخدمات استشارية وإدارية"
          icon={FaUserTie}
          name="works"
        />
        <CheckboxFilter
          title="برمجة، تطوير المواقع والتطبيقات"
          icon={BiCodeAlt}
          name="programming"
        />
        <CheckboxFilter
          title="تصميم وأعمال فنية وإبداعية"
          icon={FaPaintBrush}
          name="design"
        />
        <CheckboxFilter
          title="تسويق الكتروني ومبيعات"
          icon={BsBullseye}
          name="marketing"
        />
        <CheckboxFilter
          title="كتابة، صناعة محتوى، ترجمة ولغات"
          icon={FaPenAlt}
          name="writing"
        />
        <CheckboxFilter
          title="تدريب، تعليم ومساعدة عن بعد"
          icon={BsHeadset}
          name="training"
        />
        <CheckboxFilter
          title="أمور أخرى"
          icon={AiOutlineEllipsis}
          name="other"
        />

        <Title title="المهارات" />
          <Input name="skills" label=" " />
        <div className="">
        </div>

        <Title title="الميزانية" />
        <Nouislider start={[10, 100]} range={{ 'min': 0, 'max': 100 }} onSlide={onSlide} />
        <div className="flex flex-row-reverse justify-between">
          <span>{ minPrice }</span>
          <span>{ maxPrice }</span>
        </div>
      </div>
    </div>
  );
}

function Title({ title }) {
  return <span className="mt-3 text-lg">{title}</span>;
}

function CheckboxFilter(props) {
  return (
    <div className="flex flex-row items-center gap-2">
      <input
        className="h-[30px] w-[20px]"
        type="checkbox"
        id={props?.name}
        name="filter"
      />
      <props.icon className="w-4" />
      <label htmlFor={props?.name}>{props?.title}</label>
    </div>
  );
}

export default Filters;
