"use client";
import Link from "next/link";
import {
  HiCommandLine,
  HiPaintBrush,
  HiDevicePhoneMobile,
  HiMegaphone,
  HiCpuChip,
  HiDocumentText,
  HiVideoCamera,
  HiChartBar,
  HiArrowLeft,
} from "react-icons/hi2";

const CATEGORIES = [
  {
    title: "برنامه‌نویسی و وب",
    englishTitle: "programming",
    description: "Next.js، React، پایتون، جنگو، وردپرس، لاراول",
    projectsCount: "۱۴۵ پروژه فعال",
    icon: HiCommandLine,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/50",
    border: "border-blue-100 dark:border-blue-900/40",
  },
  {
    title: "طراحی و گرافیک",
    englishTitle: "graphic",
    description: "UI/UX، فیگما، هویت بصری، طراحی لوگو، بنر تبلیغاتی",
    projectsCount: "۸۸ پروژه فعال",
    icon: HiPaintBrush,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-950/50",
    border: "border-purple-100 dark:border-purple-900/40",
  },
  {
    title: "اپلیکیشن موبایل",
    englishTitle: "mobile",
    description: "فلاتر (Flutter)، اندروید، React Native، iOS",
    projectsCount: "۵۲ پروژه فعال",
    icon: HiDevicePhoneMobile,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/50",
    border: "border-emerald-100 dark:border-emerald-900/40",
  },
  {
    title: "سئو و دیجیتال مارکتینگ",
    englishTitle: "seo-marketing",
    description: "بهینه‌سازی سئو، تبلیغات گوگل، سوشال مدیا، ایمیل مارکتینگ",
    projectsCount: "۶۳ پروژه فعال",
    icon: HiMegaphone,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/50",
    border: "border-amber-100 dark:border-amber-900/40",
  },
  {
    title: "هوش مصنوعی و داده",
    englishTitle: "ai-data",
    description: "یادگیری ماشین، ChatGPT API، تحلیل داده، پایتون",
    projectsCount: "۳۷ پروژه فعال",
    icon: HiCpuChip,
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/50",
    border: "border-rose-100 dark:border-rose-900/40",
  },
  {
    title: "تولید محتوا و ترجمه",
    englishTitle: "content",
    description: "تولید مقاله سئو، کپی‌رایتینگ، ترجمه تخصصی انگلیسی",
    projectsCount: "۴۱ پروژه فعال",
    icon: HiDocumentText,
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-950/50",
    border: "border-cyan-100 dark:border-cyan-900/40",
  },
  {
    title: "تدوین ویدیو و صدا",
    englishTitle: "video-audio",
    description: "پریمیر، افتر افکت، موشن گرافیک، پادکست، صداگذاری",
    projectsCount: "۲۹ پروژه فعال",
    icon: HiVideoCamera,
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-950/50",
    border: "border-indigo-100 dark:border-indigo-900/40",
  },
  {
    title: "مشاوره و استراتژی",
    englishTitle: "consulting",
    description: "مدیریت محصول، بازاریابی، امور مالی و رشد استارتاپ",
    projectsCount: "۲۱ پروژه فعال",
    icon: HiChartBar,
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-950/50",
    border: "border-teal-100 dark:border-teal-900/40",
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-20 bg-secondery-0">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="text-right space-y-2">
            <span className="text-sm font-black text-primary-700 dark:text-primary-400 uppercase tracking-wider">
              دسته‌بندی‌های برتر
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondery-900">
              در چه زمینه‌ای نیاز به متخصص دارید؟
            </h2>
            <p className="text-secondery-500 text-sm sm:text-base">
              هزاران متخصص آماده به کار در محبوب‌ترین دسته‌بندی‌های فناوری و خلاقانه
            </p>
          </div>

          <Link
            href="/recomended-projects"
            className="flex items-center gap-2 text-sm font-bold text-primary-700 dark:text-primary-400 hover:text-primary-900 transition-colors shrink-0"
          >
            <span>مشاهده همه دسته‌ها</span>
            <HiArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.title}
                href={`/recomended-projects?search=${encodeURIComponent(cat.title.split(" ")[0])}`}
                className="group landing-card p-6 flex flex-col justify-between text-right"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border ${cat.bg} ${cat.border} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-6 h-6 ${cat.color}`} />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondery-100 dark:bg-secondery-800 text-secondery-600 dark:text-secondery-300">
                      {cat.projectsCount}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-secondery-900 group-hover:text-primary-700 transition-colors mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-secondery-500 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-secondery-100 dark:border-secondery-800 flex items-center justify-between text-xs font-bold text-primary-700 dark:text-primary-400 group-hover:translate-x-[-4px] transition-transform">
                  <span>مشاهده پروژه‌ها</span>
                  <HiArrowLeft className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
