import React from "react";
import FilterDropdown from "../../../ui/FilterDropdown";
import useCategories from "../../../hooks/useCategory";
import Filter from "../../../ui/Filter";

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

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];
function ProjectsHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex flex-col items-center justify-between text-secondery-700 mb-8">
      <h1 className="hidden sm:block text-lg font-bold w-full text-start">لیست پروژه ها</h1>
      <div className="flex flex-col justify-center items-center w-full gap-3 sm:flex-row">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropdown
          filterField="category"
          options={[
            {
              value: "All",
              label: " همه دسته بندی ها ",
            },
            ...transformedCategories,
          ]}
        />
        <FilterDropdown filterField="sort" options={sortOptions} />
      </div>
    </div>
  );
}

export default ProjectsHeader;
