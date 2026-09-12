"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Select from "./Select";
import type { ChangeEvent } from "react";

interface Option {
  value: string;
  label: string;
}

interface FilterDropdownProps {
  options: Option[];
  filterField: string;
}

function FilterDropdown({ options, filterField }: FilterDropdownProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const value = searchParams?.get(filterField) ?? options[0]?.value ?? "";

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const next = new URLSearchParams(searchParams ? searchParams.toString() : "");
    const val = e.target.value;
    if (val === "" || val === "ALL") {
      next.delete(filterField);
    } else {
      next.set(filterField, val);
    }
    router.push(`${pathname}?${next.toString()}`);
  }

  return <Select value={String(value)} onChange={handleChange} options={options} />;
}

export default FilterDropdown;
