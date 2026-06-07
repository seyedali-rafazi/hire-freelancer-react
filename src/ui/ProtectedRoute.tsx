import { useEffect } from "react";
import useAuthorize from "../feachures/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import toast from "react-hot-toast";
import type { ChildrenProps } from "../types";

function ProtectedRoute({ children }: ChildrenProps) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, isAuthorized, isVerified } =
    useAuthorize();

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated) {
      navigate("/auth");
      return;
    }
    if (!isVerified) {
      toast.error("پروفایل شما در انتظار تایید است.");
      navigate("/");
      return;
    }
    if (!isAuthorized) {
      toast.error("شما به این بخش دسترسی ندارید.");
      navigate("/");
    }
  }, [isAuthenticated, isAuthorized, isLoading, navigate, isVerified]);

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
