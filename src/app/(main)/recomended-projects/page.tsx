import type { Metadata } from "next";
import RecomendedProjects from "@/pages/RecomendedProjects";

export const metadata: Metadata = {
  title: "فرصت‌های شغلی و کاریابی روی نقشه ایران | کاریار",
  description:
    "مشاهده آنلاین آگهی‌های استخدامی و فرصت‌های شغلی در سراسر شهرهای ایران روی نقشه تعاملی با MapLibre و Deck.gl.",
};

export default function RecomendedProjectsPage() {
  return <RecomendedProjects />;
}
