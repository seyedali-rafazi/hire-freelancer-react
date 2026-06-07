import React from "react";
import HomeHeader from "../ui/HomeHeader";
import RecomendedProjectsLayout from "../feachures/recomended-projects/RecomendedProjectsLayout";

function RecomendedProjects() {
  return (
    <div className="bg-secondery-0 ">
      <HomeHeader  />
      <div className="container lg:max-w-7xl min-h-screen">
        <RecomendedProjectsLayout />
      </div>
    </div>
  );
}

export default RecomendedProjects;
