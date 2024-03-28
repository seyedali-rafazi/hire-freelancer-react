import React from "react";
import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter((p) => p.status === 2).length;
  const numOfProposal = projects.reduce(
    (acc, cur) => cur.proposals.length + acc,
    0
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-8 gap-y-8">
      <Stat
        color="primary"
        title="پروژه ها"
        value={numOfProjects}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="پروژه های واگذار شده"
        value={numOfAcceptedProjects}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
      <Stat
        color="yellow"
        title="درخواست ها"
        value={numOfProposal}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
