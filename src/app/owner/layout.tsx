import type { ReactNode } from "react";
import ProtectedRoute from "@/ui/ProtectedRoute";
import OwnerLayout from "@/feachures/owner/OwnerLayout";

export default function OwnerRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ProtectedRoute>
      <OwnerLayout>{children}</OwnerLayout>
    </ProtectedRoute>
  );
}
