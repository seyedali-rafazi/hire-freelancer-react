import React from "react";
import HomeHeader from "../ui/HomeHeader";
import RecomendedProjectsLayout from "../feachures/recomended-projects/RecomendedProjectsLayout";
import Loading from "../ui/Loading";
import useUser from "../feachures/authentication/useUser";
import SendedProposalsLayout from "../feachures/recomended-projects/SendedProposalsLayout";

function SendedProposals() {
  const { user, isLoading } = useUser();
  if (isLoading) return <Loading />;
  return (
    <div className="bg-secondery-0 ">
      <HomeHeader user={user} />
      <div className="container lg:max-w-7xl min-h-screen">
        <SendedProposalsLayout />
      </div>
    </div>
  );
}

export default SendedProposals;
