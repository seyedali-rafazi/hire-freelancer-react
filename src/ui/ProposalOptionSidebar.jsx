import React from "react";
import FilterDropdown from "./FilterDropdown";

const statusOptions = [
  {
    label: "تمام درخواست ها ",
    value: "ALL",
  },
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

const sortOptions = [
  {
    label: "دسته بندی (جدیدترین)",
    value: "latest",
  },
  {
    label: "دسته بندی (قدیمی ترین)",
    value: "earliest",
  },
];

function ProposalOptionSidebar() {
  return (
    <div className="flex flex-col gap-8 p-5 border border-secondery-200 rounded-lg shadow-sm">
      <FilterDropdown filterField="status" options={statusOptions} />
      <FilterDropdown filterField="sort" options={sortOptions} />
    </div>
  );
}

export default ProposalOptionSidebar;
