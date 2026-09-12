import type { Metadata } from "next";
import RecomendedProjects from "@/pages/RecomendedProjects";

export const metadata: Metadata = {
  title: "پروژه‌ها | تخصص سازان",
  description: "مشاهده تمام پروژه‌های باز و پیشنهادهای شغلی در پلتفرم تخصص سازان.",
};

export default function RecomendedProjectsPage() {
  return <RecomendedProjects />;
}
