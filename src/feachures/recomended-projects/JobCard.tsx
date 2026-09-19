"use client";
import React, { useState } from "react";
import type { Project } from "../../types";
import {
  HiMapPin,
  HiBriefcase,
  HiCurrencyDollar,
  HiClock,
  HiBuildingOffice2,
  HiSparkles,
  HiChevronLeft,
} from "react-icons/hi2";
import Modal from "../../ui/Modal";
import CreateProposal from "../freelancer/project/CreateProposal";
import useUser from "../authentication/useUser";
import toast from "react-hot-toast";

interface JobCardProps {
  job: Project;
  isSelected?: boolean;
  onSelect?: (job: Project) => void;
  onFocusMap?: (job: Project) => void;
}

export default function JobCard({
  job,
  isSelected = false,
  onSelect,
  onFocusMap,
}: JobCardProps) {
  const { user } = useUser();
  const [openModal, setOpenModal] = useState(false);
  const companyInitial = job.company ? job.company.charAt(0) : "ک";

  const handleApplyClick = () => {
    if (!user) {
      toast.error("برای ارسال رزومه و درخواست شغلی ابتدا وارد حساب کاربری خود شوید");
      return;
    }
    setOpenModal(true);
  };

  return (
    <div
      onClick={() => onSelect?.(job)}
      className={`group relative p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
        isSelected
          ? "bg-primary-50/50 dark:bg-primary-950/30 border-primary-500 shadow-xl shadow-primary-500/10 ring-2 ring-primary-500/30 -translate-y-1"
          : "bg-secondery-0 border-secondery-200/80 dark:border-secondery-800 hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-lg hover:-translate-y-0.5"
      }`}
    >
      {/* Active Indicator Bar */}
      {isSelected && (
        <span className="absolute top-0 right-6 -translate-y-1/2 bg-primary-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md">
          انتخاب شده روی نقشه
        </span>
      )}

      {/* Top Row: Company Avatar + Title & Meta */}
      <div className="flex items-start gap-3.5">
        
        {/* Company Avatar */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary-700 to-indigo-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shrink-0 group-hover:scale-105 transition-transform">
          {companyInitial}
        </div>

        {/* Title & Company info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-extrabold text-base text-secondery-800 dark:text-secondery-100 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors leading-tight line-clamp-1">
              {job.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs text-secondery-500 dark:text-secondery-400 mt-1.5 flex-wrap">
            <div className="flex items-center gap-1 font-semibold">
              <HiBuildingOffice2 className="w-4 h-4 text-primary-500 shrink-0" />
              <span className="truncate">{job.company || "شرکت کارفرما"}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1 font-semibold text-secondery-600 dark:text-secondery-300">
              <HiMapPin className="w-4 h-4 text-rose-500 shrink-0" />
              <span>
                {job.city
                  ? job.country
                    ? `${job.city}، ${job.country}`
                    : job.city
                  : job.country || "سراسر جهان"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description Snippet */}
      <p className="mt-3 text-xs leading-relaxed text-secondery-600 dark:text-secondery-300 line-clamp-2">
        {job.description}
      </p>

      {/* Chips: Type, Level, Salary */}
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        
        {/* Job Type Badge */}
        <span className="bg-secondery-100 dark:bg-secondery-800 text-secondery-700 dark:text-secondery-200 px-2.5 py-1 rounded-lg font-bold flex items-center gap-1">
          <HiBriefcase className="w-3.5 h-3.5 text-secondery-400" />
          <span>{job.jobType || "تمام وقت"}</span>
        </span>

        {/* Experience Level */}
        {job.experienceLevel && (
          <span className="bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 px-2.5 py-1 rounded-lg font-bold text-[11px]">
            {job.experienceLevel}
          </span>
        )}

        {/* Salary */}
        <span className="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 px-2.5 py-1 rounded-lg font-black flex items-center gap-1">
          <HiCurrencyDollar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>{job.salaryText || `${job.budget.toLocaleString("fa-IR")} تومان`}</span>
        </span>
      </div>

      {/* Tech Stack Tags */}
      {job.tags && job.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-secondery-100 dark:border-secondery-800/80">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] bg-secondery-50 dark:bg-secondery-900 text-secondery-500 dark:text-secondery-400 px-2 py-0.5 rounded-md font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer Actions */}
      <div className="mt-4 pt-3 border-t border-secondery-100 dark:border-secondery-800 flex items-center justify-between gap-2">
        
        {/* Focus on map button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onFocusMap?.(job);
          }}
          className="text-xs font-bold text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 flex items-center gap-1 transition-colors"
        >
          <HiMapPin className="w-4 h-4" />
          <span>مشاهده روی نقشه</span>
        </button>

        {/* Action button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleApplyClick();
          }}
          className="btn btn--primary !py-1.5 !px-3 text-xs font-bold flex items-center gap-1 shadow-sm"
        >
          <span>ارسال رزومه و درخواست</span>
          <HiChevronLeft className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Application / Proposal Modal */}
      {openModal && (
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          title={`ارسال رزومه و درخواست برای ${job.title}`}
        >
          <CreateProposal
            projectId={job._id}
            onClose={() => setOpenModal(false)}
          />
        </Modal>
      )}

    </div>
  );
}
