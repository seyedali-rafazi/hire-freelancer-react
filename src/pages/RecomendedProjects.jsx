import React from "react";
import useUser from "../feachures/authentication/useUser";
import Loading from "../ui/Loading";
import HomeHeader from "../ui/HomeHeader";
import RecomendedProjectsLayout from "../feachures/recomended-projects/RecomendedProjectsLayout";

function RecomendedProjects() {
  const { user, isLoading } = useUser();
  if (isLoading) return <Loading />;

  return (
    <div className="bg-secondery-0 ">
      <HomeHeader user={user} />
      <div className="container lg:max-w-7xl min-h-screen">
        <RecomendedProjectsLayout />
      </div>
    </div>
  );
}

export default RecomendedProjects;
