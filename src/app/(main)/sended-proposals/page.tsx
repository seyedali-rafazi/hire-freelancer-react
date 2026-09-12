import type { Metadata } from "next";
import SendedProposals from "@/pages/SendedProposals";

export const metadata: Metadata = {
  title: "درخواست‌های ارسال شده | تخصص سازان",
  description: "مشاهده وضعیت درخواست‌ها و پیشنهادات ارسال شده شما در تخصص سازان.",
};

export default function SendedProposalsPage() {
  return <SendedProposals />;
}
