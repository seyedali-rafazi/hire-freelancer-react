import React from "react";
import FilterDropdown from "./FilterDropdown";
import useCategories from "../hooks/useCategory";

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

function OptionsSidebar() {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex flex-col gap-8 p-5 border border-secondery-200 rounded-lg shadow-sm">
      <FilterDropdown
        filterField="category"
        options={[
          {
            value: "",
            label: " همه دسته بندی ها ",
          },
          ...transformedCategories,
        ]}
      />
      <FilterDropdown filterField="status" options={statusOptions} />
    </div>
  );
}

export default OptionsSidebar;
