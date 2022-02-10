import React from 'react';

function BoxCard({title, children, className}) {
    return <div className={` ${className || ''}`}>
        <span className='my-3 block '>{title}</span>
          <hr />
        <div>{children}</div>
    </div>;
  }

export default BoxCard;
