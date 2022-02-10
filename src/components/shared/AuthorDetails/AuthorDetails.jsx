import React, { useState } from "react";
import user from "assets/images/user.png";
import {
  FaUserTie,
  FaPenAlt,
  FaPaintBrush
} from "react-icons/fa";
import {
  AiFillHeart,
  AiOutlineHeart
} from "react-icons/ai";
import IconButton from "components/shared/iconButton/IconButton";

/**
 * It creates a card with the author details.
 * @returns The return is a div with a class of Project-title.
 */
export function AuthorDetails() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="Project-title bg-white p-8">
      <div className="container m-12 mx-auto flex flex-col items-center justify-between sm:flex-row">
        <div className="right flex gap-4">
          <div className="avatar hidden h-14 w-14 flex-col items-center justify-center overflow-hidden rounded-full sm:flex">
            <img src={user} className="" alt="Username" />
          </div>
          <div className="title flex flex-col gap-1">
            <div className="project-title text-2xl font-medium text-blue-500">
              مطلوب مبرمج لعمل Backend لمنصة إلكترونية
            </div>
            <div className="project-state flex items-center gap-2 text-sm">
              <FaUserTie />
              <span> مركز فيثاغورث </span>
              <FaPaintBrush />
              <span> منذ 10 دقائق</span>
            </div>
          </div>
        </div>
        <div className="left flex gap-4 mt-8 sm:mt-0">
          <div className="like-project">
            <IconButton
              icon={FaPenAlt}
              name="مشروع مماثل"
              divStyle="rounded bg-blue-500 text-white" />
          </div>
          <div
            className="like-button"
            onClick={() => {
              setLiked(!liked);
            }}
          >
            {liked ? (
              <AiFillHeart className="h-14 w-8 text-red-500" />
            ) : (
              <AiOutlineHeart className="h-14 w-8 text-red-500" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
