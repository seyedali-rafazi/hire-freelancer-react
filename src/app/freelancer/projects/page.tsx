import type { Metadata } from "next";
import SubmitedProjects from "@/pages/SubmitedProjects";

export const metadata: Metadata = {
  title: "پروژه‌های در دسترس | پنل فریلنسر",
  description: "مشاهده و ارسال پیشنهاد برای پروژه‌های ثبت‌شده توسط کارفرمایان.",
};

export default function FreelancerProjectsPage() {
  return <SubmitedProjects />;
}
