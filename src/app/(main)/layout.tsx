import type { ReactNode } from "react";
import MainLayout from "@/ui/MainLayout";

export default function PublicMainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
