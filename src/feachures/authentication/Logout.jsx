import React from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

function Logout() {
  const { logout, isPending } = useLogout();
  return (
    <div>
      {isPending ? (
        <Loading />
      ) : (
        <button
          onClick={logout}
          className="flex w-full px-4  gap-3 items-center text-secondery-900 hover:text-white hover:bg-rose-600 py-3 rounded-lg transition-all duration-300  ">
          <HiArrowRightOnRectangle className="w-6 h-6" />
          <span>خروج</span>
        </button>
      )}
    </div>
  );
}

export default Logout;
