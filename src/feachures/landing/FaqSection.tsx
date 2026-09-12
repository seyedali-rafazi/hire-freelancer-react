"use client";
import { useState } from "react";
import { HiChevronDown, HiQuestionMarkCircle } from "react-icons/hi2";

const FAQS = [
  {
    id: 1,
    question: "سیستم پرداخت امن (صندوق امانی) تخصص‌سازان چگونه کار می‌کند؟",
    answer:
      "وقتی با پیشنهاد یک فریلنسر موافقت می‌کنید، مبلغ پروژه به طور مستقیم به حساب فریلنسر پرداخت نمی‌شود؛ بلکه در صندوق امن امانی پلتفرم قفل می‌گردد. فریلنسر پروژه را آغاز می‌کند و تنها پس از تحویل کامل کار و رضایت ۱۰۰٪ شما، با تاییدتان وجه به حساب فریلنسر آزاد می‌شود.",
  },
  {
    id: 2,
    question: "ثبت پروژه برای کارفرمایان چه هزینه‌ای دارد؟",
    answer:
      "ثبت پروژه در تخصص‌سازان کاملاً رایگان است. شما می‌توانید بدون پرداخت هیچ هزینه‌ای پروژه خود را با توضیحات و بودجه مدنظر ثبت کنید و پیشنهادهای مختلف فریلنسرها را دریافت و مقایسه نمایید.",
  },
  {
    id: 3,
    question: "در صورت بروز اختلاف در کیفیت یا زمان تحویل چه اتفاقی می‌افتد؟",
    answer:
      "در صورت بروز هرگونه مغایرت، طرفین می‌توانند درخواست داوری ثبت کنند. تیم کارشناسان داوری تخصص‌سازان به صورت بی‌طرفانه نیازمندی‌های اولیه، چت‌ها، فایل‌های تحویل‌شده و تعهدات زمانی را بررسی کرده و رای نهایی را صادر می‌نمایند. در صورت اثبات کوتاهی، وجه به کارفرما عودت داده می‌شود.",
  },
  {
    id: 4,
    question: "فریلنسرها چگونه دستمزد خود را دریافت می‌کنند و تسویه چقدر طول می‌کشد؟",
    answer:
      "به محض تایید پروژه توسط کارفرما، مبلغ به کیف پول فریلنسر منتقل می‌شود. درخواست‌های تسویه حساب پایا یا کارت‌به‌کارت حداکثر ظرف ۲۴ ساعت کاری به حساب بانکی فریلنسر واریز خواهد شد.",
  },
  {
    id: 5,
    question: "آیا می‌توان پروژه‌ها را به صورت مرحله‌ای (مایلستون) انجام داد؟",
    answer:
      "بله! برای پروژه‌های بزرگ و با بودجه بالا، پیشنهاد می‌شود پروژه به چند فاز کاری مجزا تقسیم شود. با پایان و تایید هر فاز، وجه همان بخش آزاد شده و فاز بعدی آغاز می‌گردد.",
  },
  {
    id: 6,
    question: "چگونه می‌توانم بدون تعهد یا فرآیند طولانی، پلتفرم را تست کنم؟",
    answer:
      "ما قابلیت ورود دمو (Demo Login) را آماده کرده‌ایم. با یک کلیک می‌توانید به عنوان کارفرما یا فریلنسر وارد شده، ثبت پروژه کنید، پیشنهاد ارسال نمایید و تمام امکانات حرفه‌ای داشبورد را ارزیابی کنید.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-secondery-0">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-300 text-xs font-bold">
            <HiQuestionMarkCircle className="w-4 h-4" />
            <span>پاسخ به ابهامات متداول</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondery-900">
            پرسش‌های متداول شما
          </h2>
          <p className="text-secondery-500 text-sm sm:text-base">
            پاسخ به سوالات پرتکرار کارفرمایان و فریلنسرها درباره نحوه کار با تخصص‌سازان
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-secondery-200 dark:border-secondery-800 rounded-2xl bg-secondery-0 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-secondery-900 hover:text-primary-700 transition-colors"
                >
                  <span>{faq.question}</span>
                  <HiChevronDown
                    className={`w-5 h-5 text-secondery-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary-700" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-secondery-600 dark:text-secondery-300 leading-relaxed border-t border-secondery-100 dark:border-secondery-800/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
