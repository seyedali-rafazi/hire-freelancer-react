"use client";
import { HiStar } from "react-icons/hi2";

const TESTIMONIALS = [
  {
    id: 1,
    name: "علیرضا کمالی",
    role: "مدیر فنی استارتاپ پرداخت‌یار",
    avatar: "/user.jpg",
    rating: 5,
    comment:
      "برای بازطراحی سیستم پرداخت و داشبورد React خود، ظرف کمتر از ۴۸ ساعت با یک تیم دونفره متخصص قرارداد بستیم. خروجی در موعد مقرر و با کیفیتی فراتر از انتظار تحویل شد. سیستم پرداخت امن واقعاً دغدغه ما را برطرف کرد.",
    tag: "کارفرما • برنامه‌نویسی",
  },
  {
    id: 2,
    name: "مریم صادقی",
    role: "بنیان‌گذار آژانس برندینگ رایا",
    avatar: "/Login-photo.webp",
    rating: 5,
    comment:
      "تا پیش از تخصص‌سازان همیشه با فریلنسرها بر سر تحویل به موقع و فایل‌های لایه‌باز چالش داشتیم. اما اینجا به خاطر قوانین مشخص و تعهدات مرحله‌ای، پروژه‌ها سر وقت و با بالاترین استانداردهای بصری به دستمان رسید.",
    tag: "کارفرما • طراحی گرافیک",
  },
  {
    id: 3,
    name: "پویا خسروی",
    role: "فریلنسر ارشد توسعه فول‌استک",
    avatar: "/check-otp.webp",
    rating: 5,
    comment:
      "به عنوان یک فریلنسر، بزرگ‌ترین دغدغه‌ام تسویه حساب منظم و عدم بدقولی کارفرما بود. صندوق امانی تخصص‌سازان تضمین می‌کند که به محض تحویل کار، بدون هیچ بهانه‌ای دستمزدم در حسابم است. کارمزد منصفانه هم یک مزیت فوق‌العاده است.",
    tag: "فریلنسر • Next.js & Node",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondery-50/60 dark:bg-secondery-900/30 border-b border-secondery-200/70 dark:border-secondery-800/40">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-sm font-black text-primary-700 dark:text-primary-400 uppercase tracking-wider">
            داستان‌های موفقیت
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondery-900">
            کاربران درباره تخصص‌سازان چه می‌گویند؟
          </h2>
          <p className="text-secondery-500 text-sm sm:text-base">
            تجربه واقعی کارفرمایان و متخصصانی که پروژه‌های خود را با ما پیش برده‌اند
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="landing-card p-7 flex flex-col justify-between text-right relative"
            >
              <div>
                {/* Rating stars & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <HiStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300">
                    {t.tag}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-secondery-600 dark:text-secondery-300 leading-relaxed italic mb-6">
                  «{t.comment}»
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-secondery-100 dark:border-secondery-800 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-primary-200 dark:border-primary-800"
                />
                <div>
                  <h4 className="font-bold text-sm text-secondery-900">{t.name}</h4>
                  <p className="text-xs text-secondery-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
