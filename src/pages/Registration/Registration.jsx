import React from "react";
import Navbar from "components/layout/navbar/Navbar";
import Footer from "components/layout/footer/Footer";
import SocialMediaLogin from "components/shared/socialMediaLogin/SocialMediaLogin";
import Input from "components/shared/input/Input";
import Button from "components/shared/button/Button";
import FloatingButton from "components/layout/floatingButton/FloatingButton";

function Register() {
  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto my-12 flex w-full flex-col rounded bg-white p-12 md:max-w-screen-sm">
        <SocialMediaLogin />
        <hr className="m-16" />

        <form action="#">
          <div className="mb-8 font-medium">التسجيل</div>
          <div className="flex flex-col gap-8 sm:flex-row">
            <Input name="first name" label="الاسم الأول" className="sm:w-1/2" />
            <Input
              name="last name"
              label="الاسم العائلة"
              className="sm:w-1/2"
            />
          </div>
          <Input
            name="email"
            type="email"
            label="البريد الإلكتروني"
            className="my-12"
          />
          <Input
            name="password"
            type="password"
            label="كلمة المرور"
            className="my-12"
          />
          <Input
            name="re-password"
            type="password"
            label="تأكيد كلمة المرور"
            className="my-12"
          />
          <p className="mb-4">
            بتسجيلك في منصة نفذلي فإنك توافق علي{" "}
            <a href="https://" className="text-blue-500">
              شروط الاستخدام
            </a>{" "}
            و{" "}
            <a href="https://" className="text-blue-500">
              سياسة الخصوصية
            </a>
          </p>
          <div className="flex justify-end">
            <Button>إنشاء حساب</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

const Registration = (props) => (
  <>
    <Navbar />
    <Register />
    <FloatingButton />
    <Footer />
  </>
);

export default Registration;
