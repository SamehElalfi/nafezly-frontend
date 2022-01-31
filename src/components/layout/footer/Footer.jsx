import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaPenAlt,
} from "react-icons/fa";

import PaymentsImage from "assets/images/payments-min.png";
import PayoutsImage from "assets/images/payouts-min.png";

function Footer() {
  return (
    <footer className="container grid grid-cols-1 md:grid-cols-2 mx-auto">
      <div className="flex flex-col">
        <FooterComponent>
          <ComponentTitle title="تعلم" />

          <div className="flex flex-col mx-8 sm:mx-0 xl:mx-8">
            <ArticleLink
              href="https://"
              text="أفضل إضافات وقوالب ووردبريس بكل تصنيفاتها - دليل شامل"
            />
            <ArticleLink
              href="https://"
              text="دليلك الشامل لاستخدام تحليلات جوجل Google analytics"
            />
            <ArticleLink
              href="https://"
              text="50 نصيحة تساعدك على إنشاء موقع ووردبريس ناجح"
            />
            <ArticleLink
              href="https://"
              text="كيفية إنشاء موقع ووردبريس بالصور خطوة بخطوة"
            />
            <ArticleLink
              href="https://"
              text="أفضل الأدوات المجانية لاستلهام محتوى جديد لمدونتك"
            />
          </div>
        </FooterComponent>

        <FooterComponent>
          <ComponentTitle title="تابعنا" />
          <div className="flex flex-row mx-8 sm:mx-0 xl:mx-8">
            <SocialIcon>
              <FaFacebookF className="text-blue-500" />
            </SocialIcon>
            <SocialIcon>
              <FaTwitter className="text-cyan-500" />
            </SocialIcon>
            <SocialIcon>
              <FaYoutube className="text-red-500" />
            </SocialIcon>
            <SocialIcon>
              <FaInstagram className="text-gray-500" />
            </SocialIcon>
            <SocialIcon>
              <FaLinkedinIn className="text-blue-500" />
            </SocialIcon>
            <SocialIcon>
              <FaTelegramPlane className="text-cyan-500" />
            </SocialIcon>
          </div>
        </FooterComponent>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col">
          <FooterComponent>
            <ComponentTitle title="روابط" />
            <div className="flex flex-col mx-8 gap-2">
              <a href="https://">الدليل الإرشادي</a>
              <a href="https://">الدعم الفني</a>
              <a href="https://">شروط الاستخدام </a>
              <a href="https://">سياسة الخصوصية</a>
              <a href="https://">ضمان الحقوق</a>
              <a href="https://">الأسئلة الشائعة </a>
              <a href="https://"> مدونة نفذلي </a>
              <a href="https://"> التسويق بالعمولة</a>
            </div>
          </FooterComponent>
        </div>

        <div className="flex flex-col">
          <FooterComponent>
            <ComponentTitle title="وسائل الدفع" />
            <img
              src={PaymentsImage}
              alt="all payments we support"
              className="w-48"
            />
          </FooterComponent>

          <FooterComponent>
            <ComponentTitle title="وسائل السحب" />
            <img
              src={PayoutsImage}
              alt="all payouts we support"
              className="w-48"
            />
          </FooterComponent>

          <FooterComponent>
            <ComponentTitle title="مواقعنا" />
            <a className="flex flex-col relative group" href="https://">
              <div className="flex justify-center items-center p-4 rounded bg-blue-500 w-12">
                <FaPenAlt className="text-white w-8" />
              </div>
              <span className="translate-x-1/4 w-fit my-2 p-2 rounded bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                مدونة نفذلي
              </span>
            </a>
          </FooterComponent>
        </div>
      </div>
    </footer>
  );
}

function FooterComponent({ children }) {
  return <div className="footer-component m-4 px-6">{children}</div>;
}

function ComponentTitle({ title }) {
  return <h3 className="text-xl my-4 mx--6">{title}</h3>;
}

function ArticleLink({ href, text }) {
  return (
    <div className="flex flex-row justify-start items-center">
      <div className="bg-blue-500 border-2 border-green-500 w-4 h-4 rounded-full m-4"></div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm"
      >
        {text}
      </a>
    </div>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="flex justify-center items-center w-8 h-8 m-3 border border-gray-300 rounded-full">
      {children}
    </div>
  );
}

export default Footer;
