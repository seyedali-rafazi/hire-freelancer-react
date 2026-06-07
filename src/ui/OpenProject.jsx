import { TbBriefcase } from "react-icons/tb";
import useProjects from "../hooks/useProjects";
import ProjectCards from "./ProjectCards";
import { toPersianNumbers } from "../utils/formatNumber";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function OpenProject() {
  const { projects, isLoading } = useProjects();
  const navigate = useNavigate();

  if (isLoading) return <Loading />;

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary-100 rounded-xl">
          <TbBriefcase className="w-7 h-7 text-primary-800" />
        </div>
        <div>
          <h1 className="font-black text-secondery-800 text-2xl">
            تازه‌ترین پروژه‌ها
          </h1>
          <p className="text-secondery-500 text-sm">
            {toPersianNumbers(projects?.length || 0)} پروژه فعال
          </p>
        </div>
      </div>

      <ProjectCards smOrder="twoSm" mdOrder="threeMd" projects={projects || []} />

      <div className="flex justify-center">
        <button
          onClick={() => navigate("/recomended-projects")}
          className="flex items-center gap-2 border-2 border-primary-300 text-primary-700 py-3 px-6 rounded-xl font-bold hover:bg-primary-800 hover:text-white hover:border-primary-800 transition-all duration-300"
        >
          <span>مشاهده همه</span>
          <HiArrowLeft />
        </button>
      </div>
    </div>
  );
}

export default OpenProject;
