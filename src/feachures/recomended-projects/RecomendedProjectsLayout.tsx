"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import useProjects from "../../hooks/useProjects";
import Loading from "../../ui/Loading";
import JobCard from "./JobCard";
import type { Project } from "../../types";
import {
  HiMagnifyingGlass,
  HiMapPin,
  HiBriefcase,
  HiSparkles,
  HiXMark,
  HiChevronUp,
  HiChevronDown,
  HiAdjustmentsHorizontal,
  HiBuildingOffice2,
  HiCurrencyDollar,
  HiChevronLeft,
} from "react-icons/hi2";

// Dynamically import JobMap to disable SSR for WebGL/MapLibre GL & Deck.gl
const JobMap = dynamic(() => import("./JobMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] bg-slate-950 flex flex-col items-center justify-center gap-3 text-slate-400">
      <span className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      <span className="text-sm font-bold text-slate-300">در حال راه‌اندازی نقشه تاریک ایران...</span>
    </div>
  ),
});

const CITIES = [
  "همه شهرها",
  "تهران",
  "اصفهان",
  "مشهد",
  "شیراز",
  "تبریز",
  "کرج",
  "اهواز",
  "رشت",
  "یزد",
  "کیش",
];

const CATEGORIES = [
  { id: "ALL", label: "همه تخصص‌ها" },
  { id: "programming", label: "برنامه‌نویسی" },
  { id: "ai-data", label: "هوش مصنوعی" },
  { id: "ui-ux", label: "طراحی UI/UX" },
  { id: "seo-marketing", label: "مارکتینگ" },
  { id: "mobile", label: "موبایل" },
  { id: "devops", label: "دواپس" },
];

