import {
  HiCollection,
  HiOutlineViewGrid,
  HiUser,
} from "react-icons/hi";
import useProposals from "../proposals/useProposals";
import Loading from "../../ui/Loading";
import DashboardHeader from "../../ui/DashboardHeader";
import useAllProjects from "../../hooks/useAllProjects";
import useUsers from "./useUsers";
import Stats from "./Stats";
import DashboardQuickActions from "../../ui/DashboardQuickActions";

function DashboardLayout() {
  const { isLoading: isLoadingProposal, proposals = [] } = useProposals();
  const { isLoading: isLoadingProject, projects = [] } = useAllProjects();
  const { isLoading: isLoadingUsers, users = [] } = useUsers();

  if (isLoadingProposal || isLoadingProject || isLoadingUsers) {
    return <Loading />;
  }

  const actions = [
    {
      path: "/admin/users",
      label: "مدیریت کاربران",
      desc: "تایید و رد کاربران",
      icon: HiUser,
    },
    {
      path: "/admin/projects",
      label: "همه پروژه‌ها",
      desc: "مشاهده پروژه‌های ثبت شده",
      icon: HiCollection,
    },
    {
      path: "/admin/proposals",
      label: "همه درخواست‌ها",
      desc: "بررسی پیشنهادهای فریلنسرها",
      icon: HiOutlineViewGrid,
    },
  ];

  return (
    <div className="space-y-2">
      <DashboardHeader role="ADMIN" />
      <Stats proposals={proposals} projects={projects} users={users} />
      <DashboardQuickActions actions={actions} />
    </div>
  );
}

export default DashboardLayout;
