"use client";
import Link from "next/link";
import {
  HiSparkles,
  HiBriefcase,
  HiArrowLeft,
  HiShieldCheck,
  HiClock,
} from "react-icons/hi2";
import type { User } from "../../types";

interface CtaSectionProps {
  user?: User | null;
}

export default function CtaSection({ user }: CtaSectionProps) {
  return (
    <section className="py-20 bg-secondery-50 dark:bg-secondery-950">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 text-center bg-gradient-to-r from-primary-900 via-primary-800 to-indigo-900 text-white shadow-2xl">
          {/* Subtle background circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-primary-200">
              <HiSparkles className="w-4 h-4 text-amber-300" />
              <span>پیوستن به بیش از ۱۲,۰۰۰ کاربر راضی تخصص‌سازان</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight text-white">
              آماده‌اید پروژه بعدی‌تان را{" "}
              <br className="hidden sm:inline" />
              با بالاترین کیفیت شروع کنید؟
            </h2>

            <p className="text-sm sm:text-lg text-primary-100 leading-relaxed max-w-2xl mx-auto">
              چه کارفرما باشید و نیاز به استخدام فریلنسر ارزیابی‌شده داشته باشید، چه متخصص باشید و به دنبال کسب درآمد پایدار بگردید؛ همین حالا شروع کنید.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/order-project"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-primary-900 font-black hover:bg-primary-50 transition-all flex items-center justify-center gap-2 text-base shadow-xl hover:scale-105"
              >
                <HiBriefcase className="w-5 h-5 text-primary-700" />
                <span>ثبت رایگان پروژه در ۲ دقیقه</span>
              </Link>

              <Link
                href="/recomended-projects"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black transition-all flex items-center justify-center gap-2 text-base"
              >
                <span>مشاهده فرصت‌های همکاری</span>
                <HiArrowLeft className="w-4 h-4" />
              </Link>
            </div>

            {/* Badges */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-primary-200 border-t border-white/15">
              <div className="flex items-center gap-2">
                <HiShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>۱۰۰٪ پرداخت امن در صندوق امانی</span>
              </div>
              <div className="flex items-center gap-2">
                <HiClock className="w-4 h-4 text-amber-300" />
                <span>شروع فوری بدون فرآیندهای اداری</span>
              </div>
              {!user && (
                <Link
                  href="/auth"
                  className="underline hover:text-white transition-colors"
                >
                  ورود دمو با یک کلیک
                </Link>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
