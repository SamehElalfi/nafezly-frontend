import React from "react";
import BoxCard from "components/shared/boxCard/BoxCard";
import { RatingStars } from "../RatingStars/RatingStars";

/**
 * It creates a card with a title and a rating stars.
 * @returns The return is a box card with a title and a div with a flexbox inside.
 */
export function ProjectRate() {
  return (
    <BoxCard title="تقييم المشروع ">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span>ترشح للآخرين</span>
          <RatingStars />
        </div>
        <div className="flex items-center justify-between">
          <span>الإحترافية بالتعامل </span>
          <RatingStars stars={5} />
        </div>
        <div className="flex items-center justify-between">
          <span>سرعة التواصل </span>
          <RatingStars stars={2} />
        </div>
        <div className="flex items-center justify-between">
          <span>جودة العمل </span>
          <RatingStars />
        </div>
        <div className="flex items-center justify-between">
          <span>الخبرة بمجال العمل </span>
          <RatingStars stars={1} />
        </div>
        <div className="flex items-center justify-between">
          <span>إحترام موعد التسليم </span>
          <RatingStars stars={3} />
        </div>
        <div className="flex items-center justify-between">
          <span>التعامل مرة اخرى </span>
          <RatingStars />
        </div>
      </div>
    </BoxCard>
  );
}
