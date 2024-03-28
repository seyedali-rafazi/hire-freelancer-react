import React from "react";
import useProposals from "../proposals/useProposals";
import Loading from "../../ui/Loading";
import DashboardHeader from "../../ui/DashboardHeader";
import useProjects from "../../hooks/useProjects";
import useUsers from "./useUsers";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading: isLoadingProposal, proposals } = useProposals();
  const { isLoading: isLoadingProject, projects } = useProjects();
  const { isLoading: isLoadingUsers, users } = useUsers();

  if (isLoadingProposal || isLoadingProject || isLoadingUsers) {
    return <Loading />;
  }
  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} projects={projects} users={users} />
    </div>
  );
}

export default DashboardLayout;
