"use client";
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mx-auto max-w-md text-center">
        <p className="text-6xl font-black text-primary-200">۴۰۴</p>
        <h1 className="mt-4 text-xl font-bold text-secondery-900">
          صفحه‌ای که به دنبالش بودید، یافت نشد.
        </h1>
        <p className="mt-2 text-secondery-500">
          ممکن است آدرس اشتباه باشد یا صفحه حذف شده باشد.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={moveBack}
            className="btn btn--secondary flex items-center gap-x-2"
          >
            <HiArrowRight />
            <span>برگشت</span>
          </button>
          <Link href="/" className="btn btn--primary">
            صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
