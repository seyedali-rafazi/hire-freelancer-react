import type { Metadata } from "next";
import AdminDashboard from "@/pages/AdminDashboard";

export const metadata: Metadata = {
  title: "داشبورد مدیریت | تخصص سازان",
  description: "داشبورد مدیریت کل پلتفرم، آمار کلی، کاربران و پروژه‌ها.",
};

export default function AdminDashboardPage() {
  return <AdminDashboard />;
}
