"use client";
import { useState } from "react";
import Link from "next/link";
import {
  HiDocumentPlus,
  HiChatBubbleLeftRight,
  HiShieldCheck,
  HiCheckCircle,
  HiUserPlus,
  HiMagnifyingGlass,
  HiCommandLine,
  HiCurrencyDollar,
  HiArrowLeft,
} from "react-icons/hi2";

export default function HowItWorksSection() {
  const [activeRole, setActiveRole] = useState<"owner" | "freelancer">("owner");

  const ownerSteps = [
    {
      step: "۰۱",
      title: "ثبت رایگان پروژه",
      description: "عنوان، توضیحات نیازمندی‌ها، بودجه تقریبی و مهلت تحویل را در ۲ دقیقه ثبت کنید.",
      icon: HiDocumentPlus,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/50",
    },
    {
      step: "۰۲",
      title: "دریافت و بررسی پیشنهادها",
      description: "فریلنسرهای متخصص پیشنهاد و زمان‌بندی خود را ارسال می‌کنند؛ رزومه‌ها را مقایسه کنید.",
      icon: HiChatBubbleLeftRight,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-950/50",
    },
    {
      step: "۰۳",
      title: "ودیعه امن در صندوق امانی",
      description: "مبلغ توافق‌شده در صندوق امن تخصص‌سازان نگهداری می‌شود و تا رضایت شما پرداخت نمی‌شود.",
      icon: HiShieldCheck,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-950/50",
    },
    {
      step: "۰۴",
      title: "تحویل کار و تسویه نهایی",
      description: "فایل‌ها و خروجی پروژه را بررسی کنید و با تایید کیفیت نهایی، دستمزد به فریلنسر آزاد می‌شود.",
      icon: HiCheckCircle,
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-950/50",
    },
  ];

  const freelancerSteps = [
    {
      step: "۰۱",
      title: "ایجاد حساب و معرفی مهارت‌ها",
      description: "پروفایل حرفه‌ای خود را بسازید، نمونه‌کارها را بارگذاری کرده و تخصص‌های خود را مشخص کنید.",
      icon: HiUserPlus,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/50",
    },
    {
      step: "۰۲",
      title: "جستجو و ارسال پیشنهاد هوشمند",
      description: "پروژه‌های متناسب با تخصص خود را پیدا کرده و با قیمت و زمان مناسب پیشنهاد ثبت کنید.",
      icon: HiMagnifyingGlass,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-950/50",
    },
    {
      step: "۰۳",
      title: "انجام پروژه با امنیت مالی کامل",
      description: "پس از شارژ صندوق امانی توسط کارفرما، با اطمینان ۱۰۰٪ از پرداخت، کار را اجرا کنید.",
      icon: HiCommandLine,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-950/50",
    },
    {
      step: "۰۴",
      title: "تحویل سفارش و دریافت تضمینی وجه",
      description: "پس از تایید کار توسط کارفرما، وجه به صورت فوری و با کمترین کارمزد به حسابتان واریز می‌شود.",
      icon: HiCurrencyDollar,
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-950/50",
    },
  ];

  const currentSteps = activeRole === "owner" ? ownerSteps : freelancerSteps;

  return (
    <section id="how-it-works" className="py-20 bg-secondery-50/70 dark:bg-secondery-900/40 border-y border-secondery-200/70 dark:border-secondery-800/40">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-sm font-black text-primary-700 dark:text-primary-400 uppercase tracking-wider">
            مسیر ساده و شفاف همکاری
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondery-900">
            تخصص‌سازان چگونه کار می‌کند؟
          </h2>
          <p className="text-secondery-500 text-sm sm:text-base">
            فرآیندی شفاف، مطمئن و استاندارد در ۴ مرحله ساده برای هر دو سوی همکاری
          </p>

          {/* Role Switcher Pill */}
          <div className="inline-flex p-1.5 rounded-2xl bg-secondery-0 border border-secondery-200 dark:border-secondery-700 shadow-sm mt-4">
            <button
              onClick={() => setActiveRole("owner")}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeRole === "owner"
                  ? "bg-primary-900 text-white shadow-md shadow-primary-900/20"
                  : "text-secondery-600 dark:text-secondery-400 hover:text-secondery-900"
              }`}
            >
              برای کارفرمایان
            </button>
            <button
              onClick={() => setActiveRole("freelancer")}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeRole === "freelancer"
                  ? "bg-primary-900 text-white shadow-md shadow-primary-900/20"
                  : "text-secondery-600 dark:text-secondery-400 hover:text-secondery-900"
              }`}
            >
              برای فریلنسرها
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mt-12">
          {currentSteps.map((stepItem, index) => {
            const Icon = stepItem.icon;
            return (
              <div
                key={stepItem.title}
                className="landing-card p-6 flex flex-col justify-between text-right relative group"
              >
                <div>
                  {/* Step number badge & icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stepItem.bg} group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-6 h-6 ${stepItem.color}`} />
                    </div>
                    <span className="text-2xl font-black text-secondery-300 dark:text-secondery-700">
                      {stepItem.step}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-secondery-900 mb-2">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-secondery-500 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-secondery-100 dark:border-secondery-800 flex items-center gap-1.5 text-xs font-semibold text-primary-700 dark:text-primary-400">
                  <span>مرحله {index + 1} از ۴</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic CTA based on active role */}
        <div className="mt-12 text-center">
          {activeRole === "owner" ? (
            <Link
              href="/order-project"
              className="inline-flex items-center gap-2 btn btn--primary !py-3.5 !px-8 text-base font-bold shadow-lg shadow-primary-900/20 hover:scale-105 transition-transform"
            >
              <span>همین حالا پروژه خود را ثبت کنید (رایگان)</span>
              <HiArrowLeft className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              href="/recomended-projects"
              className="inline-flex items-center gap-2 btn btn--primary !py-3.5 !px-8 text-base font-bold shadow-lg shadow-primary-900/20 hover:scale-105 transition-transform"
            >
              <span>پروژه‌ها را ببینید و پیشنهاد ارسال کنید</span>
              <HiArrowLeft className="w-4 h-4" />
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}
