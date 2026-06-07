import {
  HiCollection,
  HiHeart,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Loading from "../../ui/Loading";
import Stats from "./Stats";
import useProposals from "../proposals/useProposals";
import DashboardHeader from "../../ui/DashboardHeader";
import DashboardQuickActions from "../../ui/DashboardQuickActions";

function DashboardLayout() {
  const { isLoading, proposals = [] } = useProposals();

  if (isLoading) return <Loading />;

  const actions = [
    {
      path: "/recomended-projects",
      label: "جستجوی پروژه",
      desc: "پروژه‌های جدید را ببینید",
      icon: HiOutlineViewGrid,
    },
    {
      path: "/sended-proposals",
      label: "درخواست‌های من",
      desc: "وضعیت پیشنهادها را بررسی کنید",
      icon: HiCollection,
    },
    {
      path: "/favourit-projects",
      label: "علاقه‌مندی‌ها",
      desc: "پروژه‌های ذخیره شده",
      icon: HiHeart,
    },
  ];

  return (
    <div className="space-y-2">
      <DashboardHeader role="FREELANCER" />
      <Stats proposals={proposals} />
      <DashboardQuickActions actions={actions} />
    </div>
  );
}

export default DashboardLayout;
