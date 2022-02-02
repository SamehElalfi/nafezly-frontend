import Button from "components/shared/button/Button";
import SocialMediaLogin from "components/shared/socialMediaLogin/SocialMediaLogin";
import React from "react";
import Navbar from "components/layout/navbar/Navbar";
import Footer from "components/layout/footer/Footer";
import FloatingButton from "components/layout/floatingButton/FloatingButton";

function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center bg-red-500 py-12">
        <div className="bgBox h-full w-full bg-blue-500 p-12 sm:max-w-screen-sm">
          <SocialMediaLogin />
          <hr className="m-16" />

          <div className="content flex flex-col p-5">
            <span>تسجل الدخول</span>
            <div className="relative my-6">
              <label
                htmlFor="username"
                className="absolute -top-4 right-1 bg-green-500"
              >
                dasdas
              </label>
              <input
                name="username"
                type="text"
                className="w-full border border-black p-2 outline-none focus:border-yellow-400"
              />
            </div>

            <div className="relative my-6">
              <label
                htmlFor="password"
                className="absolute -top-4 right-1 bg-green-500"
              >
                hi wor
              </label>
              <input
                name="password"
                type="password"
                className="w-full border border-black p-2 focus:border-blue-400"
              />
            </div>

            {/* // new section */}
            <div className="flex flex-row justify-between bg-orange-400 p-3">
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
                <a href="http://">لا املك حساب </a>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                <a href="http://">نسيت كلمة المرور</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FloatingButton />
      <Footer />
    </>
  );
}

export default LoginPage;
