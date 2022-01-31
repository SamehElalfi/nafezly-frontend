import React from "react";

function Button({ children, className }) {
  return (
    <button
      type="submit"
      className={`flex flex-row justify-center items-center bg-blue-500 text-white p-3 rounded ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;