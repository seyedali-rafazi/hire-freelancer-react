import React from "react";
import { useNavigate } from "react-router-dom";

function NotUser() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between items-center gap-3 lg:flex-col border border-secondery-200 rounded-lg shadow-sm overflow-x-scroll lg:overflow-x-hidden px-2 py-5">
      <p>برای استفاده از امکانات سایت وارد شوید.</p>
      <button
        onClick={() => navigate("/auth")}
        className="bg-primary-900 px-3 py-2 rounded-lg text-white font-bold"
      >
        ورود / ثبت نام
      </button>
    </div>
  );
}

export default NotUser;
