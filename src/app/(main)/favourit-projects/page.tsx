import type { Metadata } from "next";
import FavouritProjects from "@/pages/FavouritProjects";

export const metadata: Metadata = {
  title: "پروژه‌های نشان‌شده | تخصص سازان",
  description: "لیست پروژه‌های نشان‌شده و مورد علاقه شما در تخصص سازان.",
};

export default function FavouritProjectsPage() {
  return <FavouritProjects />;
}
