import React from "react";
import Button from "../button/Button";
function Card(props) {
  const x = 54;
  return (
    <div className="flex flex-col items-center w-1/4 group  h-48 bg-red-300">
      <props.icon className="w-12 my-2" />
      <h2 className="font-bold text-xl my-2">{props.title}</h2>
      <p className="flex-wrap text-center group-hover:hidden transition-all duration-900 ">
        {props.text}
      </p>
      <div className="opacity-0 group-hover:opacity-100 flex flex-row justify-between my-2 transition-all duration-900 ">
        <Button className="ml-2">html</Button>
        <Button className="ml-2">css</Button>
        <Button className="">javascript</Button>
      </div>
    </div>
  );
}

export default Card;
