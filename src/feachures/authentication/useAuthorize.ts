"use client";
import { usePathname } from "next/navigation";
import useUser from "./useUser";
import type { UserRole } from "../../types";

const ROLES: Record<string, UserRole> = {
  admin: "ADMIN",
  freelancer: "FREELANCER",
  owner: "OWNER",
};

export default function useAuthorize() {
  const { isLoading, user } = useUser();
  const pathname = usePathname() || "";

  const isAuthenticated = Boolean(user);
  const isVerified = user ? Number(user.status) === 2 : false;

  const desiredRole = pathname.split("/").at(1) ?? "";
  const isAuthorized =
    Object.keys(ROLES).includes(desiredRole) &&
    user?.role === ROLES[desiredRole];

  return { isAuthenticated, isAuthorized, isLoading, user, isVerified };
}
