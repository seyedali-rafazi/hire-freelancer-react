import type { Metadata } from "next";
import Proposals from "@/pages/Proposals";

export const metadata: Metadata = {
  title: "مدیریت پروپوزال‌ها | پنل ادمین",
  description: "مشاهده و بررسی تمام پروپوزال‌ها و پیشنهادهای ارسال شده در سیستم.",
};

export default function AdminProposalsPage() {
  return <Proposals />;
}
