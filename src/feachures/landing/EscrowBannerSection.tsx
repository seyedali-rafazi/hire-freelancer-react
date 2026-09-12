"use client";
import Link from "next/link";
import {
  HiShieldCheck,
  HiLockClosed,
  HiArrowLeft,
  HiArrowLongLeft,
  HiCheckBadge,
} from "react-icons/hi2";

export default function EscrowBannerSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-indigo-950 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container xl:max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Information (6 cols) */}
          <div className="lg:col-span-6 space-y-5 text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold text-primary-200">
              <HiLockClosed className="w-4 h-4 text-emerald-400" />
              <span>سیستم هوشمند پرداخت امن (Escrow Protection)</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-white">
              خیال هر دو طرف آسوده؛
              <br />
              نه کارفرما نگران است، نه فریلنسر!
            </h2>

            <p className="text-primary-100 text-sm sm:text-base leading-relaxed max-w-xl">
              در تخصص‌سازان هزینه پروژه به حساب مستقیم فرد واریز نمی‌شود، بلکه در صندوق امانی پلتفرم قفل می‌گردد. فریلنسر با اطمینان از وجود بودجه کار می‌کند و کارفرما فقط در صورت رضایت از کیفیت کار، وجه را آزاد می‌نماید.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-primary-100">
              <div className="flex items-center gap-2">
                <HiCheckBadge className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>بدون ریسک کلاهبرداری یا بدقولی</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckBadge className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>تضمین آزادسازی مرحله‌ای (Milestones)</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckBadge className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>داوری فوری و کاملاً منصفانه</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/order-project"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-primary-900 font-bold hover:bg-primary-50 transition-all shadow-lg hover:scale-105"
              >
                <span>شروع پروژه با ضمانت ۱۰۰٪</span>
                <HiArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Flowchart Mockup (6 cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                    <HiShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">چرخه امنیت مالی</h4>
                    <span className="text-[11px] text-primary-200">صندوق امانی قراردادها</span>
                  </div>
                </div>
                <span className="text-xs bg-emerald-500/30 text-emerald-300 font-bold px-2.5 py-1 rounded-full border border-emerald-500/40">
                  فعال و تضمین‌شده
                </span>
              </div>

              {/* Step 1 */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                <span className="w-6 h-6 rounded-full bg-primary-500 text-white font-bold flex items-center justify-center shrink-0">
                  ۱
                </span>
                <span className="text-primary-100">کارفرما وجه توافق‌شده را در صندوق امن امانت می‌گذارد.</span>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-primary-300">
                <HiArrowLongLeft className="w-5 h-5 rotate-[-90deg]" />
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                <span className="w-6 h-6 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center shrink-0">
                  ۲
                </span>
                <span className="text-primary-100">فریلنسر با اطمینان از بودجه، کار را با بالاترین کیفیت انجام می‌دهد.</span>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-primary-300">
                <HiArrowLongLeft className="w-5 h-5 rotate-[-90deg]" />
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-xs font-bold text-emerald-200">
                <span className="w-6 h-6 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center shrink-0">
                  ۳
                </span>
                <span>تایید نهایی خروجی توسط کارفرما و واریز فوری به حساب فریلنسر.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
