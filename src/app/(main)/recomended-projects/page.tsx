import type { Metadata } from "next";
import RecomendedProjects from "@/pages/RecomendedProjects";

export const metadata: Metadata = {
  title: "فرصت‌های شغلی و کاریابی روی نقشه جهانی | کاریار",
  description:
    "مشاهده آنلاین آگهی‌های استخدامی و فرصت‌های شغلی در سراسر کشورهای جهان روی نقشه تعاملی با قابلیت فوکوس و تغییر رنگ کشورها.",
};

export default function RecomendedProjectsPage() {
  return <RecomendedProjects />;
}
