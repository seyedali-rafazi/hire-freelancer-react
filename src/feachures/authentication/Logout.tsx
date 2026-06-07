import React from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useQueryClient } from "@tanstack/react-query";
import { logutApi } from "../../services/authService";
import toast from "react-hot-toast";

function Logout() {
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    await logutApi();
    queryClient.setQueryData(["get-user"], { user: null });
    toast.success("با موفقیت خارج شدید");
    window.location.href = "/";
  };

  return (
    <button
      onClick={handleLogout}
      className="flex w-full px-4 gap-3 items-center text-secondery-900 hover:text-white hover:bg-rose-600 py-3 rounded-lg transition-all duration-300"
    >
      <HiArrowRightOnRectangle className="w-6 h-6" />
      <span>خروج</span>
    </button>
  );
}

export default Logout;
