import React from "react";
import CheckCircleIcon from "@heroicons/react/solid/CheckCircleIcon";
import SectionTitle from "components/shared/sectionTitle/SectionTitle";

function Paragraph(props) {
  return (
    <div className="flex flex-col my-12 mx-5">
      <div className="flex flex-row">
        <CheckCircleIcon className="w-6 ml-2 text-blue-500" />
        <h2 className="font-bold text-2xl">{props.title}</h2>
      </div>
      <p className="pt-2">{props.paragraph}</p>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className=" container mx-auto overflow-hidden">
      <SectionTitle>كيف يعمل</SectionTitle>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-stretch">
        <div className="right-side h-100 w-full lg:w-1/2">
          <Paragraph
            title="أضف المشروع"
            paragraph="أضف تفاصيل مشروعك والمهارات المطلوبة لإنجازه وابدأ باستقبال عروض المستقلين عليه."
          />
          <Paragraph
            title="اختر العرض المناسب"
            paragraph="من بين العروض المقدمة لمشروعك، اختر العرض المناسب لمتطلبات المشروع ثم ابدأ مباشرة مرحلة التنفيذ."
          />
          <Paragraph
            title="استلم المشروع"
            paragraph="سيعمل المستقل الذي اخترته معك حتى انتهاء العمل وتسليم مشروعك بشكل كامل كما أردته."
          />
        </div>
        <div className="left-side h-96 w-full lg:w-1/2">
          <iframe
            className="w-full h-full"
            title="new-one"
            src="https://www.youtube.com/embed/UBOj6rqRUME"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