export default function RecomendedProjectsLayout() {
  const { projects = [], isLoading } = useProjects();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedCity, setSelectedCity] = useState("همه شهرها");
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  // Mobile Bottom Sheet / Drawer state (سایدبار از پایین بازشو در موبایل)
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const sidebarScrollRef = useRef<HTMLDivElement | null>(null);

  // Client-side instant filtering
  const filteredJobs = useMemo(() => {
    return projects.filter((job) => {
      // Search filter
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matchTitle = job.title?.toLowerCase().includes(q);
        const matchCompany = job.company?.toLowerCase().includes(q);
        const matchDesc = job.description?.toLowerCase().includes(q);
        const matchCity = job.city?.toLowerCase().includes(q);
        const matchTags = job.tags?.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchCompany && !matchDesc && !matchCity && !matchTags) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== "ALL") {
        if (job.category?.englishTitle !== selectedCategory) {
          return false;
        }
      }

      // City filter
      if (selectedCity !== "همه شهرها") {
        if (job.city !== selectedCity) {
          return false;
        }
      }

      return true;
    });
  }, [projects, searchTerm, selectedCategory, selectedCity]);

  // Currently selected job object
  const selectedJob = useMemo(() => {
    return projects.find((j) => j._id === selectedJobId) || null;
  }, [projects, selectedJobId]);

  // When a job is selected (from map pin or card), handle focus
  const handleSelectJob = (job: Project) => {
    setSelectedJobId(job._id);
  };

  const handleFocusMap = (job: Project) => {
    setSelectedJobId(job._id);
    // On mobile, minimize drawer so the user sees the map centered on the job!
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setIsMobileDrawerOpen(false);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="relative w-full h-full min-h-[calc(100vh-65px)] flex overflow-hidden bg-slate-950">
      
      {/* ========================================================================= */}
      {/* 1. MAP SECTION: Takes 2/3 on Desktop (~66%), Full Screen on Mobile (100%) */}
      {/* ========================================================================= */}
      <div className="w-full lg:w-2/3 xl:w-[68%] h-full flex-1 relative order-2 lg:order-1">
        <JobMap
          jobs={filteredJobs}
          selectedJobId={selectedJobId}
          onSelectJob={(job) => {
            handleSelectJob(job);
          }}
          activeCity={selectedCity === "همه شهرها" ? "همه ایران" : selectedCity}
          onCityChange={(city) => setSelectedCity(city === "همه ایران" ? "همه شهرها" : city)}
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. DESKTOP JOB ADS SIDEBAR: Takes 1/3 (~34%) Beside Map with Smooth Scroll  */}
      {/* ========================================================================= */}
      <aside className="hidden lg:flex lg:w-1/3 xl:w-[32%] h-full flex-col bg-secondery-0 dark:bg-slate-900 border-r border-secondery-200 dark:border-slate-800 shadow-2xl z-20 order-1 lg:order-2">
        
        {/* Sidebar Header & Filters Bar */}
        <div className="p-4 border-b border-secondery-200/80 dark:border-slate-800 space-y-3 bg-secondery-0 dark:bg-slate-900 shrink-0">
          
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h2 className="font-black text-sm text-secondery-900 dark:text-secondery-100">
                موقعیت‌های شغلی فعال
              </h2>
            </div>
            <span className="text-[11px] font-bold bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800/60 px-2 py-0.5 rounded-full">
              {filteredJobs.length.toLocaleString("fa-IR")} آگهی
            </span>
          </div>

          {/* Search Input */}
          <div className="relative">
            <HiMagnifyingGlass className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-secondery-400 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="جستجوی شغل، شرکت، مهارت یا شهر..."
              className="w-full pr-9 pl-7 py-2 text-xs rounded-xl bg-secondery-50 dark:bg-secondery-900 border border-secondery-200 dark:border-secondery-700 text-secondery-900 dark:text-secondery-100 placeholder:text-secondery-400 focus:outline-none focus:ring-2 focus:ring-primary-500 font-medium transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-secondery-400 hover:text-secondery-600"
              >
                <HiXMark className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-[11px] px-2.5 py-1 rounded-lg font-bold transition-all whitespace-nowrap border ${
                    isSelected
                      ? "bg-primary-700 text-white border-primary-700 shadow-sm scale-105"
                      : "bg-secondery-50 dark:bg-secondery-900 border-secondery-200 dark:border-secondery-800 text-secondery-600 dark:text-secondery-300 hover:text-primary-600 hover:border-primary-400"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Scrollable Job Cards Feed */}
        <div
          ref={sidebarScrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-3.5 custom-scrollbar"
        >
          {filteredJobs.length === 0 ? (
            <div className="p-8 text-center bg-secondery-50/50 dark:bg-secondery-900/30 rounded-2xl border border-dashed border-secondery-300 dark:border-secondery-800 text-secondery-500 mt-6">
              <HiBriefcase className="w-10 h-10 mx-auto text-secondery-400 mb-2" />
              <p className="font-extrabold text-xs">آگهی شغلی با فیلترهای انتخابی یافت نشد.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("ALL");
                  setSelectedCity("همه شهرها");
                }}
                className="mt-2 text-xs font-bold text-primary-600 hover:underline"
              >
                پاک کردن فیلترها
              </button>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <JobCard
                key={job._id}
                job={job}
                isSelected={job._id === selectedJobId}
                onSelect={handleSelectJob}
                onFocusMap={handleFocusMap}
              />
            ))
          )}
        </div>

      </aside>

      {/* ========================================================================= */}
      {/* 3. MOBILE RESPONSIVE BOTTOM SHEET / DRAWER (سایدبار بازشو از پایین در موبایل) */}
      {/* ========================================================================= */}
      <div className="lg:hidden">
        
        {/* State A: Collapsed Bottom Bar / Mini Preview Bar */}
        {!isMobileDrawerOpen && (
          <div className="fixed bottom-0 inset-x-0 z-30 p-3 pointer-events-none animate-fade-in-up">
            <div className="pointer-events-auto max-w-lg mx-auto bg-white dark:bg-slate-900 border border-secondery-200 dark:border-slate-800 p-3 rounded-2xl shadow-2xl">
              
              {/* Drag / Touch Handle */}
              <div
                onClick={() => setIsMobileDrawerOpen(true)}
                className="w-10 h-1 rounded-full bg-secondery-300 dark:bg-secondery-700 mx-auto mb-2 cursor-pointer"
              />

              {/* If a job is actively clicked on map, show its sleek preview */}
              {selectedJob ? (
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold text-primary-600 dark:text-primary-400">
                        موقعیت انتخاب شده:
                      </span>
                      <h4 className="text-xs font-black text-secondery-900 dark:text-secondery-100 truncate">
                        {selectedJob.title}
                      </h4>
                      <p className="text-[11px] text-secondery-500 truncate">
                        {selectedJob.company} • {selectedJob.city}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedJobId(null)}
                      className="text-secondery-400 hover:text-secondery-600 p-1"
                    >
                      <HiXMark className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => setIsMobileDrawerOpen(true)}
                      className="flex-1 py-2 px-3 rounded-xl bg-secondery-100 dark:bg-secondery-800 text-secondery-800 dark:text-secondery-200 text-xs font-extrabold flex items-center justify-center gap-1.5"
                    >
                      <HiChevronUp className="w-4 h-4 text-primary-500" />
                      <span>مشاهده همه آگهی‌ها ({filteredJobs.length.toLocaleString("fa-IR")})</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Default Peek Button */
                <button
                  type="button"
                  onClick={() => setIsMobileDrawerOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl bg-primary-700 hover:bg-primary-800 text-white font-black text-xs sm:text-sm flex items-center justify-between shadow-lg shadow-primary-700/30 transition-all active:scale-[0.98]"
                >
                  <div className="flex items-center gap-2">
                    <HiBriefcase className="w-4 h-4" />
                    <span>مشاهده آگهی‌های شغلی ({filteredJobs.length.toLocaleString("fa-IR")} موقعیت)</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] opacity-90">
                    <span>باز کردن</span>
                    <HiChevronUp className="w-4 h-4" />
                  </div>
                </button>
              )}

            </div>
          </div>
        )}

        {/* State B: Expanded Bottom Sheet Drawer */}
        {isMobileDrawerOpen && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setIsMobileDrawerOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity animate-fade-in"
            />

            {/* Bottom Drawer Sheet */}
            <div className="fixed bottom-0 inset-x-0 z-50 h-[82vh] max-h-[88vh] bg-white dark:bg-slate-900 rounded-t-3xl border-t border-secondery-200 dark:border-slate-800 shadow-2xl flex flex-col transition-transform duration-300 ease-out animate-slide-up">
              
              {/* Drawer Handle & Header */}
              <div className="pt-2.5 pb-3 px-4 border-b border-secondery-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-t-3xl shrink-0">
                <div
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="w-12 h-1.5 rounded-full bg-secondery-300 dark:bg-secondery-700 mx-auto mb-2.5 cursor-pointer"
                />

                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <h3 className="font-extrabold text-sm text-secondery-900 dark:text-secondery-100">
                      فرصت‌های شغلی ایران
                    </h3>
                    <span className="text-[11px] font-bold bg-primary-100 dark:bg-primary-950/80 text-primary-700 dark:text-primary-300 px-2 py-0.5 rounded-full">
                      {filteredJobs.length.toLocaleString("fa-IR")}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsMobileDrawerOpen(false)}
                    className="p-1.5 rounded-xl text-secondery-600 dark:text-secondery-300 bg-secondery-100 dark:bg-secondery-800 hover:bg-secondery-200 text-xs font-extrabold flex items-center gap-1"
                  >
                    <span>دیدن نقشه</span>
                    <HiChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {/* Search in Drawer */}
                <div className="relative mb-2">
                  <HiMagnifyingGlass className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-secondery-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="جستجوی شغل، شرکت، مهارت یا شهر..."
                    className="w-full pr-9 pl-7 py-2 text-xs rounded-xl bg-secondery-50 dark:bg-secondery-900 border border-secondery-200 dark:border-secondery-700 text-secondery-900 dark:text-secondery-100 placeholder:text-secondery-400 focus:outline-none focus:ring-2 focus:ring-primary-500 font-medium"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 text-secondery-400 hover:text-secondery-600"
                    >
                      <HiXMark className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Category Chips in Drawer */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`text-[11px] px-2.5 py-1 rounded-lg font-bold transition-all whitespace-nowrap border ${
                          isSelected
                            ? "bg-primary-700 text-white border-primary-700 shadow-sm"
                            : "bg-secondery-50 dark:bg-secondery-900 border-secondery-200 dark:border-secondery-800 text-secondery-600 dark:text-secondery-300"
                        }`}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Scrollable Job List in Drawer */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                {filteredJobs.length === 0 ? (
                  <div className="p-8 text-center text-secondery-500">
                    <p className="font-extrabold text-xs">موقعیت شغلی با این فیلترها یافت نشد.</p>
                  </div>
                ) : (
                  filteredJobs.map((job) => (
                    <JobCard
                      key={job._id}
                      job={job}
                      isSelected={job._id === selectedJobId}
                      onSelect={handleSelectJob}
                      onFocusMap={handleFocusMap}
                    />
                  ))
                )}
              </div>

            </div>
          </>
        )}

      </div>

    </div>
  );
}
