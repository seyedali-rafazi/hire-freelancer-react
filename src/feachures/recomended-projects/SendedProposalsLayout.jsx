import React from "react";
import SidebarPages from "../../ui/SidebarPages";
import OptionsSidebar from "../../ui/OptionsSidebar";
import Loading from "../../ui/Loading";

import useProposals from "../proposals/useProposals";
import ProposalsCards from "./ProposalsCards";
import ProposalOptionSidebar from "../../ui/ProposalOptionSidebar";

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

function SendedProposalsLayout() {
  const { proposals, isLoading } = useProposals();

  if (isLoading) return <Loading />;
  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 gap-6 max-w-2lg lg:max-w-screen-xl lg:grid-cols-10">
        <div className="h-20 lg:col-span-2 ">
          <SidebarPages />
        </div>
        <div className="lg:col-span-5 flex flex-col gap-4">
          <ProposalsCards proposals={proposals} />
        </div>
        <div className="hidden md:block md:h-64  lg:col-span-3 ">
          <ProposalOptionSidebar />
        </div>
      </div>
    </div>
  );
}

export default SendedProposalsLayout;
