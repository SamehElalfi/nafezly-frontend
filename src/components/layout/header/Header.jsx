import React, { useState } from "react";
import PaperAirplaneIcon from "@heroicons/react/outline/PaperAirplaneIcon";
import Button from "components/shared/button/Button";

function Header() {
  const [title, setTitle] = useState("");

  return (
    <header className="flex flex-col justify-center items-center p-8 md:p-20 bg-headerBackground bg-no-repeat bg-cover bg-center text-white text-center min-h-[500px]">
      <h1 className="text-4xl my-4">أنجز مشاريعك عبر الإنترنت بسهولة وأمان</h1>
      <h3 className="text-2xl mt-4 mb-8">وظّف مستقلين محترفين لإنجاز أعمالك</h3>

      <form
        action="/api/project"
        method="post"
        className="flex flex-col md:flex-row justify-center items-center relative m-1 md:m-4 w-full max-w-4xl"
      >
        <input
          type="text"
          name="title"
          placeholder="أدخل عنوان المشروع الذي تريد تنفيذه..."
          className="w-full p-4 rounded text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button className="sm:absolute left-1 w-full sm:w-auto my-2 md:my-0">
          أضف مشروعك
          <PaperAirplaneIcon className="w-6 rotate-45 mx-3 md:mx-2" />
        </Button>
      </form>
    </header>
  );
}



export default Header;
