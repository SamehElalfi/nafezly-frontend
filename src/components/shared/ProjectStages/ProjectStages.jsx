import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import BoxCard from "components/shared/boxCard/BoxCard";

/**
 * TODO: add comment here
 * @returns The ProjectStages component is returning a div element with a class of "stages flex
 * flex-col".
 */
export function ProjectStages() {
  return (
    <BoxCard className="stages flex flex-col p-2">
      <div className="top flex flex-col justify-evenly gap-6 sm:flex-row sm:gap-0 sm:p-4">
        <div className="flex flex-row text-green-500 sm:flex-col">
          <BsFillCheckCircleFill className="h-8 w-24" />
          <span>نشر المشروع</span>
        </div>
        <div className="flex flex-row text-green-500 sm:flex-col">
          <BsFillCheckCircleFill className="h-8 w-24" />
          <span>تلقي العروض</span>
        </div>
        <div className="flex flex-row sm:flex-col">
          <MdOutlineIncompleteCircle className="h-8 w-24 text-gray-600" />
          <span>تنفيذ المشروع</span>
        </div>
        <div className="flex flex-row sm:flex-col">
          <MdOutlineIncompleteCircle className="h-8 w-24 text-gray-600" />
          <span>استلام المشروع</span>
        </div>
      </div>

      {/*
              first-stage:  w-1/5
              second-stage: w-2/5
              third-stage:  w-3/5
              fourth-stage: w-full
             */}
      <div className="mx-16">
        <div className="bar hidden h-2 w-2/5 rounded bg-amber-200 sm:block"></div>
      </div>
    </BoxCard>
  );
}
