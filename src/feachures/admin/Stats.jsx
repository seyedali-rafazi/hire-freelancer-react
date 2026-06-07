import Stat from "../../ui/Stat";
import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";

function Stats({ proposals = [], users = [], projects = [] }) {
  const pendingUsers = users.filter((u) => u.status === 1).length;
  const openProjects = projects.filter((p) => p.status === "OPEN").length;
  const pendingProposals = proposals.filter((p) => p.status === 1).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Stat
        color="violet"
        title="کاربران"
        value={users.length}
        subtitle={`${pendingUsers} در انتظار تایید`}
        icon={<HiUser className="w-8 h-8" />}
      />
      <Stat
        color="primary"
        title="درخواست‌ها"
        value={proposals.length}
        subtitle={`${pendingProposals} در انتظار بررسی`}
        icon={<HiOutlineViewGrid className="w-8 h-8" />}
      />
      <Stat
        color="yellow"
        title="پروژه‌ها"
        value={projects.length}
        subtitle={`${openProjects} پروژه فعال`}
        icon={<HiCollection className="w-8 h-8" />}
      />
    </div>
  );
}

export default Stats;
