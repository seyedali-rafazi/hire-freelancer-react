import type { Metadata } from "next";
import NotFound from "@/pages/NotFound";

export const metadata: Metadata = {
  title: "صفحه یافت نشد | تخصص سازان",
  description: "صفحه‌ای که به دنبال آن بودید یافت نشد.",
};

export default function NotFoundPage() {
  return <NotFound />;
}
