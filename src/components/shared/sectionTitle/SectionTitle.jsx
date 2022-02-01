import React from "react";

function SectionTitle({ children }) {
  return (
    <div className="my-12 select-none text-center text-2xl md:my-24">
      {" "}
      {children}{" "}
    </div>
  );
}

export default SectionTitle;
