import React from "react";

function Button({ children, className }) {
  return (
    <button
      type="submit"
      className={`flex flex-row items-center justify-center rounded bg-blue-500 p-3 text-white transition-all duration-300 hover:bg-blue-600 ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
