import React from "react";
import Stats from "./Stats";
import useOwnerProjects from "../projects/useOwnerProjects";
import Loading from "../../ui/Loading";
import DashboardHeader from "../../ui/DashboardHeader";

function DashboardLayout() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) {
    return <Loading />;
  }
  if (projects == null) {
    const projects = [];
    return projects;
  }

  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default DashboardLayout;
