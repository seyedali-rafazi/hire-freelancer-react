"use client";
import {
  HiBriefcase,
  HiUserGroup,
  HiCurrencyDollar,
  HiClock,
} from "react-icons/hi2";

const STATS = [
  {
    id: 1,
    icon: HiBriefcase,
    value: "۴,۸۵۰+",
    label: "پروژه موفق تکمیل‌شده",
    description: "در بیش از ۳۰ حوزه تخصصی مختلف",
    accentColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/40",
    borderColor: "border-blue-200 dark:border-blue-900/50",
  },
  {
    id: 2,
    icon: HiUserGroup,
    value: "۱۲,۴۰۰+",
    label: "فریلنسر ارزیابی‌شده",
    description: "با نمونه‌کارهای تایید صلاحیت شده",
    accentColor: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-950/40",
    borderColor: "border-purple-200 dark:border-purple-900/50",
  },
  {
    id: 3,
    icon: HiCurrencyDollar,
    value: "۱۰+ میلیارد",
    label: "گردش مالی امن (تومان)",
    description: "پرداخت تضمینی با صندوق امانی",
    accentColor: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/40",
    borderColor: "border-emerald-200 dark:border-emerald-900/50",
  },
  {
    id: 4,
    icon: HiClock,
    value: "۱۵ دقیقه",
    label: "میانگین اولین پیشنهاد",
    description: "سرعت بالا در بررسی نیازمندی‌ها",
    accentColor: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-950/40",
    borderColor: "border-amber-200 dark:border-amber-900/50",
  },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-secondery-50 dark:bg-secondery-900/40 border-b border-secondery-100 dark:border-secondery-800/40">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center gap-4 p-5 rounded-2xl bg-secondery-0 border border-secondery-200 dark:border-secondery-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${item.bgColor} ${item.borderColor}`}
                >
                  <Icon className={`w-7 h-7 ${item.accentColor}`} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-secondery-900 tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-sm font-bold text-secondery-700 dark:text-secondery-200">
                    {item.label}
                  </div>
                  <div className="text-xs text-secondery-400 mt-0.5">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
