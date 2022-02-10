import React from "react";
import "flowbite";


// Icons

import { AuthorDetails } from "components/shared/AuthorDetails/AuthorDetails";
import { ProjectStatus } from "components/shared/ProjectStatus/ProjectStatus";
import { ProjectStages } from "components/shared/ProjectStages/ProjectStages";
import { SocialMediaBox } from "components/shared/SocialMediaBox/SocialMediaBox";
import { ProjectSkills } from "components/shared/ProjectSkills/ProjectSkills";
import { ProjectDetails } from "components/shared/ProjectDetails/ProjectDetails";
import { FreelancersOffers } from "components/shared/FreelancersOffers/FreelancersOffers";
import { ProjectRate } from "components/shared/ProjectRate/ProjectRate";
import { ExecutorCard } from "components/shared/ExecutorCard/ExecutorCard";

function ProjectPage() {
  return (
    <div className="main flex flex-col">
      <AuthorDetails />
      <div className="body-Project-details container m-auto flex flex-col-reverse justify-between gap-2 sm:flex-row">
        <div className="right-side flex w-full flex-col sm:w-2/3">
          <ProjectStages />
          <ProjectDetails />
          <ProjectRate />
          <ProjectSkills />
          <FreelancersOffers />
        </div>
        {/* .right-side  */}

        <div className="left-side flex w-full flex-col sm:w-1/3">
          <ProjectStatus />
          <ExecutorCard />
          <SocialMediaBox />
        </div>
        {/* .left-side  */}
      </div>
      {/* .body-Project-details */}
    </div>
  );
}

export default ProjectPage;
