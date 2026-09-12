import type { Metadata } from "next";
import Projects from "@/pages/Projects";

export const metadata: Metadata = {
  title: "پروژه‌های من | پنل کارفرما",
  description: "مدیریت و مشاهده وضعیت پروژه‌های ثبت‌شده توسط کارفرما.",
};

export default function OwnerProjectsPage() {
  return <Projects />;
}
