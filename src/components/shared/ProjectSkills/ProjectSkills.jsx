import React from "react";
import { BsTagFill } from "react-icons/bs";
import IconButton from "components/shared/iconButton/IconButton";
import BoxCard from "components/shared/boxCard/BoxCard";

/**
 * It returns a box card with a title and a list of skills.
 */
export function ProjectSkills() {
  return (
    <BoxCard title="مهارات مطلوبة">
      <div className="flex flex-wrap">
        <IconButton icon={BsTagFill} name="html" divStyle="w-max p-1" />
        <IconButton icon={BsTagFill} name="Css" divStyle="w-max p-1" />
      </div>
    </BoxCard>
  );
}
