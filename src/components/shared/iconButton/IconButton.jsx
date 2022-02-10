import React from "react";

function IconButton(props) {
  return (
    <a href={props.link || "#"} onClick={props.onClick && props.onClick}>
      <div
        className={`m-2 flex flex-row items-center gap-2 p-2 hover:bg-blue-300  ${props.divStyle || ""}`}
      >
        <div>
          <props.icon className={`text-black w-4 ${props.classNameIcon || ""}`} />
        </div>
        <span> {props.name} </span>
      </div>
    </a>
  );
}


  //  props
//  onclick: optional
//  divStyle: optional
//  name: optional
//  icon: required
//  classNameIcon: optional

export default IconButton;
