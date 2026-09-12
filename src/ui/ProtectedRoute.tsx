"use client";
import { useEffect } from "react";
import useAuthorize from "../feachures/authentication/useAuthorize";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
import toast from "react-hot-toast";
import type { ChildrenProps } from "../types";

function ProtectedRoute({ children }: ChildrenProps) {
  const router = useRouter();
  const { isAuthenticated, isLoading, isAuthorized, isVerified } =
    useAuthorize();

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated) {
      router.push("/auth");
      return;
    }
    if (!isVerified) {
      toast.error("پروفایل شما در انتظار تایید است.");
      router.push("/");
      return;
    }
    if (!isAuthorized) {
      toast.error("شما به این بخش دسترسی ندارید.");
      router.push("/");
    }
  }, [isAuthenticated, isAuthorized, isLoading, router, isVerified]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-secondery-100">
        <Loading />
      </div>
    );
  }

  if (isAuthenticated && isAuthorized && isVerified) return <>{children}</>;
  return null;
}

export default ProtectedRoute;
