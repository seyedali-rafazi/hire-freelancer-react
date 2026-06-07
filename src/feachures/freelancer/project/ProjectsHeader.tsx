import FilterDropdown from "../../../ui/FilterDropdown";
import useCategories from "../../../hooks/useCategory";
import Filter from "../../../ui/Filter";
import useDefaultFilter from "../../../hooks/useDefaultFilter";

const sortOptions = [
  { label: "جدیدترین", value: "latest" },
  { label: "قدیمی‌ترین", value: "earliest" },
];

const statusOptions = [
  { label: "همه", value: "ALL" },
  { label: "باز", value: "OPEN" },
  { label: "بسته", value: "CLOSED" },
];

function ProjectsHeader() {
  const { transformedCategories } = useCategories();
  useDefaultFilter({ status: "ALL" });

  return (
    <div className="flex flex-col gap-4 mb-8">
      <h1 className="text-xl font-black text-secondery-800">لیست پروژه‌ها</h1>
      <div className="filter-bar flex-col lg:flex-row gap-3 !items-stretch lg:!items-center">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropdown
          filterField="category"
          options={[
            { value: "ALL", label: "همه دسته‌بندی‌ها" },
            ...transformedCategories,
          ]}
        />
        <FilterDropdown filterField="sort" options={sortOptions} />
      </div>
    </div>
  );
}

export default ProjectsHeader;
