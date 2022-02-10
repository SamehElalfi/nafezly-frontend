import React from "react";
import {
  FaRegCopy,
  FaFacebookF
} from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillLinkedin
} from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import BoxCard from "components/shared/boxCard/BoxCard";

/**
 * This function returns a box card with a title and a set of social media icons
 */
export function SocialMediaBox() {
  return (
    <BoxCard title="شارك">
      <div className="m-4 flex items-center justify-evenly">
        <div className="  flex h-10 w-10 items-center justify-center border border-gray-800 p-2">
          <FaFacebookF className="h-4 w-4" />
        </div>

        <div className="  flex h-10 w-10 items-center justify-center border border-gray-800 p-2">
          <AiOutlineTwitter className="h-4 w-4" />
        </div>

        <div className=" flex h-10 w-10 items-center justify-center border border-gray-800 p-2">
          <AiFillLinkedin className="h-4 w-4" />
        </div>

        <div className=" flex h-10 w-10 items-center justify-center border border-gray-800 p-2">
          <IoLogoWhatsapp className="h-4 w-4" />
        </div>

        <div className=" flex h-10 w-10 items-center justify-center border border-gray-800 p-2">
          <FaRegCopy className="h-4 w-4" />
        </div>
      </div>
    </BoxCard>
  );
}
