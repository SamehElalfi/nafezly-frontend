import React, { useState } from "react";

import { FiChevronDown } from "react-icons/fi";

function BoxCard({
  title,
  children,
  hasDropdownIcon,
  onToggleCollapse,
  className,
}) {
  const [isOpened, setIsOpened] = useState(true);

  function toggleBody() {
    setIsOpened(!isOpened);
    onToggleCollapse && onToggleCollapse(!isOpened);
  }

  return (
    <div className={`m-2 rounded-lg bg-white p-4 ${className && className}`}>
      {title && (
        <>
          <div className="flex items-center justify-between">
            <div className="my-3 block text-lg font-medium">{title}</div>
            {hasDropdownIcon && (
              <div className="p-4 cursor-pointer" onClick={toggleBody}>
                <FiChevronDown />
              </div>
            )}
          </div>
          {isOpened && <hr />}
        </>
      )}
      {isOpened && (
        <>
          <div className="py-4">{children}</div>
        </>
      )}
    </div>
  );
}

export default BoxCard;
