import type { Metadata } from "next";
import CompleteProfile from "@/pages/CompleteProfile";

export const metadata: Metadata = {
  title: "تکمیل اطلاعات کاربری | تخصص سازان",
  description: "اطلاعات حساب کاربری و نقش خود را تکمیل نمایید.",
};

export default function CompleteProfilePage() {
  return <CompleteProfile />;
}
