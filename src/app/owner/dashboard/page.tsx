import type { Metadata } from "next";
import OwnerDashboard from "@/pages/OwnerDashboard";

export const metadata: Metadata = {
  title: "داشبورد کارفرما | تخصص سازان",
  description: "داشبورد مدیریت پروژه‌ها و آمار کارفرما در تخصص سازان.",
};

export default function OwnerDashboardPage() {
  return <OwnerDashboard />;
}
