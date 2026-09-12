import type { Metadata } from "next";
import SubmitedProjects from "@/pages/SubmitedProjects";

export const metadata: Metadata = {
  title: "مدیریت پروژه‌ها | پنل ادمین",
  description: "مشاهده و نظارت بر کلیه پروژه‌های ثبت‌شده در سیستم.",
};

export default function AdminProjectsPage() {
  return <SubmitedProjects />;
}
