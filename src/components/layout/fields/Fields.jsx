import React from "react";
import Card from "../../shared/card/Card";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineGTranslate } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaPenAlt } from "react-icons/fa";
import {AiFillCreditCard} from "react-icons/ai"
import SectionTitle from "components/shared/sectionTitle/SectionTitle";

function Fields() {
  return (

    <div className="flex flex-col">
      <SectionTitle>مجالات الاختصاص</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-12">
      
        <Card
          icon={FaPaintBrush}
          name="تصميم و أعمال"
          title="التصميم  الجرافيك "
          text="التصميم  الجرافيكالتصميم  الجرافيكالتصميم  الجرافيكالتصميم  الجرافيك"
        />
        <Card
          icon={MdOutlineGTranslate}
          name="تصميم و أعمال"
          title="التصميم  الجرافيك "
          text="التصميم  الجرافيكالتصميم  الجرافيكالتصميم  الجرافيكالتصميم  الجرافيك"
        />
        <Card
          icon={AiFillCreditCard}
          name="تصميم و أعمال"
          title="التصميم  الجرافيك "
          text="التصميم  الجرافيكالتصميم  الجرافيكالتصميم  الجرافيكالتصميم  الجرافيك"
        />
        <Card
          icon={BsFillChatLeftDotsFill}
          name="تصميم و أعمال"
          title="التصميم  الجرافيك "
          text="التصميم  الجرافيكالتصميم  الجرافيكالتصميم  الجرافيكالتصميم  الجرافيك"
        />
        <Card
          icon={HiOutlineLightBulb}
          name="تصميم و أعمال"
          title="التصميم  الجرافيك "
          text="التصميم  الجرافيكالتصميم  الجرافيكالتصميم  الجرافيكالتصميم  الجرافيك"
        />
        <Card
          icon={FaPenAlt}
          name="تصميم و أعمال"
          title="التصميم  الجرافيك "
          text="التصميم  الجرافيكالتصميم  الجرافيكالتصميم  الجرافيكالتصميم  الجرافيك"
        />
      </div>
    </div>
  );
}

export default Fields;
