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
    <footer className="container mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col">
        <FooterComponent>
          <ComponentTitle title="تعلم" />

          <div className="mx-8 flex flex-col sm:mx-0 xl:mx-8">
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
          <div className="mx-8 flex flex-row sm:mx-0 xl:mx-8">
            <SocialIcon href="https://">
              <FaFacebookF className="text-blue-500" />
            </SocialIcon>
            <SocialIcon href="https://">
              <FaTwitter className="text-cyan-500" />
            </SocialIcon>
            <SocialIcon href="https://">
              <FaYoutube className="text-red-500" />
            </SocialIcon>
            <SocialIcon href="https://">
              <FaInstagram className="text-gray-500" />
            </SocialIcon>
            <SocialIcon href="https://">
              <FaLinkedinIn className="text-blue-500" />
            </SocialIcon>
            <SocialIcon href="https://">
              <FaTelegramPlane className="text-cyan-500" />
            </SocialIcon>
          </div>
        </FooterComponent>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col">
          <FooterComponent>
            <ComponentTitle title="روابط" />
            <div className="mx-8 flex flex-col gap-2">
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
            <a className="group relative flex flex-col" href="https://">
              <div className="flex w-12 items-center justify-center rounded bg-blue-500 p-4">
                <FaPenAlt className="w-8 text-white" />
              </div>
              <span className="my-2 w-fit translate-x-1/4 rounded bg-black p-2 text-sm text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
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
  return <h3 className="my-4 mx--6 text-xl">{title}</h3>;
}

function ArticleLink({ href, text }) {
  return (
    <div className="flex flex-row items-center justify-start">
      <div className="m-4 h-4 w-4 rounded-full border-2 border-green-500 bg-blue-500"></div>
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

function SocialIcon({ children, href }) {
  return (
    <a
      className="m-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300"
      href={href}
    >
      {children}
    </a>
  );
}

export default Footer;
