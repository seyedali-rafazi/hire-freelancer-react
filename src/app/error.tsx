"use client";
import { useEffect } from "react";
import { HiExclamationTriangle, HiArrowPath } from "react-icons/hi2";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="glass-card rounded-2xl p-8 max-w-md w-full text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
          <HiExclamationTriangle className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-secondery-900">
          خطایی رخ داده است
        </h2>
        <p className="text-sm text-secondery-500">
          متأسفانه در بارگذاری این بخش مشکلی پیش آمد. لطفاً دوباره تلاش کنید.
        </p>
        <button
          onClick={() => reset()}
          className="btn btn--primary flex items-center justify-center gap-2 w-full !py-3"
        >
          <HiArrowPath className="w-5 h-5" />
          <span>تلاش مجدد</span>
        </button>
      </div>
    </div>
  );
}
