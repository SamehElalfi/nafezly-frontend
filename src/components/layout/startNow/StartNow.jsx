import React from "react";

function StartNow() {
  return (
    <section className="flex flex-col justify-center items-center bg-blue-500 py-24">
      <h4 className="text-3xl text-white mb-8">
        هل أنت جاهز لبدء مشروعك الخاص؟
      </h4>
      <a
        href="https://"
        className="font-medium border-2 bg-white text-blue-500 hover:shadow-xl px-12 py-2"
      >
        أبدأ الآن
      </a>
    </section>
  );
}

export default StartNow;
