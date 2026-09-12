"use client";
import {
  HiShieldCheck,
  HiCheckBadge,
  HiScale,
  HiCurrencyDollar,
  HiChatBubbleLeftRight,
  HiArrowPathRoundedSquare,
} from "react-icons/hi2";

const ADVANTAGES = [
  {
    icon: HiShieldCheck,
    title: "سیستم پرداخت امن (Escrow)",
    description:
      "سرمایه شما تا زمان رضایت کامل و تایید نهایی خروجی پروژه، در صندوق امن امانی نگهداری می‌شود و هیچ پرداختی بدون رضایت شما آزاد نخواهد شد.",
    badge: "امنیت مالی ۱۰۰٪",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/50",
  },
  {
    icon: HiCheckBadge,
    title: "متخصصان ارزیابی‌شده و معتبر",
    description:
      "فریلنسرها مراحل احراز هویت، تایید شماره تماس و ارزیابی کیفی نمونه‌کارها را طی می‌کنند تا از همکاری با افراد حرفه‌ای مطمئن باشید.",
    badge: "تایید صلاحیت",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-950/50",
  },
  {
    icon: HiScale,
    title: "داوری عادلانه و پشتیبانی ۲۴/۷",
    description:
      "در صورت بروز هرگونه اختلاف بر سر نیازمندی‌ها، تیم کارشناسان داوری تخصص‌سازان بی‌طرفانه پروژه را بررسی کرده و حقوق طرفین را احقاق می‌کنند.",
    badge: "پشتیبانی همیشگی",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/50",
  },
  {
    icon: HiCurrencyDollar,
    title: "کارمزد منصفانه و شفاف",
    description:
      "هیچ هزینه پنهانی وجود ندارد؛ با حداقل نرخ کارمزد در میان پلتفرم‌های کشور، هم کارفرما سود می‌کند و هم فریلنسر دستمزد عادلانه‌اش را دریافت می‌نماید.",
    badge: "بیشترین بازدهی",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/50",
  },
  {
    icon: HiChatBubbleLeftRight,
    title: "محیط گفتگوی امن و مدیریت فایل",
    description:
      "امکان ارسال فایل‌ها، بررسی پیشرفت کار، تبادل بازخوردها و بایگانی دائمی پیام‌ها در یک محیط یکپارچه و به دور از بی‌نظمی شبکه‌های اجتماعی.",
    badge: "همکاری سازمان‌یافته",
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/50",
  },
  {
    icon: HiArrowPathRoundedSquare,
    title: "ضمانت بازگشت ۱۰۰٪ وجه",
    description:
      "اگر فریلنسر پروژه را طبق تعهدات توافق‌شده تحویل ندهد یا با تاخیر غیرموجه مواجه شود، تمام مبلغ ودیعه بلافاصله به کارفرما بازگردانده می‌شود.",
    badge: "بدون ریسک",
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-950/50",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-secondery-0">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-sm font-black text-primary-700 dark:text-primary-400 uppercase tracking-wider">
            چرا تخصص‌سازان؟
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondery-900">
            استانداردهای نوین در برون‌سپاری و اشتغال آزاد
          </h2>
          <p className="text-secondery-500 text-sm sm:text-base">
            ما زیرساختی فراهم آورده‌ایم که دغدغه‌های مالی، کیفی و زمانی را به صفر می‌رساند.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="landing-card p-7 flex flex-col justify-between text-right group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-7 h-7 ${item.color}`} />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondery-100 dark:bg-secondery-800 text-secondery-700 dark:text-secondery-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-secondery-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-secondery-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-secondery-100 dark:border-secondery-800 flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>تضمین شده توسط پلتفرم</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
