"use client";
import { useState } from "react";
import Link from "next/link";
import UserAvatar from "../feachures/authentication/UserAvatar";
import DarkmodeToggle from "./DarkmodeToggle";
import {
  HiPlusCircle,
  HiBars3,
  HiXMark,
  HiBriefcase,
  HiSparkles,
  HiQuestionMarkCircle,
  HiShieldCheck,
} from "react-icons/hi2";
import type { User } from "../types";

interface HomeHeaderProps {
  user?: User | null;
}

const NAV_LINKS = [
  { href: "/recomended-projects", label: "پروژه‌ها" },
  { href: "/#categories", label: "دسته‌بندی‌ها" },
  { href: "/#how-it-works", label: "نحوه کار" },
  { href: "/#features", label: "مزایای پلتفرم" },
  { href: "/#faq", label: "سوالات متداول" },
];

function HomeHeader(_props: HomeHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50 backdrop-blur-lg bg-secondery-0/90 border-b border-secondery-200/80 dark:border-secondery-800 transition-colors">
      <header className="px-4 py-3 xl:max-w-screen-xl mx-auto flex items-center justify-between gap-4">
        
        {/* Logo & Brand Identity */}
        <div className="flex items-center gap-6">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-900 to-primary-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-primary-900/20 group-hover:scale-105 transition-transform">
              ت
            </div>
            <div>
              <span className="text-primary-800 dark:text-primary-400 font-extrabold text-xl md:text-2xl group-hover:text-primary-900 transition-colors leading-none block">
                تخصص سازان
              </span>
              <span className="text-[10px] text-secondery-400 font-semibold block mt-0.5">
                سامانه هوشمند فریلنسری
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 mr-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-bold text-secondery-600 dark:text-secondery-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Action Controls (Right side in RTL) */}
        <div className="flex items-center gap-3">
          
          {/* Post a Project CTA Button */}
          <Link
            href="/order-project"
            className="hidden sm:inline-flex items-center gap-1.5 btn btn--primary !py-2 !px-3.5 text-xs md:text-sm font-bold shadow-md hover:scale-105 transition-all"
          >
            <HiPlusCircle className="w-4 h-4" />
            <span>ثبت رایگان پروژه</span>
          </Link>

          {/* Dark Mode Toggle */}
          <div className="hidden sm:block">
            <DarkmodeToggle />
          </div>

          {/* User Profile / Demo Login */}
          <div>
            <UserAvatar />
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-secondery-200 dark:border-secondery-700 text-secondery-700 dark:text-secondery-200 hover:bg-secondery-100 dark:hover:bg-secondery-800 transition-colors"
            aria-label="منوی اصلی"
          >
            {mobileMenuOpen ? (
              <HiXMark className="w-6 h-6" />
            ) : (
              <HiBars3 className="w-6 h-6" />
            )}
          </button>
        </div>

      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-secondery-0 border-b border-secondery-200 dark:border-secondery-800 px-5 py-4 animate-fade-in-up">
          <nav className="flex flex-col gap-3 pb-4 border-b border-secondery-100 dark:border-secondery-800">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg text-sm font-bold text-secondery-700 dark:text-secondery-200 hover:bg-primary-50 dark:hover:bg-primary-950/40 hover:text-primary-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/order-project"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn btn--primary !py-2.5 text-center text-sm font-bold flex items-center justify-center gap-2"
            >
              <HiPlusCircle className="w-4 h-4" />
              <span>ثبت رایگان پروژه جدید</span>
            </Link>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-secondery-500 font-semibold">تغییر حالت شب و روز:</span>
              <DarkmodeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeHeader;
