import type { ReactNode } from "react";
import ProtectedRoute from "@/ui/ProtectedRoute";
import AdminLayout from "@/feachures/admin/AdminLayout";

export default function AdminRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ProtectedRoute>
      <AdminLayout>{children}</AdminLayout>
    </ProtectedRoute>
  );
}
