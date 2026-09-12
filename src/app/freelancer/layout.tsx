import type { ReactNode } from "react";
import ProtectedRoute from "@/ui/ProtectedRoute";
import FreelancerLauout from "@/feachures/freelancer/FreelancerLauout";

export default function FreelancerRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ProtectedRoute>
      <FreelancerLauout>{children}</FreelancerLauout>
    </ProtectedRoute>
  );
}
