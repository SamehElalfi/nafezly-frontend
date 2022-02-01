import React from "react";
import Button from "../button/Button";
function Card(props) {
  const x = 54;
  return (
    <div className="group flex h-48 w-1/4 flex-col  items-center bg-red-300">
      <props.icon className="my-2 w-12" />
      <h2 className="my-2 text-xl font-bold">{props.title}</h2>
      <p className="duration-900 flex-wrap text-center transition-all group-hover:hidden ">
        {props.text}
      </p>
      <div className="duration-900 my-2 flex flex-row justify-between opacity-0 transition-all group-hover:opacity-100 ">
        <Button className="ml-2">html</Button>
        <Button className="ml-2">css</Button>
        <Button className="">javascript</Button>
      </div>
    </div>
  );
}

export default Card;
