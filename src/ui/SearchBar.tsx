import { useState } from "react";
import useCategories from "../hooks/useCategory";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
  const [searchParams] = useSearchParams();
  const [search, setSearchValue] = useState(searchParams.get("search") || "");
  const [category, setCat] = useState("");
  const navigate = useNavigate();
  const { transformedCategories } = useCategories();

  const handleSearch = (e) => {
    e.preventDefault();
    const encodedParams = createSearchParams({ category, search });
    navigate({
      pathname: "/recomended-projects",
      search: encodedParams.toString(),
    });
  };

  return (
    <form
      onSubmit={handleSearch}
      className="search-bar-glass grid grid-cols-1 lg:grid-cols-[1fr_1fr_auto] gap-3 p-3 rounded-2xl"
    >
      <input
        value={search}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="مثلاً: طراحی وب، اپلیکیشن موبایل..."
        className="textfield__input !mt-0"
      />
      <select
        value={category}
        onChange={(e) => setCat(e.target.value)}
        className="textfield__input !mt-0"
      >
        <option value="ALL">تمام دسته‌بندی‌ها</option>
        {transformedCategories.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="btn-action py-3 px-6 hover:scale-[1.02]"
      >
        <HiMagnifyingGlass className="w-5 h-5" />
        <span>جستجو</span>
      </button>
    </form>
  );
}

export default SearchBar;
