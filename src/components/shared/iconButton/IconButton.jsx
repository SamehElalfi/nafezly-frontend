import React from 'react';

function IconButton(props) {
    return (
       <a href={props.link || "#"}>
            <div className={`flex flex-row gap-2 m-2 items-center ${props.divStyle}`}>
                <div>
                    <props.icon className={props.classNameIcon} />
                </div>
                <span> {props.name} </span>
            </div>
        </a>
    );
}

export default IconButton;
