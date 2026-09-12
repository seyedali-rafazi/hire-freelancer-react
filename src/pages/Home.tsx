"use client";
import Link from "next/link";
import useUser from "../feachures/authentication/useUser";
import HeroSection from "../feachures/landing/HeroSection";
import StatsSection from "../feachures/landing/StatsSection";
import CategoriesSection from "../feachures/landing/CategoriesSection";
import FeaturedProjectsSection from "../feachures/landing/FeaturedProjectsSection";
import TopFreelancersSection from "../feachures/landing/TopFreelancersSection";
import HowItWorksSection from "../feachures/landing/HowItWorksSection";
import FeaturesSection from "../feachures/landing/FeaturesSection";
import EscrowBannerSection from "../feachures/landing/EscrowBannerSection";
import TestimonialsSection from "../feachures/landing/TestimonialsSection";
import FaqSection from "../feachures/landing/FaqSection";
import CtaSection from "../feachures/landing/CtaSection";
import {
  HiSparkles,
  HiBriefcase,
  HiSquares2X2,
  HiPlusCircle,
  HiPaperAirplane,
  HiHeart,
  HiShieldCheck,
} from "react-icons/hi2";

export default function Home() {
  const { user } = useUser();
  const isOwner = user?.role === "OWNER";
  const isFreelancer = user?.role === "FREELANCER";
  const isAdmin = user?.role === "ADMIN";

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Logged-In User Quick Access Bar */}
      {user && (
        <div className="bg-primary-900 text-white py-3 px-4 shadow-inner">
          <div className="container xl:max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                سلام <strong>{user.name}</strong> عزیز، خوش آمدید! (نقش شما:{" "}
                <span className="font-bold underline">
                  {isOwner ? "کارفرما" : isFreelancer ? "فریلنسر" : "مدیر سیستم"}
                </span>
                )
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap justify-center">
              {isOwner && (
                <>
                  <Link
                    href="/owner"
                    className="flex items-center gap-1 bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg font-bold transition-colors"
                  >
                    <HiSquares2X2 className="w-4 h-4" />
                    <span>داشبورد کارفرما</span>
                  </Link>
                  <Link
                    href="/order-project"
                    className="flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-lg font-bold transition-colors"
                  >
                    <HiPlusCircle className="w-4 h-4" />
                    <span>ثبت پروژه جدید</span>
                  </Link>
                </>
              )}

              {isFreelancer && (
                <>
                  <Link
                    href="/freelancer"
                    className="flex items-center gap-1 bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg font-bold transition-colors"
                  >
                    <HiSquares2X2 className="w-4 h-4" />
                    <span>داشبورد فریلنسر</span>
                  </Link>
                  <Link
                    href="/sended-proposals"
                    className="flex items-center gap-1 bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg font-bold transition-colors"
                  >
                    <HiPaperAirplane className="w-4 h-4" />
                    <span>پیشنهادهای من</span>
                  </Link>
                  <Link
                    href="/favourit-projects"
                    className="flex items-center gap-1 bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg font-bold transition-colors"
                  >
                    <HiHeart className="w-4 h-4" />
                    <span>پروژه‌های نشان‌شده</span>
                  </Link>
                </>
              )}

              {isAdmin && (
                <Link
                  href="/admin"
                  className="flex items-center gap-1 bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg font-bold transition-colors"
                >
                  <HiShieldCheck className="w-4 h-4" />
                  <span>رفتن به پنل مدیریت</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 1. Hero Section */}
      <HeroSection user={user} />

      {/* 2. Platform Stats Section */}
      <StatsSection />

      {/* 3. Skill Categories Section */}
      <CategoriesSection />

      {/* 4. Live Featured Projects Section */}
      <FeaturedProjectsSection user={user} />

      {/* 5. Top Freelancers Showcase */}
      <TopFreelancersSection />

      {/* 6. Step-by-Step How It Works */}
      <HowItWorksSection />

      {/* 7. Competitive Platform Advantages */}
      <FeaturesSection />

      {/* 8. Escrow / Safe Payment Highlight */}
      <EscrowBannerSection />

      {/* 9. Client & Freelancer Testimonials */}
      <TestimonialsSection />

      {/* 10. Frequently Asked Questions */}
      <FaqSection />

      {/* 11. Final High-Converting Call to Action */}
      <CtaSection user={user} />

    </div>
  );
}
