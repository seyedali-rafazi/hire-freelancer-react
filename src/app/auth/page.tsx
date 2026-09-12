import type { Metadata } from "next";
import Auth from "@/pages/Auth";

export const metadata: Metadata = {
  title: "ورود / ثبت‌نام | تخصص سازان",
  description: "ورود به حساب کاربری یا ثبت‌نام در پلتفرم تخصص سازان.",
};

export default function AuthPage() {
  return <Auth />;
}
