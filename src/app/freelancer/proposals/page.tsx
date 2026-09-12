import type { Metadata } from "next";
import Proposals from "@/pages/Proposals";

export const metadata: Metadata = {
  title: "درخواست‌ها و پیشنهادات | پنل فریلنسر",
  description: "مشاهده و مدیریت وضعیت پروپوزال‌ها و درخواست‌های ثبت‌شده.",
};

export default function FreelancerProposalsPage() {
  return <Proposals />;
}
