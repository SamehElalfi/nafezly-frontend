import React from "react";

function IconButton(props) {
  return (
    <a
      href={props.link || "#"}
      className={`flex flex-row gap-2 my-2 p-3 rounded items-center hover:bg-gray-200 ${
        props.className || ""
      }`}
    >
      <div>
        <props.icon className={`text-gray-600 ${props.iconWidth}`} />
      </div>
      {props.name ? <span> {props.name} </span> : ""}
    </a>
  );
}

export default IconButton;
