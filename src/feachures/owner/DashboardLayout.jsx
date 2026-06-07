import {
  HiCollection,
  HiPlusCircle,
} from "react-icons/hi";
import Stats from "./Stats";
import useOwnerProjects from "../projects/useOwnerProjects";
import useProposals from "../proposals/useProposals";
import Loading from "../../ui/Loading";
import DashboardHeader from "../../ui/DashboardHeader";
import DashboardQuickActions from "../../ui/DashboardQuickActions";

function DashboardLayout() {
  const { isLoading: loadingProjects, projects = [] } = useOwnerProjects();
  const { isLoading: loadingProposals, proposals = [] } = useProposals();

  if (loadingProjects || loadingProposals) {
    return <Loading />;
  }

  const actions = [
    {
      path: "/order-project",
      label: "ثبت پروژه جدید",
      desc: "پروژه جدید ایجاد کنید",
      icon: HiPlusCircle,
    },
    {
      path: "/owner/projects",
      label: "مدیریت پروژه‌ها",
      desc: "ویرایش و حذف پروژه‌ها",
      icon: HiCollection,
    },
    {
      path: "/sended-proposals",
      label: "مشاهده درخواست‌ها",
      desc: "بررسی پیشنهادهای فریلنسرها",
      icon: HiCollection,
    },
  ];

  return (
    <div className="space-y-2">
      <DashboardHeader role="OWNER" />
      <Stats projects={projects} proposals={proposals} />
      <DashboardQuickActions actions={actions} />
    </div>
  );
}

export default DashboardLayout;
