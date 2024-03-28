import React from "react";
import FilterDropdown from "./FilterDropdown";
import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handelClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 border border-secondery-100 bg-secondery-0  rounded-lg">
        {options.map(({ value, label }) => {
          const isActive = value == currentFilter;
          return (
            <button
              key={value}
              disabled={isActive}
              onClick={() => handelClick(value)}
              className={`whitespace-nowrap rounded-md px-4 py-2 font-bold transition-all duration-300 ${
                isActive
                  ? "!bg-primary-900 text-white"
                  : "bg-secondery-0 text-secondery-800"
              }`}>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
