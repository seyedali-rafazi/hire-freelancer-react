import React from "react";
import FilterDropdown from "./FilterDropdown";
import { toPersianNumbers } from "../utils/formatNumber";

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

function ProjectsFilter({ numOfProjects }) {
  return (
    <div className="flex items-center justify-between border border-secondery-200 rounded-lg shadow-md p-3">
      <span className="text-secondery-800">
        {toPersianNumbers(numOfProjects)} فرصت شغلی
      </span>
      <div>
        <FilterDropdown filterField="sort" options={sortOptions} />
      </div>
    </div>
  );
}

export default ProjectsFilter;
