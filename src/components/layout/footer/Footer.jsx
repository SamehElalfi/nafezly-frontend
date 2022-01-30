import React from "react";

function Footer() {
  return (
    <footer className=" container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto">
      <div className="flex flex-col m-4">
        <ComponentTitle title="تعلم" />

        <div className="flex flex-col mx-8">
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
      </div>

      <div className="flex flex-col ">
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
      </div>

      <div className="flex flex-col ">
        <ComponentTitle title="وسائل الدفع" />
      </div>

      <div className="flex flex-col">
        <ComponentTitle title="تابعنا" />
      </div>
    </footer>
  );
}

function ComponentTitle({ title }) {
  return <h3 className="text-xl my-4 mx-6">{title}</h3>;
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

export default Footer;
