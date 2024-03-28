import React from "react";
import Loading from "../../ui/Loading";
import Stats from "./Stats";
import useProposals from "../proposals/useProposals";
import DashboardHeader from "../../ui/DashboardHeader";

function DashboardLayout() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
