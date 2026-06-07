import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDropdown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) ?? options[0]?.value ?? "";

  function handleChange(e) {
    const next = new URLSearchParams(searchParams);
    const val = e.target.value;
    if (val === "" || val === "ALL") {
      next.delete(filterField);
    } else {
      next.set(filterField, val);
    }
    setSearchParams(next);
  }

  return <Select value={String(value)} onChange={handleChange} options={options} />;
}

export default FilterDropdown;
