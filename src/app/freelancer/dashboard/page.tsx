import type { Metadata } from "next";
import FreelancerDashboard from "@/pages/FreelancerDashboard";

export const metadata: Metadata = {
  title: "داشبورد فریلنسر | تخصص سازان",
  description: "داشبورد مدیریت پروژه‌ها، پیشنهادات و درآمد فریلنسر در تخصص سازان.",
};

export default function FreelancerDashboardPage() {
  return <FreelancerDashboard />;
}
