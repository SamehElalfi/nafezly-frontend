import React from "react";

function IconButton(props) {
  return (
    <a href={props.link || "#"}>
      <div
        className={`m-2 flex flex-row items-center gap-2 p-2 hover:bg-gray-200 ${props.divStyle}`}
      >
        <div>
          <props.icon className={`text-gray-600 ${props.classNameIcon}`} />
        </div>
        <span> {props.name} </span>
      </div>
    </a>
  );
}

export default IconButton;
