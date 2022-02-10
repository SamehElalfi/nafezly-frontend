import Button from "components/shared/button/Button";
import Input from "components/shared/input/Input";
import React from "react";

const PasswordResetPage = (props) => (
  <>
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto my-12 flex w-full flex-col rounded bg-white p-12 md:max-w-screen-sm">
        <form action="#">
          <div className="mb-8 font-medium">إستعادة كلمة السر</div>
          <Input
            name="email"
            type="email"
            label="البريد الالكتروني المسجل لدينا"
            className="my-12"
          />

          <div className="flex justify-start">
            <Button>إرسال رابط استعادة كلمة السر</Button>
          </div>
        </form>
      </div>
    </div>
  </>
);

export default PasswordResetPage;
