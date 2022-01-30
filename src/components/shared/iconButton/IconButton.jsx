import React from 'react';

function IconButton(props) {
    return (
        <a href={props.link || "#"}>
            <div className='flex flex-row gap-2 m-2 items-center '>
                <span> {props.name} </span>
                <div>
                    <props.icon className={props.width} />
                </div>
            </div>
        </a>
    );
}

export default IconButton;
