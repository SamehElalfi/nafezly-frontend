import React from "react";
import Moment from 'react-moment';
import 'moment/locale/ar';

import statusBackground from "assets/js/statusBackground";

// images
import defaultUserImage from "assets/images/user.png";

// icons
import { FaClock, FaAddressCard, FaMapMarkerAlt } from "react-icons/fa";

/**
 * This function returns a React component that displays the project's createdAt, proposalsCount, and
 * location
 * @returns The ProjectDetails component is returning a set of span elements that are being rendered as
 * a set of flex items.
 */
function ProjectDetails({ project, className }) {
  return (
    <>
      <span className="project-created-at flex items-center justify-center text-xs">
        <FaClock className="mx-1 w-3" />
        <Moment fromNow ago unix locale="ar">{project?.createdAt || "وقت غير محدد"}</Moment>
      </span>

      <span className="project-proposals flex items-center justify-center text-xs">
        <FaAddressCard className="mx-1 w-3" />
        {project?.proposalsCount || "0"} عروض
      </span>

      <span className="project-location hidden sm:flex items-center justify-center text-xs">
        <FaMapMarkerAlt className="mx-1 w-3" />
        {project?.location || "مكان غير محدد"}
      </span>
    </>
  );
}

/**
 * The function returns a span element with a className that is the combination of the statusBackground
 * function and the status variable
 * @returns A span element with a className attribute that is dynamically generated based on the status
 * prop.
 */
function ProjectStatus({ status }) {
  status = status ? status : "مفتوح";
  return (
    <>
      <span
        className={`project-status rounded-sm py-1 px-2 text-xs text-white ${statusBackground(
          status
        )}`}
      >
        {status}
      </span>
    </>
  );
}

/**
 * This function returns a React component that displays the user's name and profile image
 */
function UserDetails({ user }) {
  return (
    <>
      <a
        className="username flex items-center justify-center text-xs"
        href={user?.username ? `/u/${user?.username}` : "/"}
      >
        <img
          src={user?.profileImage || defaultUserImage}
          alt={user?.fullName || "User Name"}
          className="w-6"
        />
        {user?.fullName || "مجهول"}
      </a>
    </>
  );
}

function ProjectCard({ user, project, className }) {
  return (
    <div
      className={`my-2 flex w-full flex-col rounded-sm bg-white p-4 first:mt-0 last:mb-0 ${
        className || ""
      }`}
    >
      <div className="project-title text-lg font-medium text-blue-500">
        {project?.title || "مشروع بدون عنوان"}
      </div>
      <p className="project-summary my-4 text-sm">
        {project?.summary || "لا يوجد وصف للمشروع"} ...
      </p>
      <div className="project-details flex flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center sm:justify-around gap-3">
          <UserDetails user={user} />
          <ProjectDetails project={project} />
        </div>

        <div>
          <ProjectStatus status={project?.status || ""} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
