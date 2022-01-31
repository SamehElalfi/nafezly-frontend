import React from "react";

function IconButton(props) {
    return (
       <a href={props.link || "#"}>
            <div className={`flex flex-row gap-2 m-2 p-2 items-center hover:bg-gray-200 ${props.divStyle}`}>
                <div>
                    <props.icon className={`text-gray-600 ${props.classNameIcon}`} />
                </div>
                <span> {props.name} </span>
            </div>
        </a>
    );
}

export default IconButton;
