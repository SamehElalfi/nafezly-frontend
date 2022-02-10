import React from "react";
import user from "assets/images/user.png";
import { HiOutlineUser } from "react-icons/hi";
import { GrFormLocation } from "react-icons/gr";
import BoxCard from "components/shared/boxCard/BoxCard";

/**
 * It creates a card with a user avatar and the user name.
 * @returns The return is a BoxCard with a title of "منفذ المشروع" and a className of "freelancer".
 */
export function ExecutorCard() {
  return (
    <BoxCard title="منفذ المشروع" className="freelancer">
      <div className="flex flex-col justify-center ">
        <div className="flex  w-2/3 p-1   ">
          <div className="avatar  hidden  h-14 w-14 flex-col  items-center  justify-center overflow-hidden rounded-full sm:flex">
            <img src={user} className="" alt="" />
          </div>
          <div className="flex flex-col ">
            <div className="flex items-center gap-2">
              <HiOutlineUser />
              <span>المنفذ : smarh</span>
            </div>
            <div className="flex items-center gap-2">
              <GrFormLocation className="h-8 w-5" />
              <span>مصر</span>
            </div>
          </div>
        </div>
      </div>
    </BoxCard>
  );
}
