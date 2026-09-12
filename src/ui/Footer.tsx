import Link from "next/link";
import {
  HiBriefcase,
  HiHeart,
  HiPaperAirplane,
  HiShieldCheck,
  HiCheckBadge,
  HiLockClosed,
  HiGlobeAlt,
} from "react-icons/hi2";
import { HiMail, HiPhone } from "react-icons/hi";

const quickLinks = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/recomended-projects", label: "تمامی پروژه‌ها" },
  { href: "/order-project", label: "ثبت رایگان پروژه" },
  { href: "/#categories", label: "دسته‌بندی مهارت‌ها" },
  { href: "/#how-it-works", label: "نحوه کار پلتفرم" },
  { href: "/#faq", label: "پرسش‌های متداول" },
];

const categoryLinks = [
  { href: "/recomended-projects?search=برنامه‌نویسی", label: "برنامه‌نویسی و وب" },
  { href: "/recomended-projects?search=طراحی", label: "طراحی و گرافیک UI/UX" },
  { href: "/recomended-projects?search=موبایل", label: "اپلیکیشن موبایل (Flutter)" },
  { href: "/recomended-projects?search=سئو", label: "سئو و دیجیتال مارکتینگ" },
  { href: "/recomended-projects?search=هوش مصنوعی", label: "هوش مصنوعی و داده" },
];

const freelancerLinks = [
  { href: "/sended-proposals", label: "پیشنهادهای ارسال‌شده" },
  { href: "/favourit-projects", label: "پروژه‌های نشان‌شده" },
  { href: "/edit-profile", label: "ویرایش پروفایل و مهارت‌ها" },
  { href: "/auth", label: "ورود / عضویت فریلنسر" },
];

function Footer() {
  return (
    <footer className="mt-auto border-t border-secondery-200 dark:border-secondery-800 bg-secondery-100/60 dark:bg-secondery-950 text-secondery-700 dark:text-secondery-300">
      <div className="container xl:max-w-screen-xl mx-auto px-4 py-14">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand & About (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-right">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-900 to-primary-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                ت
              </div>
              <span className="text-2xl font-black text-primary-800 dark:text-primary-400 group-hover:text-primary-900 transition-colors">
                تخصص سازان
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-secondery-500 max-w-md">
              تخصص‌سازان بستر پیشرو در برون‌سپاری و انجام پروژه‌های تخصصی در سراسر کشور است. با بهره‌گیری از سیستم پرداخت امن (صندوق امانی) و فریلنسرهای ارزیابی‌شده، خیالتان از کیفیت و امنیت سرمایه آسوده است.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                <HiShieldCheck className="h-4 w-4" />
                <span>صندوق پرداخت امن</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-100 dark:bg-primary-950/60 px-3 py-1.5 text-xs font-bold text-primary-800 dark:text-primary-300">
                <HiCheckBadge className="h-4 w-4" />
                <span>احراز هویت تخصصی</span>
              </div>
            </div>
          </div>

          {/* Quick Links (1 col) */}
          <div>
            <h3 className="mb-4 font-bold text-secondery-900 text-sm sm:text-base">دسترسی سریع</h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-secondery-500 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Links (1 col) */}
          <div>
            <h3 className="mb-4 font-bold text-secondery-900 text-sm sm:text-base">دسته‌بندی‌های داغ</h3>
            <ul className="space-y-2.5 text-sm">
              {categoryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-secondery-500 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support (1 col) */}
          <div>
            <h3 className="mb-4 font-bold text-secondery-900 text-sm sm:text-base">پشتیبانی و ارتباط</h3>
            <ul className="space-y-3 text-sm text-secondery-500">
              <li className="flex items-center gap-2">
                <HiMail className="h-4 w-4 shrink-0 text-primary-600" />
                <span dir="ltr">support@takhasosazan.ir</span>
              </li>
              <li className="flex items-center gap-2">
                <HiPhone className="h-4 w-4 shrink-0 text-primary-600" />
                <span dir="ltr">۰۲۱ - ۹۱۰۰ ۰۰۰۰</span>
              </li>
              <li className="flex items-center gap-2">
                <HiGlobeAlt className="h-4 w-4 shrink-0 text-primary-600" />
                <span>پشتیبانی آنلاین ۲۴ ساعته</span>
              </li>
            </ul>

            <div className="mt-5 p-3.5 rounded-xl bg-secondery-0 dark:bg-secondery-900 border border-secondery-200 dark:border-secondery-800 text-xs text-secondery-500">
              <span className="font-bold text-secondery-800 dark:text-secondery-200 block mb-1">
                شورای حل اختلاف و داوری
              </span>
              پاسخگویی به سوالات و رسیدگی سریع به پرونده‌های داوری
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-secondery-200 dark:border-secondery-800 pt-6 text-center text-xs text-secondery-500 sm:flex-row sm:text-right">
          <p>© {new Date().getFullYear()} تخصص سازان. تمامی حقوق مادی و معنوی محفوظ است.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-secondery-400">طراحی شده برای حرفه‌ای‌ها</span>
            <span className="text-secondery-300">•</span>
            <span className="text-[11px] text-emerald-600 font-bold">زیرساخت ابری پایدار ۱۰۰٪</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
