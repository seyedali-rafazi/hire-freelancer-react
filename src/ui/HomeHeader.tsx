"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import UserAvatar from "../feachures/authentication/UserAvatar";
import DarkmodeToggle from "./DarkmodeToggle";
import { useDarkMode } from "../context/DarkModeContext";
import {
  HiPlusCircle,
  HiBars3,
  HiXMark,
  HiHome,
  HiBriefcase,
} from "react-icons/hi2";
import type { User } from "../types";

interface HomeHeaderProps {
  user?: User | null;
}

const NAV_LINKS = [
  { href: "/", label: "خانه", icon: HiHome },
  { href: "/recomended-projects", label: "پروژه‌ها", icon: HiBriefcase },
];

function HomeHeader(_props: HomeHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <div className="w-full sticky top-0 z-40 backdrop-blur-lg bg-secondery-0/95 border-b border-secondery-200/80 dark:border-secondery-800 transition-colors">
        <header className="px-4 py-3 xl:max-w-screen-xl mx-auto flex items-center justify-between gap-4">
          
          {/* Right Section in RTL: Hamburger Button (on Right on Mobile) + Logo & Desktop Nav */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Mobile Menu Hamburger Toggle (Positioned on the RIGHT in responsive) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl border border-secondery-200 dark:border-secondery-700 text-secondery-700 dark:text-secondery-200 hover:bg-secondery-100 dark:hover:bg-secondery-800 transition-colors"
              aria-label="منوی اصلی"
            >
              <HiBars3 className="w-6 h-6" />
            </button>

            {/* Logo & Brand Identity */}
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-900 to-primary-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-primary-900/20 group-hover:scale-105 transition-transform">
                ک
              </div>
              <div>
                <span className="text-primary-800 dark:text-primary-400 font-extrabold text-xl md:text-2xl group-hover:text-primary-900 transition-colors leading-none block">
                  کاریار
                </span>
                <span className="text-[10px] text-secondery-400 font-semibold block mt-0.5">
                  سامانه کاریابی و ثبت آگهی‌های شغلی
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 mr-6">
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

          {/* Left Section in RTL: Post Ad CTA Button, Darkmode Toggle, User Avatar */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Post a Job Ad CTA Button */}
            <Link
              href="/order-project"
              className="hidden sm:inline-flex items-center gap-1.5 btn btn--primary !py-2 !px-3.5 text-xs md:text-sm font-bold shadow-md hover:scale-105 transition-all"
            >
              <HiPlusCircle className="w-4 h-4" />
              <span>ثبت آگهی شغلی</span>
            </Link>

            {/* Dark Mode Toggle */}
            <div className="hidden sm:block">
              <DarkmodeToggle />
            </div>

            {/* User Profile / Demo Login */}
            <div>
              <UserAvatar />
            </div>
          </div>

        </header>
      </div>

      {/* ========================================================================= */}
      {/* Mobile Drawer (Rendered via Portal on document.body, 100% Solid Background) */}
      {/* ========================================================================= */}
      {mounted &&
        createPortal(
          <div
            className={`lg:hidden fixed inset-0 z-[9999] transition-all duration-300 ${
              mobileMenuOpen
                ? "pointer-events-auto visible"
                : "pointer-events-none invisible"
            }`}
          >
            {/* Dark Backdrop Overlay */}
            <div
              onClick={() => setMobileMenuOpen(false)}
              className={`fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Drawer Panel Sliding from the RIGHT - 100% OPAQUE Solid Background */}
            <div
              style={{
                backgroundColor: isDarkMode ? "#0f172a" : "#ffffff",
                opacity: 1,
              }}
              className={`fixed inset-y-0 right-0 w-72 sm:w-80 shadow-[-12px_0_35px_rgba(0,0,0,0.45)] flex flex-col justify-between p-5 z-20 transition-transform duration-300 ease-out transform border-l bg-white dark:bg-slate-900 ${
                isDarkMode
                  ? "border-slate-800 text-slate-100"
                  : "border-slate-200 text-slate-900"
              } ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
              {/* Drawer Top: Header with Logo and Close (X) Button */}
              <div className="space-y-6">
                <div
                  className={`flex items-center justify-between pb-4 border-b ${
                    isDarkMode ? "border-slate-800" : "border-slate-200"
                  }`}
                >
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary-900 to-primary-600 flex items-center justify-center text-white font-black text-lg shadow-md">
                      ک
                    </div>
                    <div>
                      <span className="text-primary-800 dark:text-primary-400 font-extrabold text-lg leading-none block">
                        کاریار
                      </span>
                      <span className="text-[10px] text-secondery-400 font-semibold block mt-0.5">
                        سامانه کاریابی و استخدام
                      </span>
                    </div>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-2 rounded-xl transition-colors ${
                      isDarkMode
                        ? "text-slate-400 hover:text-white hover:bg-slate-800"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                    aria-label="بستن منو"
                  >
                    <HiXMark className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links inside Drawer */}
                <nav className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`py-3 px-3.5 rounded-xl text-sm font-extrabold flex items-center gap-3 transition-colors ${
                          isDarkMode
                            ? "text-slate-200 hover:bg-slate-800 hover:text-primary-400"
                            : "text-slate-700 hover:bg-primary-50 hover:text-primary-800"
                        }`}
                      >
                        <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        <span>{link.label}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom: Post Job Ad & Darkmode Controls */}
              <div
                className={`pt-6 border-t space-y-4 ${
                  isDarkMode ? "border-slate-800" : "border-slate-200"
                }`}
              >
                <Link
                  href="/order-project"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full btn btn--primary !py-3 text-center text-sm font-bold flex items-center justify-center gap-2 shadow-md"
                >
                  <HiPlusCircle className="w-5 h-5" />
                  <span>ثبت آگهی شغلی جدید</span>
                </Link>

                <div
                  className={`flex items-center justify-between px-3 py-2 rounded-xl border ${
                    isDarkMode
                      ? "bg-slate-800/90 border-slate-700 text-slate-300"
                      : "bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                >
                  <span className="text-xs font-bold">حالت شب و روز:</span>
                  <DarkmodeToggle />
                </div>
              </div>

            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default HomeHeader;
