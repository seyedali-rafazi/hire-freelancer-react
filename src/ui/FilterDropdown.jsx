import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDropdown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";

  function handelChange(e) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  }
  return <Select value={value} onChange={handelChange} options={options} />;
}

export default FilterDropdown;
