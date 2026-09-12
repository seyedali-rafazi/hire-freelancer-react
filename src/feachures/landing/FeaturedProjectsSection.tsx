"use client";
import { useState } from "react";
import Link from "next/link";
import {
  HiBriefcase,
  HiArrowLeft,
  HiPlusCircle,
  HiSparkles,
} from "react-icons/hi2";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "../../ui/ProjectCard";
import Loading from "../../ui/Loading";
import { toPersianNumbers } from "../../utils/formatNumber";
import type { Project, User } from "../../types";

interface FeaturedProjectsSectionProps {
  user?: User | null;
}

const TABS = [
  { id: "all", label: "همه پروژه‌ها" },
  { id: "طراحی وب", label: "طراحی وب" },
  { id: "برنامه‌نویسی", label: "برنامه‌نویسی" },
  { id: "گرافیک", label: "گرافیک" },
  { id: "موبایل", label: "موبایل" },
  { id: "سئو و مارکتینگ", label: "سئو و مارکتینگ" },
];

export default function FeaturedProjectsSection({ user }: FeaturedProjectsSectionProps) {
  const { projects = [], isLoading } = useProjects();
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = projects.filter((p: Project) => {
    if (activeTab === "all") return true;
    return p.category?.title === activeTab;
  });

  return (
    <section id="projects" className="py-20 bg-secondery-50/60 dark:bg-secondery-900/30 border-y border-secondery-200/70 dark:border-secondery-800/40">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="text-right space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
              <HiSparkles className="w-3.5 h-3.5" />
              <span>پروژه‌های باز و در انتظار پیشنهاد</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondery-900">
              تازه‌ترین فرصت‌های همکاری
            </h2>
            <p className="text-secondery-500 text-sm sm:text-base">
              از میان پروژه‌های فعال پلتفرم، پروژه مناسب تخصص خود را انتخاب و پیشنهاد ارسال کنید.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/order-project"
              className="btn btn--primary !py-2.5 !px-4 text-xs sm:text-sm font-bold flex items-center gap-2"
            >
              <HiPlusCircle className="w-4 h-4" />
              <span>ثبت پروژه جدید</span>
            </Link>
            
            <Link
              href="/recomended-projects"
              className="py-2.5 px-4 rounded-xl border border-secondery-300 dark:border-secondery-700 hover:border-primary-500 text-secondery-700 dark:text-secondery-200 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors"
            >
              <span>مشاهده همه ({toPersianNumbers(projects.length || 0)})</span>
              <HiArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-primary-900 text-white shadow-md shadow-primary-900/20"
                  : "bg-secondery-0 border border-secondery-200 dark:border-secondery-700/80 text-secondery-600 dark:text-secondery-300 hover:bg-secondery-100 dark:hover:bg-secondery-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        {isLoading ? (
          <div className="py-16 flex justify-center">
            <Loading width="40" />
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.slice(0, 6).map((project: Project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-secondery-0 rounded-2xl border border-secondery-200 dark:border-secondery-800 p-8">
            <div className="w-16 h-16 rounded-2xl bg-secondery-100 dark:bg-secondery-800 flex items-center justify-center mx-auto mb-4 text-secondery-400">
              <HiBriefcase className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-secondery-800 text-base mb-1">
              پروژه‌ای در این دسته‌بندی یافت نشد
            </h3>
            <p className="text-xs text-secondery-500 mb-4">
              می‌توانید اولین نفری باشید که پروژه‌ای در این حوزه ثبت می‌کند!
            </p>
            <Link
              href="/order-project"
              className="inline-flex items-center gap-2 btn btn--primary !py-2 !px-4 text-xs font-bold"
            >
              <HiPlusCircle className="w-4 h-4" />
              <span>ثبت اولین پروژه این دسته</span>
            </Link>
          </div>
        )}

        {/* Bottom Call to Action */}
        <div className="mt-12 text-center">
          <Link
            href="/recomended-projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-primary-400 dark:border-primary-600 text-primary-800 dark:text-primary-300 font-bold hover:bg-primary-900 hover:text-white hover:border-primary-900 transition-all duration-300 shadow-sm"
          >
            <span>کاوش در تمام پروژه‌ها و ارسال پیشنهاد</span>
            <HiArrowLeft className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
