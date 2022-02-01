import React from "react";

function StartNow() {
  return (
    <section className="flex flex-col items-center justify-center bg-blue-500 py-24">
      <h4 className="mb-8 text-3xl text-white">
        هل أنت جاهز لبدء مشروعك الخاص؟
      </h4>
      <a
        href="https://"
        className="border-2 bg-white px-12 py-2 font-medium text-blue-500 hover:shadow-xl"
      >
        أبدأ الآن
      </a>
    </section>
  );
}

export default StartNow;
