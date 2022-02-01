import React from "react";
import Button from "../button/Button";
function Card(props) {
  return (
    <div className={`group flex h-48 flex-col  items-center ${props.className || ""} `}>
      <props.icon className={`my-2 h-10 w-10 ${props.classNameIcon || ""}`} />
      <h2 className="my-2 text-xl font-bold">{props.title}</h2>
      <p className="duration-900 flex-wrap text-center transition-all group-hover:hidden ">
        {props.text}
      </p>
      <div className="duration-900 my-2 flex flex-row justify-between opacity-0 transition-all group-hover:opacity-100">
        <a href={props.firstLink || "#"}><Button className="ml-2 select-none">منفذين </Button></a>
        <a href={props.secondLink || "#"}><Button className="ml-2 select-none">اعمال</Button></a>
        <a href={props.thirdLink || "#"}><Button className=" select-none">خدمات</Button></a>
      </div>
    </div>
  );
}

export default Card;
