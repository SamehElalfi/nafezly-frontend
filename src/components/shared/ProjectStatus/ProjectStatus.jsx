import React from "react";
import BoxCard from "components/shared/boxCard/BoxCard";

/**
 * It creates a card with a title and a list of items.
 * @returns The ProjectStatus component is returning a BoxCard component with a title of "Project
 * Status".
 */
export function ProjectStatus() {
  return (
    <BoxCard title="إستمارة المشروع" className="bg-white ">
      <div className="flex flex-row flex-wrap ">
        <div className="w-1/2">حالة المشروع</div>
        <div className="w-1/2">تحت التنفيذ</div>
        <div className="w-1/2">المدة المتاحة</div>
        <div className="w-1/2">30 ايام </div>
        <div className="w-1/2">الميزانية</div>
        <div className="w-1/2"> $500 - 200 </div>
        <div className="w-1/2">عدد المتقدمين</div>
        <div className="w-1/2"> 1</div>
        <div className="w-1/2"> متوسط العروض</div>
        <div className="w-1/2">$ 362 </div>
      </div>
    </BoxCard>
  );
}
