"use client";
import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  HiSparkles,
  HiMagnifyingGlass,
  HiShieldCheck,
  HiStar,
  HiBriefcase,
  HiArrowLeft,
  HiCheckBadge,
  HiClock,
  HiCurrencyDollar,
} from "react-icons/hi2";
import type { User } from "../../types";

interface HeroSectionProps {
  user?: User | null;
}

const POPULAR_TAGS = [
  { label: "طراحی سایت", query: "طراحی" },
  { label: "React", query: "React" },
  { label: "طراحی لوگو", query: "لوگو" },
  { label: "سئو و مارکتینگ", query: "سئو" },
  { label: "اپلیکیشن موبایل", query: "موبایل" },
  { label: "هوش مصنوعی", query: "هوش مصنوعی" },
];

export default function HeroSection({ user }: HeroSectionProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/recomended-projects?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      router.push("/recomended-projects");
    }
  };

  const handleTagClick = (tagQuery: string) => {
    router.push(`/recomended-projects?search=${encodeURIComponent(tagQuery)}`);
  };

  return (
    <section className="relative overflow-hidden landing-hero-bg pt-8 pb-16 md:pt-14 md:pb-24 border-b border-secondery-100 dark:border-secondery-800/40">
      {/* Background ambient glow shapes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container xl:max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (7 cols) */}
          <div className="lg:col-span-7 text-right space-y-6">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary-100/80 dark:bg-primary-900/40 border border-primary-200 dark:border-primary-700/50 text-primary-900 dark:text-primary-300 text-xs md:text-sm font-bold animate-fade-in">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
              </span>
              <HiSparkles className="w-4 h-4 text-primary-700 dark:text-primary-400" />
              <span>پلتفرم هوشمند فریلنسری و برون‌سپاری پروژه</span>
              <span className="hidden sm:inline text-secondery-400">•</span>
              <span className="hidden sm:inline font-normal text-secondery-600 dark:text-secondery-400">ضمانت پرداخت امن ۱۰۰٪</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black text-secondery-900 leading-[1.25] tracking-tight">
              برترین متخصصان و فریلنسرها،{" "}
              <br className="hidden sm:block" />
              آماده اجرای{" "}
              <span className="text-gradient relative">
                پروژه‌های شما
                <svg className="absolute -bottom-2 right-0 w-full h-2 text-primary-500/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-secondery-600 dark:text-secondery-300 max-w-2xl leading-relaxed">
              با خیال آسوده پروژه خود را برون‌سپاری کنید؛ پیشنهادهای فریلنسرهای ارزیابی‌شده را مقایسه کنید و تنها پس از رضایت کامل از نتیجه، هزینه را آزاد کنید.
            </p>

            {/* Live Search Bar */}
            <form
              onSubmit={handleSearch}
              className="relative max-w-2xl flex items-center rounded-2xl bg-secondery-0 border-2 border-secondery-200 dark:border-secondery-700 p-1.5 shadow-xl shadow-primary-900/5 hover:border-primary-500 focus-within:border-primary-600 focus-within:ring-4 focus-within:ring-primary-100 dark:focus-within:ring-primary-900/40 transition-all duration-300"
            >
              <div className="pr-3 text-secondery-400">
                <HiMagnifyingGlass className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="دنبال چه پروژه‌ای یا مهارتی می‌گردید؟ (مثلاً طراحی قالب، وردپرس، سئو...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent py-2.5 px-2 text-sm md:text-base text-secondery-800 placeholder:text-secondery-400 focus:outline-none"
              />
              <button
                type="submit"
                className="btn btn--primary !py-2.5 !px-5 whitespace-nowrap text-sm font-bold shrink-0"
              >
                جستجو
              </button>
            </form>

            {/* Popular Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-secondery-500">
              <span className="font-bold text-secondery-700 dark:text-secondery-400">جستجوهای پرطرفدار:</span>
              {POPULAR_TAGS.map((tag) => (
                <button
                  key={tag.label}
                  type="button"
                  onClick={() => handleTagClick(tag.query)}
                  className="px-2.5 py-1 rounded-lg bg-secondery-100 dark:bg-secondery-800/80 hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:text-primary-800 dark:hover:text-primary-300 text-secondery-600 dark:text-secondery-300 transition-colors"
                >
                  #{tag.label}
                </button>
              ))}
            </div>

            {/* Dual CTAs & Quick Info */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href={user?.role === "OWNER" ? "/order-project" : user ? "/recomended-projects" : "/order-project"}
                className="btn btn--primary !py-3.5 !px-6 text-center text-base font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-800/25 hover:scale-[1.02] transition-transform"
              >
                <HiBriefcase className="w-5 h-5" />
                <span>ثبت رایگان پروژه (کارفرما)</span>
              </Link>
              
              <Link
                href="/recomended-projects"
                className="py-3.5 px-6 rounded-xl border-2 border-primary-300 dark:border-primary-700 text-primary-800 dark:text-primary-300 font-bold text-center text-base hover:bg-primary-50 dark:hover:bg-primary-950/40 flex items-center justify-center gap-2 transition-all"
              >
                <span>مشاهده و انجام پروژه‌ها</span>
                <HiArrowLeft className="w-4 h-4" />
              </Link>

              {!user && (
                <Link
                  href="/auth"
                  className="text-xs text-secondery-500 hover:text-primary-700 underline text-center sm:text-right sm:mr-2"
                >
                  تست سریع با ورود دمو
                </Link>
              )}
            </div>

            {/* Mini Trust Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-secondery-200 dark:border-secondery-800/60 max-w-lg">
              <div className="flex items-center gap-2">
                <HiCheckBadge className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold text-secondery-700 dark:text-secondery-300">متخصصان تاییدشده</span>
              </div>
              <div className="flex items-center gap-2">
                <HiShieldCheck className="w-5 h-5 text-primary-600 shrink-0" />
                <span className="text-xs font-semibold text-secondery-700 dark:text-secondery-300">پرداخت امن امانی</span>
              </div>
              <div className="flex items-center gap-2">
                <HiStar className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-xs font-semibold text-secondery-700 dark:text-secondery-300">پشتیبانی و داوری</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            <div className="w-full max-w-md relative space-y-4">

              {/* Card 1: Top Freelancer Card */}
              <div className="landing-card p-5 bg-secondery-0/95 backdrop-blur-md relative z-20 animate-fade-in-up">
                <div className="flex items-center justify-between pb-3 border-b border-secondery-100 dark:border-secondery-800">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src="/user.jpg"
                        alt="سارا فریلنسر"
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary-400"
                      />
                      <span className="absolute bottom-0 right-0 pulse-dot" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-secondery-900 text-sm">سارا رفیعی</h4>
                        <HiCheckBadge className="w-4 h-4 text-primary-600" />
                      </div>
                      <p className="text-xs text-secondery-500">توسعه‌دهنده فول‌استک و React</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-lg text-xs font-bold">
                    <HiStar className="w-3.5 h-3.5 fill-current" />
                    <span>۴.۹</span>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs text-secondery-600 dark:text-secondery-400">
                  <span>۳۴ پروژه با موفقیت ۱۰۰٪</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">در دسترس برای کار جدید</span>
                </div>

                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  <span className="text-[11px] bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 px-2 py-0.5 rounded-md font-medium">
                    Next.js
                  </span>
                  <span className="text-[11px] bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 px-2 py-0.5 rounded-md font-medium">
                    TypeScript
                  </span>
                  <span className="text-[11px] bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 px-2 py-0.5 rounded-md font-medium">
                    Tailwind CSS
                  </span>
                </div>
              </div>

              {/* Card 2: Live Project Card */}
              <div className="landing-card p-5 bg-secondery-0/95 backdrop-blur-md relative z-10 sm:-mr-6 animate-fade-in-up stagger-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    پروژه فعال
                  </span>
                  <span className="text-xs text-secondery-400">۳ ساعت پیش</span>
                </div>

                <h4 className="font-bold text-secondery-900 text-sm mb-2">
                  طراحی پلتفرم فروشگاهی و درگاه بانکی با React
                </h4>

                <div className="flex items-center justify-between text-xs text-secondery-500 pt-2 border-t border-secondery-100 dark:border-secondery-800">
                  <div className="flex items-center gap-1 font-bold text-primary-700 dark:text-primary-400">
                    <HiCurrencyDollar className="w-4 h-4" />
                    <span>۲۵,۰۰۰,۰۰۰ تومان</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HiClock className="w-3.5 h-3.5" />
                    <span>۸ پیشنهاد ثبت شده</span>
                  </div>
                </div>
              </div>

              {/* Floating Escrow Trust Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 z-30 bg-secondery-0 dark:bg-secondery-900 border border-primary-300 dark:border-primary-700 rounded-2xl p-3.5 shadow-2xl flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/60 flex items-center justify-center text-primary-700 dark:text-primary-300 shrink-0">
                  <HiShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-secondery-900">صندوق امن امانی</div>
                  <div className="text-[11px] text-secondery-500">تسویه فقط پس از رضایت ۱۰۰٪</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
