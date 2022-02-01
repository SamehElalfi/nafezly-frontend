import React, { useState } from "react";

function Input({ name, type, value, label, className, inputProps }) {
  const [content, setContent] = useState(value || "");

  return (
    <div className={`relative ${className || ""}`}>
      <label
        htmlFor={name || ""}
        className="absolute -top-2 right-4 rounded bg-gray-100 p-1 text-xs"
      >
        {label || name || ""}
      </label>

      <input
        type={type || "text"}
        name={name || ""}
        {...inputProps}
        value={content}
        className="w-full rounded border border-gray-300 p-2  focus:border-blue-500 focus:outline-0"
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
}

export default Input;
