import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ projects = [], proposals = [] }) {
  const numOfProjects = projects.length;
  const numOfClosedProjects = projects.filter(
    (p) => p.status === "CLOSED"
  ).length;
  const numOfOpenProjects = projects.filter((p) => p.status === "OPEN").length;
  const numOfProposals = proposals.length;
  const pendingProposals = proposals.filter((p) => p.status === 1).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Stat
        color="primary"
        title="کل پروژه‌ها"
        value={numOfProjects}
        subtitle={`${numOfOpenProjects} پروژه فعال`}
        icon={<HiOutlineViewGrid className="w-8 h-8" />}
      />
      <Stat
        color="green"
        title="پروژه‌های واگذار شده"
        value={numOfClosedProjects}
        subtitle="پروژه‌های بسته شده"
        icon={<HiCurrencyDollar className="w-8 h-8" />}
      />
      <Stat
        color="yellow"
        title="درخواست‌های دریافتی"
        value={numOfProposals}
        subtitle={`${pendingProposals} در انتظار بررسی`}
        icon={<HiCollection className="w-8 h-8" />}
      />
    </div>
  );
}

export default Stats;
