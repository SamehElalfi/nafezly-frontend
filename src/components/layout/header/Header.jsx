import React, { useState } from "react";
import PaperAirplaneIcon from "@heroicons/react/outline/PaperAirplaneIcon";
import Button from "components/shared/button/Button";

function Header() {
  const [title, setTitle] = useState("");

  return (
    <header className="flex min-h-[500px] flex-col items-center justify-center bg-headerBackground bg-cover bg-center bg-no-repeat p-8 text-center text-white md:p-20">
      <h1 className="my-4 text-4xl">أنجز مشاريعك عبر الإنترنت بسهولة وأمان</h1>
      <h3 className="mt-4 mb-8 text-2xl">وظّف مستقلين محترفين لإنجاز أعمالك</h3>

      <form
        action="/api/project"
        method="post"
        className="relative m-1 flex w-full max-w-4xl flex-col items-center justify-center md:m-4 md:flex-row"
      >
        <input
          type="text"
          name="title"
          placeholder="أدخل عنوان المشروع الذي تريد تنفيذه..."
          className="w-full rounded p-4 text-black outline-transparent focus:border-0"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button className="left-1 my-2 w-full sm:absolute sm:w-auto md:my-0">
          أضف مشروعك
          <PaperAirplaneIcon className="mx-3 w-6 rotate-45 md:mx-2" />
        </Button>
      </form>
    </header>
  );
}

export default Header;
