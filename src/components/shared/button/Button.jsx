import React from "react";

function Button({ children }) {
  return (
    <button
      type="submit"
      className="flex flex-row justify-center items-center sm:absolute left-1 w-full sm:w-auto bg-blue-500 text-white p-3 my-2 md:my-0 rounded"
    >
      {children}
    </button>
  );
}

export default Button;