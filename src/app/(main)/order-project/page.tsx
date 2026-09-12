import type { Metadata } from "next";
import RegisterOrder from "@/pages/RegisterOrder";

export const metadata: Metadata = {
  title: "ثبت پروژه جدید | تخصص سازان",
  description: "پروژه جدید خود را ثبت کنید تا فریلنسرهای ماهر پیشنهاد ارسال کنند.",
};

export default function OrderProjectPage() {
  return <RegisterOrder />;
}
