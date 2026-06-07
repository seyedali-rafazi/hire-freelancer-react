import React from "react";
import HomeHeader from "../ui/HomeHeader";
import FavouritProjectsLayout from "../feachures/recomended-projects/FavouritProjectsLayout";
import Loading from "../ui/Loading";
import useUser from "../feachures/authentication/useUser";

function FavouritProjects() {
  const { user, isLoading } = useUser();
  if (isLoading) return <Loading />;
  return (
    <div className="h-full bg-secondery-0 ">
      <HomeHeader user={user} />
      <div className="container lg:max-w-7xl min-h-screen">
        <FavouritProjectsLayout />
      </div>
    </div>
  );
}

export default FavouritProjects;
