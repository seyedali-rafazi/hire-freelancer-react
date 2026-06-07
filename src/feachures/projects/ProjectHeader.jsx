import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";
import Filter from "../../ui/Filter";
import FilterDropdown from "../../ui/FilterDropdown";
import useCategories from "../../hooks/useCategory";
import useUser from "../authentication/useUser";
import useDefaultFilter from "../../hooks/useDefaultFilter";

const statusOptions = [
  { label: "همه", value: "ALL" },
  { label: "باز", value: "OPEN" },
  { label: "بسته", value: "CLOSED" },
];

function ProjectHeader() {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const { transformedCategories } = useCategories();
  const isOwner = user?.role === "OWNER";
  useDefaultFilter({ status: "ALL" });

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="font-black text-secondery-800 text-xl">پروژه‌های شما</h1>
        {isOwner && (
          <>
            <Modal
              title="اضافه کردن پروژه جدید"
              open={open}
              onClose={() => setOpen(false)}
            >
              <CreateProjectForm onClose={() => setOpen(false)} />
            </Modal>
            <button
              onClick={() => setOpen(true)}
              className="btn btn--primary flex items-center gap-x-2 self-start"
            >
              <HiPlus />
              <span>اضافه کردن پروژه</span>
            </button>
          </>
        )}
      </div>

      <div className="filter-bar flex-col sm:flex-row gap-3 !items-stretch sm:!items-center">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropdown
          filterField="category"
          options={[
            { value: "ALL", label: "همه دسته‌بندی‌ها" },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectHeader;
