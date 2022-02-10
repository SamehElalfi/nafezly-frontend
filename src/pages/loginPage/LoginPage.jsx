import Button from "components/shared/button/Button";
import SocialMediaLogin from "components/shared/socialMediaLogin/SocialMediaLogin";
import React from "react";
import Input from "components/shared/input/Input";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="flex items-center justify-center py-12">
        <div className="bgBox h-full w-full  bg-white p-12 sm:max-w-screen-sm">
          <SocialMediaLogin />
          <hr className="m-16" />

          <div className="content flex flex-col gap-8 p-5">
            <span>تسجل الدخول</span>
            <Input name="email" label="البريد الالكتروني" type="email" />

            <Input name="password" label="كلمة السر" type="password" />

            <div className="flex flex-row justify-between p-3">
              <div className="flex-row items-center  p-2">
                <input
                  type="checkbox"
                  name="rememberME"
                  id="rememberME"
                  className="h-[20px] w-[20px]"
                />
                <label htmlFor="rememberME" className="mr-3">
                  تذكرني
                </label>
              </div>
              <Button>تسجيل الدخول</Button>
            </div>
            <div className="flex flex-col gap-2 p-3">
              <span>مساعدة</span>
              <div className="flex flex-row items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                <Link to="/registration">لا املك حساب </Link>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                <Link to="/password-reset">نسيت كلمة المرور</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
