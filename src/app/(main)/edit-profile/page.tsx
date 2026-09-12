import type { Metadata } from "next";
import EditProfile from "@/feachures/authentication/EditProfile";

export const metadata: Metadata = {
  title: "ویرایش پروفایل | تخصص سازان",
  description: "ویرایش اطلاعات کاربری و مشخصات فردی در تخصص سازان.",
};

export default function EditProfilePage() {
  return <EditProfile />;
}
