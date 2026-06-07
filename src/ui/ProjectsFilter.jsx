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
    <div className="filter-bar">
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
