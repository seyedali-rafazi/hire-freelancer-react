"use client";
import Link from "next/link";
import {
  HiStar,
  HiCheckBadge,
  HiArrowLeft,
  HiBriefcase,
  HiPaperAirplane,
} from "react-icons/hi2";

const FREELANCERS = [
  {
    id: 1,
    name: "سارا رفیعی",
    title: "توسعه‌دهنده ارشد فرانت‌اند و Next.js",
    avatar: "/user.jpg",
    rating: "۴.۹",
    reviewsCount: 38,
    completedJobs: "۴۲ پروژه",
    rate: "از ۴۰۰,۰۰۰ تومان / ساعت",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    isAvailable: true,
  },
  {
    id: 2,
    name: "علی کارفرما",
    title: "طراح ارشد محصول و رابط کاربری (UI/UX)",
    avatar: "/Login-photo.webp",
    rating: "۵.۰",
    reviewsCount: 29,
    completedJobs: "۳۱ پروژه",
    rate: "از ۳۵۰,۰۰۰ تومان / ساعت",
    tags: ["Figma", "Design System", "Mobile App", "Branding"],
    isAvailable: true,
  },
  {
    id: 3,
    name: "رضا محمدی",
    title: "برنامه‌نویس بک‌اند و معماری مایکروسرویس",
    avatar: "/check-otp.webp",
    rating: "۴.۸",
    reviewsCount: 24,
    completedJobs: "۲۷ پروژه",
    rate: "از ۵۰۰,۰۰۰ تومان / ساعت",
    tags: ["Python", "Django", "PostgreSQL", "Docker"],
    isAvailable: false,
  },
  {
    id: 4,
    name: "مینا احمدی",
    title: "متخصص ارشد سئو تکنیکال و رشد ترافیک",
    avatar: "/default-project-photo.jpg",
    rating: "۴.۹",
    reviewsCount: 45,
    completedJobs: "۵۱ پروژه",
    rate: "از ۳۰۰,۰۰۰ تومان / ساعت",
    tags: ["SEO", "Google Search Console", "Content Strategy"],
    isAvailable: true,
  },
];

export default function TopFreelancersSection() {
  return (
    <section className="py-20 bg-secondery-0">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="text-right space-y-2">
            <span className="text-sm font-black text-primary-700 dark:text-primary-400 uppercase tracking-wider">
              نخبگان تخصص‌سازان
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondery-900">
              با برترین متخصصان و فریلنسرهای هفته آشنا شوید
            </h2>
            <p className="text-secondery-500 text-sm sm:text-base">
              تمامی متخصصان از نظر رزومه، نمونه‌کار و اخلاق حرفه‌ای توسط پلتفرم تایید صلاحیت شده‌اند.
            </p>
          </div>

          <Link
            href="/order-project"
            className="flex items-center gap-2 text-sm font-bold text-primary-700 dark:text-primary-400 hover:text-primary-900 transition-colors shrink-0"
          >
            <span>دعوت مستقیم به پروژه</span>
            <HiArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Freelancer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FREELANCERS.map((freelancer) => (
            <div
              key={freelancer.id}
              className="landing-card p-6 flex flex-col justify-between text-right relative group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between mb-4">
                  <div className="relative">
                    <img
                      src={freelancer.avatar}
                      alt={freelancer.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-primary-200 dark:border-primary-800"
                    />
                    {freelancer.isAvailable && (
                      <span
                        title="آماده دریافت پروژه جدید"
                        className="absolute -bottom-1 -right-1 pulse-dot"
                      />
                    )}
                  </div>

                  <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-lg text-xs font-bold">
                    <HiStar className="w-3.5 h-3.5 fill-current" />
                    <span>{freelancer.rating}</span>
                    <span className="text-secondery-400 font-normal">({freelancer.reviewsCount})</span>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="flex items-center gap-1 mb-1">
                  <h3 className="font-bold text-base text-secondery-900 group-hover:text-primary-700 transition-colors">
                    {freelancer.name}
                  </h3>
                  <HiCheckBadge className="w-4 h-4 text-primary-600 shrink-0" title="احراز هویت شده" />
                </div>

                <p className="text-xs text-secondery-500 font-medium mb-4 min-h-[32px] line-clamp-2">
                  {freelancer.title}
                </p>

                {/* Stats */}
                <div className="bg-secondery-50 dark:bg-secondery-800/60 rounded-xl p-2.5 mb-4 grid grid-cols-2 gap-2 text-center text-xs">
                  <div>
                    <span className="block text-secondery-400 text-[11px]">سابقه انجام</span>
                    <span className="font-bold text-secondery-800 dark:text-secondery-200">{freelancer.completedJobs}</span>
                  </div>
                  <div className="border-r border-secondery-200 dark:border-secondery-700">
                    <span className="block text-secondery-400 text-[11px]">وضعیت</span>
                    <span className={`font-bold ${freelancer.isAvailable ? "text-emerald-600" : "text-secondery-500"}`}>
                      {freelancer.isAvailable ? "در دسترس" : "مشغول کار"}
                    </span>
                  </div>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {freelancer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 px-2 py-0.5 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-secondery-100 dark:border-secondery-800">
                <Link
                  href="/order-project"
                  className="w-full py-2.5 px-3 rounded-xl border border-primary-200 dark:border-primary-800 hover:bg-primary-900 hover:text-white hover:border-primary-900 text-primary-700 dark:text-primary-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-300"
                >
                  <HiPaperAirplane className="w-3.5 h-3.5" />
                  <span>دعوت به پروژه</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
