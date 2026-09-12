import type { Metadata } from "next";
import Project from "@/pages/Project";

export const metadata: Metadata = {
  title: "جزئیات پروژه | پنل کارفرما",
  description: "مشاهده جزئیات پروژه و لیست پیشنهادات ارسال شده توسط فریلنسرها.",
};

export default function OwnerProjectDetailPage() {
  return <Project />;
}
