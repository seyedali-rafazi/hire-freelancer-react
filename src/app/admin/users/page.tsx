import type { Metadata } from "next";
import Users from "@/ui/Users";

export const metadata: Metadata = {
  title: "مدیریت کاربران | پنل ادمین",
  description: "مشاهده، بررسی و تغییر وضعیت کاربران سیستم در پنل ادمین.",
};

export default function AdminUsersPage() {
  return <Users />;
}
