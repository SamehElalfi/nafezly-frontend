import React from "react";
import BoxCard from "components/shared/boxCard/BoxCard";

/**
 * It returns a box card with a title and a paragraph.
 * @returns The return value is a React component.
 */
export function ProjectDetails() {
  return (
    <BoxCard title="تفاصيل المشروع">
      <span>
        مرحبا , نبحث عن خبير html لفحص الموقع الخاص بي , حيث أثناء عمليه التطوير
        حدث خطأ ما وإختفت القائمة من Header , والصور من الهيدر أيضا , ومربع
        التعليقات في homepage , , يوجد backup ولكن لا اريد العودة إلى backup
        إختصارا للوقت وفحص الأكواد في حال وجود أي أخطاء ممكنه (العمل سيكون أون
        لاين بوجودي , حيث أن التعديل سيكون بإشرافي نضرا للعمل من داخل file
        manger) وشكرا
      </span>
    </BoxCard>
  );
}
